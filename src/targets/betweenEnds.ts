import { mean, std, variance } from "mathjs";
import type { BeEventObj, BeScoresObj } from "../types.d.ts";

export default async function getBetweenEndsData(evId: number) {
  try {
  } catch (error) {
    console.log(error);
  }
  const [evJSON, evScoresJSON] = await Promise.all([
    getData(evId).then(async (event) => (await event.json()) as BeEventObj),
    getData(evId, true).then(
      async (event) => (await event.json()) as BeScoresObj
    ),
  ]);

  const date = evJSON.tdt.split("-");
  const event = {
    CompDFrom: date[0],
    CompDTo: date[1],
    CompName: evJSON.tnm,
    beCompId: evId,
    arrowsPerEnd: evJSON.ape,
    evName: evJSON.tnm,
    evPlace: evJSON.tlc,
  };

  const aths = Object.values(evJSON.rps);

  // get the scores for each athlete
  const athScores = aths.map((ath) => {
    const scoreStr = evScoresJSON.ars[ath.aid];
    const scoreArrStr = getScores(scoreStr, event.arrowsPerEnd);

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

    const stats = {
      Ends: ends,
      StandardDeviation: std(ends),
      Mean: mean(ends),
      Variance: variance(ends),
      ArrowCount: ends.flat().length,
    };
    return {
      ...ath,
      ...event,
      stats,
    };
  });
  return athScores;
}

export const getData = (evNum: number, scores?: boolean) => {
  const url = `https://resultsapi.herokuapp.com/events/${evNum}${
    scores ? "/scores" : ""
  }`;
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
