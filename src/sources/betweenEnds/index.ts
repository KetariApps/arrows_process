import { getEventData } from "./lib/getEventData.js";
import { getEventList } from "./lib/getEventList.js";
import { filterByName } from "./lib/tournamentFilters.js";
import { BeEventType } from "./lib/enums.js";
export default async function cloneBetweenEndsData() {
  // get all the tournaments in the BetweenEnds database
  await getEventList().then(async (tournaments) => {
    // filter the tournaments to only include USAT events
    // todo : abstract filters to allow for more complex filter types
    const matchingTournaments = tournaments?.filter((tournament) =>
      filterByName(tournament, "USAT")
    );
    if (matchingTournaments === undefined) return null;

    // get the data for each tournament that matched the filter criteria
    return await Promise.all(
      matchingTournaments.map(async (tournament) => {
        // get the event ids
        // todo : get data for MatchEvent events
        // todo : get data for CustomPointsEvent events
        // todo : remove this filter once all types are supported
        const events = [
          tournament.events.find(
            (event) => event.event_type === BeEventType.RankingEvent
          ),
          //   tournament.events.find(
          //     (event) => event.event_type === BeEventType.MatchEvent
          //   )?.id,
        ];

        // query the event id
        return await Promise.all(
          events.map(async (event) => {
            if (event === undefined) return null;
            return await getEventData(event).then(async (eventData) => {
              if (eventData === undefined) return null;
              // map eventData to ArrowsJSON

              // insert eventData into arrows_db
              console.log(eventData);
            });
          })
        );
      })
    );
  });
}
