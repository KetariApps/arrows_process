import type { BeTournamet } from "./types.d.ts";

export const filterByName = (tournament: BeTournamet, substring: string) =>
  tournament.tournament_name.includes(substring);
