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
