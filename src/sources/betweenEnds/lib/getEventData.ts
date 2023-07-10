import type { BeEventObj, BeScoresObj, BeTournamentEvent } from "./types.d.ts";
import { ArrowsJSON } from "../../../types.js";
import { fetchData } from "./fetchData.js";
import { parseEventData } from "./parseEventData.js";
import { BeEndpoint, BeEventType } from "./enums.js";

export interface EventProfile {
  start: Date;
  end: Date;
  comp_id: number;
  arrows_per_end: number;
  name: string;
  place: string;
  event_type: BeEventType;
}

export async function getEventData(tournamentEvent: BeTournamentEvent) {
  try {
    const evId = tournamentEvent.id;

    // get the resources
    const [evJSON, evScoresJSON] = await Promise.all([
      fetchData(BeEndpoint.events, evId).then(
        async (event) => (await event.json()) as BeEventObj
      ),
      fetchData(BeEndpoint.events, evId, true).then(
        async (event) => (await event.json()) as BeScoresObj
      ),
    ]);

    const date = evJSON.tdt.split("-");
    const event: EventProfile = {
      start: new Date(Date.parse(date[0])),
      end: new Date(Date.parse(date[1])),
      comp_id: evId,
      event_type: tournamentEvent.event_type,
      arrows_per_end: evJSON.ape,
      name: evJSON.tnm,
      place: evJSON.tlc,
    };

    const aths = Object.values(evJSON.rps);

    // parse the scores for each athlete
    const athScores: ArrowsJSON[] = aths
      .map((ath) => {
        const scoreString = evScoresJSON.ars[ath.aid];
        const eventProfile = parseEventData(ath, event, scoreString);
        return eventProfile;
      })
      .filter(
        (scoreProfile): scoreProfile is ArrowsJSON => scoreProfile !== null
      );
    return athScores;
  } catch (error) {
    console.error(error);
  }
}
