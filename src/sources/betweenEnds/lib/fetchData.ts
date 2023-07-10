import { BeEndpoint } from "./enums.js";

export const fetchData = (
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
