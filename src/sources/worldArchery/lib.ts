import { FetchProps } from "./types.js";

export default function worldArchery() {}

export const getData = (props: FetchProps) => {
  const contentStr = `?content=${props.content}`,
    compStr = `&CompId=${props.compId}`,
    catStr = props.catCode ? `&CatCode=${props.catCode}` : "",
    athStr = props.athId ? `&Id=${props.athId}` : "",
    detailedStr = props.detailed ? "&Detailed=1" : "",
    phaseStr = props.phase ? `&Phase=${props.phase}` : "",
    url = `https://api.worldarchery.org/${contentStr}${detailedStr}${compStr}${catStr}${athStr}${phaseStr}&RBP=All&v=3`;
  return fetch(url, {
    headers: {
      accept: "application/json, text/plain, */*",
      "accept-language": "en-US,en;q=0.9",
      "sec-ch-ua":
        '"Google Chrome";v="87", " Not;A Brand";v="99", "Chromium";v="87"',
      "sec-ch-ua-mobile": "?0",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
    },
    referrer: "https://worldarchery.sport/",
    referrerPolicy: "strict-origin-when-cross-origin",
    body: null,
    method: "GET",
    mode: "cors",
  });
};
