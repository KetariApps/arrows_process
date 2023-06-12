export enum SourceApi {
  WA,
  BE,
}

export enum EventType {
  QUAL,
  ELIM,
}

export enum Division {
  RS, // Recurve Senior
  R21, // Recurve U21 (Junior)
  R18, // Recurve U18 (Cadet)
  R15, // Recurve U15 (Cub)
  R13, // Recurve U13 (Bowman)
  R5, // Recurve 50+ (Master)
  R6, // Recurve 60+ (Master 60)
  R7, // Recurve 70+ (Master 70)
  RC, // Recurve College
  RO, // Recurve Open

  CS, // Compound Senior
  C21, // Compound U21 (Junior)
  C18, // Compound U18 (Cadet)
  C15, // Compound U15 (Cub)
  C13, // Compound U13 (Bowman)
  C5, // Compound 50+ (Master)
  C6, // Compound 60+ (Master 60)
  C7, // Compound 70+ (Master 70)
  CC, // Compound College
  CO, // Compound Open

  W1, // W1 Open

  VI, // V.I. Open

  BS, // Barebow Senior
  B21, // Barebow U21 (Junior)
  B18, // Barebow U18 (Cadet)
  B15, // Barebow U15 (Cub)
  B5, // Barebow 50+ (Master)

  F21, // Fixed Pins U21
  F18, // Fixed Pins U18
}

export enum NameOrder {
  FL,
  LF,
}

export enum Gender {
  M,
  F,
}

export interface EventStats {
  std: number[];
  mean: number;
  variance: number[];
  arrow_count: number;
}

export interface ArrowsEvent {
  name: string;
  type: EventType;
  id: number;
  api: SourceApi;
  start: Date;
  end: Date;
  country: string;
  place: string;
  division: Division;
  stats: EventStats;
  ends: number[][];
}

export interface ArrowsJSON {
  id: string;
  waid?: number;
  beid?: number;
  f_name?: string;
  l_name?: string;
  name_order?: NameOrder;
  gender?: Gender;
  events: ArrowsEvent[];
}
