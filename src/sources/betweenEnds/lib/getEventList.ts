import { fetchData } from "./fetchData.js";
import { BeEndpoint, BeTournamet } from "./types.js";

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
