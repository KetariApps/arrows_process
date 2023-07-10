import { mean, std, variance } from "mathjs";
import {
  BeAth,
  BeDivision,
  BeEndpoint,
  BeEventObj,
  BeEventType,
  BeScoresObj,
  BeTournamentEvent,
  BeTournamet,
} from "./types.js";
import {
  ArrowsJSON,
  Division,
  EventStats,
  EventType,
  Gender,
  NameOrder,
  SourceApi,
} from "../../types.js";

interface EventProfile {
  start: Date;
  end: Date;
  comp_id: number;
  arrows_per_end: number;
  name: string;
  place: string;
  event_type: BeEventType;
}

export async function getBetweenEndsEventData(
  tournamentEvent: BeTournamentEvent
) {
  try {
    const evId = tournamentEvent.id;

    // get the resources
    const [evJSON, evScoresJSON] = await Promise.all([
      getData(BeEndpoint.events, evId).then(
        async (event) => (await event.json()) as BeEventObj
      ),
      getData(BeEndpoint.events, evId, true).then(
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
        const eventProfile = parseEventProfile(ath, event, scoreString);
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

export const parseEventProfile = (
  ath: BeAth,
  event: EventProfile,
  scoreString: string
) => {
  const scoreArrStr = getScores(scoreString, event.arrows_per_end);

  if (scoreArrStr === null) return null;

  // parse the scores into numbers
  // note: this treats X as 11, whish can cause problems later when doing stats
  const ends = scoreArrStr
    .map((e) => {
      if (e === null) return null;
      return e.map((a) => {
        if (a === "M") {
          return 0;
        } else if (a === "X") {
          return 11;
        } else if (a === "T") {
          return 10;
        } else {
          return parseInt(a);
        }
      });
    })
    .filter((end): end is number[] => end !== null);

  const stats: EventStats = {
    std: std(ends),
    mean: mean(ends) as number,
    variance: variance(ends),
    arrow_count: ends.flat().length,
  };

  const eventData: ArrowsJSON = {
    id: event.comp_id.toString(),
    f_name: ath.fnm,
    l_name: ath.lnm,
    name_order: NameOrder.FL,
    gender: mapGender(ath.cnd),
    events: [
      {
        name: event.name,
        place: event.place,
        id: event.comp_id,
        api: SourceApi.BE,
        country: "United States",
        ends,
        stats,
        division: mapDivision(ath.cnd)!, // dangerously asserting that all divisions are accounted for and this will be defined
        start: event.start,
        end: event.end,
        // todo: support additional event types
        type:
          event.event_type === BeEventType.MatchEvent
            ? EventType.ELIM
            : event.event_type === BeEventType.RankingEvent
            ? EventType.QUAL
            : EventType.QUAL,
      },
    ],
  };
  return eventData;
};

export async function getBetweenEndsEventList() {
  try {
    const eventList = getData(BeEndpoint.tournaments).then(
      async (event) => (await event.json()) as BeTournamet[]
    );

    return eventList;
  } catch (error) {
    console.error(error);
  }
}

export const getData = (
  endpoint: BeEndpoint,
  evNum?: number,
  scores?: boolean
) => {
  const url = `https://resultsapi.herokuapp.com/${endpoint}/${
    evNum === undefined ? "" : evNum
  }${scores ? "/scores" : ""}`;
  return fetch(url, {
    headers: {
      accept: "application/json, text/plain, */*",
      "accept-language": "en-US,en;q=0.9",
      "sec-ch-ua":
        '"Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"',
      "sec-ch-ua-mobile": "?0",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
    },
    referrer: "https://www.betweenends.com/",
    referrerPolicy: "strict-origin-when-cross-origin",
    body: null,
    method: "GET",
    mode: "cors",
  });
};

const getScores = (scoreString: string, ape: number) => {
  const regexstr = `.{1,${ape}}`,
    regex = new RegExp(regexstr, "g");
  const ends = scoreString.match(regex);
  if (ends === null || ends === undefined) return null;
  const endArrows = ends.map((e) => e.match(/\w/g));
  return endArrows;
};

export const filterTournamentByName = (
  tournament: BeTournamet,
  substring: string
) => tournament.tournament_name.includes(substring);

const mapGender = (division: BeDivision) =>
  BeDivision[division].includes("W") ? Gender.F : Gender.M;

// todo : add error for uncaught division
const mapDivision = (division: BeDivision) => {
  // Recurve divisions
  if (division === BeDivision.RSM || division === BeDivision.RSW)
    return Division.RS;
  if (division === BeDivision.RU21M || division === BeDivision.RU21W)
    return Division.R21;
  if (
    division === BeDivision.RU18M ||
    division === BeDivision.RU18W ||
    division === BeDivision.RU15M ||
    division === BeDivision.RU15W ||
    division === BeDivision.RU13M ||
    division === BeDivision.RU13W ||
    division === BeDivision.RYM ||
    division === BeDivision.RYW ||
    division === BeDivision.REM ||
    division === BeDivision.REW
  )
    return Division.R18;
  if (division === BeDivision.R5M || division === BeDivision.R5W)
    return Division.R5;
  if (division === BeDivision.R6M || division === BeDivision.R6W)
    return Division.R6;
  if (division === BeDivision.R7M || division === BeDivision.R7W)
    return Division.R7;
  if (division === BeDivision.RCM || division === BeDivision.RCW)
    return Division.RC;
  if (division === BeDivision.ROM || division === BeDivision.ROW)
    return Division.RO;

  // Compound Divisions
  if (division === BeDivision.CSM || division === BeDivision.CSW)
    return Division.CS;
  if (division === BeDivision.CU21M || division === BeDivision.CU21W)
    return Division.C21;
  if (
    division === BeDivision.CU18M ||
    division === BeDivision.CU18W ||
    division === BeDivision.CU15M ||
    division === BeDivision.CU15W ||
    division === BeDivision.CU13M ||
    division === BeDivision.CU13W ||
    division === BeDivision.CYM ||
    division === BeDivision.CYW ||
    division === BeDivision.CEM ||
    division === BeDivision.CEW
  )
    return Division.C18;
  if (division === BeDivision.C5M || division === BeDivision.C5W)
    return Division.C5;
  if (division === BeDivision.C6M || division === BeDivision.C6W)
    return Division.C6;
  if (division === BeDivision.C7M || division === BeDivision.C7W)
    return Division.C7;
  if (division === BeDivision.CCM || division === BeDivision.CCW)
    return Division.CC;
  if (division === BeDivision.COM || division === BeDivision.COW)
    return Division.CO;

  // Barebow Divisions
  if (division === BeDivision.BSM || division === BeDivision.BSW)
    return Division.BS;
  if (division === BeDivision.BU21M || division === BeDivision.BU21W)
    return Division.B21;
  if (division === BeDivision.BU18M || division === BeDivision.BU18W)
    return Division.B18;
  if (division === BeDivision.B5M || division === BeDivision.B5W)
    return Division.B5;

  // V.I. Division
  if (division === BeDivision.VIO) return Division.VI;

  // W1 Division
  if (division === BeDivision.W1O) return Division.W1;

  // Fixed Pins Divisions
  if (division === BeDivision.FU21M || division === BeDivision.FU21W)
    return Division.F21;
  if (division === BeDivision.FU18M || division === BeDivision.FU18W)
    return Division.F18;
};
