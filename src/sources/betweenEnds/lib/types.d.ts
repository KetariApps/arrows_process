export interface BeCategory {
  nm: BeDivision;
  dor: number;
  ars: { aid: number }[];
  cut: number;
}
export interface BeTournamentEvent {
  id: number;
  display_order: number;
  event_type: BeEventType;
  event_name: string;
}
export interface BeTournamet {
  id: number;
  tournament_name: string;
  location: string;
  start_date: string;
  end_date: string;
  updated_at: string;
  events: BeTournamentEvent[];
}

export interface BeAth {
  aid: number;
  alt: string;
  cnd: BeDivision;
  fnm: string;
  lnm: string;
  tgt: string;
  tm: string;
  tnl: number[];
}

export interface BeEventObj {
  ape: number /** arrows per end */;
  cgs: {
    ars: { aid: number /** athlete id */ }[] /** athlete results */;
    cut: number;
    dor: number;
    nm: string /** category name */;
  }[];
  dld: number;
  dor: number;
  enm: string /** stage eg.Qualification */;
  epr: number /** ends per round */;
  etp: BeEventType /** event type */;
  fita: boolean;
  id: number;
  nos: number;
  rds: number /** rounds */;
  rps: {
    [arg0: number]: BeAth;
  } /** athletes */;
  srl: number;
  stb: boolean;
  tdt: string /** tournament date range - (moabbr dd, yyyy) */;
  tlc: string /** location - place, city, state abbr */;
  tnl: {
    [arg0: number]: {
      id: number /** event field / sub event id */;
      nm: string /** event field / sub event / date */;
    };
  } /** athletes */;
  tnm: string /** tournament name */;
}

export type BeScoresObj = {
  ars: {
    [
      arg0: number /** athlete id */
    ]: string /** arrow values - no spaces 1-9, M, T, X */;
  } /** athlete results */;
};

// ARCHENEMY -> BE FETCH TYPES
//////////////////////////////

export interface AthleteEventProfile {
  aid: number;
  alt: string;
  cnd:
    | "CMM"
    | "CMW"
    | "RMM"
    | "RMW"
    | "CSM"
    | "CSW"
    | "RSM"
    | "RSW"
    | "CJM"
    | "CJW"
    | "RJM"
    | "RJW"
    | "CCM"
    | "CCW"
    | "CRM"
    | "CRW";
  fnm: string;
  lnm: string;
  tgt: string;
  tm: string;
  tnl: number[];
  start: string;
  end: string;
  comp_id: number;
  arrows_per_end: number;
  name: string;
  place: string;
  ends: number[][];
  stats: EventStats;
}
