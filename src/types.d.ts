// WADB Types ::

//// Types for competition overview responses

export type PhaseNo = 48 | 32 | 16 | 12 | 8 | 4 | 1 | 0;

export type Phase = {
  Name: string;
  NameShort: string;
  Finished: boolean;
  Phase: string;
  PhCode: string;
};

export type CatCode = "RM" | "RW" | "CM" | "CW" | "RX" | "RM";

export type Cat = {
  Code: CatCode;
  Phases: Phase[];
};

export type Stage =
  | "entries"
  | "qr individual"
  | "qr team"
  | "bracket individual"
  | "bracket team"
  | "rank individual"
  | "rank team";

export type EventResItem = {
  Name: string;
  ID: string;
  CatInd: Cat[];
  CatTeam: Cat[];
  DFrom: string;
  DTo: string;
  CountryName: string;
  Place: string;
  Stages: Stage[];
};

export type EventResJSON = {
  items: EventResItem[];
};

export type Ath = {
  FName: string;
  GName: string;
  Id: string;
  NOC: string;
  WNameOrd: boolean;
};

//// Types for competition division response

export type AthItem = {
  Athlete: Ath;
  Rnk: number;
  Score: number;
};

export type EventDivResItem = {
  Code: CatCode;
  Results: AthItem[];
};

export type EventDivResJSON = {
  items: EventDivResItem[];
};

//// Types for individual qr score response

export type End = {
  Arrows: string[];
  Sum: number;
};

export type Scorecard = {
  Ends: End[];
  Score: number;
};

export type AthScoreResJSON = {
  items: Scorecard[];
};

// END WADB TYPES
/////////////////

// ArchEnemy -> WADB Fetch Types ::

export type WAAPIRes = {
  FName: string;
  GName: string;
  Id: string;
  NOC: string;
  WNameOrd: boolean;
  Ends: number[][];
  CompName: string;
  CompID: string;
  CompDFrom: string;
  CompDTo: string;
  CompPlace: string;
  CompCountryName: string;
  CatCode: CatCode;
}[];

export type GetWADataProp = {
  CompId: string;
  isBracket: boolean;
  isTeam: boolean;
  isIndoor: boolean;
};

export type FetchProps = {
  compId: string;
  content: string;
  detailed?: boolean;
  catCode?: string;
  athId?: string;
  phase?: string;
};

export type fetchDataFunc = (props: FetchProps) => Promise<Response>;

export type AthProps = {
  name: string;
  athId: string;
  division: string;
  gender: string;
};

export type EventDbJSON = {
  name: string;
  location: string;
  discipline: string;
  year: string;
  url: string;
  WAID: string;
};

// END ARCHENEMY -> WADB FETCH TYPES
////////////////////////////////////

// ARCHENEMY -> BE FETCH TYPES
//////////////////////////////

export type BeEventObj = {
  ape: number /** arrows per end */;
  cgs: {
    ars: { aid: number /** athlete id */ }[] /** athlete results */;
    cut: number;
    dor: number;
    nm: string /** category name */;
  }[];
  dld: number;
  dor: number;
  enm: "Qualification Round" | string /** stage eg.Qualification */;
  epr: number /** ends per round */;
  etp: "RankingEvent" | string /** event type */;
  fita: boolean;
  id: number;
  nos: number;
  rds: number /** rounds */;
  rps: {
    [arg0: number]: {
      aid: number /** athlete */;
      alt: string /** ? string of numbers */;
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
        | "CRW" /** category */;
      fnm: string /** first name */;
      lnm: string /** last name */;
      tgt: string /** target number */;
      tm: string /** state */;
      tnl: number[];
    };
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
};

export type BeScoresObj = {
  ars: {
    [
      arg0: number /** athlete id */
    ]: string /** arrow values - no spaces 1-9, M, T, X */;
  } /** athlete results */;
};

// ARCHENEMY -> BE FETCH TYPES
//////////////////////////////

// ARCHENEMY JSON
/////////////////

type EVStats = {
  Ends: number[][];
  StandardDeviation: number;
  Mean: number;
  Variance: number;
  ArrowCount: number;
}

export type AEAthsJSON = {
  WAID: number;
  BEID: number;
  FName: string;
  LName: string;
  NameOrder: string;
  Gender: string;
  Events: {
    [arg0: string]: {
      Name: string;
      ID: number;
      API: 'WA' | 'BE';
      Date: Date;
      Country: string;
      Place: string;
      Division: string;
      Stats: EVStats;
      AEStats: EVStats;
    };
  };
};

// END ARCHENEMY JSON
/////////////////////
