import { BeTournamet } from "./types.js";

export const filterByName = (tournament: BeTournamet, substring: string) =>
  tournament.tournament_name.includes(substring);
