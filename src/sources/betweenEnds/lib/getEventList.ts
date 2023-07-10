import { BeEndpoint } from "./enums.js";
import { fetchData } from "./fetchData.js";
import type { BeTournamet } from "./types.d.ts";

export async function getEventList() {
  try {
    const eventList = fetchData(BeEndpoint.tournaments).then(
      async (event) => (await event.json()) as BeTournamet[]
    );

    return eventList;
  } catch (error) {
    console.error(error);
  }
}
