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
