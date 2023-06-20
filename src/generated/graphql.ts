import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Arrow = {
  __typename?: 'Arrow';
  angle?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  offset: Scalars['Int']['output'];
  set: Set;
  setAggregate?: Maybe<ArrowSetSetAggregationSelection>;
  setConnection: ArrowSetConnection;
  timestamp: Scalars['Int']['output'];
};


export type ArrowSetArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<SetOptions>;
  where?: InputMaybe<SetWhere>;
};


export type ArrowSetAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SetWhere>;
};


export type ArrowSetConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ArrowSetConnectionSort>>;
  where?: InputMaybe<ArrowSetConnectionWhere>;
};

export type ArrowAggregateSelection = {
  __typename?: 'ArrowAggregateSelection';
  angle: IntAggregateSelectionNullable;
  count: Scalars['Int']['output'];
  id: IdAggregateSelectionNonNullable;
  offset: IntAggregateSelectionNonNullable;
  timestamp: IntAggregateSelectionNonNullable;
};

export type ArrowConnectInput = {
  set?: InputMaybe<ArrowSetConnectFieldInput>;
};

export type ArrowConnectOrCreateInput = {
  set?: InputMaybe<ArrowSetConnectOrCreateFieldInput>;
};

export type ArrowConnectOrCreateWhere = {
  node: ArrowUniqueWhere;
};

export type ArrowConnectWhere = {
  node: ArrowWhere;
};

export type ArrowCreateInput = {
  angle?: InputMaybe<Scalars['Int']['input']>;
  offset: Scalars['Int']['input'];
  set?: InputMaybe<ArrowSetFieldInput>;
  timestamp: Scalars['Int']['input'];
};

export type ArrowDeleteInput = {
  set?: InputMaybe<ArrowSetDeleteFieldInput>;
};

export type ArrowDisconnectInput = {
  set?: InputMaybe<ArrowSetDisconnectFieldInput>;
};

export type ArrowEdge = {
  __typename?: 'ArrowEdge';
  cursor: Scalars['String']['output'];
  node: Arrow;
};

export type ArrowOnCreateInput = {
  angle?: InputMaybe<Scalars['Int']['input']>;
  offset: Scalars['Int']['input'];
  timestamp: Scalars['Int']['input'];
};

export type ArrowOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more ArrowSort objects to sort Arrows by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ArrowSort>>;
};

export type ArrowRelationInput = {
  set?: InputMaybe<ArrowSetCreateFieldInput>;
};

export type ArrowSetAggregateInput = {
  AND?: InputMaybe<Array<ArrowSetAggregateInput>>;
  NOT?: InputMaybe<ArrowSetAggregateInput>;
  OR?: InputMaybe<Array<ArrowSetAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ArrowSetNodeAggregationWhereInput>;
};

export type ArrowSetConnectFieldInput = {
  connect?: InputMaybe<SetConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<SetConnectWhere>;
};

export type ArrowSetConnectOrCreateFieldInput = {
  onCreate: ArrowSetConnectOrCreateFieldInputOnCreate;
  where: SetConnectOrCreateWhere;
};

export type ArrowSetConnectOrCreateFieldInputOnCreate = {
  node: SetOnCreateInput;
};

export type ArrowSetConnection = {
  __typename?: 'ArrowSetConnection';
  edges: Array<ArrowSetRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ArrowSetConnectionSort = {
  node?: InputMaybe<SetSort>;
};

export type ArrowSetConnectionWhere = {
  AND?: InputMaybe<Array<ArrowSetConnectionWhere>>;
  NOT?: InputMaybe<ArrowSetConnectionWhere>;
  OR?: InputMaybe<Array<ArrowSetConnectionWhere>>;
  node?: InputMaybe<SetWhere>;
};

export type ArrowSetCreateFieldInput = {
  node: SetCreateInput;
};

export type ArrowSetDeleteFieldInput = {
  delete?: InputMaybe<SetDeleteInput>;
  where?: InputMaybe<ArrowSetConnectionWhere>;
};

export type ArrowSetDisconnectFieldInput = {
  disconnect?: InputMaybe<SetDisconnectInput>;
  where?: InputMaybe<ArrowSetConnectionWhere>;
};

export type ArrowSetFieldInput = {
  connect?: InputMaybe<ArrowSetConnectFieldInput>;
  connectOrCreate?: InputMaybe<ArrowSetConnectOrCreateFieldInput>;
  create?: InputMaybe<ArrowSetCreateFieldInput>;
};

export type ArrowSetNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ArrowSetNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ArrowSetNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ArrowSetNodeAggregationWhereInput>>;
};

export type ArrowSetRelationship = {
  __typename?: 'ArrowSetRelationship';
  cursor: Scalars['String']['output'];
  node: Set;
};

export type ArrowSetSetAggregationSelection = {
  __typename?: 'ArrowSetSetAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ArrowSetSetNodeAggregateSelection>;
};

export type ArrowSetSetNodeAggregateSelection = {
  __typename?: 'ArrowSetSetNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
};

export type ArrowSetUpdateConnectionInput = {
  node?: InputMaybe<SetUpdateInput>;
};

export type ArrowSetUpdateFieldInput = {
  connect?: InputMaybe<ArrowSetConnectFieldInput>;
  connectOrCreate?: InputMaybe<ArrowSetConnectOrCreateFieldInput>;
  create?: InputMaybe<ArrowSetCreateFieldInput>;
  delete?: InputMaybe<ArrowSetDeleteFieldInput>;
  disconnect?: InputMaybe<ArrowSetDisconnectFieldInput>;
  update?: InputMaybe<ArrowSetUpdateConnectionInput>;
  where?: InputMaybe<ArrowSetConnectionWhere>;
};

/** Fields to sort Arrows by. The order in which sorts are applied is not guaranteed when specifying many fields in one ArrowSort object. */
export type ArrowSort = {
  angle?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  offset?: InputMaybe<SortDirection>;
  timestamp?: InputMaybe<SortDirection>;
};

export type ArrowUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ArrowUpdateInput = {
  angle?: InputMaybe<Scalars['Int']['input']>;
  angle_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  angle_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  offset_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  offset_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<ArrowSetUpdateFieldInput>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  timestamp_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
};

export type ArrowWhere = {
  AND?: InputMaybe<Array<ArrowWhere>>;
  NOT?: InputMaybe<ArrowWhere>;
  OR?: InputMaybe<Array<ArrowWhere>>;
  angle?: InputMaybe<Scalars['Int']['input']>;
  angle_GT?: InputMaybe<Scalars['Int']['input']>;
  angle_GTE?: InputMaybe<Scalars['Int']['input']>;
  angle_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  angle_LT?: InputMaybe<Scalars['Int']['input']>;
  angle_LTE?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  offset_GT?: InputMaybe<Scalars['Int']['input']>;
  offset_GTE?: InputMaybe<Scalars['Int']['input']>;
  offset_IN?: InputMaybe<Array<Scalars['Int']['input']>>;
  offset_LT?: InputMaybe<Scalars['Int']['input']>;
  offset_LTE?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<SetWhere>;
  setAggregate?: InputMaybe<ArrowSetAggregateInput>;
  setConnection?: InputMaybe<ArrowSetConnectionWhere>;
  setConnection_NOT?: InputMaybe<ArrowSetConnectionWhere>;
  set_NOT?: InputMaybe<SetWhere>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_GT?: InputMaybe<Scalars['Int']['input']>;
  timestamp_GTE?: InputMaybe<Scalars['Int']['input']>;
  timestamp_IN?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_LT?: InputMaybe<Scalars['Int']['input']>;
  timestamp_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ArrowsConnection = {
  __typename?: 'ArrowsConnection';
  edges: Array<ArrowEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Athlete = {
  __typename?: 'Athlete';
  activeNation: NationCode;
  elimRating: Scalars['Int']['output'];
  familyName: Scalars['String']['output'];
  givenName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  matches: Array<Event>;
  matchesAggregate?: Maybe<AthleteEventMatchesAggregationSelection>;
  matchesConnection: AthleteMatchesConnection;
  qualRating: Scalars['Int']['output'];
  results: Array<Result>;
  resultsAggregate?: Maybe<AthleteResultResultsAggregationSelection>;
  resultsConnection: AthleteResultsConnection;
  sets: Array<Set>;
  setsAggregate?: Maybe<AthleteSetSetsAggregationSelection>;
  setsConnection: AthleteSetsConnection;
};


export type AthleteMatchesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<EventOptions>;
  where?: InputMaybe<EventWhere>;
};


export type AthleteMatchesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<EventWhere>;
};


export type AthleteMatchesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AthleteMatchesConnectionSort>>;
  where?: InputMaybe<AthleteMatchesConnectionWhere>;
};


export type AthleteResultsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ResultOptions>;
  where?: InputMaybe<ResultWhere>;
};


export type AthleteResultsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ResultWhere>;
};


export type AthleteResultsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AthleteResultsConnectionSort>>;
  where?: InputMaybe<AthleteResultsConnectionWhere>;
};


export type AthleteSetsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<SetOptions>;
  where?: InputMaybe<SetWhere>;
};


export type AthleteSetsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SetWhere>;
};


export type AthleteSetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AthleteSetsConnectionSort>>;
  where?: InputMaybe<AthleteSetsConnectionWhere>;
};

export type AthleteAggregateSelection = {
  __typename?: 'AthleteAggregateSelection';
  count: Scalars['Int']['output'];
  elimRating: IntAggregateSelectionNonNullable;
  familyName: StringAggregateSelectionNonNullable;
  givenName: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  qualRating: IntAggregateSelectionNonNullable;
};

export type AthleteConnectInput = {
  matches?: InputMaybe<Array<AthleteMatchesConnectFieldInput>>;
  results?: InputMaybe<Array<AthleteResultsConnectFieldInput>>;
  sets?: InputMaybe<Array<AthleteSetsConnectFieldInput>>;
};

export type AthleteConnectOrCreateInput = {
  matches?: InputMaybe<Array<AthleteMatchesConnectOrCreateFieldInput>>;
  results?: InputMaybe<Array<AthleteResultsConnectOrCreateFieldInput>>;
  sets?: InputMaybe<Array<AthleteSetsConnectOrCreateFieldInput>>;
};

export type AthleteConnectOrCreateWhere = {
  node: AthleteUniqueWhere;
};

export type AthleteConnectWhere = {
  node: AthleteWhere;
};

export type AthleteCreateInput = {
  activeNation: NationCode;
  elimRating: Scalars['Int']['input'];
  familyName: Scalars['String']['input'];
  givenName: Scalars['String']['input'];
  matches?: InputMaybe<AthleteMatchesFieldInput>;
  qualRating: Scalars['Int']['input'];
  results?: InputMaybe<AthleteResultsFieldInput>;
  sets?: InputMaybe<AthleteSetsFieldInput>;
};

export type AthleteDeleteInput = {
  matches?: InputMaybe<Array<AthleteMatchesDeleteFieldInput>>;
  results?: InputMaybe<Array<AthleteResultsDeleteFieldInput>>;
  sets?: InputMaybe<Array<AthleteSetsDeleteFieldInput>>;
};

export type AthleteDisconnectInput = {
  matches?: InputMaybe<Array<AthleteMatchesDisconnectFieldInput>>;
  results?: InputMaybe<Array<AthleteResultsDisconnectFieldInput>>;
  sets?: InputMaybe<Array<AthleteSetsDisconnectFieldInput>>;
};

export type AthleteEdge = {
  __typename?: 'AthleteEdge';
  cursor: Scalars['String']['output'];
  node: Athlete;
};

export type AthleteEventMatchesAggregationSelection = {
  __typename?: 'AthleteEventMatchesAggregationSelection';
  count: Scalars['Int']['output'];
  edge?: Maybe<AthleteEventMatchesEdgeAggregateSelection>;
  node?: Maybe<AthleteEventMatchesNodeAggregateSelection>;
};

export type AthleteEventMatchesEdgeAggregateSelection = {
  __typename?: 'AthleteEventMatchesEdgeAggregateSelection';
  deltaR: IntAggregateSelectionNonNullable;
};

export type AthleteEventMatchesNodeAggregateSelection = {
  __typename?: 'AthleteEventMatchesNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
};

export type AthleteMatch = {
  deltaR: Scalars['Int']['output'];
  division: Division;
  gender: Gender;
  nation: NationCode;
};

export type AthleteMatchCreateInput = {
  deltaR: Scalars['Int']['input'];
  division: Division;
  gender: Gender;
  nation: NationCode;
};

export type AthleteMatchSort = {
  deltaR?: InputMaybe<SortDirection>;
  division?: InputMaybe<SortDirection>;
  gender?: InputMaybe<SortDirection>;
  nation?: InputMaybe<SortDirection>;
};

export type AthleteMatchUpdateInput = {
  deltaR?: InputMaybe<Scalars['Int']['input']>;
  deltaR_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  deltaR_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
  division?: InputMaybe<Division>;
  gender?: InputMaybe<Gender>;
  nation?: InputMaybe<NationCode>;
};

export type AthleteMatchWhere = {
  AND?: InputMaybe<Array<AthleteMatchWhere>>;
  NOT?: InputMaybe<AthleteMatchWhere>;
  OR?: InputMaybe<Array<AthleteMatchWhere>>;
  deltaR?: InputMaybe<Scalars['Int']['input']>;
  deltaR_GT?: InputMaybe<Scalars['Int']['input']>;
  deltaR_GTE?: InputMaybe<Scalars['Int']['input']>;
  deltaR_IN?: InputMaybe<Array<Scalars['Int']['input']>>;
  deltaR_LT?: InputMaybe<Scalars['Int']['input']>;
  deltaR_LTE?: InputMaybe<Scalars['Int']['input']>;
  division?: InputMaybe<Division>;
  division_IN?: InputMaybe<Array<Division>>;
  gender?: InputMaybe<Gender>;
  gender_IN?: InputMaybe<Array<Gender>>;
  nation?: InputMaybe<NationCode>;
  nation_IN?: InputMaybe<Array<NationCode>>;
};

export type AthleteMatchesAggregateInput = {
  AND?: InputMaybe<Array<AthleteMatchesAggregateInput>>;
  NOT?: InputMaybe<AthleteMatchesAggregateInput>;
  OR?: InputMaybe<Array<AthleteMatchesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  edge?: InputMaybe<AthleteMatchesEdgeAggregationWhereInput>;
  node?: InputMaybe<AthleteMatchesNodeAggregationWhereInput>;
};

export type AthleteMatchesConnectFieldInput = {
  connect?: InputMaybe<Array<EventConnectInput>>;
  edge: AthleteMatchCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<EventConnectWhere>;
};

export type AthleteMatchesConnectOrCreateFieldInput = {
  onCreate: AthleteMatchesConnectOrCreateFieldInputOnCreate;
  where: EventConnectOrCreateWhere;
};

export type AthleteMatchesConnectOrCreateFieldInputOnCreate = {
  edge: AthleteMatchCreateInput;
  node: EventOnCreateInput;
};

export type AthleteMatchesConnection = {
  __typename?: 'AthleteMatchesConnection';
  edges: Array<AthleteMatchesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AthleteMatchesConnectionSort = {
  edge?: InputMaybe<AthleteMatchSort>;
  node?: InputMaybe<EventSort>;
};

export type AthleteMatchesConnectionWhere = {
  AND?: InputMaybe<Array<AthleteMatchesConnectionWhere>>;
  NOT?: InputMaybe<AthleteMatchesConnectionWhere>;
  OR?: InputMaybe<Array<AthleteMatchesConnectionWhere>>;
  edge?: InputMaybe<AthleteMatchWhere>;
  node?: InputMaybe<EventWhere>;
};

export type AthleteMatchesCreateFieldInput = {
  edge: AthleteMatchCreateInput;
  node: EventCreateInput;
};

export type AthleteMatchesDeleteFieldInput = {
  delete?: InputMaybe<EventDeleteInput>;
  where?: InputMaybe<AthleteMatchesConnectionWhere>;
};

export type AthleteMatchesDisconnectFieldInput = {
  disconnect?: InputMaybe<EventDisconnectInput>;
  where?: InputMaybe<AthleteMatchesConnectionWhere>;
};

export type AthleteMatchesEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<AthleteMatchesEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<AthleteMatchesEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<AthleteMatchesEdgeAggregationWhereInput>>;
  deltaR_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  deltaR_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  deltaR_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  deltaR_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  deltaR_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  deltaR_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  deltaR_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  deltaR_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  deltaR_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  deltaR_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  deltaR_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  deltaR_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  deltaR_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  deltaR_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  deltaR_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  deltaR_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  deltaR_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  deltaR_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  deltaR_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  deltaR_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type AthleteMatchesFieldInput = {
  connect?: InputMaybe<Array<AthleteMatchesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<AthleteMatchesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<AthleteMatchesCreateFieldInput>>;
};

export type AthleteMatchesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AthleteMatchesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<AthleteMatchesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<AthleteMatchesNodeAggregationWhereInput>>;
};

export type AthleteMatchesRelationship = AthleteMatch & {
  __typename?: 'AthleteMatchesRelationship';
  cursor: Scalars['String']['output'];
  deltaR: Scalars['Int']['output'];
  division: Division;
  gender: Gender;
  nation: NationCode;
  node: Event;
};

export type AthleteMatchesUpdateConnectionInput = {
  edge?: InputMaybe<AthleteMatchUpdateInput>;
  node?: InputMaybe<EventUpdateInput>;
};

export type AthleteMatchesUpdateFieldInput = {
  connect?: InputMaybe<Array<AthleteMatchesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<AthleteMatchesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<AthleteMatchesCreateFieldInput>>;
  delete?: InputMaybe<Array<AthleteMatchesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<AthleteMatchesDisconnectFieldInput>>;
  update?: InputMaybe<AthleteMatchesUpdateConnectionInput>;
  where?: InputMaybe<AthleteMatchesConnectionWhere>;
};

export type AthleteOnCreateInput = {
  activeNation: NationCode;
  elimRating: Scalars['Int']['input'];
  familyName: Scalars['String']['input'];
  givenName: Scalars['String']['input'];
  qualRating: Scalars['Int']['input'];
};

export type AthleteOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more AthleteSort objects to sort Athletes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<AthleteSort>>;
};

export type AthleteRelationInput = {
  matches?: InputMaybe<Array<AthleteMatchesCreateFieldInput>>;
  results?: InputMaybe<Array<AthleteResultsCreateFieldInput>>;
  sets?: InputMaybe<Array<AthleteSetsCreateFieldInput>>;
};

export type AthleteResultResultsAggregationSelection = {
  __typename?: 'AthleteResultResultsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<AthleteResultResultsNodeAggregateSelection>;
};

export type AthleteResultResultsNodeAggregateSelection = {
  __typename?: 'AthleteResultResultsNodeAggregateSelection';
  deltaR: IntAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
};

export type AthleteResultsAggregateInput = {
  AND?: InputMaybe<Array<AthleteResultsAggregateInput>>;
  NOT?: InputMaybe<AthleteResultsAggregateInput>;
  OR?: InputMaybe<Array<AthleteResultsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<AthleteResultsNodeAggregationWhereInput>;
};

export type AthleteResultsConnectFieldInput = {
  connect?: InputMaybe<Array<ResultConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ResultConnectWhere>;
};

export type AthleteResultsConnectOrCreateFieldInput = {
  onCreate: AthleteResultsConnectOrCreateFieldInputOnCreate;
  where: ResultConnectOrCreateWhere;
};

export type AthleteResultsConnectOrCreateFieldInputOnCreate = {
  node: ResultOnCreateInput;
};

export type AthleteResultsConnection = {
  __typename?: 'AthleteResultsConnection';
  edges: Array<AthleteResultsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AthleteResultsConnectionSort = {
  node?: InputMaybe<ResultSort>;
};

export type AthleteResultsConnectionWhere = {
  AND?: InputMaybe<Array<AthleteResultsConnectionWhere>>;
  NOT?: InputMaybe<AthleteResultsConnectionWhere>;
  OR?: InputMaybe<Array<AthleteResultsConnectionWhere>>;
  node?: InputMaybe<ResultWhere>;
};

export type AthleteResultsCreateFieldInput = {
  node: ResultCreateInput;
};

export type AthleteResultsDeleteFieldInput = {
  delete?: InputMaybe<ResultDeleteInput>;
  where?: InputMaybe<AthleteResultsConnectionWhere>;
};

export type AthleteResultsDisconnectFieldInput = {
  disconnect?: InputMaybe<ResultDisconnectInput>;
  where?: InputMaybe<AthleteResultsConnectionWhere>;
};

export type AthleteResultsFieldInput = {
  connect?: InputMaybe<Array<AthleteResultsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<AthleteResultsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<AthleteResultsCreateFieldInput>>;
};

export type AthleteResultsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AthleteResultsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<AthleteResultsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<AthleteResultsNodeAggregationWhereInput>>;
  deltaR_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  deltaR_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  deltaR_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  deltaR_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  deltaR_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  deltaR_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  deltaR_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  deltaR_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  deltaR_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  deltaR_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  deltaR_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  deltaR_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  deltaR_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  deltaR_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  deltaR_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  deltaR_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  deltaR_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  deltaR_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  deltaR_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  deltaR_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type AthleteResultsRelationship = {
  __typename?: 'AthleteResultsRelationship';
  cursor: Scalars['String']['output'];
  node: Result;
};

export type AthleteResultsUpdateConnectionInput = {
  node?: InputMaybe<ResultUpdateInput>;
};

export type AthleteResultsUpdateFieldInput = {
  connect?: InputMaybe<Array<AthleteResultsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<AthleteResultsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<AthleteResultsCreateFieldInput>>;
  delete?: InputMaybe<Array<AthleteResultsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<AthleteResultsDisconnectFieldInput>>;
  update?: InputMaybe<AthleteResultsUpdateConnectionInput>;
  where?: InputMaybe<AthleteResultsConnectionWhere>;
};

export type AthleteSetSetsAggregationSelection = {
  __typename?: 'AthleteSetSetsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<AthleteSetSetsNodeAggregateSelection>;
};

export type AthleteSetSetsNodeAggregateSelection = {
  __typename?: 'AthleteSetSetsNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
};

export type AthleteSetsAggregateInput = {
  AND?: InputMaybe<Array<AthleteSetsAggregateInput>>;
  NOT?: InputMaybe<AthleteSetsAggregateInput>;
  OR?: InputMaybe<Array<AthleteSetsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<AthleteSetsNodeAggregationWhereInput>;
};

export type AthleteSetsConnectFieldInput = {
  connect?: InputMaybe<Array<SetConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<SetConnectWhere>;
};

export type AthleteSetsConnectOrCreateFieldInput = {
  onCreate: AthleteSetsConnectOrCreateFieldInputOnCreate;
  where: SetConnectOrCreateWhere;
};

export type AthleteSetsConnectOrCreateFieldInputOnCreate = {
  node: SetOnCreateInput;
};

export type AthleteSetsConnection = {
  __typename?: 'AthleteSetsConnection';
  edges: Array<AthleteSetsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AthleteSetsConnectionSort = {
  node?: InputMaybe<SetSort>;
};

export type AthleteSetsConnectionWhere = {
  AND?: InputMaybe<Array<AthleteSetsConnectionWhere>>;
  NOT?: InputMaybe<AthleteSetsConnectionWhere>;
  OR?: InputMaybe<Array<AthleteSetsConnectionWhere>>;
  node?: InputMaybe<SetWhere>;
};

export type AthleteSetsCreateFieldInput = {
  node: SetCreateInput;
};

export type AthleteSetsDeleteFieldInput = {
  delete?: InputMaybe<SetDeleteInput>;
  where?: InputMaybe<AthleteSetsConnectionWhere>;
};

export type AthleteSetsDisconnectFieldInput = {
  disconnect?: InputMaybe<SetDisconnectInput>;
  where?: InputMaybe<AthleteSetsConnectionWhere>;
};

export type AthleteSetsFieldInput = {
  connect?: InputMaybe<Array<AthleteSetsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<AthleteSetsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<AthleteSetsCreateFieldInput>>;
};

export type AthleteSetsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AthleteSetsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<AthleteSetsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<AthleteSetsNodeAggregationWhereInput>>;
};

export type AthleteSetsRelationship = {
  __typename?: 'AthleteSetsRelationship';
  cursor: Scalars['String']['output'];
  node: Set;
};

export type AthleteSetsUpdateConnectionInput = {
  node?: InputMaybe<SetUpdateInput>;
};

export type AthleteSetsUpdateFieldInput = {
  connect?: InputMaybe<Array<AthleteSetsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<AthleteSetsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<AthleteSetsCreateFieldInput>>;
  delete?: InputMaybe<Array<AthleteSetsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<AthleteSetsDisconnectFieldInput>>;
  update?: InputMaybe<AthleteSetsUpdateConnectionInput>;
  where?: InputMaybe<AthleteSetsConnectionWhere>;
};

/** Fields to sort Athletes by. The order in which sorts are applied is not guaranteed when specifying many fields in one AthleteSort object. */
export type AthleteSort = {
  activeNation?: InputMaybe<SortDirection>;
  elimRating?: InputMaybe<SortDirection>;
  familyName?: InputMaybe<SortDirection>;
  givenName?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  qualRating?: InputMaybe<SortDirection>;
};

export type AthleteUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type AthleteUpdateInput = {
  activeNation?: InputMaybe<NationCode>;
  elimRating?: InputMaybe<Scalars['Int']['input']>;
  elimRating_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  elimRating_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
  familyName?: InputMaybe<Scalars['String']['input']>;
  givenName?: InputMaybe<Scalars['String']['input']>;
  matches?: InputMaybe<Array<AthleteMatchesUpdateFieldInput>>;
  qualRating?: InputMaybe<Scalars['Int']['input']>;
  qualRating_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  qualRating_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
  results?: InputMaybe<Array<AthleteResultsUpdateFieldInput>>;
  sets?: InputMaybe<Array<AthleteSetsUpdateFieldInput>>;
};

export type AthleteWhere = {
  AND?: InputMaybe<Array<AthleteWhere>>;
  NOT?: InputMaybe<AthleteWhere>;
  OR?: InputMaybe<Array<AthleteWhere>>;
  activeNation?: InputMaybe<NationCode>;
  activeNation_IN?: InputMaybe<Array<NationCode>>;
  elimRating?: InputMaybe<Scalars['Int']['input']>;
  elimRating_GT?: InputMaybe<Scalars['Int']['input']>;
  elimRating_GTE?: InputMaybe<Scalars['Int']['input']>;
  elimRating_IN?: InputMaybe<Array<Scalars['Int']['input']>>;
  elimRating_LT?: InputMaybe<Scalars['Int']['input']>;
  elimRating_LTE?: InputMaybe<Scalars['Int']['input']>;
  familyName?: InputMaybe<Scalars['String']['input']>;
  familyName_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  familyName_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  familyName_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  familyName_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  givenName?: InputMaybe<Scalars['String']['input']>;
  givenName_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  givenName_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  givenName_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  givenName_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  matchesAggregate?: InputMaybe<AthleteMatchesAggregateInput>;
  /** Return Athletes where all of the related AthleteMatchesConnections match this filter */
  matchesConnection_ALL?: InputMaybe<AthleteMatchesConnectionWhere>;
  /** Return Athletes where none of the related AthleteMatchesConnections match this filter */
  matchesConnection_NONE?: InputMaybe<AthleteMatchesConnectionWhere>;
  /** Return Athletes where one of the related AthleteMatchesConnections match this filter */
  matchesConnection_SINGLE?: InputMaybe<AthleteMatchesConnectionWhere>;
  /** Return Athletes where some of the related AthleteMatchesConnections match this filter */
  matchesConnection_SOME?: InputMaybe<AthleteMatchesConnectionWhere>;
  /** Return Athletes where all of the related Events match this filter */
  matches_ALL?: InputMaybe<EventWhere>;
  /** Return Athletes where none of the related Events match this filter */
  matches_NONE?: InputMaybe<EventWhere>;
  /** Return Athletes where one of the related Events match this filter */
  matches_SINGLE?: InputMaybe<EventWhere>;
  /** Return Athletes where some of the related Events match this filter */
  matches_SOME?: InputMaybe<EventWhere>;
  qualRating?: InputMaybe<Scalars['Int']['input']>;
  qualRating_GT?: InputMaybe<Scalars['Int']['input']>;
  qualRating_GTE?: InputMaybe<Scalars['Int']['input']>;
  qualRating_IN?: InputMaybe<Array<Scalars['Int']['input']>>;
  qualRating_LT?: InputMaybe<Scalars['Int']['input']>;
  qualRating_LTE?: InputMaybe<Scalars['Int']['input']>;
  resultsAggregate?: InputMaybe<AthleteResultsAggregateInput>;
  /** Return Athletes where all of the related AthleteResultsConnections match this filter */
  resultsConnection_ALL?: InputMaybe<AthleteResultsConnectionWhere>;
  /** Return Athletes where none of the related AthleteResultsConnections match this filter */
  resultsConnection_NONE?: InputMaybe<AthleteResultsConnectionWhere>;
  /** Return Athletes where one of the related AthleteResultsConnections match this filter */
  resultsConnection_SINGLE?: InputMaybe<AthleteResultsConnectionWhere>;
  /** Return Athletes where some of the related AthleteResultsConnections match this filter */
  resultsConnection_SOME?: InputMaybe<AthleteResultsConnectionWhere>;
  /** Return Athletes where all of the related Results match this filter */
  results_ALL?: InputMaybe<ResultWhere>;
  /** Return Athletes where none of the related Results match this filter */
  results_NONE?: InputMaybe<ResultWhere>;
  /** Return Athletes where one of the related Results match this filter */
  results_SINGLE?: InputMaybe<ResultWhere>;
  /** Return Athletes where some of the related Results match this filter */
  results_SOME?: InputMaybe<ResultWhere>;
  setsAggregate?: InputMaybe<AthleteSetsAggregateInput>;
  /** Return Athletes where all of the related AthleteSetsConnections match this filter */
  setsConnection_ALL?: InputMaybe<AthleteSetsConnectionWhere>;
  /** Return Athletes where none of the related AthleteSetsConnections match this filter */
  setsConnection_NONE?: InputMaybe<AthleteSetsConnectionWhere>;
  /** Return Athletes where one of the related AthleteSetsConnections match this filter */
  setsConnection_SINGLE?: InputMaybe<AthleteSetsConnectionWhere>;
  /** Return Athletes where some of the related AthleteSetsConnections match this filter */
  setsConnection_SOME?: InputMaybe<AthleteSetsConnectionWhere>;
  /** Return Athletes where all of the related Sets match this filter */
  sets_ALL?: InputMaybe<SetWhere>;
  /** Return Athletes where none of the related Sets match this filter */
  sets_NONE?: InputMaybe<SetWhere>;
  /** Return Athletes where one of the related Sets match this filter */
  sets_SINGLE?: InputMaybe<SetWhere>;
  /** Return Athletes where some of the related Sets match this filter */
  sets_SOME?: InputMaybe<SetWhere>;
};

export type AthletesConnection = {
  __typename?: 'AthletesConnection';
  edges: Array<AthleteEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CreateArrowsMutationResponse = {
  __typename?: 'CreateArrowsMutationResponse';
  arrows: Array<Arrow>;
  info: CreateInfo;
};

export type CreateAthletesMutationResponse = {
  __typename?: 'CreateAthletesMutationResponse';
  athletes: Array<Athlete>;
  info: CreateInfo;
};

export type CreateEventsMutationResponse = {
  __typename?: 'CreateEventsMutationResponse';
  events: Array<Event>;
  info: CreateInfo;
};

export type CreateInfo = {
  __typename?: 'CreateInfo';
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesCreated: Scalars['Int']['output'];
  relationshipsCreated: Scalars['Int']['output'];
};

export type CreateMatchesMutationResponse = {
  __typename?: 'CreateMatchesMutationResponse';
  info: CreateInfo;
  matches: Array<Match>;
};

export type CreateResultsMutationResponse = {
  __typename?: 'CreateResultsMutationResponse';
  info: CreateInfo;
  results: Array<Result>;
};

export type CreateSetsMutationResponse = {
  __typename?: 'CreateSetsMutationResponse';
  info: CreateInfo;
  sets: Array<Set>;
};

export type CreateTargetsMutationResponse = {
  __typename?: 'CreateTargetsMutationResponse';
  info: CreateInfo;
  targets: Array<Target>;
};

export type DeleteInfo = {
  __typename?: 'DeleteInfo';
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesDeleted: Scalars['Int']['output'];
  relationshipsDeleted: Scalars['Int']['output'];
};

export enum Division {
  B5 = 'B5',
  B15 = 'B15',
  B18 = 'B18',
  B21 = 'B21',
  Bs = 'BS',
  C5 = 'C5',
  C6 = 'C6',
  C7 = 'C7',
  C13 = 'C13',
  C15 = 'C15',
  C18 = 'C18',
  C21 = 'C21',
  Cc = 'CC',
  Co = 'CO',
  Cs = 'CS',
  F18 = 'F18',
  F21 = 'F21',
  R5 = 'R5',
  R6 = 'R6',
  R7 = 'R7',
  R13 = 'R13',
  R15 = 'R15',
  R18 = 'R18',
  R21 = 'R21',
  Rc = 'RC',
  Ro = 'RO',
  Rs = 'RS',
  Vi = 'VI',
  W1 = 'W1'
}

export type Event = {
  __typename?: 'Event';
  complete: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  matches: Array<Match>;
  matchesAggregate?: Maybe<EventMatchMatchesAggregationSelection>;
  matchesConnection: EventMatchesConnection;
};


export type EventMatchesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<MatchOptions>;
  where?: InputMaybe<MatchWhere>;
};


export type EventMatchesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<MatchWhere>;
};


export type EventMatchesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EventMatchesConnectionSort>>;
  where?: InputMaybe<EventMatchesConnectionWhere>;
};

export type EventAggregateSelection = {
  __typename?: 'EventAggregateSelection';
  count: Scalars['Int']['output'];
  id: IdAggregateSelectionNonNullable;
};

export type EventConnectInput = {
  matches?: InputMaybe<Array<EventMatchesConnectFieldInput>>;
};

export type EventConnectOrCreateInput = {
  matches?: InputMaybe<Array<EventMatchesConnectOrCreateFieldInput>>;
};

export type EventConnectOrCreateWhere = {
  node: EventUniqueWhere;
};

export type EventConnectWhere = {
  node: EventWhere;
};

export type EventCreateInput = {
  complete: Scalars['Boolean']['input'];
  matches?: InputMaybe<EventMatchesFieldInput>;
};

export type EventDeleteInput = {
  matches?: InputMaybe<Array<EventMatchesDeleteFieldInput>>;
};

export type EventDisconnectInput = {
  matches?: InputMaybe<Array<EventMatchesDisconnectFieldInput>>;
};

export type EventEdge = {
  __typename?: 'EventEdge';
  cursor: Scalars['String']['output'];
  node: Event;
};

export type EventMatchMatchesAggregationSelection = {
  __typename?: 'EventMatchMatchesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<EventMatchMatchesNodeAggregateSelection>;
};

export type EventMatchMatchesNodeAggregateSelection = {
  __typename?: 'EventMatchMatchesNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
};

export type EventMatchesAggregateInput = {
  AND?: InputMaybe<Array<EventMatchesAggregateInput>>;
  NOT?: InputMaybe<EventMatchesAggregateInput>;
  OR?: InputMaybe<Array<EventMatchesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<EventMatchesNodeAggregationWhereInput>;
};

export type EventMatchesConnectFieldInput = {
  connect?: InputMaybe<Array<MatchConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<MatchConnectWhere>;
};

export type EventMatchesConnectOrCreateFieldInput = {
  onCreate: EventMatchesConnectOrCreateFieldInputOnCreate;
  where: MatchConnectOrCreateWhere;
};

export type EventMatchesConnectOrCreateFieldInputOnCreate = {
  node: MatchOnCreateInput;
};

export type EventMatchesConnection = {
  __typename?: 'EventMatchesConnection';
  edges: Array<EventMatchesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type EventMatchesConnectionSort = {
  node?: InputMaybe<MatchSort>;
};

export type EventMatchesConnectionWhere = {
  AND?: InputMaybe<Array<EventMatchesConnectionWhere>>;
  NOT?: InputMaybe<EventMatchesConnectionWhere>;
  OR?: InputMaybe<Array<EventMatchesConnectionWhere>>;
  node?: InputMaybe<MatchWhere>;
};

export type EventMatchesCreateFieldInput = {
  node: MatchCreateInput;
};

export type EventMatchesDeleteFieldInput = {
  delete?: InputMaybe<MatchDeleteInput>;
  where?: InputMaybe<EventMatchesConnectionWhere>;
};

export type EventMatchesDisconnectFieldInput = {
  disconnect?: InputMaybe<MatchDisconnectInput>;
  where?: InputMaybe<EventMatchesConnectionWhere>;
};

export type EventMatchesFieldInput = {
  connect?: InputMaybe<Array<EventMatchesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<EventMatchesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<EventMatchesCreateFieldInput>>;
};

export type EventMatchesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<EventMatchesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<EventMatchesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<EventMatchesNodeAggregationWhereInput>>;
};

export type EventMatchesRelationship = {
  __typename?: 'EventMatchesRelationship';
  cursor: Scalars['String']['output'];
  node: Match;
};

export type EventMatchesUpdateConnectionInput = {
  node?: InputMaybe<MatchUpdateInput>;
};

export type EventMatchesUpdateFieldInput = {
  connect?: InputMaybe<Array<EventMatchesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<EventMatchesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<EventMatchesCreateFieldInput>>;
  delete?: InputMaybe<Array<EventMatchesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<EventMatchesDisconnectFieldInput>>;
  update?: InputMaybe<EventMatchesUpdateConnectionInput>;
  where?: InputMaybe<EventMatchesConnectionWhere>;
};

export type EventOnCreateInput = {
  complete: Scalars['Boolean']['input'];
};

export type EventOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more EventSort objects to sort Events by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<EventSort>>;
};

export type EventRelationInput = {
  matches?: InputMaybe<Array<EventMatchesCreateFieldInput>>;
};

/** Fields to sort Events by. The order in which sorts are applied is not guaranteed when specifying many fields in one EventSort object. */
export type EventSort = {
  complete?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
};

export type EventUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type EventUpdateInput = {
  complete?: InputMaybe<Scalars['Boolean']['input']>;
  matches?: InputMaybe<Array<EventMatchesUpdateFieldInput>>;
};

export type EventWhere = {
  AND?: InputMaybe<Array<EventWhere>>;
  NOT?: InputMaybe<EventWhere>;
  OR?: InputMaybe<Array<EventWhere>>;
  complete?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  matchesAggregate?: InputMaybe<EventMatchesAggregateInput>;
  /** Return Events where all of the related EventMatchesConnections match this filter */
  matchesConnection_ALL?: InputMaybe<EventMatchesConnectionWhere>;
  /** Return Events where none of the related EventMatchesConnections match this filter */
  matchesConnection_NONE?: InputMaybe<EventMatchesConnectionWhere>;
  /** Return Events where one of the related EventMatchesConnections match this filter */
  matchesConnection_SINGLE?: InputMaybe<EventMatchesConnectionWhere>;
  /** Return Events where some of the related EventMatchesConnections match this filter */
  matchesConnection_SOME?: InputMaybe<EventMatchesConnectionWhere>;
  /** Return Events where all of the related Matches match this filter */
  matches_ALL?: InputMaybe<MatchWhere>;
  /** Return Events where none of the related Matches match this filter */
  matches_NONE?: InputMaybe<MatchWhere>;
  /** Return Events where one of the related Matches match this filter */
  matches_SINGLE?: InputMaybe<MatchWhere>;
  /** Return Events where some of the related Matches match this filter */
  matches_SOME?: InputMaybe<MatchWhere>;
};

export type EventsConnection = {
  __typename?: 'EventsConnection';
  edges: Array<EventEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export enum Gender {
  F = 'F',
  M = 'M'
}

export type IdAggregateSelectionNonNullable = {
  __typename?: 'IDAggregateSelectionNonNullable';
  longest: Scalars['ID']['output'];
  shortest: Scalars['ID']['output'];
};

export type IntAggregateSelectionNonNullable = {
  __typename?: 'IntAggregateSelectionNonNullable';
  average: Scalars['Float']['output'];
  max: Scalars['Int']['output'];
  min: Scalars['Int']['output'];
  sum: Scalars['Int']['output'];
};

export type IntAggregateSelectionNullable = {
  __typename?: 'IntAggregateSelectionNullable';
  average?: Maybe<Scalars['Float']['output']>;
  max?: Maybe<Scalars['Int']['output']>;
  min?: Maybe<Scalars['Int']['output']>;
  sum?: Maybe<Scalars['Int']['output']>;
};

export type Match = {
  __typename?: 'Match';
  athletes: Array<Athlete>;
  athletesAggregate?: Maybe<MatchAthleteAthletesAggregationSelection>;
  athletesConnection: MatchAthletesConnection;
  complete: Scalars['Boolean']['output'];
  event?: Maybe<Event>;
  eventAggregate?: Maybe<MatchEventEventAggregationSelection>;
  eventConnection: MatchEventConnection;
  id: Scalars['ID']['output'];
  sets: Array<Set>;
  setsAggregate?: Maybe<MatchSetSetsAggregationSelection>;
  setsConnection: MatchSetsConnection;
  style: MatchStyle;
};


export type MatchAthletesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<AthleteOptions>;
  where?: InputMaybe<AthleteWhere>;
};


export type MatchAthletesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AthleteWhere>;
};


export type MatchAthletesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<MatchAthletesConnectionSort>>;
  where?: InputMaybe<MatchAthletesConnectionWhere>;
};


export type MatchEventArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<EventOptions>;
  where?: InputMaybe<EventWhere>;
};


export type MatchEventAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<EventWhere>;
};


export type MatchEventConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<MatchEventConnectionSort>>;
  where?: InputMaybe<MatchEventConnectionWhere>;
};


export type MatchSetsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<SetOptions>;
  where?: InputMaybe<SetWhere>;
};


export type MatchSetsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SetWhere>;
};


export type MatchSetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<MatchSetsConnectionSort>>;
  where?: InputMaybe<MatchSetsConnectionWhere>;
};

export type MatchAggregateSelection = {
  __typename?: 'MatchAggregateSelection';
  count: Scalars['Int']['output'];
  id: IdAggregateSelectionNonNullable;
};

export type MatchAthleteAthletesAggregationSelection = {
  __typename?: 'MatchAthleteAthletesAggregationSelection';
  count: Scalars['Int']['output'];
  edge?: Maybe<MatchAthleteAthletesEdgeAggregateSelection>;
  node?: Maybe<MatchAthleteAthletesNodeAggregateSelection>;
};

export type MatchAthleteAthletesEdgeAggregateSelection = {
  __typename?: 'MatchAthleteAthletesEdgeAggregateSelection';
  deltaR: IntAggregateSelectionNonNullable;
};

export type MatchAthleteAthletesNodeAggregateSelection = {
  __typename?: 'MatchAthleteAthletesNodeAggregateSelection';
  elimRating: IntAggregateSelectionNonNullable;
  familyName: StringAggregateSelectionNonNullable;
  givenName: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  qualRating: IntAggregateSelectionNonNullable;
};

export type MatchAthletesAggregateInput = {
  AND?: InputMaybe<Array<MatchAthletesAggregateInput>>;
  NOT?: InputMaybe<MatchAthletesAggregateInput>;
  OR?: InputMaybe<Array<MatchAthletesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  edge?: InputMaybe<MatchAthletesEdgeAggregationWhereInput>;
  node?: InputMaybe<MatchAthletesNodeAggregationWhereInput>;
};

export type MatchAthletesConnectFieldInput = {
  connect?: InputMaybe<Array<AthleteConnectInput>>;
  edge: AthleteMatchCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<AthleteConnectWhere>;
};

export type MatchAthletesConnectOrCreateFieldInput = {
  onCreate: MatchAthletesConnectOrCreateFieldInputOnCreate;
  where: AthleteConnectOrCreateWhere;
};

export type MatchAthletesConnectOrCreateFieldInputOnCreate = {
  edge: AthleteMatchCreateInput;
  node: AthleteOnCreateInput;
};

export type MatchAthletesConnection = {
  __typename?: 'MatchAthletesConnection';
  edges: Array<MatchAthletesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MatchAthletesConnectionSort = {
  edge?: InputMaybe<AthleteMatchSort>;
  node?: InputMaybe<AthleteSort>;
};

export type MatchAthletesConnectionWhere = {
  AND?: InputMaybe<Array<MatchAthletesConnectionWhere>>;
  NOT?: InputMaybe<MatchAthletesConnectionWhere>;
  OR?: InputMaybe<Array<MatchAthletesConnectionWhere>>;
  edge?: InputMaybe<AthleteMatchWhere>;
  node?: InputMaybe<AthleteWhere>;
};

export type MatchAthletesCreateFieldInput = {
  edge: AthleteMatchCreateInput;
  node: AthleteCreateInput;
};

export type MatchAthletesDeleteFieldInput = {
  delete?: InputMaybe<AthleteDeleteInput>;
  where?: InputMaybe<MatchAthletesConnectionWhere>;
};

export type MatchAthletesDisconnectFieldInput = {
  disconnect?: InputMaybe<AthleteDisconnectInput>;
  where?: InputMaybe<MatchAthletesConnectionWhere>;
};

export type MatchAthletesEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<MatchAthletesEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<MatchAthletesEdgeAggregationWhereInput>;
  OR?: InputMaybe<Array<MatchAthletesEdgeAggregationWhereInput>>;
  deltaR_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  deltaR_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  deltaR_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  deltaR_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  deltaR_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  deltaR_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  deltaR_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  deltaR_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  deltaR_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  deltaR_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  deltaR_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  deltaR_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  deltaR_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  deltaR_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  deltaR_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  deltaR_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  deltaR_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  deltaR_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  deltaR_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  deltaR_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type MatchAthletesFieldInput = {
  connect?: InputMaybe<Array<MatchAthletesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<MatchAthletesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<MatchAthletesCreateFieldInput>>;
};

export type MatchAthletesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MatchAthletesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<MatchAthletesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<MatchAthletesNodeAggregationWhereInput>>;
  elimRating_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  elimRating_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  elimRating_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  elimRating_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  elimRating_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  elimRating_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  elimRating_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  elimRating_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  elimRating_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  elimRating_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  elimRating_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  elimRating_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  elimRating_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  elimRating_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  elimRating_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  elimRating_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  elimRating_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  elimRating_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  elimRating_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  elimRating_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  familyName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  familyName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  familyName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  familyName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  familyName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  familyName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  familyName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  familyName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  familyName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  familyName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  givenName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  givenName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  givenName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  givenName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  givenName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  givenName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  givenName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  givenName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  givenName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  givenName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  qualRating_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  qualRating_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  qualRating_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  qualRating_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  qualRating_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  qualRating_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  qualRating_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  qualRating_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  qualRating_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  qualRating_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  qualRating_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  qualRating_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  qualRating_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  qualRating_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  qualRating_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  qualRating_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  qualRating_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  qualRating_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  qualRating_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  qualRating_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type MatchAthletesRelationship = AthleteMatch & {
  __typename?: 'MatchAthletesRelationship';
  cursor: Scalars['String']['output'];
  deltaR: Scalars['Int']['output'];
  division: Division;
  gender: Gender;
  nation: NationCode;
  node: Athlete;
};

export type MatchAthletesUpdateConnectionInput = {
  edge?: InputMaybe<AthleteMatchUpdateInput>;
  node?: InputMaybe<AthleteUpdateInput>;
};

export type MatchAthletesUpdateFieldInput = {
  connect?: InputMaybe<Array<MatchAthletesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<MatchAthletesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<MatchAthletesCreateFieldInput>>;
  delete?: InputMaybe<Array<MatchAthletesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<MatchAthletesDisconnectFieldInput>>;
  update?: InputMaybe<MatchAthletesUpdateConnectionInput>;
  where?: InputMaybe<MatchAthletesConnectionWhere>;
};

export type MatchConnectInput = {
  athletes?: InputMaybe<Array<MatchAthletesConnectFieldInput>>;
  event?: InputMaybe<MatchEventConnectFieldInput>;
  sets?: InputMaybe<Array<MatchSetsConnectFieldInput>>;
};

export type MatchConnectOrCreateInput = {
  athletes?: InputMaybe<Array<MatchAthletesConnectOrCreateFieldInput>>;
  event?: InputMaybe<MatchEventConnectOrCreateFieldInput>;
  sets?: InputMaybe<Array<MatchSetsConnectOrCreateFieldInput>>;
};

export type MatchConnectOrCreateWhere = {
  node: MatchUniqueWhere;
};

export type MatchConnectWhere = {
  node: MatchWhere;
};

export type MatchCreateInput = {
  athletes?: InputMaybe<MatchAthletesFieldInput>;
  complete: Scalars['Boolean']['input'];
  event?: InputMaybe<MatchEventFieldInput>;
  sets?: InputMaybe<MatchSetsFieldInput>;
  style: MatchStyle;
};

export type MatchDeleteInput = {
  athletes?: InputMaybe<Array<MatchAthletesDeleteFieldInput>>;
  event?: InputMaybe<MatchEventDeleteFieldInput>;
  sets?: InputMaybe<Array<MatchSetsDeleteFieldInput>>;
};

export type MatchDisconnectInput = {
  athletes?: InputMaybe<Array<MatchAthletesDisconnectFieldInput>>;
  event?: InputMaybe<MatchEventDisconnectFieldInput>;
  sets?: InputMaybe<Array<MatchSetsDisconnectFieldInput>>;
};

export type MatchEdge = {
  __typename?: 'MatchEdge';
  cursor: Scalars['String']['output'];
  node: Match;
};

export type MatchEventAggregateInput = {
  AND?: InputMaybe<Array<MatchEventAggregateInput>>;
  NOT?: InputMaybe<MatchEventAggregateInput>;
  OR?: InputMaybe<Array<MatchEventAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<MatchEventNodeAggregationWhereInput>;
};

export type MatchEventConnectFieldInput = {
  connect?: InputMaybe<EventConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<EventConnectWhere>;
};

export type MatchEventConnectOrCreateFieldInput = {
  onCreate: MatchEventConnectOrCreateFieldInputOnCreate;
  where: EventConnectOrCreateWhere;
};

export type MatchEventConnectOrCreateFieldInputOnCreate = {
  node: EventOnCreateInput;
};

export type MatchEventConnection = {
  __typename?: 'MatchEventConnection';
  edges: Array<MatchEventRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MatchEventConnectionSort = {
  node?: InputMaybe<EventSort>;
};

export type MatchEventConnectionWhere = {
  AND?: InputMaybe<Array<MatchEventConnectionWhere>>;
  NOT?: InputMaybe<MatchEventConnectionWhere>;
  OR?: InputMaybe<Array<MatchEventConnectionWhere>>;
  node?: InputMaybe<EventWhere>;
};

export type MatchEventCreateFieldInput = {
  node: EventCreateInput;
};

export type MatchEventDeleteFieldInput = {
  delete?: InputMaybe<EventDeleteInput>;
  where?: InputMaybe<MatchEventConnectionWhere>;
};

export type MatchEventDisconnectFieldInput = {
  disconnect?: InputMaybe<EventDisconnectInput>;
  where?: InputMaybe<MatchEventConnectionWhere>;
};

export type MatchEventEventAggregationSelection = {
  __typename?: 'MatchEventEventAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<MatchEventEventNodeAggregateSelection>;
};

export type MatchEventEventNodeAggregateSelection = {
  __typename?: 'MatchEventEventNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
};

export type MatchEventFieldInput = {
  connect?: InputMaybe<MatchEventConnectFieldInput>;
  connectOrCreate?: InputMaybe<MatchEventConnectOrCreateFieldInput>;
  create?: InputMaybe<MatchEventCreateFieldInput>;
};

export type MatchEventNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MatchEventNodeAggregationWhereInput>>;
  NOT?: InputMaybe<MatchEventNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<MatchEventNodeAggregationWhereInput>>;
};

export type MatchEventRelationship = {
  __typename?: 'MatchEventRelationship';
  cursor: Scalars['String']['output'];
  node: Event;
};

export type MatchEventUpdateConnectionInput = {
  node?: InputMaybe<EventUpdateInput>;
};

export type MatchEventUpdateFieldInput = {
  connect?: InputMaybe<MatchEventConnectFieldInput>;
  connectOrCreate?: InputMaybe<MatchEventConnectOrCreateFieldInput>;
  create?: InputMaybe<MatchEventCreateFieldInput>;
  delete?: InputMaybe<MatchEventDeleteFieldInput>;
  disconnect?: InputMaybe<MatchEventDisconnectFieldInput>;
  update?: InputMaybe<MatchEventUpdateConnectionInput>;
  where?: InputMaybe<MatchEventConnectionWhere>;
};

export type MatchOnCreateInput = {
  complete: Scalars['Boolean']['input'];
  style: MatchStyle;
};

export type MatchOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more MatchSort objects to sort Matches by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<MatchSort>>;
};

export type MatchRelationInput = {
  athletes?: InputMaybe<Array<MatchAthletesCreateFieldInput>>;
  event?: InputMaybe<MatchEventCreateFieldInput>;
  sets?: InputMaybe<Array<MatchSetsCreateFieldInput>>;
};

export type MatchSetSetsAggregationSelection = {
  __typename?: 'MatchSetSetsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<MatchSetSetsNodeAggregateSelection>;
};

export type MatchSetSetsNodeAggregateSelection = {
  __typename?: 'MatchSetSetsNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
};

export type MatchSetsAggregateInput = {
  AND?: InputMaybe<Array<MatchSetsAggregateInput>>;
  NOT?: InputMaybe<MatchSetsAggregateInput>;
  OR?: InputMaybe<Array<MatchSetsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<MatchSetsNodeAggregationWhereInput>;
};

export type MatchSetsConnectFieldInput = {
  connect?: InputMaybe<Array<SetConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<SetConnectWhere>;
};

export type MatchSetsConnectOrCreateFieldInput = {
  onCreate: MatchSetsConnectOrCreateFieldInputOnCreate;
  where: SetConnectOrCreateWhere;
};

export type MatchSetsConnectOrCreateFieldInputOnCreate = {
  node: SetOnCreateInput;
};

export type MatchSetsConnection = {
  __typename?: 'MatchSetsConnection';
  edges: Array<MatchSetsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MatchSetsConnectionSort = {
  node?: InputMaybe<SetSort>;
};

export type MatchSetsConnectionWhere = {
  AND?: InputMaybe<Array<MatchSetsConnectionWhere>>;
  NOT?: InputMaybe<MatchSetsConnectionWhere>;
  OR?: InputMaybe<Array<MatchSetsConnectionWhere>>;
  node?: InputMaybe<SetWhere>;
};

export type MatchSetsCreateFieldInput = {
  node: SetCreateInput;
};

export type MatchSetsDeleteFieldInput = {
  delete?: InputMaybe<SetDeleteInput>;
  where?: InputMaybe<MatchSetsConnectionWhere>;
};

export type MatchSetsDisconnectFieldInput = {
  disconnect?: InputMaybe<SetDisconnectInput>;
  where?: InputMaybe<MatchSetsConnectionWhere>;
};

export type MatchSetsFieldInput = {
  connect?: InputMaybe<Array<MatchSetsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<MatchSetsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<MatchSetsCreateFieldInput>>;
};

export type MatchSetsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MatchSetsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<MatchSetsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<MatchSetsNodeAggregationWhereInput>>;
};

export type MatchSetsRelationship = {
  __typename?: 'MatchSetsRelationship';
  cursor: Scalars['String']['output'];
  node: Set;
};

export type MatchSetsUpdateConnectionInput = {
  node?: InputMaybe<SetUpdateInput>;
};

export type MatchSetsUpdateFieldInput = {
  connect?: InputMaybe<Array<MatchSetsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<MatchSetsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<MatchSetsCreateFieldInput>>;
  delete?: InputMaybe<Array<MatchSetsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<MatchSetsDisconnectFieldInput>>;
  update?: InputMaybe<MatchSetsUpdateConnectionInput>;
  where?: InputMaybe<MatchSetsConnectionWhere>;
};

/** Fields to sort Matches by. The order in which sorts are applied is not guaranteed when specifying many fields in one MatchSort object. */
export type MatchSort = {
  complete?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  style?: InputMaybe<SortDirection>;
};

export enum MatchStyle {
  Elim = 'ELIM',
  Qual = 'QUAL'
}

export type MatchUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type MatchUpdateInput = {
  athletes?: InputMaybe<Array<MatchAthletesUpdateFieldInput>>;
  complete?: InputMaybe<Scalars['Boolean']['input']>;
  event?: InputMaybe<MatchEventUpdateFieldInput>;
  sets?: InputMaybe<Array<MatchSetsUpdateFieldInput>>;
  style?: InputMaybe<MatchStyle>;
};

export type MatchWhere = {
  AND?: InputMaybe<Array<MatchWhere>>;
  NOT?: InputMaybe<MatchWhere>;
  OR?: InputMaybe<Array<MatchWhere>>;
  athletesAggregate?: InputMaybe<MatchAthletesAggregateInput>;
  /** Return Matches where all of the related MatchAthletesConnections match this filter */
  athletesConnection_ALL?: InputMaybe<MatchAthletesConnectionWhere>;
  /** Return Matches where none of the related MatchAthletesConnections match this filter */
  athletesConnection_NONE?: InputMaybe<MatchAthletesConnectionWhere>;
  /** Return Matches where one of the related MatchAthletesConnections match this filter */
  athletesConnection_SINGLE?: InputMaybe<MatchAthletesConnectionWhere>;
  /** Return Matches where some of the related MatchAthletesConnections match this filter */
  athletesConnection_SOME?: InputMaybe<MatchAthletesConnectionWhere>;
  /** Return Matches where all of the related Athletes match this filter */
  athletes_ALL?: InputMaybe<AthleteWhere>;
  /** Return Matches where none of the related Athletes match this filter */
  athletes_NONE?: InputMaybe<AthleteWhere>;
  /** Return Matches where one of the related Athletes match this filter */
  athletes_SINGLE?: InputMaybe<AthleteWhere>;
  /** Return Matches where some of the related Athletes match this filter */
  athletes_SOME?: InputMaybe<AthleteWhere>;
  complete?: InputMaybe<Scalars['Boolean']['input']>;
  event?: InputMaybe<EventWhere>;
  eventAggregate?: InputMaybe<MatchEventAggregateInput>;
  eventConnection?: InputMaybe<MatchEventConnectionWhere>;
  eventConnection_NOT?: InputMaybe<MatchEventConnectionWhere>;
  event_NOT?: InputMaybe<EventWhere>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  setsAggregate?: InputMaybe<MatchSetsAggregateInput>;
  /** Return Matches where all of the related MatchSetsConnections match this filter */
  setsConnection_ALL?: InputMaybe<MatchSetsConnectionWhere>;
  /** Return Matches where none of the related MatchSetsConnections match this filter */
  setsConnection_NONE?: InputMaybe<MatchSetsConnectionWhere>;
  /** Return Matches where one of the related MatchSetsConnections match this filter */
  setsConnection_SINGLE?: InputMaybe<MatchSetsConnectionWhere>;
  /** Return Matches where some of the related MatchSetsConnections match this filter */
  setsConnection_SOME?: InputMaybe<MatchSetsConnectionWhere>;
  /** Return Matches where all of the related Sets match this filter */
  sets_ALL?: InputMaybe<SetWhere>;
  /** Return Matches where none of the related Sets match this filter */
  sets_NONE?: InputMaybe<SetWhere>;
  /** Return Matches where one of the related Sets match this filter */
  sets_SINGLE?: InputMaybe<SetWhere>;
  /** Return Matches where some of the related Sets match this filter */
  sets_SOME?: InputMaybe<SetWhere>;
  style?: InputMaybe<MatchStyle>;
  style_IN?: InputMaybe<Array<MatchStyle>>;
};

export type MatchesConnection = {
  __typename?: 'MatchesConnection';
  edges: Array<MatchEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createArrows: CreateArrowsMutationResponse;
  createAthletes: CreateAthletesMutationResponse;
  createEvents: CreateEventsMutationResponse;
  createMatches: CreateMatchesMutationResponse;
  createResults: CreateResultsMutationResponse;
  createSets: CreateSetsMutationResponse;
  createTargets: CreateTargetsMutationResponse;
  deleteArrows: DeleteInfo;
  deleteAthletes: DeleteInfo;
  deleteEvents: DeleteInfo;
  deleteMatches: DeleteInfo;
  deleteResults: DeleteInfo;
  deleteSets: DeleteInfo;
  deleteTargets: DeleteInfo;
  updateArrows: UpdateArrowsMutationResponse;
  updateAthletes: UpdateAthletesMutationResponse;
  updateEvents: UpdateEventsMutationResponse;
  updateMatches: UpdateMatchesMutationResponse;
  updateResults: UpdateResultsMutationResponse;
  updateSets: UpdateSetsMutationResponse;
  updateTargets: UpdateTargetsMutationResponse;
};


export type MutationCreateArrowsArgs = {
  input: Array<ArrowCreateInput>;
};


export type MutationCreateAthletesArgs = {
  input: Array<AthleteCreateInput>;
};


export type MutationCreateEventsArgs = {
  input: Array<EventCreateInput>;
};


export type MutationCreateMatchesArgs = {
  input: Array<MatchCreateInput>;
};


export type MutationCreateResultsArgs = {
  input: Array<ResultCreateInput>;
};


export type MutationCreateSetsArgs = {
  input: Array<SetCreateInput>;
};


export type MutationCreateTargetsArgs = {
  input: Array<TargetCreateInput>;
};


export type MutationDeleteArrowsArgs = {
  delete?: InputMaybe<ArrowDeleteInput>;
  where?: InputMaybe<ArrowWhere>;
};


export type MutationDeleteAthletesArgs = {
  delete?: InputMaybe<AthleteDeleteInput>;
  where?: InputMaybe<AthleteWhere>;
};


export type MutationDeleteEventsArgs = {
  delete?: InputMaybe<EventDeleteInput>;
  where?: InputMaybe<EventWhere>;
};


export type MutationDeleteMatchesArgs = {
  delete?: InputMaybe<MatchDeleteInput>;
  where?: InputMaybe<MatchWhere>;
};


export type MutationDeleteResultsArgs = {
  delete?: InputMaybe<ResultDeleteInput>;
  where?: InputMaybe<ResultWhere>;
};


export type MutationDeleteSetsArgs = {
  delete?: InputMaybe<SetDeleteInput>;
  where?: InputMaybe<SetWhere>;
};


export type MutationDeleteTargetsArgs = {
  where?: InputMaybe<TargetWhere>;
};


export type MutationUpdateArrowsArgs = {
  connect?: InputMaybe<ArrowConnectInput>;
  connectOrCreate?: InputMaybe<ArrowConnectOrCreateInput>;
  create?: InputMaybe<ArrowRelationInput>;
  delete?: InputMaybe<ArrowDeleteInput>;
  disconnect?: InputMaybe<ArrowDisconnectInput>;
  update?: InputMaybe<ArrowUpdateInput>;
  where?: InputMaybe<ArrowWhere>;
};


export type MutationUpdateAthletesArgs = {
  connect?: InputMaybe<AthleteConnectInput>;
  connectOrCreate?: InputMaybe<AthleteConnectOrCreateInput>;
  create?: InputMaybe<AthleteRelationInput>;
  delete?: InputMaybe<AthleteDeleteInput>;
  disconnect?: InputMaybe<AthleteDisconnectInput>;
  update?: InputMaybe<AthleteUpdateInput>;
  where?: InputMaybe<AthleteWhere>;
};


export type MutationUpdateEventsArgs = {
  connect?: InputMaybe<EventConnectInput>;
  connectOrCreate?: InputMaybe<EventConnectOrCreateInput>;
  create?: InputMaybe<EventRelationInput>;
  delete?: InputMaybe<EventDeleteInput>;
  disconnect?: InputMaybe<EventDisconnectInput>;
  update?: InputMaybe<EventUpdateInput>;
  where?: InputMaybe<EventWhere>;
};


export type MutationUpdateMatchesArgs = {
  connect?: InputMaybe<MatchConnectInput>;
  connectOrCreate?: InputMaybe<MatchConnectOrCreateInput>;
  create?: InputMaybe<MatchRelationInput>;
  delete?: InputMaybe<MatchDeleteInput>;
  disconnect?: InputMaybe<MatchDisconnectInput>;
  update?: InputMaybe<MatchUpdateInput>;
  where?: InputMaybe<MatchWhere>;
};


export type MutationUpdateResultsArgs = {
  connect?: InputMaybe<ResultConnectInput>;
  connectOrCreate?: InputMaybe<ResultConnectOrCreateInput>;
  create?: InputMaybe<ResultRelationInput>;
  delete?: InputMaybe<ResultDeleteInput>;
  disconnect?: InputMaybe<ResultDisconnectInput>;
  update?: InputMaybe<ResultUpdateInput>;
  where?: InputMaybe<ResultWhere>;
};


export type MutationUpdateSetsArgs = {
  connect?: InputMaybe<SetConnectInput>;
  connectOrCreate?: InputMaybe<SetConnectOrCreateInput>;
  create?: InputMaybe<SetRelationInput>;
  delete?: InputMaybe<SetDeleteInput>;
  disconnect?: InputMaybe<SetDisconnectInput>;
  update?: InputMaybe<SetUpdateInput>;
  where?: InputMaybe<SetWhere>;
};


export type MutationUpdateTargetsArgs = {
  update?: InputMaybe<TargetUpdateInput>;
  where?: InputMaybe<TargetWhere>;
};

export enum NationCode {
  Abw = 'ABW',
  Afg = 'AFG',
  Ago = 'AGO',
  Aia = 'AIA',
  Ala = 'ALA',
  Alb = 'ALB',
  And = 'AND',
  Ant = 'ANT',
  Are = 'ARE',
  Arg = 'ARG',
  Arm = 'ARM',
  Asm = 'ASM',
  Ata = 'ATA',
  Atf = 'ATF',
  Atg = 'ATG',
  Aus = 'AUS',
  Aut = 'AUT',
  Aze = 'AZE',
  Bdi = 'BDI',
  Bel = 'BEL',
  Ben = 'BEN',
  Bfa = 'BFA',
  Bgd = 'BGD',
  Bgr = 'BGR',
  Bhr = 'BHR',
  Bhs = 'BHS',
  Bih = 'BIH',
  Blm = 'BLM',
  Blr = 'BLR',
  Blz = 'BLZ',
  Bmu = 'BMU',
  Bol = 'BOL',
  Bra = 'BRA',
  Brb = 'BRB',
  Brn = 'BRN',
  Btn = 'BTN',
  Bvt = 'BVT',
  Bwa = 'BWA',
  Caf = 'CAF',
  Can = 'CAN',
  Cck = 'CCK',
  Che = 'CHE',
  Chl = 'CHL',
  Chn = 'CHN',
  Civ = 'CIV',
  Cmr = 'CMR',
  Cod = 'COD',
  Cog = 'COG',
  Cok = 'COK',
  Col = 'COL',
  Com = 'COM',
  Cpv = 'CPV',
  Cri = 'CRI',
  Cub = 'CUB',
  Cxr = 'CXR',
  Cym = 'CYM',
  Cyp = 'CYP',
  Cze = 'CZE',
  Deu = 'DEU',
  Dji = 'DJI',
  Dma = 'DMA',
  Dnk = 'DNK',
  Dom = 'DOM',
  Dza = 'DZA',
  Ecu = 'ECU',
  Egy = 'EGY',
  Eri = 'ERI',
  Esh = 'ESH',
  Esp = 'ESP',
  Est = 'EST',
  Eth = 'ETH',
  Fin = 'FIN',
  Fji = 'FJI',
  Flk = 'FLK',
  Fra = 'FRA',
  Fro = 'FRO',
  Fsm = 'FSM',
  Gab = 'GAB',
  Gbr = 'GBR',
  Geo = 'GEO',
  Ggy = 'GGY',
  Gha = 'GHA',
  Gib = 'GIB',
  Gin = 'GIN',
  Glp = 'GLP',
  Gmb = 'GMB',
  Gnb = 'GNB',
  Gnq = 'GNQ',
  Grc = 'GRC',
  Grd = 'GRD',
  Grl = 'GRL',
  Gtm = 'GTM',
  Guf = 'GUF',
  Gum = 'GUM',
  Guy = 'GUY',
  Hkg = 'HKG',
  Hmd = 'HMD',
  Hnd = 'HND',
  Hrv = 'HRV',
  Hti = 'HTI',
  Hun = 'HUN',
  Idn = 'IDN',
  Imn = 'IMN',
  Ind = 'IND',
  Iot = 'IOT',
  Irl = 'IRL',
  Irn = 'IRN',
  Irq = 'IRQ',
  Isl = 'ISL',
  Isr = 'ISR',
  Ita = 'ITA',
  Jey = 'JEY',
  Jm = 'JM',
  Jor = 'JOR',
  Jpn = 'JPN',
  Kaz = 'KAZ',
  Ken = 'KEN',
  Kgz = 'KGZ',
  Khm = 'KHM',
  Kir = 'KIR',
  Kna = 'KNA',
  Kor = 'KOR',
  Kwt = 'KWT',
  Lao = 'LAO',
  Lbn = 'LBN',
  Lbr = 'LBR',
  Lby = 'LBY',
  Lca = 'LCA',
  Lie = 'LIE',
  Lka = 'LKA',
  Lso = 'LSO',
  Ltu = 'LTU',
  Lux = 'LUX',
  Lva = 'LVA',
  Mac = 'MAC',
  Maf = 'MAF',
  Mar = 'MAR',
  Mco = 'MCO',
  Mda = 'MDA',
  Mdg = 'MDG',
  Mdv = 'MDV',
  Mex = 'MEX',
  Mhl = 'MHL',
  Mkd = 'MKD',
  Mli = 'MLI',
  Mlt = 'MLT',
  Mmr = 'MMR',
  Mne = 'MNE',
  Mng = 'MNG',
  Mnp = 'MNP',
  Moz = 'MOZ',
  Mrt = 'MRT',
  Msr = 'MSR',
  Mtq = 'MTQ',
  Mus = 'MUS',
  Mwi = 'MWI',
  Mys = 'MYS',
  Myt = 'MYT',
  Nam = 'NAM',
  Ncl = 'NCL',
  Ner = 'NER',
  Nfk = 'NFK',
  Nga = 'NGA',
  Nic = 'NIC',
  Niu = 'NIU',
  Nld = 'NLD',
  Nor = 'NOR',
  Npl = 'NPL',
  Nru = 'NRU',
  Nzl = 'NZL',
  Omn = 'OMN',
  Pak = 'PAK',
  Pan = 'PAN',
  Pcn = 'PCN',
  Per = 'PER',
  Phl = 'PHL',
  Plw = 'PLW',
  Png = 'PNG',
  Pol = 'POL',
  Pri = 'PRI',
  Prk = 'PRK',
  Prt = 'PRT',
  Pry = 'PRY',
  Pse = 'PSE',
  Pyf = 'PYF',
  Qat = 'QAT',
  Reu = 'REU',
  Rou = 'ROU',
  Rus = 'RUS',
  Rwa = 'RWA',
  Sau = 'SAU',
  Sdn = 'SDN',
  Sen = 'SEN',
  Sgp = 'SGP',
  Sgs = 'SGS',
  Shn = 'SHN',
  Sjm = 'SJM',
  Slb = 'SLB',
  Sle = 'SLE',
  Slv = 'SLV',
  Smr = 'SMR',
  Som = 'SOM',
  Spm = 'SPM',
  Srb = 'SRB',
  Ssd = 'SSD',
  Stp = 'STP',
  Sur = 'SUR',
  Svk = 'SVK',
  Svn = 'SVN',
  Swe = 'SWE',
  Swz = 'SWZ',
  Syc = 'SYC',
  Syr = 'SYR',
  Tca = 'TCA',
  Tcd = 'TCD',
  Tgo = 'TGO',
  Tha = 'THA',
  Tjk = 'TJK',
  Tkl = 'TKL',
  Tkm = 'TKM',
  Tls = 'TLS',
  Ton = 'TON',
  Tto = 'TTO',
  Tun = 'TUN',
  Tur = 'TUR',
  Tuv = 'TUV',
  Twn = 'TWN',
  Tza = 'TZA',
  Uga = 'UGA',
  Ukr = 'UKR',
  Umi = 'UMI',
  Ury = 'URY',
  Usa = 'USA',
  Uzb = 'UZB',
  Vat = 'VAT',
  Vct = 'VCT',
  Ven = 'VEN',
  Vgb = 'VGB',
  Vir = 'VIR',
  Vnm = 'VNM',
  Vut = 'VUT',
  Wlf = 'WLF',
  Wsm = 'WSM',
  Yem = 'YEM',
  Zaf = 'ZAF',
  Zmb = 'ZMB',
  Zwe = 'ZWE'
}

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  arrows: Array<Arrow>;
  arrowsAggregate: ArrowAggregateSelection;
  arrowsConnection: ArrowsConnection;
  athletes: Array<Athlete>;
  athletesAggregate: AthleteAggregateSelection;
  athletesConnection: AthletesConnection;
  events: Array<Event>;
  eventsAggregate: EventAggregateSelection;
  eventsConnection: EventsConnection;
  matches: Array<Match>;
  matchesAggregate: MatchAggregateSelection;
  matchesConnection: MatchesConnection;
  results: Array<Result>;
  resultsAggregate: ResultAggregateSelection;
  resultsConnection: ResultsConnection;
  sets: Array<Set>;
  setsAggregate: SetAggregateSelection;
  setsConnection: SetsConnection;
  targets: Array<Target>;
  targetsAggregate: TargetAggregateSelection;
  targetsConnection: TargetsConnection;
};


export type QueryArrowsArgs = {
  options?: InputMaybe<ArrowOptions>;
  where?: InputMaybe<ArrowWhere>;
};


export type QueryArrowsAggregateArgs = {
  where?: InputMaybe<ArrowWhere>;
};


export type QueryArrowsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ArrowSort>>>;
  where?: InputMaybe<ArrowWhere>;
};


export type QueryAthletesArgs = {
  options?: InputMaybe<AthleteOptions>;
  where?: InputMaybe<AthleteWhere>;
};


export type QueryAthletesAggregateArgs = {
  where?: InputMaybe<AthleteWhere>;
};


export type QueryAthletesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<AthleteSort>>>;
  where?: InputMaybe<AthleteWhere>;
};


export type QueryEventsArgs = {
  options?: InputMaybe<EventOptions>;
  where?: InputMaybe<EventWhere>;
};


export type QueryEventsAggregateArgs = {
  where?: InputMaybe<EventWhere>;
};


export type QueryEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<EventSort>>>;
  where?: InputMaybe<EventWhere>;
};


export type QueryMatchesArgs = {
  options?: InputMaybe<MatchOptions>;
  where?: InputMaybe<MatchWhere>;
};


export type QueryMatchesAggregateArgs = {
  where?: InputMaybe<MatchWhere>;
};


export type QueryMatchesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<MatchSort>>>;
  where?: InputMaybe<MatchWhere>;
};


export type QueryResultsArgs = {
  options?: InputMaybe<ResultOptions>;
  where?: InputMaybe<ResultWhere>;
};


export type QueryResultsAggregateArgs = {
  where?: InputMaybe<ResultWhere>;
};


export type QueryResultsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ResultSort>>>;
  where?: InputMaybe<ResultWhere>;
};


export type QuerySetsArgs = {
  options?: InputMaybe<SetOptions>;
  where?: InputMaybe<SetWhere>;
};


export type QuerySetsAggregateArgs = {
  where?: InputMaybe<SetWhere>;
};


export type QuerySetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SetSort>>>;
  where?: InputMaybe<SetWhere>;
};


export type QueryTargetsArgs = {
  options?: InputMaybe<TargetOptions>;
  where?: InputMaybe<TargetWhere>;
};


export type QueryTargetsAggregateArgs = {
  where?: InputMaybe<TargetWhere>;
};


export type QueryTargetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<TargetSort>>>;
  where?: InputMaybe<TargetWhere>;
};

export type Result = {
  __typename?: 'Result';
  athlete: Athlete;
  athleteAggregate?: Maybe<ResultAthleteAthleteAggregationSelection>;
  athleteConnection: ResultAthleteConnection;
  deltaR?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  result: Result;
  sets: Array<Set>;
  setsAggregate?: Maybe<ResultSetSetsAggregationSelection>;
  setsConnection: ResultSetsConnection;
};


export type ResultAthleteArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<AthleteOptions>;
  where?: InputMaybe<AthleteWhere>;
};


export type ResultAthleteAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AthleteWhere>;
};


export type ResultAthleteConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ResultAthleteConnectionSort>>;
  where?: InputMaybe<ResultAthleteConnectionWhere>;
};


export type ResultSetsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<SetOptions>;
  where?: InputMaybe<SetWhere>;
};


export type ResultSetsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SetWhere>;
};


export type ResultSetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ResultSetsConnectionSort>>;
  where?: InputMaybe<ResultSetsConnectionWhere>;
};

export type ResultAggregateSelection = {
  __typename?: 'ResultAggregateSelection';
  count: Scalars['Int']['output'];
  deltaR: IntAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
};

export type ResultAthleteAggregateInput = {
  AND?: InputMaybe<Array<ResultAthleteAggregateInput>>;
  NOT?: InputMaybe<ResultAthleteAggregateInput>;
  OR?: InputMaybe<Array<ResultAthleteAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ResultAthleteNodeAggregationWhereInput>;
};

export type ResultAthleteAthleteAggregationSelection = {
  __typename?: 'ResultAthleteAthleteAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ResultAthleteAthleteNodeAggregateSelection>;
};

export type ResultAthleteAthleteNodeAggregateSelection = {
  __typename?: 'ResultAthleteAthleteNodeAggregateSelection';
  elimRating: IntAggregateSelectionNonNullable;
  familyName: StringAggregateSelectionNonNullable;
  givenName: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  qualRating: IntAggregateSelectionNonNullable;
};

export type ResultAthleteConnectFieldInput = {
  connect?: InputMaybe<AthleteConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<AthleteConnectWhere>;
};

export type ResultAthleteConnectOrCreateFieldInput = {
  onCreate: ResultAthleteConnectOrCreateFieldInputOnCreate;
  where: AthleteConnectOrCreateWhere;
};

export type ResultAthleteConnectOrCreateFieldInputOnCreate = {
  node: AthleteOnCreateInput;
};

export type ResultAthleteConnection = {
  __typename?: 'ResultAthleteConnection';
  edges: Array<ResultAthleteRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ResultAthleteConnectionSort = {
  node?: InputMaybe<AthleteSort>;
};

export type ResultAthleteConnectionWhere = {
  AND?: InputMaybe<Array<ResultAthleteConnectionWhere>>;
  NOT?: InputMaybe<ResultAthleteConnectionWhere>;
  OR?: InputMaybe<Array<ResultAthleteConnectionWhere>>;
  node?: InputMaybe<AthleteWhere>;
};

export type ResultAthleteCreateFieldInput = {
  node: AthleteCreateInput;
};

export type ResultAthleteDeleteFieldInput = {
  delete?: InputMaybe<AthleteDeleteInput>;
  where?: InputMaybe<ResultAthleteConnectionWhere>;
};

export type ResultAthleteDisconnectFieldInput = {
  disconnect?: InputMaybe<AthleteDisconnectInput>;
  where?: InputMaybe<ResultAthleteConnectionWhere>;
};

export type ResultAthleteFieldInput = {
  connect?: InputMaybe<ResultAthleteConnectFieldInput>;
  connectOrCreate?: InputMaybe<ResultAthleteConnectOrCreateFieldInput>;
  create?: InputMaybe<ResultAthleteCreateFieldInput>;
};

export type ResultAthleteNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ResultAthleteNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ResultAthleteNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ResultAthleteNodeAggregationWhereInput>>;
  elimRating_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  elimRating_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  elimRating_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  elimRating_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  elimRating_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  elimRating_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  elimRating_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  elimRating_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  elimRating_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  elimRating_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  elimRating_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  elimRating_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  elimRating_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  elimRating_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  elimRating_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  elimRating_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  elimRating_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  elimRating_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  elimRating_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  elimRating_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  familyName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  familyName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  familyName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  familyName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  familyName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  familyName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  familyName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  familyName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  familyName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  familyName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  givenName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  givenName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  givenName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  givenName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  givenName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  givenName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  givenName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  givenName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  givenName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  givenName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  qualRating_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  qualRating_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  qualRating_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  qualRating_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  qualRating_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  qualRating_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  qualRating_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  qualRating_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  qualRating_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  qualRating_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  qualRating_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  qualRating_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  qualRating_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  qualRating_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  qualRating_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  qualRating_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  qualRating_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  qualRating_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  qualRating_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  qualRating_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ResultAthleteRelationship = {
  __typename?: 'ResultAthleteRelationship';
  cursor: Scalars['String']['output'];
  node: Athlete;
};

export type ResultAthleteUpdateConnectionInput = {
  node?: InputMaybe<AthleteUpdateInput>;
};

export type ResultAthleteUpdateFieldInput = {
  connect?: InputMaybe<ResultAthleteConnectFieldInput>;
  connectOrCreate?: InputMaybe<ResultAthleteConnectOrCreateFieldInput>;
  create?: InputMaybe<ResultAthleteCreateFieldInput>;
  delete?: InputMaybe<ResultAthleteDeleteFieldInput>;
  disconnect?: InputMaybe<ResultAthleteDisconnectFieldInput>;
  update?: InputMaybe<ResultAthleteUpdateConnectionInput>;
  where?: InputMaybe<ResultAthleteConnectionWhere>;
};

export type ResultConnectInput = {
  athlete?: InputMaybe<ResultAthleteConnectFieldInput>;
  sets?: InputMaybe<Array<ResultSetsConnectFieldInput>>;
};

export type ResultConnectOrCreateInput = {
  athlete?: InputMaybe<ResultAthleteConnectOrCreateFieldInput>;
  sets?: InputMaybe<Array<ResultSetsConnectOrCreateFieldInput>>;
};

export type ResultConnectOrCreateWhere = {
  node: ResultUniqueWhere;
};

export type ResultConnectWhere = {
  node: ResultWhere;
};

export type ResultCreateInput = {
  athlete?: InputMaybe<ResultAthleteFieldInput>;
  deltaR?: InputMaybe<Scalars['Int']['input']>;
  sets?: InputMaybe<ResultSetsFieldInput>;
};

export type ResultDeleteInput = {
  athlete?: InputMaybe<ResultAthleteDeleteFieldInput>;
  sets?: InputMaybe<Array<ResultSetsDeleteFieldInput>>;
};

export type ResultDisconnectInput = {
  athlete?: InputMaybe<ResultAthleteDisconnectFieldInput>;
  sets?: InputMaybe<Array<ResultSetsDisconnectFieldInput>>;
};

export type ResultEdge = {
  __typename?: 'ResultEdge';
  cursor: Scalars['String']['output'];
  node: Result;
};

export type ResultOnCreateInput = {
  deltaR?: InputMaybe<Scalars['Int']['input']>;
};

export type ResultOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more ResultSort objects to sort Results by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ResultSort>>;
};

export type ResultRelationInput = {
  athlete?: InputMaybe<ResultAthleteCreateFieldInput>;
  sets?: InputMaybe<Array<ResultSetsCreateFieldInput>>;
};

export type ResultSetSetsAggregationSelection = {
  __typename?: 'ResultSetSetsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ResultSetSetsNodeAggregateSelection>;
};

export type ResultSetSetsNodeAggregateSelection = {
  __typename?: 'ResultSetSetsNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
};

export type ResultSetsAggregateInput = {
  AND?: InputMaybe<Array<ResultSetsAggregateInput>>;
  NOT?: InputMaybe<ResultSetsAggregateInput>;
  OR?: InputMaybe<Array<ResultSetsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ResultSetsNodeAggregationWhereInput>;
};

export type ResultSetsConnectFieldInput = {
  connect?: InputMaybe<Array<SetConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<SetConnectWhere>;
};

export type ResultSetsConnectOrCreateFieldInput = {
  onCreate: ResultSetsConnectOrCreateFieldInputOnCreate;
  where: SetConnectOrCreateWhere;
};

export type ResultSetsConnectOrCreateFieldInputOnCreate = {
  node: SetOnCreateInput;
};

export type ResultSetsConnection = {
  __typename?: 'ResultSetsConnection';
  edges: Array<ResultSetsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ResultSetsConnectionSort = {
  node?: InputMaybe<SetSort>;
};

export type ResultSetsConnectionWhere = {
  AND?: InputMaybe<Array<ResultSetsConnectionWhere>>;
  NOT?: InputMaybe<ResultSetsConnectionWhere>;
  OR?: InputMaybe<Array<ResultSetsConnectionWhere>>;
  node?: InputMaybe<SetWhere>;
};

export type ResultSetsCreateFieldInput = {
  node: SetCreateInput;
};

export type ResultSetsDeleteFieldInput = {
  delete?: InputMaybe<SetDeleteInput>;
  where?: InputMaybe<ResultSetsConnectionWhere>;
};

export type ResultSetsDisconnectFieldInput = {
  disconnect?: InputMaybe<SetDisconnectInput>;
  where?: InputMaybe<ResultSetsConnectionWhere>;
};

export type ResultSetsFieldInput = {
  connect?: InputMaybe<Array<ResultSetsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ResultSetsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ResultSetsCreateFieldInput>>;
};

export type ResultSetsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ResultSetsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ResultSetsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ResultSetsNodeAggregationWhereInput>>;
};

export type ResultSetsRelationship = {
  __typename?: 'ResultSetsRelationship';
  cursor: Scalars['String']['output'];
  node: Set;
};

export type ResultSetsUpdateConnectionInput = {
  node?: InputMaybe<SetUpdateInput>;
};

export type ResultSetsUpdateFieldInput = {
  connect?: InputMaybe<Array<ResultSetsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ResultSetsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ResultSetsCreateFieldInput>>;
  delete?: InputMaybe<Array<ResultSetsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ResultSetsDisconnectFieldInput>>;
  update?: InputMaybe<ResultSetsUpdateConnectionInput>;
  where?: InputMaybe<ResultSetsConnectionWhere>;
};

/** Fields to sort Results by. The order in which sorts are applied is not guaranteed when specifying many fields in one ResultSort object. */
export type ResultSort = {
  deltaR?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
};

export type ResultUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ResultUpdateInput = {
  athlete?: InputMaybe<ResultAthleteUpdateFieldInput>;
  deltaR?: InputMaybe<Scalars['Int']['input']>;
  deltaR_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  deltaR_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
  sets?: InputMaybe<Array<ResultSetsUpdateFieldInput>>;
};

export type ResultWhere = {
  AND?: InputMaybe<Array<ResultWhere>>;
  NOT?: InputMaybe<ResultWhere>;
  OR?: InputMaybe<Array<ResultWhere>>;
  athlete?: InputMaybe<AthleteWhere>;
  athleteAggregate?: InputMaybe<ResultAthleteAggregateInput>;
  athleteConnection?: InputMaybe<ResultAthleteConnectionWhere>;
  athleteConnection_NOT?: InputMaybe<ResultAthleteConnectionWhere>;
  athlete_NOT?: InputMaybe<AthleteWhere>;
  deltaR?: InputMaybe<Scalars['Int']['input']>;
  deltaR_GT?: InputMaybe<Scalars['Int']['input']>;
  deltaR_GTE?: InputMaybe<Scalars['Int']['input']>;
  deltaR_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  deltaR_LT?: InputMaybe<Scalars['Int']['input']>;
  deltaR_LTE?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  setsAggregate?: InputMaybe<ResultSetsAggregateInput>;
  /** Return Results where all of the related ResultSetsConnections match this filter */
  setsConnection_ALL?: InputMaybe<ResultSetsConnectionWhere>;
  /** Return Results where none of the related ResultSetsConnections match this filter */
  setsConnection_NONE?: InputMaybe<ResultSetsConnectionWhere>;
  /** Return Results where one of the related ResultSetsConnections match this filter */
  setsConnection_SINGLE?: InputMaybe<ResultSetsConnectionWhere>;
  /** Return Results where some of the related ResultSetsConnections match this filter */
  setsConnection_SOME?: InputMaybe<ResultSetsConnectionWhere>;
  /** Return Results where all of the related Sets match this filter */
  sets_ALL?: InputMaybe<SetWhere>;
  /** Return Results where none of the related Sets match this filter */
  sets_NONE?: InputMaybe<SetWhere>;
  /** Return Results where one of the related Sets match this filter */
  sets_SINGLE?: InputMaybe<SetWhere>;
  /** Return Results where some of the related Sets match this filter */
  sets_SOME?: InputMaybe<SetWhere>;
};

export type ResultsConnection = {
  __typename?: 'ResultsConnection';
  edges: Array<ResultEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Set = {
  __typename?: 'Set';
  arrows: Array<Arrow>;
  arrowsAggregate?: Maybe<SetArrowArrowsAggregationSelection>;
  arrowsConnection: SetArrowsConnection;
  arrowsInOrder: Scalars['Boolean']['output'];
  athlete: Athlete;
  athleteAggregate?: Maybe<SetAthleteAthleteAggregationSelection>;
  athleteConnection: SetAthleteConnection;
  complete: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  match?: Maybe<Match>;
  matchAggregate?: Maybe<SetMatchMatchAggregationSelection>;
  matchConnection: SetMatchConnection;
  sets: Array<Set>;
  setsAggregate?: Maybe<SetSetSetsAggregationSelection>;
  setsConnection: SetSetsConnection;
  target: Target;
  targetAggregate?: Maybe<SetTargetTargetAggregationSelection>;
  targetConnection: SetTargetConnection;
};


export type SetArrowsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ArrowOptions>;
  where?: InputMaybe<ArrowWhere>;
};


export type SetArrowsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ArrowWhere>;
};


export type SetArrowsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SetArrowsConnectionSort>>;
  where?: InputMaybe<SetArrowsConnectionWhere>;
};


export type SetAthleteArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<AthleteOptions>;
  where?: InputMaybe<AthleteWhere>;
};


export type SetAthleteAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AthleteWhere>;
};


export type SetAthleteConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SetAthleteConnectionSort>>;
  where?: InputMaybe<SetAthleteConnectionWhere>;
};


export type SetMatchArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<MatchOptions>;
  where?: InputMaybe<MatchWhere>;
};


export type SetMatchAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<MatchWhere>;
};


export type SetMatchConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SetMatchConnectionSort>>;
  where?: InputMaybe<SetMatchConnectionWhere>;
};


export type SetSetsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<SetOptions>;
  where?: InputMaybe<SetWhere>;
};


export type SetSetsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SetWhere>;
};


export type SetSetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SetSetsConnectionSort>>;
  where?: InputMaybe<SetSetsConnectionWhere>;
};


export type SetTargetArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<TargetOptions>;
  where?: InputMaybe<TargetWhere>;
};


export type SetTargetAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TargetWhere>;
};


export type SetTargetConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SetTargetConnectionSort>>;
  where?: InputMaybe<SetTargetConnectionWhere>;
};

export type SetAggregateSelection = {
  __typename?: 'SetAggregateSelection';
  count: Scalars['Int']['output'];
  id: IdAggregateSelectionNonNullable;
};

export type SetArrowArrowsAggregationSelection = {
  __typename?: 'SetArrowArrowsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<SetArrowArrowsNodeAggregateSelection>;
};

export type SetArrowArrowsNodeAggregateSelection = {
  __typename?: 'SetArrowArrowsNodeAggregateSelection';
  angle: IntAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  offset: IntAggregateSelectionNonNullable;
  timestamp: IntAggregateSelectionNonNullable;
};

export type SetArrowsAggregateInput = {
  AND?: InputMaybe<Array<SetArrowsAggregateInput>>;
  NOT?: InputMaybe<SetArrowsAggregateInput>;
  OR?: InputMaybe<Array<SetArrowsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<SetArrowsNodeAggregationWhereInput>;
};

export type SetArrowsConnectFieldInput = {
  connect?: InputMaybe<Array<ArrowConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ArrowConnectWhere>;
};

export type SetArrowsConnectOrCreateFieldInput = {
  onCreate: SetArrowsConnectOrCreateFieldInputOnCreate;
  where: ArrowConnectOrCreateWhere;
};

export type SetArrowsConnectOrCreateFieldInputOnCreate = {
  node: ArrowOnCreateInput;
};

export type SetArrowsConnection = {
  __typename?: 'SetArrowsConnection';
  edges: Array<SetArrowsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type SetArrowsConnectionSort = {
  node?: InputMaybe<ArrowSort>;
};

export type SetArrowsConnectionWhere = {
  AND?: InputMaybe<Array<SetArrowsConnectionWhere>>;
  NOT?: InputMaybe<SetArrowsConnectionWhere>;
  OR?: InputMaybe<Array<SetArrowsConnectionWhere>>;
  node?: InputMaybe<ArrowWhere>;
};

export type SetArrowsCreateFieldInput = {
  node: ArrowCreateInput;
};

export type SetArrowsDeleteFieldInput = {
  delete?: InputMaybe<ArrowDeleteInput>;
  where?: InputMaybe<SetArrowsConnectionWhere>;
};

export type SetArrowsDisconnectFieldInput = {
  disconnect?: InputMaybe<ArrowDisconnectInput>;
  where?: InputMaybe<SetArrowsConnectionWhere>;
};

export type SetArrowsFieldInput = {
  connect?: InputMaybe<Array<SetArrowsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<SetArrowsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<SetArrowsCreateFieldInput>>;
};

export type SetArrowsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SetArrowsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SetArrowsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<SetArrowsNodeAggregationWhereInput>>;
  angle_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  angle_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  angle_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  angle_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  angle_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  angle_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  angle_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  angle_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  angle_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  angle_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  angle_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  angle_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  angle_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  angle_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  angle_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  angle_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  angle_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  angle_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  angle_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  angle_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  offset_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  offset_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  offset_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  offset_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  offset_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  offset_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  offset_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  offset_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  offset_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  offset_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  offset_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  offset_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  offset_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  offset_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  offset_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  offset_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  offset_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  offset_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  offset_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  offset_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  timestamp_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  timestamp_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  timestamp_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  timestamp_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  timestamp_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  timestamp_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  timestamp_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  timestamp_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  timestamp_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  timestamp_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  timestamp_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  timestamp_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  timestamp_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  timestamp_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  timestamp_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  timestamp_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  timestamp_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  timestamp_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  timestamp_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  timestamp_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type SetArrowsRelationship = {
  __typename?: 'SetArrowsRelationship';
  cursor: Scalars['String']['output'];
  node: Arrow;
};

export type SetArrowsUpdateConnectionInput = {
  node?: InputMaybe<ArrowUpdateInput>;
};

export type SetArrowsUpdateFieldInput = {
  connect?: InputMaybe<Array<SetArrowsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<SetArrowsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<SetArrowsCreateFieldInput>>;
  delete?: InputMaybe<Array<SetArrowsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<SetArrowsDisconnectFieldInput>>;
  update?: InputMaybe<SetArrowsUpdateConnectionInput>;
  where?: InputMaybe<SetArrowsConnectionWhere>;
};

export type SetAthleteAggregateInput = {
  AND?: InputMaybe<Array<SetAthleteAggregateInput>>;
  NOT?: InputMaybe<SetAthleteAggregateInput>;
  OR?: InputMaybe<Array<SetAthleteAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<SetAthleteNodeAggregationWhereInput>;
};

export type SetAthleteAthleteAggregationSelection = {
  __typename?: 'SetAthleteAthleteAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<SetAthleteAthleteNodeAggregateSelection>;
};

export type SetAthleteAthleteNodeAggregateSelection = {
  __typename?: 'SetAthleteAthleteNodeAggregateSelection';
  elimRating: IntAggregateSelectionNonNullable;
  familyName: StringAggregateSelectionNonNullable;
  givenName: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  qualRating: IntAggregateSelectionNonNullable;
};

export type SetAthleteConnectFieldInput = {
  connect?: InputMaybe<AthleteConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<AthleteConnectWhere>;
};

export type SetAthleteConnectOrCreateFieldInput = {
  onCreate: SetAthleteConnectOrCreateFieldInputOnCreate;
  where: AthleteConnectOrCreateWhere;
};

export type SetAthleteConnectOrCreateFieldInputOnCreate = {
  node: AthleteOnCreateInput;
};

export type SetAthleteConnection = {
  __typename?: 'SetAthleteConnection';
  edges: Array<SetAthleteRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type SetAthleteConnectionSort = {
  node?: InputMaybe<AthleteSort>;
};

export type SetAthleteConnectionWhere = {
  AND?: InputMaybe<Array<SetAthleteConnectionWhere>>;
  NOT?: InputMaybe<SetAthleteConnectionWhere>;
  OR?: InputMaybe<Array<SetAthleteConnectionWhere>>;
  node?: InputMaybe<AthleteWhere>;
};

export type SetAthleteCreateFieldInput = {
  node: AthleteCreateInput;
};

export type SetAthleteDeleteFieldInput = {
  delete?: InputMaybe<AthleteDeleteInput>;
  where?: InputMaybe<SetAthleteConnectionWhere>;
};

export type SetAthleteDisconnectFieldInput = {
  disconnect?: InputMaybe<AthleteDisconnectInput>;
  where?: InputMaybe<SetAthleteConnectionWhere>;
};

export type SetAthleteFieldInput = {
  connect?: InputMaybe<SetAthleteConnectFieldInput>;
  connectOrCreate?: InputMaybe<SetAthleteConnectOrCreateFieldInput>;
  create?: InputMaybe<SetAthleteCreateFieldInput>;
};

export type SetAthleteNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SetAthleteNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SetAthleteNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<SetAthleteNodeAggregationWhereInput>>;
  elimRating_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  elimRating_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  elimRating_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  elimRating_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  elimRating_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  elimRating_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  elimRating_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  elimRating_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  elimRating_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  elimRating_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  elimRating_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  elimRating_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  elimRating_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  elimRating_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  elimRating_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  elimRating_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  elimRating_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  elimRating_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  elimRating_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  elimRating_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  familyName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  familyName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  familyName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  familyName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  familyName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  familyName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  familyName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  familyName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  familyName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  familyName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  familyName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  givenName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  givenName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  givenName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  givenName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  givenName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  givenName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  givenName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  givenName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  givenName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  givenName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  givenName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  qualRating_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  qualRating_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  qualRating_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  qualRating_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  qualRating_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  qualRating_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  qualRating_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  qualRating_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  qualRating_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  qualRating_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  qualRating_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  qualRating_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  qualRating_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  qualRating_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  qualRating_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  qualRating_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  qualRating_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  qualRating_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  qualRating_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  qualRating_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type SetAthleteRelationship = {
  __typename?: 'SetAthleteRelationship';
  cursor: Scalars['String']['output'];
  node: Athlete;
};

export type SetAthleteUpdateConnectionInput = {
  node?: InputMaybe<AthleteUpdateInput>;
};

export type SetAthleteUpdateFieldInput = {
  connect?: InputMaybe<SetAthleteConnectFieldInput>;
  connectOrCreate?: InputMaybe<SetAthleteConnectOrCreateFieldInput>;
  create?: InputMaybe<SetAthleteCreateFieldInput>;
  delete?: InputMaybe<SetAthleteDeleteFieldInput>;
  disconnect?: InputMaybe<SetAthleteDisconnectFieldInput>;
  update?: InputMaybe<SetAthleteUpdateConnectionInput>;
  where?: InputMaybe<SetAthleteConnectionWhere>;
};

export type SetConnectInput = {
  arrows?: InputMaybe<Array<SetArrowsConnectFieldInput>>;
  athlete?: InputMaybe<SetAthleteConnectFieldInput>;
  match?: InputMaybe<SetMatchConnectFieldInput>;
  sets?: InputMaybe<Array<SetSetsConnectFieldInput>>;
  target?: InputMaybe<SetTargetConnectFieldInput>;
};

export type SetConnectOrCreateInput = {
  arrows?: InputMaybe<Array<SetArrowsConnectOrCreateFieldInput>>;
  athlete?: InputMaybe<SetAthleteConnectOrCreateFieldInput>;
  match?: InputMaybe<SetMatchConnectOrCreateFieldInput>;
  sets?: InputMaybe<Array<SetSetsConnectOrCreateFieldInput>>;
  target?: InputMaybe<SetTargetConnectOrCreateFieldInput>;
};

export type SetConnectOrCreateWhere = {
  node: SetUniqueWhere;
};

export type SetConnectWhere = {
  node: SetWhere;
};

export type SetCreateInput = {
  arrows?: InputMaybe<SetArrowsFieldInput>;
  arrowsInOrder: Scalars['Boolean']['input'];
  athlete?: InputMaybe<SetAthleteFieldInput>;
  complete: Scalars['Boolean']['input'];
  match?: InputMaybe<SetMatchFieldInput>;
  sets?: InputMaybe<SetSetsFieldInput>;
  target?: InputMaybe<SetTargetFieldInput>;
};

export type SetDeleteInput = {
  arrows?: InputMaybe<Array<SetArrowsDeleteFieldInput>>;
  athlete?: InputMaybe<SetAthleteDeleteFieldInput>;
  match?: InputMaybe<SetMatchDeleteFieldInput>;
  sets?: InputMaybe<Array<SetSetsDeleteFieldInput>>;
  target?: InputMaybe<SetTargetDeleteFieldInput>;
};

export type SetDisconnectInput = {
  arrows?: InputMaybe<Array<SetArrowsDisconnectFieldInput>>;
  athlete?: InputMaybe<SetAthleteDisconnectFieldInput>;
  match?: InputMaybe<SetMatchDisconnectFieldInput>;
  sets?: InputMaybe<Array<SetSetsDisconnectFieldInput>>;
  target?: InputMaybe<SetTargetDisconnectFieldInput>;
};

export type SetEdge = {
  __typename?: 'SetEdge';
  cursor: Scalars['String']['output'];
  node: Set;
};

export type SetMatchAggregateInput = {
  AND?: InputMaybe<Array<SetMatchAggregateInput>>;
  NOT?: InputMaybe<SetMatchAggregateInput>;
  OR?: InputMaybe<Array<SetMatchAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<SetMatchNodeAggregationWhereInput>;
};

export type SetMatchConnectFieldInput = {
  connect?: InputMaybe<MatchConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<MatchConnectWhere>;
};

export type SetMatchConnectOrCreateFieldInput = {
  onCreate: SetMatchConnectOrCreateFieldInputOnCreate;
  where: MatchConnectOrCreateWhere;
};

export type SetMatchConnectOrCreateFieldInputOnCreate = {
  node: MatchOnCreateInput;
};

export type SetMatchConnection = {
  __typename?: 'SetMatchConnection';
  edges: Array<SetMatchRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type SetMatchConnectionSort = {
  node?: InputMaybe<MatchSort>;
};

export type SetMatchConnectionWhere = {
  AND?: InputMaybe<Array<SetMatchConnectionWhere>>;
  NOT?: InputMaybe<SetMatchConnectionWhere>;
  OR?: InputMaybe<Array<SetMatchConnectionWhere>>;
  node?: InputMaybe<MatchWhere>;
};

export type SetMatchCreateFieldInput = {
  node: MatchCreateInput;
};

export type SetMatchDeleteFieldInput = {
  delete?: InputMaybe<MatchDeleteInput>;
  where?: InputMaybe<SetMatchConnectionWhere>;
};

export type SetMatchDisconnectFieldInput = {
  disconnect?: InputMaybe<MatchDisconnectInput>;
  where?: InputMaybe<SetMatchConnectionWhere>;
};

export type SetMatchFieldInput = {
  connect?: InputMaybe<SetMatchConnectFieldInput>;
  connectOrCreate?: InputMaybe<SetMatchConnectOrCreateFieldInput>;
  create?: InputMaybe<SetMatchCreateFieldInput>;
};

export type SetMatchMatchAggregationSelection = {
  __typename?: 'SetMatchMatchAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<SetMatchMatchNodeAggregateSelection>;
};

export type SetMatchMatchNodeAggregateSelection = {
  __typename?: 'SetMatchMatchNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
};

export type SetMatchNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SetMatchNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SetMatchNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<SetMatchNodeAggregationWhereInput>>;
};

export type SetMatchRelationship = {
  __typename?: 'SetMatchRelationship';
  cursor: Scalars['String']['output'];
  node: Match;
};

export type SetMatchUpdateConnectionInput = {
  node?: InputMaybe<MatchUpdateInput>;
};

export type SetMatchUpdateFieldInput = {
  connect?: InputMaybe<SetMatchConnectFieldInput>;
  connectOrCreate?: InputMaybe<SetMatchConnectOrCreateFieldInput>;
  create?: InputMaybe<SetMatchCreateFieldInput>;
  delete?: InputMaybe<SetMatchDeleteFieldInput>;
  disconnect?: InputMaybe<SetMatchDisconnectFieldInput>;
  update?: InputMaybe<SetMatchUpdateConnectionInput>;
  where?: InputMaybe<SetMatchConnectionWhere>;
};

export type SetOnCreateInput = {
  arrowsInOrder: Scalars['Boolean']['input'];
  complete: Scalars['Boolean']['input'];
};

export type SetOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more SetSort objects to sort Sets by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<SetSort>>;
};

export type SetRelationInput = {
  arrows?: InputMaybe<Array<SetArrowsCreateFieldInput>>;
  athlete?: InputMaybe<SetAthleteCreateFieldInput>;
  match?: InputMaybe<SetMatchCreateFieldInput>;
  sets?: InputMaybe<Array<SetSetsCreateFieldInput>>;
  target?: InputMaybe<SetTargetCreateFieldInput>;
};

export type SetSetSetsAggregationSelection = {
  __typename?: 'SetSetSetsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<SetSetSetsNodeAggregateSelection>;
};

export type SetSetSetsNodeAggregateSelection = {
  __typename?: 'SetSetSetsNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
};

export type SetSetsAggregateInput = {
  AND?: InputMaybe<Array<SetSetsAggregateInput>>;
  NOT?: InputMaybe<SetSetsAggregateInput>;
  OR?: InputMaybe<Array<SetSetsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<SetSetsNodeAggregationWhereInput>;
};

export type SetSetsConnectFieldInput = {
  connect?: InputMaybe<Array<SetConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<SetConnectWhere>;
};

export type SetSetsConnectOrCreateFieldInput = {
  onCreate: SetSetsConnectOrCreateFieldInputOnCreate;
  where: SetConnectOrCreateWhere;
};

export type SetSetsConnectOrCreateFieldInputOnCreate = {
  node: SetOnCreateInput;
};

export type SetSetsConnection = {
  __typename?: 'SetSetsConnection';
  edges: Array<SetSetsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type SetSetsConnectionSort = {
  node?: InputMaybe<SetSort>;
};

export type SetSetsConnectionWhere = {
  AND?: InputMaybe<Array<SetSetsConnectionWhere>>;
  NOT?: InputMaybe<SetSetsConnectionWhere>;
  OR?: InputMaybe<Array<SetSetsConnectionWhere>>;
  node?: InputMaybe<SetWhere>;
};

export type SetSetsCreateFieldInput = {
  node: SetCreateInput;
};

export type SetSetsDeleteFieldInput = {
  delete?: InputMaybe<SetDeleteInput>;
  where?: InputMaybe<SetSetsConnectionWhere>;
};

export type SetSetsDisconnectFieldInput = {
  disconnect?: InputMaybe<SetDisconnectInput>;
  where?: InputMaybe<SetSetsConnectionWhere>;
};

export type SetSetsFieldInput = {
  connect?: InputMaybe<Array<SetSetsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<SetSetsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<SetSetsCreateFieldInput>>;
};

export type SetSetsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SetSetsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SetSetsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<SetSetsNodeAggregationWhereInput>>;
};

export type SetSetsRelationship = {
  __typename?: 'SetSetsRelationship';
  cursor: Scalars['String']['output'];
  node: Set;
};

export type SetSetsUpdateConnectionInput = {
  node?: InputMaybe<SetUpdateInput>;
};

export type SetSetsUpdateFieldInput = {
  connect?: InputMaybe<Array<SetSetsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<SetSetsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<SetSetsCreateFieldInput>>;
  delete?: InputMaybe<Array<SetSetsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<SetSetsDisconnectFieldInput>>;
  update?: InputMaybe<SetSetsUpdateConnectionInput>;
  where?: InputMaybe<SetSetsConnectionWhere>;
};

/** Fields to sort Sets by. The order in which sorts are applied is not guaranteed when specifying many fields in one SetSort object. */
export type SetSort = {
  arrowsInOrder?: InputMaybe<SortDirection>;
  complete?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
};

export type SetTargetAggregateInput = {
  AND?: InputMaybe<Array<SetTargetAggregateInput>>;
  NOT?: InputMaybe<SetTargetAggregateInput>;
  OR?: InputMaybe<Array<SetTargetAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<SetTargetNodeAggregationWhereInput>;
};

export type SetTargetConnectFieldInput = {
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<TargetConnectWhere>;
};

export type SetTargetConnectOrCreateFieldInput = {
  onCreate: SetTargetConnectOrCreateFieldInputOnCreate;
  where: TargetConnectOrCreateWhere;
};

export type SetTargetConnectOrCreateFieldInputOnCreate = {
  node: TargetOnCreateInput;
};

export type SetTargetConnection = {
  __typename?: 'SetTargetConnection';
  edges: Array<SetTargetRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type SetTargetConnectionSort = {
  node?: InputMaybe<TargetSort>;
};

export type SetTargetConnectionWhere = {
  AND?: InputMaybe<Array<SetTargetConnectionWhere>>;
  NOT?: InputMaybe<SetTargetConnectionWhere>;
  OR?: InputMaybe<Array<SetTargetConnectionWhere>>;
  node?: InputMaybe<TargetWhere>;
};

export type SetTargetCreateFieldInput = {
  node: TargetCreateInput;
};

export type SetTargetDeleteFieldInput = {
  where?: InputMaybe<SetTargetConnectionWhere>;
};

export type SetTargetDisconnectFieldInput = {
  where?: InputMaybe<SetTargetConnectionWhere>;
};

export type SetTargetFieldInput = {
  connect?: InputMaybe<SetTargetConnectFieldInput>;
  connectOrCreate?: InputMaybe<SetTargetConnectOrCreateFieldInput>;
  create?: InputMaybe<SetTargetCreateFieldInput>;
};

export type SetTargetNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SetTargetNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SetTargetNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<SetTargetNodeAggregationWhereInput>>;
  max_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  max_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  max_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  max_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  max_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  max_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  max_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  max_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  max_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  max_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  max_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  max_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  max_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  max_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  max_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  max_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  max_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  max_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  max_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  max_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  min_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  min_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  min_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  min_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  min_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  min_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  min_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  min_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  min_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  min_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  min_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  min_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  min_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  min_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  min_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  min_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  min_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  min_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  min_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  min_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  radius_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  radius_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  radius_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  radius_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  radius_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  radius_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  radius_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  radius_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  radius_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  radius_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  radius_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  radius_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  radius_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  radius_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  radius_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  radius_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  radius_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  radius_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  radius_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  radius_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  rings_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  rings_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  rings_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  rings_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  rings_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  rings_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  rings_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  rings_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  rings_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  rings_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  rings_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  rings_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  rings_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  rings_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  rings_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  rings_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  rings_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  rings_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  rings_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  rings_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type SetTargetRelationship = {
  __typename?: 'SetTargetRelationship';
  cursor: Scalars['String']['output'];
  node: Target;
};

export type SetTargetTargetAggregationSelection = {
  __typename?: 'SetTargetTargetAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<SetTargetTargetNodeAggregateSelection>;
};

export type SetTargetTargetNodeAggregateSelection = {
  __typename?: 'SetTargetTargetNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  max: IntAggregateSelectionNonNullable;
  min: IntAggregateSelectionNonNullable;
  radius: IntAggregateSelectionNonNullable;
  rings: IntAggregateSelectionNonNullable;
};

export type SetTargetUpdateConnectionInput = {
  node?: InputMaybe<TargetUpdateInput>;
};

export type SetTargetUpdateFieldInput = {
  connect?: InputMaybe<SetTargetConnectFieldInput>;
  connectOrCreate?: InputMaybe<SetTargetConnectOrCreateFieldInput>;
  create?: InputMaybe<SetTargetCreateFieldInput>;
  delete?: InputMaybe<SetTargetDeleteFieldInput>;
  disconnect?: InputMaybe<SetTargetDisconnectFieldInput>;
  update?: InputMaybe<SetTargetUpdateConnectionInput>;
  where?: InputMaybe<SetTargetConnectionWhere>;
};

export type SetUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type SetUpdateInput = {
  arrows?: InputMaybe<Array<SetArrowsUpdateFieldInput>>;
  arrowsInOrder?: InputMaybe<Scalars['Boolean']['input']>;
  athlete?: InputMaybe<SetAthleteUpdateFieldInput>;
  complete?: InputMaybe<Scalars['Boolean']['input']>;
  match?: InputMaybe<SetMatchUpdateFieldInput>;
  sets?: InputMaybe<Array<SetSetsUpdateFieldInput>>;
  target?: InputMaybe<SetTargetUpdateFieldInput>;
};

export type SetWhere = {
  AND?: InputMaybe<Array<SetWhere>>;
  NOT?: InputMaybe<SetWhere>;
  OR?: InputMaybe<Array<SetWhere>>;
  arrowsAggregate?: InputMaybe<SetArrowsAggregateInput>;
  /** Return Sets where all of the related SetArrowsConnections match this filter */
  arrowsConnection_ALL?: InputMaybe<SetArrowsConnectionWhere>;
  /** Return Sets where none of the related SetArrowsConnections match this filter */
  arrowsConnection_NONE?: InputMaybe<SetArrowsConnectionWhere>;
  /** Return Sets where one of the related SetArrowsConnections match this filter */
  arrowsConnection_SINGLE?: InputMaybe<SetArrowsConnectionWhere>;
  /** Return Sets where some of the related SetArrowsConnections match this filter */
  arrowsConnection_SOME?: InputMaybe<SetArrowsConnectionWhere>;
  arrowsInOrder?: InputMaybe<Scalars['Boolean']['input']>;
  /** Return Sets where all of the related Arrows match this filter */
  arrows_ALL?: InputMaybe<ArrowWhere>;
  /** Return Sets where none of the related Arrows match this filter */
  arrows_NONE?: InputMaybe<ArrowWhere>;
  /** Return Sets where one of the related Arrows match this filter */
  arrows_SINGLE?: InputMaybe<ArrowWhere>;
  /** Return Sets where some of the related Arrows match this filter */
  arrows_SOME?: InputMaybe<ArrowWhere>;
  athlete?: InputMaybe<AthleteWhere>;
  athleteAggregate?: InputMaybe<SetAthleteAggregateInput>;
  athleteConnection?: InputMaybe<SetAthleteConnectionWhere>;
  athleteConnection_NOT?: InputMaybe<SetAthleteConnectionWhere>;
  athlete_NOT?: InputMaybe<AthleteWhere>;
  complete?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  match?: InputMaybe<MatchWhere>;
  matchAggregate?: InputMaybe<SetMatchAggregateInput>;
  matchConnection?: InputMaybe<SetMatchConnectionWhere>;
  matchConnection_NOT?: InputMaybe<SetMatchConnectionWhere>;
  match_NOT?: InputMaybe<MatchWhere>;
  setsAggregate?: InputMaybe<SetSetsAggregateInput>;
  /** Return Sets where all of the related SetSetsConnections match this filter */
  setsConnection_ALL?: InputMaybe<SetSetsConnectionWhere>;
  /** Return Sets where none of the related SetSetsConnections match this filter */
  setsConnection_NONE?: InputMaybe<SetSetsConnectionWhere>;
  /** Return Sets where one of the related SetSetsConnections match this filter */
  setsConnection_SINGLE?: InputMaybe<SetSetsConnectionWhere>;
  /** Return Sets where some of the related SetSetsConnections match this filter */
  setsConnection_SOME?: InputMaybe<SetSetsConnectionWhere>;
  /** Return Sets where all of the related Sets match this filter */
  sets_ALL?: InputMaybe<SetWhere>;
  /** Return Sets where none of the related Sets match this filter */
  sets_NONE?: InputMaybe<SetWhere>;
  /** Return Sets where one of the related Sets match this filter */
  sets_SINGLE?: InputMaybe<SetWhere>;
  /** Return Sets where some of the related Sets match this filter */
  sets_SOME?: InputMaybe<SetWhere>;
  target?: InputMaybe<TargetWhere>;
  targetAggregate?: InputMaybe<SetTargetAggregateInput>;
  targetConnection?: InputMaybe<SetTargetConnectionWhere>;
  targetConnection_NOT?: InputMaybe<SetTargetConnectionWhere>;
  target_NOT?: InputMaybe<TargetWhere>;
};

export type SetsConnection = {
  __typename?: 'SetsConnection';
  edges: Array<SetEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = 'ASC',
  /** Sort by field values in descending order. */
  Desc = 'DESC'
}

export type StringAggregateSelectionNonNullable = {
  __typename?: 'StringAggregateSelectionNonNullable';
  longest: Scalars['String']['output'];
  shortest: Scalars['String']['output'];
};

export type Target = {
  __typename?: 'Target';
  id: Scalars['ID']['output'];
  max: Scalars['Int']['output'];
  min: Scalars['Int']['output'];
  radius: Scalars['Int']['output'];
  rings: Scalars['Int']['output'];
  xRing: Scalars['Boolean']['output'];
};

export type TargetAggregateSelection = {
  __typename?: 'TargetAggregateSelection';
  count: Scalars['Int']['output'];
  id: IdAggregateSelectionNonNullable;
  max: IntAggregateSelectionNonNullable;
  min: IntAggregateSelectionNonNullable;
  radius: IntAggregateSelectionNonNullable;
  rings: IntAggregateSelectionNonNullable;
};

export type TargetConnectOrCreateWhere = {
  node: TargetUniqueWhere;
};

export type TargetConnectWhere = {
  node: TargetWhere;
};

export type TargetCreateInput = {
  max: Scalars['Int']['input'];
  min: Scalars['Int']['input'];
  radius: Scalars['Int']['input'];
  rings: Scalars['Int']['input'];
  xRing: Scalars['Boolean']['input'];
};

export type TargetEdge = {
  __typename?: 'TargetEdge';
  cursor: Scalars['String']['output'];
  node: Target;
};

export type TargetOnCreateInput = {
  max: Scalars['Int']['input'];
  min: Scalars['Int']['input'];
  radius: Scalars['Int']['input'];
  rings: Scalars['Int']['input'];
  xRing: Scalars['Boolean']['input'];
};

export type TargetOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more TargetSort objects to sort Targets by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<TargetSort>>;
};

/** Fields to sort Targets by. The order in which sorts are applied is not guaranteed when specifying many fields in one TargetSort object. */
export type TargetSort = {
  id?: InputMaybe<SortDirection>;
  max?: InputMaybe<SortDirection>;
  min?: InputMaybe<SortDirection>;
  radius?: InputMaybe<SortDirection>;
  rings?: InputMaybe<SortDirection>;
  xRing?: InputMaybe<SortDirection>;
};

export type TargetUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type TargetUpdateInput = {
  max?: InputMaybe<Scalars['Int']['input']>;
  max_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  max_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
  min?: InputMaybe<Scalars['Int']['input']>;
  min_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  min_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
  radius?: InputMaybe<Scalars['Int']['input']>;
  radius_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  radius_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
  rings?: InputMaybe<Scalars['Int']['input']>;
  rings_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  rings_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
  xRing?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TargetWhere = {
  AND?: InputMaybe<Array<TargetWhere>>;
  NOT?: InputMaybe<TargetWhere>;
  OR?: InputMaybe<Array<TargetWhere>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  max?: InputMaybe<Scalars['Int']['input']>;
  max_GT?: InputMaybe<Scalars['Int']['input']>;
  max_GTE?: InputMaybe<Scalars['Int']['input']>;
  max_IN?: InputMaybe<Array<Scalars['Int']['input']>>;
  max_LT?: InputMaybe<Scalars['Int']['input']>;
  max_LTE?: InputMaybe<Scalars['Int']['input']>;
  min?: InputMaybe<Scalars['Int']['input']>;
  min_GT?: InputMaybe<Scalars['Int']['input']>;
  min_GTE?: InputMaybe<Scalars['Int']['input']>;
  min_IN?: InputMaybe<Array<Scalars['Int']['input']>>;
  min_LT?: InputMaybe<Scalars['Int']['input']>;
  min_LTE?: InputMaybe<Scalars['Int']['input']>;
  radius?: InputMaybe<Scalars['Int']['input']>;
  radius_GT?: InputMaybe<Scalars['Int']['input']>;
  radius_GTE?: InputMaybe<Scalars['Int']['input']>;
  radius_IN?: InputMaybe<Array<Scalars['Int']['input']>>;
  radius_LT?: InputMaybe<Scalars['Int']['input']>;
  radius_LTE?: InputMaybe<Scalars['Int']['input']>;
  rings?: InputMaybe<Scalars['Int']['input']>;
  rings_GT?: InputMaybe<Scalars['Int']['input']>;
  rings_GTE?: InputMaybe<Scalars['Int']['input']>;
  rings_IN?: InputMaybe<Array<Scalars['Int']['input']>>;
  rings_LT?: InputMaybe<Scalars['Int']['input']>;
  rings_LTE?: InputMaybe<Scalars['Int']['input']>;
  xRing?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TargetsConnection = {
  __typename?: 'TargetsConnection';
  edges: Array<TargetEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UpdateArrowsMutationResponse = {
  __typename?: 'UpdateArrowsMutationResponse';
  arrows: Array<Arrow>;
  info: UpdateInfo;
};

export type UpdateAthletesMutationResponse = {
  __typename?: 'UpdateAthletesMutationResponse';
  athletes: Array<Athlete>;
  info: UpdateInfo;
};

export type UpdateEventsMutationResponse = {
  __typename?: 'UpdateEventsMutationResponse';
  events: Array<Event>;
  info: UpdateInfo;
};

export type UpdateInfo = {
  __typename?: 'UpdateInfo';
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesCreated: Scalars['Int']['output'];
  nodesDeleted: Scalars['Int']['output'];
  relationshipsCreated: Scalars['Int']['output'];
  relationshipsDeleted: Scalars['Int']['output'];
};

export type UpdateMatchesMutationResponse = {
  __typename?: 'UpdateMatchesMutationResponse';
  info: UpdateInfo;
  matches: Array<Match>;
};

export type UpdateResultsMutationResponse = {
  __typename?: 'UpdateResultsMutationResponse';
  info: UpdateInfo;
  results: Array<Result>;
};

export type UpdateSetsMutationResponse = {
  __typename?: 'UpdateSetsMutationResponse';
  info: UpdateInfo;
  sets: Array<Set>;
};

export type UpdateTargetsMutationResponse = {
  __typename?: 'UpdateTargetsMutationResponse';
  info: UpdateInfo;
  targets: Array<Target>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping of interface types */
export type ResolversInterfaceTypes<RefType extends Record<string, unknown>> = {
  AthleteMatch: ( AthleteMatchesRelationship ) | ( MatchAthletesRelationship );
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Arrow: ResolverTypeWrapper<Arrow>;
  ArrowAggregateSelection: ResolverTypeWrapper<ArrowAggregateSelection>;
  ArrowConnectInput: ArrowConnectInput;
  ArrowConnectOrCreateInput: ArrowConnectOrCreateInput;
  ArrowConnectOrCreateWhere: ArrowConnectOrCreateWhere;
  ArrowConnectWhere: ArrowConnectWhere;
  ArrowCreateInput: ArrowCreateInput;
  ArrowDeleteInput: ArrowDeleteInput;
  ArrowDisconnectInput: ArrowDisconnectInput;
  ArrowEdge: ResolverTypeWrapper<ArrowEdge>;
  ArrowOnCreateInput: ArrowOnCreateInput;
  ArrowOptions: ArrowOptions;
  ArrowRelationInput: ArrowRelationInput;
  ArrowSetAggregateInput: ArrowSetAggregateInput;
  ArrowSetConnectFieldInput: ArrowSetConnectFieldInput;
  ArrowSetConnectOrCreateFieldInput: ArrowSetConnectOrCreateFieldInput;
  ArrowSetConnectOrCreateFieldInputOnCreate: ArrowSetConnectOrCreateFieldInputOnCreate;
  ArrowSetConnection: ResolverTypeWrapper<ArrowSetConnection>;
  ArrowSetConnectionSort: ArrowSetConnectionSort;
  ArrowSetConnectionWhere: ArrowSetConnectionWhere;
  ArrowSetCreateFieldInput: ArrowSetCreateFieldInput;
  ArrowSetDeleteFieldInput: ArrowSetDeleteFieldInput;
  ArrowSetDisconnectFieldInput: ArrowSetDisconnectFieldInput;
  ArrowSetFieldInput: ArrowSetFieldInput;
  ArrowSetNodeAggregationWhereInput: ArrowSetNodeAggregationWhereInput;
  ArrowSetRelationship: ResolverTypeWrapper<ArrowSetRelationship>;
  ArrowSetSetAggregationSelection: ResolverTypeWrapper<ArrowSetSetAggregationSelection>;
  ArrowSetSetNodeAggregateSelection: ResolverTypeWrapper<ArrowSetSetNodeAggregateSelection>;
  ArrowSetUpdateConnectionInput: ArrowSetUpdateConnectionInput;
  ArrowSetUpdateFieldInput: ArrowSetUpdateFieldInput;
  ArrowSort: ArrowSort;
  ArrowUniqueWhere: ArrowUniqueWhere;
  ArrowUpdateInput: ArrowUpdateInput;
  ArrowWhere: ArrowWhere;
  ArrowsConnection: ResolverTypeWrapper<ArrowsConnection>;
  Athlete: ResolverTypeWrapper<Athlete>;
  AthleteAggregateSelection: ResolverTypeWrapper<AthleteAggregateSelection>;
  AthleteConnectInput: AthleteConnectInput;
  AthleteConnectOrCreateInput: AthleteConnectOrCreateInput;
  AthleteConnectOrCreateWhere: AthleteConnectOrCreateWhere;
  AthleteConnectWhere: AthleteConnectWhere;
  AthleteCreateInput: AthleteCreateInput;
  AthleteDeleteInput: AthleteDeleteInput;
  AthleteDisconnectInput: AthleteDisconnectInput;
  AthleteEdge: ResolverTypeWrapper<AthleteEdge>;
  AthleteEventMatchesAggregationSelection: ResolverTypeWrapper<AthleteEventMatchesAggregationSelection>;
  AthleteEventMatchesEdgeAggregateSelection: ResolverTypeWrapper<AthleteEventMatchesEdgeAggregateSelection>;
  AthleteEventMatchesNodeAggregateSelection: ResolverTypeWrapper<AthleteEventMatchesNodeAggregateSelection>;
  AthleteMatch: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['AthleteMatch']>;
  AthleteMatchCreateInput: AthleteMatchCreateInput;
  AthleteMatchSort: AthleteMatchSort;
  AthleteMatchUpdateInput: AthleteMatchUpdateInput;
  AthleteMatchWhere: AthleteMatchWhere;
  AthleteMatchesAggregateInput: AthleteMatchesAggregateInput;
  AthleteMatchesConnectFieldInput: AthleteMatchesConnectFieldInput;
  AthleteMatchesConnectOrCreateFieldInput: AthleteMatchesConnectOrCreateFieldInput;
  AthleteMatchesConnectOrCreateFieldInputOnCreate: AthleteMatchesConnectOrCreateFieldInputOnCreate;
  AthleteMatchesConnection: ResolverTypeWrapper<AthleteMatchesConnection>;
  AthleteMatchesConnectionSort: AthleteMatchesConnectionSort;
  AthleteMatchesConnectionWhere: AthleteMatchesConnectionWhere;
  AthleteMatchesCreateFieldInput: AthleteMatchesCreateFieldInput;
  AthleteMatchesDeleteFieldInput: AthleteMatchesDeleteFieldInput;
  AthleteMatchesDisconnectFieldInput: AthleteMatchesDisconnectFieldInput;
  AthleteMatchesEdgeAggregationWhereInput: AthleteMatchesEdgeAggregationWhereInput;
  AthleteMatchesFieldInput: AthleteMatchesFieldInput;
  AthleteMatchesNodeAggregationWhereInput: AthleteMatchesNodeAggregationWhereInput;
  AthleteMatchesRelationship: ResolverTypeWrapper<AthleteMatchesRelationship>;
  AthleteMatchesUpdateConnectionInput: AthleteMatchesUpdateConnectionInput;
  AthleteMatchesUpdateFieldInput: AthleteMatchesUpdateFieldInput;
  AthleteOnCreateInput: AthleteOnCreateInput;
  AthleteOptions: AthleteOptions;
  AthleteRelationInput: AthleteRelationInput;
  AthleteResultResultsAggregationSelection: ResolverTypeWrapper<AthleteResultResultsAggregationSelection>;
  AthleteResultResultsNodeAggregateSelection: ResolverTypeWrapper<AthleteResultResultsNodeAggregateSelection>;
  AthleteResultsAggregateInput: AthleteResultsAggregateInput;
  AthleteResultsConnectFieldInput: AthleteResultsConnectFieldInput;
  AthleteResultsConnectOrCreateFieldInput: AthleteResultsConnectOrCreateFieldInput;
  AthleteResultsConnectOrCreateFieldInputOnCreate: AthleteResultsConnectOrCreateFieldInputOnCreate;
  AthleteResultsConnection: ResolverTypeWrapper<AthleteResultsConnection>;
  AthleteResultsConnectionSort: AthleteResultsConnectionSort;
  AthleteResultsConnectionWhere: AthleteResultsConnectionWhere;
  AthleteResultsCreateFieldInput: AthleteResultsCreateFieldInput;
  AthleteResultsDeleteFieldInput: AthleteResultsDeleteFieldInput;
  AthleteResultsDisconnectFieldInput: AthleteResultsDisconnectFieldInput;
  AthleteResultsFieldInput: AthleteResultsFieldInput;
  AthleteResultsNodeAggregationWhereInput: AthleteResultsNodeAggregationWhereInput;
  AthleteResultsRelationship: ResolverTypeWrapper<AthleteResultsRelationship>;
  AthleteResultsUpdateConnectionInput: AthleteResultsUpdateConnectionInput;
  AthleteResultsUpdateFieldInput: AthleteResultsUpdateFieldInput;
  AthleteSetSetsAggregationSelection: ResolverTypeWrapper<AthleteSetSetsAggregationSelection>;
  AthleteSetSetsNodeAggregateSelection: ResolverTypeWrapper<AthleteSetSetsNodeAggregateSelection>;
  AthleteSetsAggregateInput: AthleteSetsAggregateInput;
  AthleteSetsConnectFieldInput: AthleteSetsConnectFieldInput;
  AthleteSetsConnectOrCreateFieldInput: AthleteSetsConnectOrCreateFieldInput;
  AthleteSetsConnectOrCreateFieldInputOnCreate: AthleteSetsConnectOrCreateFieldInputOnCreate;
  AthleteSetsConnection: ResolverTypeWrapper<AthleteSetsConnection>;
  AthleteSetsConnectionSort: AthleteSetsConnectionSort;
  AthleteSetsConnectionWhere: AthleteSetsConnectionWhere;
  AthleteSetsCreateFieldInput: AthleteSetsCreateFieldInput;
  AthleteSetsDeleteFieldInput: AthleteSetsDeleteFieldInput;
  AthleteSetsDisconnectFieldInput: AthleteSetsDisconnectFieldInput;
  AthleteSetsFieldInput: AthleteSetsFieldInput;
  AthleteSetsNodeAggregationWhereInput: AthleteSetsNodeAggregationWhereInput;
  AthleteSetsRelationship: ResolverTypeWrapper<AthleteSetsRelationship>;
  AthleteSetsUpdateConnectionInput: AthleteSetsUpdateConnectionInput;
  AthleteSetsUpdateFieldInput: AthleteSetsUpdateFieldInput;
  AthleteSort: AthleteSort;
  AthleteUniqueWhere: AthleteUniqueWhere;
  AthleteUpdateInput: AthleteUpdateInput;
  AthleteWhere: AthleteWhere;
  AthletesConnection: ResolverTypeWrapper<AthletesConnection>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CreateArrowsMutationResponse: ResolverTypeWrapper<CreateArrowsMutationResponse>;
  CreateAthletesMutationResponse: ResolverTypeWrapper<CreateAthletesMutationResponse>;
  CreateEventsMutationResponse: ResolverTypeWrapper<CreateEventsMutationResponse>;
  CreateInfo: ResolverTypeWrapper<CreateInfo>;
  CreateMatchesMutationResponse: ResolverTypeWrapper<CreateMatchesMutationResponse>;
  CreateResultsMutationResponse: ResolverTypeWrapper<CreateResultsMutationResponse>;
  CreateSetsMutationResponse: ResolverTypeWrapper<CreateSetsMutationResponse>;
  CreateTargetsMutationResponse: ResolverTypeWrapper<CreateTargetsMutationResponse>;
  DeleteInfo: ResolverTypeWrapper<DeleteInfo>;
  Division: Division;
  Event: ResolverTypeWrapper<Event>;
  EventAggregateSelection: ResolverTypeWrapper<EventAggregateSelection>;
  EventConnectInput: EventConnectInput;
  EventConnectOrCreateInput: EventConnectOrCreateInput;
  EventConnectOrCreateWhere: EventConnectOrCreateWhere;
  EventConnectWhere: EventConnectWhere;
  EventCreateInput: EventCreateInput;
  EventDeleteInput: EventDeleteInput;
  EventDisconnectInput: EventDisconnectInput;
  EventEdge: ResolverTypeWrapper<EventEdge>;
  EventMatchMatchesAggregationSelection: ResolverTypeWrapper<EventMatchMatchesAggregationSelection>;
  EventMatchMatchesNodeAggregateSelection: ResolverTypeWrapper<EventMatchMatchesNodeAggregateSelection>;
  EventMatchesAggregateInput: EventMatchesAggregateInput;
  EventMatchesConnectFieldInput: EventMatchesConnectFieldInput;
  EventMatchesConnectOrCreateFieldInput: EventMatchesConnectOrCreateFieldInput;
  EventMatchesConnectOrCreateFieldInputOnCreate: EventMatchesConnectOrCreateFieldInputOnCreate;
  EventMatchesConnection: ResolverTypeWrapper<EventMatchesConnection>;
  EventMatchesConnectionSort: EventMatchesConnectionSort;
  EventMatchesConnectionWhere: EventMatchesConnectionWhere;
  EventMatchesCreateFieldInput: EventMatchesCreateFieldInput;
  EventMatchesDeleteFieldInput: EventMatchesDeleteFieldInput;
  EventMatchesDisconnectFieldInput: EventMatchesDisconnectFieldInput;
  EventMatchesFieldInput: EventMatchesFieldInput;
  EventMatchesNodeAggregationWhereInput: EventMatchesNodeAggregationWhereInput;
  EventMatchesRelationship: ResolverTypeWrapper<EventMatchesRelationship>;
  EventMatchesUpdateConnectionInput: EventMatchesUpdateConnectionInput;
  EventMatchesUpdateFieldInput: EventMatchesUpdateFieldInput;
  EventOnCreateInput: EventOnCreateInput;
  EventOptions: EventOptions;
  EventRelationInput: EventRelationInput;
  EventSort: EventSort;
  EventUniqueWhere: EventUniqueWhere;
  EventUpdateInput: EventUpdateInput;
  EventWhere: EventWhere;
  EventsConnection: ResolverTypeWrapper<EventsConnection>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Gender: Gender;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  IDAggregateSelectionNonNullable: ResolverTypeWrapper<IdAggregateSelectionNonNullable>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  IntAggregateSelectionNonNullable: ResolverTypeWrapper<IntAggregateSelectionNonNullable>;
  IntAggregateSelectionNullable: ResolverTypeWrapper<IntAggregateSelectionNullable>;
  Match: ResolverTypeWrapper<Match>;
  MatchAggregateSelection: ResolverTypeWrapper<MatchAggregateSelection>;
  MatchAthleteAthletesAggregationSelection: ResolverTypeWrapper<MatchAthleteAthletesAggregationSelection>;
  MatchAthleteAthletesEdgeAggregateSelection: ResolverTypeWrapper<MatchAthleteAthletesEdgeAggregateSelection>;
  MatchAthleteAthletesNodeAggregateSelection: ResolverTypeWrapper<MatchAthleteAthletesNodeAggregateSelection>;
  MatchAthletesAggregateInput: MatchAthletesAggregateInput;
  MatchAthletesConnectFieldInput: MatchAthletesConnectFieldInput;
  MatchAthletesConnectOrCreateFieldInput: MatchAthletesConnectOrCreateFieldInput;
  MatchAthletesConnectOrCreateFieldInputOnCreate: MatchAthletesConnectOrCreateFieldInputOnCreate;
  MatchAthletesConnection: ResolverTypeWrapper<MatchAthletesConnection>;
  MatchAthletesConnectionSort: MatchAthletesConnectionSort;
  MatchAthletesConnectionWhere: MatchAthletesConnectionWhere;
  MatchAthletesCreateFieldInput: MatchAthletesCreateFieldInput;
  MatchAthletesDeleteFieldInput: MatchAthletesDeleteFieldInput;
  MatchAthletesDisconnectFieldInput: MatchAthletesDisconnectFieldInput;
  MatchAthletesEdgeAggregationWhereInput: MatchAthletesEdgeAggregationWhereInput;
  MatchAthletesFieldInput: MatchAthletesFieldInput;
  MatchAthletesNodeAggregationWhereInput: MatchAthletesNodeAggregationWhereInput;
  MatchAthletesRelationship: ResolverTypeWrapper<MatchAthletesRelationship>;
  MatchAthletesUpdateConnectionInput: MatchAthletesUpdateConnectionInput;
  MatchAthletesUpdateFieldInput: MatchAthletesUpdateFieldInput;
  MatchConnectInput: MatchConnectInput;
  MatchConnectOrCreateInput: MatchConnectOrCreateInput;
  MatchConnectOrCreateWhere: MatchConnectOrCreateWhere;
  MatchConnectWhere: MatchConnectWhere;
  MatchCreateInput: MatchCreateInput;
  MatchDeleteInput: MatchDeleteInput;
  MatchDisconnectInput: MatchDisconnectInput;
  MatchEdge: ResolverTypeWrapper<MatchEdge>;
  MatchEventAggregateInput: MatchEventAggregateInput;
  MatchEventConnectFieldInput: MatchEventConnectFieldInput;
  MatchEventConnectOrCreateFieldInput: MatchEventConnectOrCreateFieldInput;
  MatchEventConnectOrCreateFieldInputOnCreate: MatchEventConnectOrCreateFieldInputOnCreate;
  MatchEventConnection: ResolverTypeWrapper<MatchEventConnection>;
  MatchEventConnectionSort: MatchEventConnectionSort;
  MatchEventConnectionWhere: MatchEventConnectionWhere;
  MatchEventCreateFieldInput: MatchEventCreateFieldInput;
  MatchEventDeleteFieldInput: MatchEventDeleteFieldInput;
  MatchEventDisconnectFieldInput: MatchEventDisconnectFieldInput;
  MatchEventEventAggregationSelection: ResolverTypeWrapper<MatchEventEventAggregationSelection>;
  MatchEventEventNodeAggregateSelection: ResolverTypeWrapper<MatchEventEventNodeAggregateSelection>;
  MatchEventFieldInput: MatchEventFieldInput;
  MatchEventNodeAggregationWhereInput: MatchEventNodeAggregationWhereInput;
  MatchEventRelationship: ResolverTypeWrapper<MatchEventRelationship>;
  MatchEventUpdateConnectionInput: MatchEventUpdateConnectionInput;
  MatchEventUpdateFieldInput: MatchEventUpdateFieldInput;
  MatchOnCreateInput: MatchOnCreateInput;
  MatchOptions: MatchOptions;
  MatchRelationInput: MatchRelationInput;
  MatchSetSetsAggregationSelection: ResolverTypeWrapper<MatchSetSetsAggregationSelection>;
  MatchSetSetsNodeAggregateSelection: ResolverTypeWrapper<MatchSetSetsNodeAggregateSelection>;
  MatchSetsAggregateInput: MatchSetsAggregateInput;
  MatchSetsConnectFieldInput: MatchSetsConnectFieldInput;
  MatchSetsConnectOrCreateFieldInput: MatchSetsConnectOrCreateFieldInput;
  MatchSetsConnectOrCreateFieldInputOnCreate: MatchSetsConnectOrCreateFieldInputOnCreate;
  MatchSetsConnection: ResolverTypeWrapper<MatchSetsConnection>;
  MatchSetsConnectionSort: MatchSetsConnectionSort;
  MatchSetsConnectionWhere: MatchSetsConnectionWhere;
  MatchSetsCreateFieldInput: MatchSetsCreateFieldInput;
  MatchSetsDeleteFieldInput: MatchSetsDeleteFieldInput;
  MatchSetsDisconnectFieldInput: MatchSetsDisconnectFieldInput;
  MatchSetsFieldInput: MatchSetsFieldInput;
  MatchSetsNodeAggregationWhereInput: MatchSetsNodeAggregationWhereInput;
  MatchSetsRelationship: ResolverTypeWrapper<MatchSetsRelationship>;
  MatchSetsUpdateConnectionInput: MatchSetsUpdateConnectionInput;
  MatchSetsUpdateFieldInput: MatchSetsUpdateFieldInput;
  MatchSort: MatchSort;
  MatchStyle: MatchStyle;
  MatchUniqueWhere: MatchUniqueWhere;
  MatchUpdateInput: MatchUpdateInput;
  MatchWhere: MatchWhere;
  MatchesConnection: ResolverTypeWrapper<MatchesConnection>;
  Mutation: ResolverTypeWrapper<{}>;
  NationCode: NationCode;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Query: ResolverTypeWrapper<{}>;
  Result: ResolverTypeWrapper<Result>;
  ResultAggregateSelection: ResolverTypeWrapper<ResultAggregateSelection>;
  ResultAthleteAggregateInput: ResultAthleteAggregateInput;
  ResultAthleteAthleteAggregationSelection: ResolverTypeWrapper<ResultAthleteAthleteAggregationSelection>;
  ResultAthleteAthleteNodeAggregateSelection: ResolverTypeWrapper<ResultAthleteAthleteNodeAggregateSelection>;
  ResultAthleteConnectFieldInput: ResultAthleteConnectFieldInput;
  ResultAthleteConnectOrCreateFieldInput: ResultAthleteConnectOrCreateFieldInput;
  ResultAthleteConnectOrCreateFieldInputOnCreate: ResultAthleteConnectOrCreateFieldInputOnCreate;
  ResultAthleteConnection: ResolverTypeWrapper<ResultAthleteConnection>;
  ResultAthleteConnectionSort: ResultAthleteConnectionSort;
  ResultAthleteConnectionWhere: ResultAthleteConnectionWhere;
  ResultAthleteCreateFieldInput: ResultAthleteCreateFieldInput;
  ResultAthleteDeleteFieldInput: ResultAthleteDeleteFieldInput;
  ResultAthleteDisconnectFieldInput: ResultAthleteDisconnectFieldInput;
  ResultAthleteFieldInput: ResultAthleteFieldInput;
  ResultAthleteNodeAggregationWhereInput: ResultAthleteNodeAggregationWhereInput;
  ResultAthleteRelationship: ResolverTypeWrapper<ResultAthleteRelationship>;
  ResultAthleteUpdateConnectionInput: ResultAthleteUpdateConnectionInput;
  ResultAthleteUpdateFieldInput: ResultAthleteUpdateFieldInput;
  ResultConnectInput: ResultConnectInput;
  ResultConnectOrCreateInput: ResultConnectOrCreateInput;
  ResultConnectOrCreateWhere: ResultConnectOrCreateWhere;
  ResultConnectWhere: ResultConnectWhere;
  ResultCreateInput: ResultCreateInput;
  ResultDeleteInput: ResultDeleteInput;
  ResultDisconnectInput: ResultDisconnectInput;
  ResultEdge: ResolverTypeWrapper<ResultEdge>;
  ResultOnCreateInput: ResultOnCreateInput;
  ResultOptions: ResultOptions;
  ResultRelationInput: ResultRelationInput;
  ResultSetSetsAggregationSelection: ResolverTypeWrapper<ResultSetSetsAggregationSelection>;
  ResultSetSetsNodeAggregateSelection: ResolverTypeWrapper<ResultSetSetsNodeAggregateSelection>;
  ResultSetsAggregateInput: ResultSetsAggregateInput;
  ResultSetsConnectFieldInput: ResultSetsConnectFieldInput;
  ResultSetsConnectOrCreateFieldInput: ResultSetsConnectOrCreateFieldInput;
  ResultSetsConnectOrCreateFieldInputOnCreate: ResultSetsConnectOrCreateFieldInputOnCreate;
  ResultSetsConnection: ResolverTypeWrapper<ResultSetsConnection>;
  ResultSetsConnectionSort: ResultSetsConnectionSort;
  ResultSetsConnectionWhere: ResultSetsConnectionWhere;
  ResultSetsCreateFieldInput: ResultSetsCreateFieldInput;
  ResultSetsDeleteFieldInput: ResultSetsDeleteFieldInput;
  ResultSetsDisconnectFieldInput: ResultSetsDisconnectFieldInput;
  ResultSetsFieldInput: ResultSetsFieldInput;
  ResultSetsNodeAggregationWhereInput: ResultSetsNodeAggregationWhereInput;
  ResultSetsRelationship: ResolverTypeWrapper<ResultSetsRelationship>;
  ResultSetsUpdateConnectionInput: ResultSetsUpdateConnectionInput;
  ResultSetsUpdateFieldInput: ResultSetsUpdateFieldInput;
  ResultSort: ResultSort;
  ResultUniqueWhere: ResultUniqueWhere;
  ResultUpdateInput: ResultUpdateInput;
  ResultWhere: ResultWhere;
  ResultsConnection: ResolverTypeWrapper<ResultsConnection>;
  Set: ResolverTypeWrapper<Set>;
  SetAggregateSelection: ResolverTypeWrapper<SetAggregateSelection>;
  SetArrowArrowsAggregationSelection: ResolverTypeWrapper<SetArrowArrowsAggregationSelection>;
  SetArrowArrowsNodeAggregateSelection: ResolverTypeWrapper<SetArrowArrowsNodeAggregateSelection>;
  SetArrowsAggregateInput: SetArrowsAggregateInput;
  SetArrowsConnectFieldInput: SetArrowsConnectFieldInput;
  SetArrowsConnectOrCreateFieldInput: SetArrowsConnectOrCreateFieldInput;
  SetArrowsConnectOrCreateFieldInputOnCreate: SetArrowsConnectOrCreateFieldInputOnCreate;
  SetArrowsConnection: ResolverTypeWrapper<SetArrowsConnection>;
  SetArrowsConnectionSort: SetArrowsConnectionSort;
  SetArrowsConnectionWhere: SetArrowsConnectionWhere;
  SetArrowsCreateFieldInput: SetArrowsCreateFieldInput;
  SetArrowsDeleteFieldInput: SetArrowsDeleteFieldInput;
  SetArrowsDisconnectFieldInput: SetArrowsDisconnectFieldInput;
  SetArrowsFieldInput: SetArrowsFieldInput;
  SetArrowsNodeAggregationWhereInput: SetArrowsNodeAggregationWhereInput;
  SetArrowsRelationship: ResolverTypeWrapper<SetArrowsRelationship>;
  SetArrowsUpdateConnectionInput: SetArrowsUpdateConnectionInput;
  SetArrowsUpdateFieldInput: SetArrowsUpdateFieldInput;
  SetAthleteAggregateInput: SetAthleteAggregateInput;
  SetAthleteAthleteAggregationSelection: ResolverTypeWrapper<SetAthleteAthleteAggregationSelection>;
  SetAthleteAthleteNodeAggregateSelection: ResolverTypeWrapper<SetAthleteAthleteNodeAggregateSelection>;
  SetAthleteConnectFieldInput: SetAthleteConnectFieldInput;
  SetAthleteConnectOrCreateFieldInput: SetAthleteConnectOrCreateFieldInput;
  SetAthleteConnectOrCreateFieldInputOnCreate: SetAthleteConnectOrCreateFieldInputOnCreate;
  SetAthleteConnection: ResolverTypeWrapper<SetAthleteConnection>;
  SetAthleteConnectionSort: SetAthleteConnectionSort;
  SetAthleteConnectionWhere: SetAthleteConnectionWhere;
  SetAthleteCreateFieldInput: SetAthleteCreateFieldInput;
  SetAthleteDeleteFieldInput: SetAthleteDeleteFieldInput;
  SetAthleteDisconnectFieldInput: SetAthleteDisconnectFieldInput;
  SetAthleteFieldInput: SetAthleteFieldInput;
  SetAthleteNodeAggregationWhereInput: SetAthleteNodeAggregationWhereInput;
  SetAthleteRelationship: ResolverTypeWrapper<SetAthleteRelationship>;
  SetAthleteUpdateConnectionInput: SetAthleteUpdateConnectionInput;
  SetAthleteUpdateFieldInput: SetAthleteUpdateFieldInput;
  SetConnectInput: SetConnectInput;
  SetConnectOrCreateInput: SetConnectOrCreateInput;
  SetConnectOrCreateWhere: SetConnectOrCreateWhere;
  SetConnectWhere: SetConnectWhere;
  SetCreateInput: SetCreateInput;
  SetDeleteInput: SetDeleteInput;
  SetDisconnectInput: SetDisconnectInput;
  SetEdge: ResolverTypeWrapper<SetEdge>;
  SetMatchAggregateInput: SetMatchAggregateInput;
  SetMatchConnectFieldInput: SetMatchConnectFieldInput;
  SetMatchConnectOrCreateFieldInput: SetMatchConnectOrCreateFieldInput;
  SetMatchConnectOrCreateFieldInputOnCreate: SetMatchConnectOrCreateFieldInputOnCreate;
  SetMatchConnection: ResolverTypeWrapper<SetMatchConnection>;
  SetMatchConnectionSort: SetMatchConnectionSort;
  SetMatchConnectionWhere: SetMatchConnectionWhere;
  SetMatchCreateFieldInput: SetMatchCreateFieldInput;
  SetMatchDeleteFieldInput: SetMatchDeleteFieldInput;
  SetMatchDisconnectFieldInput: SetMatchDisconnectFieldInput;
  SetMatchFieldInput: SetMatchFieldInput;
  SetMatchMatchAggregationSelection: ResolverTypeWrapper<SetMatchMatchAggregationSelection>;
  SetMatchMatchNodeAggregateSelection: ResolverTypeWrapper<SetMatchMatchNodeAggregateSelection>;
  SetMatchNodeAggregationWhereInput: SetMatchNodeAggregationWhereInput;
  SetMatchRelationship: ResolverTypeWrapper<SetMatchRelationship>;
  SetMatchUpdateConnectionInput: SetMatchUpdateConnectionInput;
  SetMatchUpdateFieldInput: SetMatchUpdateFieldInput;
  SetOnCreateInput: SetOnCreateInput;
  SetOptions: SetOptions;
  SetRelationInput: SetRelationInput;
  SetSetSetsAggregationSelection: ResolverTypeWrapper<SetSetSetsAggregationSelection>;
  SetSetSetsNodeAggregateSelection: ResolverTypeWrapper<SetSetSetsNodeAggregateSelection>;
  SetSetsAggregateInput: SetSetsAggregateInput;
  SetSetsConnectFieldInput: SetSetsConnectFieldInput;
  SetSetsConnectOrCreateFieldInput: SetSetsConnectOrCreateFieldInput;
  SetSetsConnectOrCreateFieldInputOnCreate: SetSetsConnectOrCreateFieldInputOnCreate;
  SetSetsConnection: ResolverTypeWrapper<SetSetsConnection>;
  SetSetsConnectionSort: SetSetsConnectionSort;
  SetSetsConnectionWhere: SetSetsConnectionWhere;
  SetSetsCreateFieldInput: SetSetsCreateFieldInput;
  SetSetsDeleteFieldInput: SetSetsDeleteFieldInput;
  SetSetsDisconnectFieldInput: SetSetsDisconnectFieldInput;
  SetSetsFieldInput: SetSetsFieldInput;
  SetSetsNodeAggregationWhereInput: SetSetsNodeAggregationWhereInput;
  SetSetsRelationship: ResolverTypeWrapper<SetSetsRelationship>;
  SetSetsUpdateConnectionInput: SetSetsUpdateConnectionInput;
  SetSetsUpdateFieldInput: SetSetsUpdateFieldInput;
  SetSort: SetSort;
  SetTargetAggregateInput: SetTargetAggregateInput;
  SetTargetConnectFieldInput: SetTargetConnectFieldInput;
  SetTargetConnectOrCreateFieldInput: SetTargetConnectOrCreateFieldInput;
  SetTargetConnectOrCreateFieldInputOnCreate: SetTargetConnectOrCreateFieldInputOnCreate;
  SetTargetConnection: ResolverTypeWrapper<SetTargetConnection>;
  SetTargetConnectionSort: SetTargetConnectionSort;
  SetTargetConnectionWhere: SetTargetConnectionWhere;
  SetTargetCreateFieldInput: SetTargetCreateFieldInput;
  SetTargetDeleteFieldInput: SetTargetDeleteFieldInput;
  SetTargetDisconnectFieldInput: SetTargetDisconnectFieldInput;
  SetTargetFieldInput: SetTargetFieldInput;
  SetTargetNodeAggregationWhereInput: SetTargetNodeAggregationWhereInput;
  SetTargetRelationship: ResolverTypeWrapper<SetTargetRelationship>;
  SetTargetTargetAggregationSelection: ResolverTypeWrapper<SetTargetTargetAggregationSelection>;
  SetTargetTargetNodeAggregateSelection: ResolverTypeWrapper<SetTargetTargetNodeAggregateSelection>;
  SetTargetUpdateConnectionInput: SetTargetUpdateConnectionInput;
  SetTargetUpdateFieldInput: SetTargetUpdateFieldInput;
  SetUniqueWhere: SetUniqueWhere;
  SetUpdateInput: SetUpdateInput;
  SetWhere: SetWhere;
  SetsConnection: ResolverTypeWrapper<SetsConnection>;
  SortDirection: SortDirection;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  StringAggregateSelectionNonNullable: ResolverTypeWrapper<StringAggregateSelectionNonNullable>;
  Target: ResolverTypeWrapper<Target>;
  TargetAggregateSelection: ResolverTypeWrapper<TargetAggregateSelection>;
  TargetConnectOrCreateWhere: TargetConnectOrCreateWhere;
  TargetConnectWhere: TargetConnectWhere;
  TargetCreateInput: TargetCreateInput;
  TargetEdge: ResolverTypeWrapper<TargetEdge>;
  TargetOnCreateInput: TargetOnCreateInput;
  TargetOptions: TargetOptions;
  TargetSort: TargetSort;
  TargetUniqueWhere: TargetUniqueWhere;
  TargetUpdateInput: TargetUpdateInput;
  TargetWhere: TargetWhere;
  TargetsConnection: ResolverTypeWrapper<TargetsConnection>;
  UpdateArrowsMutationResponse: ResolverTypeWrapper<UpdateArrowsMutationResponse>;
  UpdateAthletesMutationResponse: ResolverTypeWrapper<UpdateAthletesMutationResponse>;
  UpdateEventsMutationResponse: ResolverTypeWrapper<UpdateEventsMutationResponse>;
  UpdateInfo: ResolverTypeWrapper<UpdateInfo>;
  UpdateMatchesMutationResponse: ResolverTypeWrapper<UpdateMatchesMutationResponse>;
  UpdateResultsMutationResponse: ResolverTypeWrapper<UpdateResultsMutationResponse>;
  UpdateSetsMutationResponse: ResolverTypeWrapper<UpdateSetsMutationResponse>;
  UpdateTargetsMutationResponse: ResolverTypeWrapper<UpdateTargetsMutationResponse>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Arrow: Arrow;
  ArrowAggregateSelection: ArrowAggregateSelection;
  ArrowConnectInput: ArrowConnectInput;
  ArrowConnectOrCreateInput: ArrowConnectOrCreateInput;
  ArrowConnectOrCreateWhere: ArrowConnectOrCreateWhere;
  ArrowConnectWhere: ArrowConnectWhere;
  ArrowCreateInput: ArrowCreateInput;
  ArrowDeleteInput: ArrowDeleteInput;
  ArrowDisconnectInput: ArrowDisconnectInput;
  ArrowEdge: ArrowEdge;
  ArrowOnCreateInput: ArrowOnCreateInput;
  ArrowOptions: ArrowOptions;
  ArrowRelationInput: ArrowRelationInput;
  ArrowSetAggregateInput: ArrowSetAggregateInput;
  ArrowSetConnectFieldInput: ArrowSetConnectFieldInput;
  ArrowSetConnectOrCreateFieldInput: ArrowSetConnectOrCreateFieldInput;
  ArrowSetConnectOrCreateFieldInputOnCreate: ArrowSetConnectOrCreateFieldInputOnCreate;
  ArrowSetConnection: ArrowSetConnection;
  ArrowSetConnectionSort: ArrowSetConnectionSort;
  ArrowSetConnectionWhere: ArrowSetConnectionWhere;
  ArrowSetCreateFieldInput: ArrowSetCreateFieldInput;
  ArrowSetDeleteFieldInput: ArrowSetDeleteFieldInput;
  ArrowSetDisconnectFieldInput: ArrowSetDisconnectFieldInput;
  ArrowSetFieldInput: ArrowSetFieldInput;
  ArrowSetNodeAggregationWhereInput: ArrowSetNodeAggregationWhereInput;
  ArrowSetRelationship: ArrowSetRelationship;
  ArrowSetSetAggregationSelection: ArrowSetSetAggregationSelection;
  ArrowSetSetNodeAggregateSelection: ArrowSetSetNodeAggregateSelection;
  ArrowSetUpdateConnectionInput: ArrowSetUpdateConnectionInput;
  ArrowSetUpdateFieldInput: ArrowSetUpdateFieldInput;
  ArrowSort: ArrowSort;
  ArrowUniqueWhere: ArrowUniqueWhere;
  ArrowUpdateInput: ArrowUpdateInput;
  ArrowWhere: ArrowWhere;
  ArrowsConnection: ArrowsConnection;
  Athlete: Athlete;
  AthleteAggregateSelection: AthleteAggregateSelection;
  AthleteConnectInput: AthleteConnectInput;
  AthleteConnectOrCreateInput: AthleteConnectOrCreateInput;
  AthleteConnectOrCreateWhere: AthleteConnectOrCreateWhere;
  AthleteConnectWhere: AthleteConnectWhere;
  AthleteCreateInput: AthleteCreateInput;
  AthleteDeleteInput: AthleteDeleteInput;
  AthleteDisconnectInput: AthleteDisconnectInput;
  AthleteEdge: AthleteEdge;
  AthleteEventMatchesAggregationSelection: AthleteEventMatchesAggregationSelection;
  AthleteEventMatchesEdgeAggregateSelection: AthleteEventMatchesEdgeAggregateSelection;
  AthleteEventMatchesNodeAggregateSelection: AthleteEventMatchesNodeAggregateSelection;
  AthleteMatch: ResolversInterfaceTypes<ResolversParentTypes>['AthleteMatch'];
  AthleteMatchCreateInput: AthleteMatchCreateInput;
  AthleteMatchSort: AthleteMatchSort;
  AthleteMatchUpdateInput: AthleteMatchUpdateInput;
  AthleteMatchWhere: AthleteMatchWhere;
  AthleteMatchesAggregateInput: AthleteMatchesAggregateInput;
  AthleteMatchesConnectFieldInput: AthleteMatchesConnectFieldInput;
  AthleteMatchesConnectOrCreateFieldInput: AthleteMatchesConnectOrCreateFieldInput;
  AthleteMatchesConnectOrCreateFieldInputOnCreate: AthleteMatchesConnectOrCreateFieldInputOnCreate;
  AthleteMatchesConnection: AthleteMatchesConnection;
  AthleteMatchesConnectionSort: AthleteMatchesConnectionSort;
  AthleteMatchesConnectionWhere: AthleteMatchesConnectionWhere;
  AthleteMatchesCreateFieldInput: AthleteMatchesCreateFieldInput;
  AthleteMatchesDeleteFieldInput: AthleteMatchesDeleteFieldInput;
  AthleteMatchesDisconnectFieldInput: AthleteMatchesDisconnectFieldInput;
  AthleteMatchesEdgeAggregationWhereInput: AthleteMatchesEdgeAggregationWhereInput;
  AthleteMatchesFieldInput: AthleteMatchesFieldInput;
  AthleteMatchesNodeAggregationWhereInput: AthleteMatchesNodeAggregationWhereInput;
  AthleteMatchesRelationship: AthleteMatchesRelationship;
  AthleteMatchesUpdateConnectionInput: AthleteMatchesUpdateConnectionInput;
  AthleteMatchesUpdateFieldInput: AthleteMatchesUpdateFieldInput;
  AthleteOnCreateInput: AthleteOnCreateInput;
  AthleteOptions: AthleteOptions;
  AthleteRelationInput: AthleteRelationInput;
  AthleteResultResultsAggregationSelection: AthleteResultResultsAggregationSelection;
  AthleteResultResultsNodeAggregateSelection: AthleteResultResultsNodeAggregateSelection;
  AthleteResultsAggregateInput: AthleteResultsAggregateInput;
  AthleteResultsConnectFieldInput: AthleteResultsConnectFieldInput;
  AthleteResultsConnectOrCreateFieldInput: AthleteResultsConnectOrCreateFieldInput;
  AthleteResultsConnectOrCreateFieldInputOnCreate: AthleteResultsConnectOrCreateFieldInputOnCreate;
  AthleteResultsConnection: AthleteResultsConnection;
  AthleteResultsConnectionSort: AthleteResultsConnectionSort;
  AthleteResultsConnectionWhere: AthleteResultsConnectionWhere;
  AthleteResultsCreateFieldInput: AthleteResultsCreateFieldInput;
  AthleteResultsDeleteFieldInput: AthleteResultsDeleteFieldInput;
  AthleteResultsDisconnectFieldInput: AthleteResultsDisconnectFieldInput;
  AthleteResultsFieldInput: AthleteResultsFieldInput;
  AthleteResultsNodeAggregationWhereInput: AthleteResultsNodeAggregationWhereInput;
  AthleteResultsRelationship: AthleteResultsRelationship;
  AthleteResultsUpdateConnectionInput: AthleteResultsUpdateConnectionInput;
  AthleteResultsUpdateFieldInput: AthleteResultsUpdateFieldInput;
  AthleteSetSetsAggregationSelection: AthleteSetSetsAggregationSelection;
  AthleteSetSetsNodeAggregateSelection: AthleteSetSetsNodeAggregateSelection;
  AthleteSetsAggregateInput: AthleteSetsAggregateInput;
  AthleteSetsConnectFieldInput: AthleteSetsConnectFieldInput;
  AthleteSetsConnectOrCreateFieldInput: AthleteSetsConnectOrCreateFieldInput;
  AthleteSetsConnectOrCreateFieldInputOnCreate: AthleteSetsConnectOrCreateFieldInputOnCreate;
  AthleteSetsConnection: AthleteSetsConnection;
  AthleteSetsConnectionSort: AthleteSetsConnectionSort;
  AthleteSetsConnectionWhere: AthleteSetsConnectionWhere;
  AthleteSetsCreateFieldInput: AthleteSetsCreateFieldInput;
  AthleteSetsDeleteFieldInput: AthleteSetsDeleteFieldInput;
  AthleteSetsDisconnectFieldInput: AthleteSetsDisconnectFieldInput;
  AthleteSetsFieldInput: AthleteSetsFieldInput;
  AthleteSetsNodeAggregationWhereInput: AthleteSetsNodeAggregationWhereInput;
  AthleteSetsRelationship: AthleteSetsRelationship;
  AthleteSetsUpdateConnectionInput: AthleteSetsUpdateConnectionInput;
  AthleteSetsUpdateFieldInput: AthleteSetsUpdateFieldInput;
  AthleteSort: AthleteSort;
  AthleteUniqueWhere: AthleteUniqueWhere;
  AthleteUpdateInput: AthleteUpdateInput;
  AthleteWhere: AthleteWhere;
  AthletesConnection: AthletesConnection;
  Boolean: Scalars['Boolean']['output'];
  CreateArrowsMutationResponse: CreateArrowsMutationResponse;
  CreateAthletesMutationResponse: CreateAthletesMutationResponse;
  CreateEventsMutationResponse: CreateEventsMutationResponse;
  CreateInfo: CreateInfo;
  CreateMatchesMutationResponse: CreateMatchesMutationResponse;
  CreateResultsMutationResponse: CreateResultsMutationResponse;
  CreateSetsMutationResponse: CreateSetsMutationResponse;
  CreateTargetsMutationResponse: CreateTargetsMutationResponse;
  DeleteInfo: DeleteInfo;
  Event: Event;
  EventAggregateSelection: EventAggregateSelection;
  EventConnectInput: EventConnectInput;
  EventConnectOrCreateInput: EventConnectOrCreateInput;
  EventConnectOrCreateWhere: EventConnectOrCreateWhere;
  EventConnectWhere: EventConnectWhere;
  EventCreateInput: EventCreateInput;
  EventDeleteInput: EventDeleteInput;
  EventDisconnectInput: EventDisconnectInput;
  EventEdge: EventEdge;
  EventMatchMatchesAggregationSelection: EventMatchMatchesAggregationSelection;
  EventMatchMatchesNodeAggregateSelection: EventMatchMatchesNodeAggregateSelection;
  EventMatchesAggregateInput: EventMatchesAggregateInput;
  EventMatchesConnectFieldInput: EventMatchesConnectFieldInput;
  EventMatchesConnectOrCreateFieldInput: EventMatchesConnectOrCreateFieldInput;
  EventMatchesConnectOrCreateFieldInputOnCreate: EventMatchesConnectOrCreateFieldInputOnCreate;
  EventMatchesConnection: EventMatchesConnection;
  EventMatchesConnectionSort: EventMatchesConnectionSort;
  EventMatchesConnectionWhere: EventMatchesConnectionWhere;
  EventMatchesCreateFieldInput: EventMatchesCreateFieldInput;
  EventMatchesDeleteFieldInput: EventMatchesDeleteFieldInput;
  EventMatchesDisconnectFieldInput: EventMatchesDisconnectFieldInput;
  EventMatchesFieldInput: EventMatchesFieldInput;
  EventMatchesNodeAggregationWhereInput: EventMatchesNodeAggregationWhereInput;
  EventMatchesRelationship: EventMatchesRelationship;
  EventMatchesUpdateConnectionInput: EventMatchesUpdateConnectionInput;
  EventMatchesUpdateFieldInput: EventMatchesUpdateFieldInput;
  EventOnCreateInput: EventOnCreateInput;
  EventOptions: EventOptions;
  EventRelationInput: EventRelationInput;
  EventSort: EventSort;
  EventUniqueWhere: EventUniqueWhere;
  EventUpdateInput: EventUpdateInput;
  EventWhere: EventWhere;
  EventsConnection: EventsConnection;
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  IDAggregateSelectionNonNullable: IdAggregateSelectionNonNullable;
  Int: Scalars['Int']['output'];
  IntAggregateSelectionNonNullable: IntAggregateSelectionNonNullable;
  IntAggregateSelectionNullable: IntAggregateSelectionNullable;
  Match: Match;
  MatchAggregateSelection: MatchAggregateSelection;
  MatchAthleteAthletesAggregationSelection: MatchAthleteAthletesAggregationSelection;
  MatchAthleteAthletesEdgeAggregateSelection: MatchAthleteAthletesEdgeAggregateSelection;
  MatchAthleteAthletesNodeAggregateSelection: MatchAthleteAthletesNodeAggregateSelection;
  MatchAthletesAggregateInput: MatchAthletesAggregateInput;
  MatchAthletesConnectFieldInput: MatchAthletesConnectFieldInput;
  MatchAthletesConnectOrCreateFieldInput: MatchAthletesConnectOrCreateFieldInput;
  MatchAthletesConnectOrCreateFieldInputOnCreate: MatchAthletesConnectOrCreateFieldInputOnCreate;
  MatchAthletesConnection: MatchAthletesConnection;
  MatchAthletesConnectionSort: MatchAthletesConnectionSort;
  MatchAthletesConnectionWhere: MatchAthletesConnectionWhere;
  MatchAthletesCreateFieldInput: MatchAthletesCreateFieldInput;
  MatchAthletesDeleteFieldInput: MatchAthletesDeleteFieldInput;
  MatchAthletesDisconnectFieldInput: MatchAthletesDisconnectFieldInput;
  MatchAthletesEdgeAggregationWhereInput: MatchAthletesEdgeAggregationWhereInput;
  MatchAthletesFieldInput: MatchAthletesFieldInput;
  MatchAthletesNodeAggregationWhereInput: MatchAthletesNodeAggregationWhereInput;
  MatchAthletesRelationship: MatchAthletesRelationship;
  MatchAthletesUpdateConnectionInput: MatchAthletesUpdateConnectionInput;
  MatchAthletesUpdateFieldInput: MatchAthletesUpdateFieldInput;
  MatchConnectInput: MatchConnectInput;
  MatchConnectOrCreateInput: MatchConnectOrCreateInput;
  MatchConnectOrCreateWhere: MatchConnectOrCreateWhere;
  MatchConnectWhere: MatchConnectWhere;
  MatchCreateInput: MatchCreateInput;
  MatchDeleteInput: MatchDeleteInput;
  MatchDisconnectInput: MatchDisconnectInput;
  MatchEdge: MatchEdge;
  MatchEventAggregateInput: MatchEventAggregateInput;
  MatchEventConnectFieldInput: MatchEventConnectFieldInput;
  MatchEventConnectOrCreateFieldInput: MatchEventConnectOrCreateFieldInput;
  MatchEventConnectOrCreateFieldInputOnCreate: MatchEventConnectOrCreateFieldInputOnCreate;
  MatchEventConnection: MatchEventConnection;
  MatchEventConnectionSort: MatchEventConnectionSort;
  MatchEventConnectionWhere: MatchEventConnectionWhere;
  MatchEventCreateFieldInput: MatchEventCreateFieldInput;
  MatchEventDeleteFieldInput: MatchEventDeleteFieldInput;
  MatchEventDisconnectFieldInput: MatchEventDisconnectFieldInput;
  MatchEventEventAggregationSelection: MatchEventEventAggregationSelection;
  MatchEventEventNodeAggregateSelection: MatchEventEventNodeAggregateSelection;
  MatchEventFieldInput: MatchEventFieldInput;
  MatchEventNodeAggregationWhereInput: MatchEventNodeAggregationWhereInput;
  MatchEventRelationship: MatchEventRelationship;
  MatchEventUpdateConnectionInput: MatchEventUpdateConnectionInput;
  MatchEventUpdateFieldInput: MatchEventUpdateFieldInput;
  MatchOnCreateInput: MatchOnCreateInput;
  MatchOptions: MatchOptions;
  MatchRelationInput: MatchRelationInput;
  MatchSetSetsAggregationSelection: MatchSetSetsAggregationSelection;
  MatchSetSetsNodeAggregateSelection: MatchSetSetsNodeAggregateSelection;
  MatchSetsAggregateInput: MatchSetsAggregateInput;
  MatchSetsConnectFieldInput: MatchSetsConnectFieldInput;
  MatchSetsConnectOrCreateFieldInput: MatchSetsConnectOrCreateFieldInput;
  MatchSetsConnectOrCreateFieldInputOnCreate: MatchSetsConnectOrCreateFieldInputOnCreate;
  MatchSetsConnection: MatchSetsConnection;
  MatchSetsConnectionSort: MatchSetsConnectionSort;
  MatchSetsConnectionWhere: MatchSetsConnectionWhere;
  MatchSetsCreateFieldInput: MatchSetsCreateFieldInput;
  MatchSetsDeleteFieldInput: MatchSetsDeleteFieldInput;
  MatchSetsDisconnectFieldInput: MatchSetsDisconnectFieldInput;
  MatchSetsFieldInput: MatchSetsFieldInput;
  MatchSetsNodeAggregationWhereInput: MatchSetsNodeAggregationWhereInput;
  MatchSetsRelationship: MatchSetsRelationship;
  MatchSetsUpdateConnectionInput: MatchSetsUpdateConnectionInput;
  MatchSetsUpdateFieldInput: MatchSetsUpdateFieldInput;
  MatchSort: MatchSort;
  MatchUniqueWhere: MatchUniqueWhere;
  MatchUpdateInput: MatchUpdateInput;
  MatchWhere: MatchWhere;
  MatchesConnection: MatchesConnection;
  Mutation: {};
  PageInfo: PageInfo;
  Query: {};
  Result: Result;
  ResultAggregateSelection: ResultAggregateSelection;
  ResultAthleteAggregateInput: ResultAthleteAggregateInput;
  ResultAthleteAthleteAggregationSelection: ResultAthleteAthleteAggregationSelection;
  ResultAthleteAthleteNodeAggregateSelection: ResultAthleteAthleteNodeAggregateSelection;
  ResultAthleteConnectFieldInput: ResultAthleteConnectFieldInput;
  ResultAthleteConnectOrCreateFieldInput: ResultAthleteConnectOrCreateFieldInput;
  ResultAthleteConnectOrCreateFieldInputOnCreate: ResultAthleteConnectOrCreateFieldInputOnCreate;
  ResultAthleteConnection: ResultAthleteConnection;
  ResultAthleteConnectionSort: ResultAthleteConnectionSort;
  ResultAthleteConnectionWhere: ResultAthleteConnectionWhere;
  ResultAthleteCreateFieldInput: ResultAthleteCreateFieldInput;
  ResultAthleteDeleteFieldInput: ResultAthleteDeleteFieldInput;
  ResultAthleteDisconnectFieldInput: ResultAthleteDisconnectFieldInput;
  ResultAthleteFieldInput: ResultAthleteFieldInput;
  ResultAthleteNodeAggregationWhereInput: ResultAthleteNodeAggregationWhereInput;
  ResultAthleteRelationship: ResultAthleteRelationship;
  ResultAthleteUpdateConnectionInput: ResultAthleteUpdateConnectionInput;
  ResultAthleteUpdateFieldInput: ResultAthleteUpdateFieldInput;
  ResultConnectInput: ResultConnectInput;
  ResultConnectOrCreateInput: ResultConnectOrCreateInput;
  ResultConnectOrCreateWhere: ResultConnectOrCreateWhere;
  ResultConnectWhere: ResultConnectWhere;
  ResultCreateInput: ResultCreateInput;
  ResultDeleteInput: ResultDeleteInput;
  ResultDisconnectInput: ResultDisconnectInput;
  ResultEdge: ResultEdge;
  ResultOnCreateInput: ResultOnCreateInput;
  ResultOptions: ResultOptions;
  ResultRelationInput: ResultRelationInput;
  ResultSetSetsAggregationSelection: ResultSetSetsAggregationSelection;
  ResultSetSetsNodeAggregateSelection: ResultSetSetsNodeAggregateSelection;
  ResultSetsAggregateInput: ResultSetsAggregateInput;
  ResultSetsConnectFieldInput: ResultSetsConnectFieldInput;
  ResultSetsConnectOrCreateFieldInput: ResultSetsConnectOrCreateFieldInput;
  ResultSetsConnectOrCreateFieldInputOnCreate: ResultSetsConnectOrCreateFieldInputOnCreate;
  ResultSetsConnection: ResultSetsConnection;
  ResultSetsConnectionSort: ResultSetsConnectionSort;
  ResultSetsConnectionWhere: ResultSetsConnectionWhere;
  ResultSetsCreateFieldInput: ResultSetsCreateFieldInput;
  ResultSetsDeleteFieldInput: ResultSetsDeleteFieldInput;
  ResultSetsDisconnectFieldInput: ResultSetsDisconnectFieldInput;
  ResultSetsFieldInput: ResultSetsFieldInput;
  ResultSetsNodeAggregationWhereInput: ResultSetsNodeAggregationWhereInput;
  ResultSetsRelationship: ResultSetsRelationship;
  ResultSetsUpdateConnectionInput: ResultSetsUpdateConnectionInput;
  ResultSetsUpdateFieldInput: ResultSetsUpdateFieldInput;
  ResultSort: ResultSort;
  ResultUniqueWhere: ResultUniqueWhere;
  ResultUpdateInput: ResultUpdateInput;
  ResultWhere: ResultWhere;
  ResultsConnection: ResultsConnection;
  Set: Set;
  SetAggregateSelection: SetAggregateSelection;
  SetArrowArrowsAggregationSelection: SetArrowArrowsAggregationSelection;
  SetArrowArrowsNodeAggregateSelection: SetArrowArrowsNodeAggregateSelection;
  SetArrowsAggregateInput: SetArrowsAggregateInput;
  SetArrowsConnectFieldInput: SetArrowsConnectFieldInput;
  SetArrowsConnectOrCreateFieldInput: SetArrowsConnectOrCreateFieldInput;
  SetArrowsConnectOrCreateFieldInputOnCreate: SetArrowsConnectOrCreateFieldInputOnCreate;
  SetArrowsConnection: SetArrowsConnection;
  SetArrowsConnectionSort: SetArrowsConnectionSort;
  SetArrowsConnectionWhere: SetArrowsConnectionWhere;
  SetArrowsCreateFieldInput: SetArrowsCreateFieldInput;
  SetArrowsDeleteFieldInput: SetArrowsDeleteFieldInput;
  SetArrowsDisconnectFieldInput: SetArrowsDisconnectFieldInput;
  SetArrowsFieldInput: SetArrowsFieldInput;
  SetArrowsNodeAggregationWhereInput: SetArrowsNodeAggregationWhereInput;
  SetArrowsRelationship: SetArrowsRelationship;
  SetArrowsUpdateConnectionInput: SetArrowsUpdateConnectionInput;
  SetArrowsUpdateFieldInput: SetArrowsUpdateFieldInput;
  SetAthleteAggregateInput: SetAthleteAggregateInput;
  SetAthleteAthleteAggregationSelection: SetAthleteAthleteAggregationSelection;
  SetAthleteAthleteNodeAggregateSelection: SetAthleteAthleteNodeAggregateSelection;
  SetAthleteConnectFieldInput: SetAthleteConnectFieldInput;
  SetAthleteConnectOrCreateFieldInput: SetAthleteConnectOrCreateFieldInput;
  SetAthleteConnectOrCreateFieldInputOnCreate: SetAthleteConnectOrCreateFieldInputOnCreate;
  SetAthleteConnection: SetAthleteConnection;
  SetAthleteConnectionSort: SetAthleteConnectionSort;
  SetAthleteConnectionWhere: SetAthleteConnectionWhere;
  SetAthleteCreateFieldInput: SetAthleteCreateFieldInput;
  SetAthleteDeleteFieldInput: SetAthleteDeleteFieldInput;
  SetAthleteDisconnectFieldInput: SetAthleteDisconnectFieldInput;
  SetAthleteFieldInput: SetAthleteFieldInput;
  SetAthleteNodeAggregationWhereInput: SetAthleteNodeAggregationWhereInput;
  SetAthleteRelationship: SetAthleteRelationship;
  SetAthleteUpdateConnectionInput: SetAthleteUpdateConnectionInput;
  SetAthleteUpdateFieldInput: SetAthleteUpdateFieldInput;
  SetConnectInput: SetConnectInput;
  SetConnectOrCreateInput: SetConnectOrCreateInput;
  SetConnectOrCreateWhere: SetConnectOrCreateWhere;
  SetConnectWhere: SetConnectWhere;
  SetCreateInput: SetCreateInput;
  SetDeleteInput: SetDeleteInput;
  SetDisconnectInput: SetDisconnectInput;
  SetEdge: SetEdge;
  SetMatchAggregateInput: SetMatchAggregateInput;
  SetMatchConnectFieldInput: SetMatchConnectFieldInput;
  SetMatchConnectOrCreateFieldInput: SetMatchConnectOrCreateFieldInput;
  SetMatchConnectOrCreateFieldInputOnCreate: SetMatchConnectOrCreateFieldInputOnCreate;
  SetMatchConnection: SetMatchConnection;
  SetMatchConnectionSort: SetMatchConnectionSort;
  SetMatchConnectionWhere: SetMatchConnectionWhere;
  SetMatchCreateFieldInput: SetMatchCreateFieldInput;
  SetMatchDeleteFieldInput: SetMatchDeleteFieldInput;
  SetMatchDisconnectFieldInput: SetMatchDisconnectFieldInput;
  SetMatchFieldInput: SetMatchFieldInput;
  SetMatchMatchAggregationSelection: SetMatchMatchAggregationSelection;
  SetMatchMatchNodeAggregateSelection: SetMatchMatchNodeAggregateSelection;
  SetMatchNodeAggregationWhereInput: SetMatchNodeAggregationWhereInput;
  SetMatchRelationship: SetMatchRelationship;
  SetMatchUpdateConnectionInput: SetMatchUpdateConnectionInput;
  SetMatchUpdateFieldInput: SetMatchUpdateFieldInput;
  SetOnCreateInput: SetOnCreateInput;
  SetOptions: SetOptions;
  SetRelationInput: SetRelationInput;
  SetSetSetsAggregationSelection: SetSetSetsAggregationSelection;
  SetSetSetsNodeAggregateSelection: SetSetSetsNodeAggregateSelection;
  SetSetsAggregateInput: SetSetsAggregateInput;
  SetSetsConnectFieldInput: SetSetsConnectFieldInput;
  SetSetsConnectOrCreateFieldInput: SetSetsConnectOrCreateFieldInput;
  SetSetsConnectOrCreateFieldInputOnCreate: SetSetsConnectOrCreateFieldInputOnCreate;
  SetSetsConnection: SetSetsConnection;
  SetSetsConnectionSort: SetSetsConnectionSort;
  SetSetsConnectionWhere: SetSetsConnectionWhere;
  SetSetsCreateFieldInput: SetSetsCreateFieldInput;
  SetSetsDeleteFieldInput: SetSetsDeleteFieldInput;
  SetSetsDisconnectFieldInput: SetSetsDisconnectFieldInput;
  SetSetsFieldInput: SetSetsFieldInput;
  SetSetsNodeAggregationWhereInput: SetSetsNodeAggregationWhereInput;
  SetSetsRelationship: SetSetsRelationship;
  SetSetsUpdateConnectionInput: SetSetsUpdateConnectionInput;
  SetSetsUpdateFieldInput: SetSetsUpdateFieldInput;
  SetSort: SetSort;
  SetTargetAggregateInput: SetTargetAggregateInput;
  SetTargetConnectFieldInput: SetTargetConnectFieldInput;
  SetTargetConnectOrCreateFieldInput: SetTargetConnectOrCreateFieldInput;
  SetTargetConnectOrCreateFieldInputOnCreate: SetTargetConnectOrCreateFieldInputOnCreate;
  SetTargetConnection: SetTargetConnection;
  SetTargetConnectionSort: SetTargetConnectionSort;
  SetTargetConnectionWhere: SetTargetConnectionWhere;
  SetTargetCreateFieldInput: SetTargetCreateFieldInput;
  SetTargetDeleteFieldInput: SetTargetDeleteFieldInput;
  SetTargetDisconnectFieldInput: SetTargetDisconnectFieldInput;
  SetTargetFieldInput: SetTargetFieldInput;
  SetTargetNodeAggregationWhereInput: SetTargetNodeAggregationWhereInput;
  SetTargetRelationship: SetTargetRelationship;
  SetTargetTargetAggregationSelection: SetTargetTargetAggregationSelection;
  SetTargetTargetNodeAggregateSelection: SetTargetTargetNodeAggregateSelection;
  SetTargetUpdateConnectionInput: SetTargetUpdateConnectionInput;
  SetTargetUpdateFieldInput: SetTargetUpdateFieldInput;
  SetUniqueWhere: SetUniqueWhere;
  SetUpdateInput: SetUpdateInput;
  SetWhere: SetWhere;
  SetsConnection: SetsConnection;
  String: Scalars['String']['output'];
  StringAggregateSelectionNonNullable: StringAggregateSelectionNonNullable;
  Target: Target;
  TargetAggregateSelection: TargetAggregateSelection;
  TargetConnectOrCreateWhere: TargetConnectOrCreateWhere;
  TargetConnectWhere: TargetConnectWhere;
  TargetCreateInput: TargetCreateInput;
  TargetEdge: TargetEdge;
  TargetOnCreateInput: TargetOnCreateInput;
  TargetOptions: TargetOptions;
  TargetSort: TargetSort;
  TargetUniqueWhere: TargetUniqueWhere;
  TargetUpdateInput: TargetUpdateInput;
  TargetWhere: TargetWhere;
  TargetsConnection: TargetsConnection;
  UpdateArrowsMutationResponse: UpdateArrowsMutationResponse;
  UpdateAthletesMutationResponse: UpdateAthletesMutationResponse;
  UpdateEventsMutationResponse: UpdateEventsMutationResponse;
  UpdateInfo: UpdateInfo;
  UpdateMatchesMutationResponse: UpdateMatchesMutationResponse;
  UpdateResultsMutationResponse: UpdateResultsMutationResponse;
  UpdateSetsMutationResponse: UpdateSetsMutationResponse;
  UpdateTargetsMutationResponse: UpdateTargetsMutationResponse;
};

export type ArrowResolvers<ContextType = any, ParentType extends ResolversParentTypes['Arrow'] = ResolversParentTypes['Arrow']> = {
  angle?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  offset?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  set?: Resolver<ResolversTypes['Set'], ParentType, ContextType, RequireFields<ArrowSetArgs, 'directed'>>;
  setAggregate?: Resolver<Maybe<ResolversTypes['ArrowSetSetAggregationSelection']>, ParentType, ContextType, RequireFields<ArrowSetAggregateArgs, 'directed'>>;
  setConnection?: Resolver<ResolversTypes['ArrowSetConnection'], ParentType, ContextType, RequireFields<ArrowSetConnectionArgs, 'directed'>>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArrowAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArrowAggregateSelection'] = ResolversParentTypes['ArrowAggregateSelection']> = {
  angle?: Resolver<ResolversTypes['IntAggregateSelectionNullable'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  offset?: Resolver<ResolversTypes['IntAggregateSelectionNonNullable'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['IntAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArrowEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArrowEdge'] = ResolversParentTypes['ArrowEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Arrow'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArrowSetConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArrowSetConnection'] = ResolversParentTypes['ArrowSetConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ArrowSetRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArrowSetRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArrowSetRelationship'] = ResolversParentTypes['ArrowSetRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Set'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArrowSetSetAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArrowSetSetAggregationSelection'] = ResolversParentTypes['ArrowSetSetAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['ArrowSetSetNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArrowSetSetNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArrowSetSetNodeAggregateSelection'] = ResolversParentTypes['ArrowSetSetNodeAggregateSelection']> = {
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArrowsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArrowsConnection'] = ResolversParentTypes['ArrowsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ArrowEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AthleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['Athlete'] = ResolversParentTypes['Athlete']> = {
  activeNation?: Resolver<ResolversTypes['NationCode'], ParentType, ContextType>;
  elimRating?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  familyName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  givenName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  matches?: Resolver<Array<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<AthleteMatchesArgs, 'directed'>>;
  matchesAggregate?: Resolver<Maybe<ResolversTypes['AthleteEventMatchesAggregationSelection']>, ParentType, ContextType, RequireFields<AthleteMatchesAggregateArgs, 'directed'>>;
  matchesConnection?: Resolver<ResolversTypes['AthleteMatchesConnection'], ParentType, ContextType, RequireFields<AthleteMatchesConnectionArgs, 'directed'>>;
  qualRating?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results?: Resolver<Array<ResolversTypes['Result']>, ParentType, ContextType, RequireFields<AthleteResultsArgs, 'directed'>>;
  resultsAggregate?: Resolver<Maybe<ResolversTypes['AthleteResultResultsAggregationSelection']>, ParentType, ContextType, RequireFields<AthleteResultsAggregateArgs, 'directed'>>;
  resultsConnection?: Resolver<ResolversTypes['AthleteResultsConnection'], ParentType, ContextType, RequireFields<AthleteResultsConnectionArgs, 'directed'>>;
  sets?: Resolver<Array<ResolversTypes['Set']>, ParentType, ContextType, RequireFields<AthleteSetsArgs, 'directed'>>;
  setsAggregate?: Resolver<Maybe<ResolversTypes['AthleteSetSetsAggregationSelection']>, ParentType, ContextType, RequireFields<AthleteSetsAggregateArgs, 'directed'>>;
  setsConnection?: Resolver<ResolversTypes['AthleteSetsConnection'], ParentType, ContextType, RequireFields<AthleteSetsConnectionArgs, 'directed'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AthleteAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AthleteAggregateSelection'] = ResolversParentTypes['AthleteAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  elimRating?: Resolver<ResolversTypes['IntAggregateSelectionNonNullable'], ParentType, ContextType>;
  familyName?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  givenName?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  qualRating?: Resolver<ResolversTypes['IntAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AthleteEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AthleteEdge'] = ResolversParentTypes['AthleteEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Athlete'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AthleteEventMatchesAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AthleteEventMatchesAggregationSelection'] = ResolversParentTypes['AthleteEventMatchesAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edge?: Resolver<Maybe<ResolversTypes['AthleteEventMatchesEdgeAggregateSelection']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['AthleteEventMatchesNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AthleteEventMatchesEdgeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AthleteEventMatchesEdgeAggregateSelection'] = ResolversParentTypes['AthleteEventMatchesEdgeAggregateSelection']> = {
  deltaR?: Resolver<ResolversTypes['IntAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AthleteEventMatchesNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AthleteEventMatchesNodeAggregateSelection'] = ResolversParentTypes['AthleteEventMatchesNodeAggregateSelection']> = {
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AthleteMatchResolvers<ContextType = any, ParentType extends ResolversParentTypes['AthleteMatch'] = ResolversParentTypes['AthleteMatch']> = {
  __resolveType: TypeResolveFn<'AthleteMatchesRelationship' | 'MatchAthletesRelationship', ParentType, ContextType>;
  deltaR?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  division?: Resolver<ResolversTypes['Division'], ParentType, ContextType>;
  gender?: Resolver<ResolversTypes['Gender'], ParentType, ContextType>;
  nation?: Resolver<ResolversTypes['NationCode'], ParentType, ContextType>;
};

export type AthleteMatchesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AthleteMatchesConnection'] = ResolversParentTypes['AthleteMatchesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['AthleteMatchesRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AthleteMatchesRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['AthleteMatchesRelationship'] = ResolversParentTypes['AthleteMatchesRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  deltaR?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  division?: Resolver<ResolversTypes['Division'], ParentType, ContextType>;
  gender?: Resolver<ResolversTypes['Gender'], ParentType, ContextType>;
  nation?: Resolver<ResolversTypes['NationCode'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Event'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AthleteResultResultsAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AthleteResultResultsAggregationSelection'] = ResolversParentTypes['AthleteResultResultsAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['AthleteResultResultsNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AthleteResultResultsNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AthleteResultResultsNodeAggregateSelection'] = ResolversParentTypes['AthleteResultResultsNodeAggregateSelection']> = {
  deltaR?: Resolver<ResolversTypes['IntAggregateSelectionNullable'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AthleteResultsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AthleteResultsConnection'] = ResolversParentTypes['AthleteResultsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['AthleteResultsRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AthleteResultsRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['AthleteResultsRelationship'] = ResolversParentTypes['AthleteResultsRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Result'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AthleteSetSetsAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AthleteSetSetsAggregationSelection'] = ResolversParentTypes['AthleteSetSetsAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['AthleteSetSetsNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AthleteSetSetsNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AthleteSetSetsNodeAggregateSelection'] = ResolversParentTypes['AthleteSetSetsNodeAggregateSelection']> = {
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AthleteSetsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AthleteSetsConnection'] = ResolversParentTypes['AthleteSetsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['AthleteSetsRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AthleteSetsRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['AthleteSetsRelationship'] = ResolversParentTypes['AthleteSetsRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Set'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AthletesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AthletesConnection'] = ResolversParentTypes['AthletesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['AthleteEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateArrowsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateArrowsMutationResponse'] = ResolversParentTypes['CreateArrowsMutationResponse']> = {
  arrows?: Resolver<Array<ResolversTypes['Arrow']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateAthletesMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateAthletesMutationResponse'] = ResolversParentTypes['CreateAthletesMutationResponse']> = {
  athletes?: Resolver<Array<ResolversTypes['Athlete']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateEventsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateEventsMutationResponse'] = ResolversParentTypes['CreateEventsMutationResponse']> = {
  events?: Resolver<Array<ResolversTypes['Event']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateInfo'] = ResolversParentTypes['CreateInfo']> = {
  bookmark?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodesCreated?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  relationshipsCreated?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateMatchesMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateMatchesMutationResponse'] = ResolversParentTypes['CreateMatchesMutationResponse']> = {
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  matches?: Resolver<Array<ResolversTypes['Match']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateResultsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateResultsMutationResponse'] = ResolversParentTypes['CreateResultsMutationResponse']> = {
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  results?: Resolver<Array<ResolversTypes['Result']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateSetsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateSetsMutationResponse'] = ResolversParentTypes['CreateSetsMutationResponse']> = {
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  sets?: Resolver<Array<ResolversTypes['Set']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateTargetsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateTargetsMutationResponse'] = ResolversParentTypes['CreateTargetsMutationResponse']> = {
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  targets?: Resolver<Array<ResolversTypes['Target']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteInfo'] = ResolversParentTypes['DeleteInfo']> = {
  bookmark?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodesDeleted?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  relationshipsDeleted?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventResolvers<ContextType = any, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = {
  complete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  matches?: Resolver<Array<ResolversTypes['Match']>, ParentType, ContextType, RequireFields<EventMatchesArgs, 'directed'>>;
  matchesAggregate?: Resolver<Maybe<ResolversTypes['EventMatchMatchesAggregationSelection']>, ParentType, ContextType, RequireFields<EventMatchesAggregateArgs, 'directed'>>;
  matchesConnection?: Resolver<ResolversTypes['EventMatchesConnection'], ParentType, ContextType, RequireFields<EventMatchesConnectionArgs, 'directed'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventAggregateSelection'] = ResolversParentTypes['EventAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventEdge'] = ResolversParentTypes['EventEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Event'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventMatchMatchesAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventMatchMatchesAggregationSelection'] = ResolversParentTypes['EventMatchMatchesAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['EventMatchMatchesNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventMatchMatchesNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventMatchMatchesNodeAggregateSelection'] = ResolversParentTypes['EventMatchMatchesNodeAggregateSelection']> = {
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventMatchesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventMatchesConnection'] = ResolversParentTypes['EventMatchesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['EventMatchesRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventMatchesRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventMatchesRelationship'] = ResolversParentTypes['EventMatchesRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Match'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventsConnection'] = ResolversParentTypes['EventsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['EventEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IdAggregateSelectionNonNullableResolvers<ContextType = any, ParentType extends ResolversParentTypes['IDAggregateSelectionNonNullable'] = ResolversParentTypes['IDAggregateSelectionNonNullable']> = {
  longest?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  shortest?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IntAggregateSelectionNonNullableResolvers<ContextType = any, ParentType extends ResolversParentTypes['IntAggregateSelectionNonNullable'] = ResolversParentTypes['IntAggregateSelectionNonNullable']> = {
  average?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  max?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  min?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sum?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IntAggregateSelectionNullableResolvers<ContextType = any, ParentType extends ResolversParentTypes['IntAggregateSelectionNullable'] = ResolversParentTypes['IntAggregateSelectionNullable']> = {
  average?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchResolvers<ContextType = any, ParentType extends ResolversParentTypes['Match'] = ResolversParentTypes['Match']> = {
  athletes?: Resolver<Array<ResolversTypes['Athlete']>, ParentType, ContextType, RequireFields<MatchAthletesArgs, 'directed'>>;
  athletesAggregate?: Resolver<Maybe<ResolversTypes['MatchAthleteAthletesAggregationSelection']>, ParentType, ContextType, RequireFields<MatchAthletesAggregateArgs, 'directed'>>;
  athletesConnection?: Resolver<ResolversTypes['MatchAthletesConnection'], ParentType, ContextType, RequireFields<MatchAthletesConnectionArgs, 'directed'>>;
  complete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<MatchEventArgs, 'directed'>>;
  eventAggregate?: Resolver<Maybe<ResolversTypes['MatchEventEventAggregationSelection']>, ParentType, ContextType, RequireFields<MatchEventAggregateArgs, 'directed'>>;
  eventConnection?: Resolver<ResolversTypes['MatchEventConnection'], ParentType, ContextType, RequireFields<MatchEventConnectionArgs, 'directed'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  sets?: Resolver<Array<ResolversTypes['Set']>, ParentType, ContextType, RequireFields<MatchSetsArgs, 'directed'>>;
  setsAggregate?: Resolver<Maybe<ResolversTypes['MatchSetSetsAggregationSelection']>, ParentType, ContextType, RequireFields<MatchSetsAggregateArgs, 'directed'>>;
  setsConnection?: Resolver<ResolversTypes['MatchSetsConnection'], ParentType, ContextType, RequireFields<MatchSetsConnectionArgs, 'directed'>>;
  style?: Resolver<ResolversTypes['MatchStyle'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchAggregateSelection'] = ResolversParentTypes['MatchAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchAthleteAthletesAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchAthleteAthletesAggregationSelection'] = ResolversParentTypes['MatchAthleteAthletesAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edge?: Resolver<Maybe<ResolversTypes['MatchAthleteAthletesEdgeAggregateSelection']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['MatchAthleteAthletesNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchAthleteAthletesEdgeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchAthleteAthletesEdgeAggregateSelection'] = ResolversParentTypes['MatchAthleteAthletesEdgeAggregateSelection']> = {
  deltaR?: Resolver<ResolversTypes['IntAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchAthleteAthletesNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchAthleteAthletesNodeAggregateSelection'] = ResolversParentTypes['MatchAthleteAthletesNodeAggregateSelection']> = {
  elimRating?: Resolver<ResolversTypes['IntAggregateSelectionNonNullable'], ParentType, ContextType>;
  familyName?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  givenName?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  qualRating?: Resolver<ResolversTypes['IntAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchAthletesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchAthletesConnection'] = ResolversParentTypes['MatchAthletesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['MatchAthletesRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchAthletesRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchAthletesRelationship'] = ResolversParentTypes['MatchAthletesRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  deltaR?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  division?: Resolver<ResolversTypes['Division'], ParentType, ContextType>;
  gender?: Resolver<ResolversTypes['Gender'], ParentType, ContextType>;
  nation?: Resolver<ResolversTypes['NationCode'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Athlete'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchEdge'] = ResolversParentTypes['MatchEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Match'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchEventConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchEventConnection'] = ResolversParentTypes['MatchEventConnection']> = {
  edges?: Resolver<Array<ResolversTypes['MatchEventRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchEventEventAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchEventEventAggregationSelection'] = ResolversParentTypes['MatchEventEventAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['MatchEventEventNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchEventEventNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchEventEventNodeAggregateSelection'] = ResolversParentTypes['MatchEventEventNodeAggregateSelection']> = {
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchEventRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchEventRelationship'] = ResolversParentTypes['MatchEventRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Event'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchSetSetsAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchSetSetsAggregationSelection'] = ResolversParentTypes['MatchSetSetsAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['MatchSetSetsNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchSetSetsNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchSetSetsNodeAggregateSelection'] = ResolversParentTypes['MatchSetSetsNodeAggregateSelection']> = {
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchSetsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchSetsConnection'] = ResolversParentTypes['MatchSetsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['MatchSetsRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchSetsRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchSetsRelationship'] = ResolversParentTypes['MatchSetsRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Set'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchesConnection'] = ResolversParentTypes['MatchesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['MatchEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createArrows?: Resolver<ResolversTypes['CreateArrowsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateArrowsArgs, 'input'>>;
  createAthletes?: Resolver<ResolversTypes['CreateAthletesMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateAthletesArgs, 'input'>>;
  createEvents?: Resolver<ResolversTypes['CreateEventsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateEventsArgs, 'input'>>;
  createMatches?: Resolver<ResolversTypes['CreateMatchesMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateMatchesArgs, 'input'>>;
  createResults?: Resolver<ResolversTypes['CreateResultsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateResultsArgs, 'input'>>;
  createSets?: Resolver<ResolversTypes['CreateSetsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateSetsArgs, 'input'>>;
  createTargets?: Resolver<ResolversTypes['CreateTargetsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateTargetsArgs, 'input'>>;
  deleteArrows?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteArrowsArgs>>;
  deleteAthletes?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteAthletesArgs>>;
  deleteEvents?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteEventsArgs>>;
  deleteMatches?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteMatchesArgs>>;
  deleteResults?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteResultsArgs>>;
  deleteSets?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteSetsArgs>>;
  deleteTargets?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteTargetsArgs>>;
  updateArrows?: Resolver<ResolversTypes['UpdateArrowsMutationResponse'], ParentType, ContextType, Partial<MutationUpdateArrowsArgs>>;
  updateAthletes?: Resolver<ResolversTypes['UpdateAthletesMutationResponse'], ParentType, ContextType, Partial<MutationUpdateAthletesArgs>>;
  updateEvents?: Resolver<ResolversTypes['UpdateEventsMutationResponse'], ParentType, ContextType, Partial<MutationUpdateEventsArgs>>;
  updateMatches?: Resolver<ResolversTypes['UpdateMatchesMutationResponse'], ParentType, ContextType, Partial<MutationUpdateMatchesArgs>>;
  updateResults?: Resolver<ResolversTypes['UpdateResultsMutationResponse'], ParentType, ContextType, Partial<MutationUpdateResultsArgs>>;
  updateSets?: Resolver<ResolversTypes['UpdateSetsMutationResponse'], ParentType, ContextType, Partial<MutationUpdateSetsArgs>>;
  updateTargets?: Resolver<ResolversTypes['UpdateTargetsMutationResponse'], ParentType, ContextType, Partial<MutationUpdateTargetsArgs>>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  arrows?: Resolver<Array<ResolversTypes['Arrow']>, ParentType, ContextType, Partial<QueryArrowsArgs>>;
  arrowsAggregate?: Resolver<ResolversTypes['ArrowAggregateSelection'], ParentType, ContextType, Partial<QueryArrowsAggregateArgs>>;
  arrowsConnection?: Resolver<ResolversTypes['ArrowsConnection'], ParentType, ContextType, Partial<QueryArrowsConnectionArgs>>;
  athletes?: Resolver<Array<ResolversTypes['Athlete']>, ParentType, ContextType, Partial<QueryAthletesArgs>>;
  athletesAggregate?: Resolver<ResolversTypes['AthleteAggregateSelection'], ParentType, ContextType, Partial<QueryAthletesAggregateArgs>>;
  athletesConnection?: Resolver<ResolversTypes['AthletesConnection'], ParentType, ContextType, Partial<QueryAthletesConnectionArgs>>;
  events?: Resolver<Array<ResolversTypes['Event']>, ParentType, ContextType, Partial<QueryEventsArgs>>;
  eventsAggregate?: Resolver<ResolversTypes['EventAggregateSelection'], ParentType, ContextType, Partial<QueryEventsAggregateArgs>>;
  eventsConnection?: Resolver<ResolversTypes['EventsConnection'], ParentType, ContextType, Partial<QueryEventsConnectionArgs>>;
  matches?: Resolver<Array<ResolversTypes['Match']>, ParentType, ContextType, Partial<QueryMatchesArgs>>;
  matchesAggregate?: Resolver<ResolversTypes['MatchAggregateSelection'], ParentType, ContextType, Partial<QueryMatchesAggregateArgs>>;
  matchesConnection?: Resolver<ResolversTypes['MatchesConnection'], ParentType, ContextType, Partial<QueryMatchesConnectionArgs>>;
  results?: Resolver<Array<ResolversTypes['Result']>, ParentType, ContextType, Partial<QueryResultsArgs>>;
  resultsAggregate?: Resolver<ResolversTypes['ResultAggregateSelection'], ParentType, ContextType, Partial<QueryResultsAggregateArgs>>;
  resultsConnection?: Resolver<ResolversTypes['ResultsConnection'], ParentType, ContextType, Partial<QueryResultsConnectionArgs>>;
  sets?: Resolver<Array<ResolversTypes['Set']>, ParentType, ContextType, Partial<QuerySetsArgs>>;
  setsAggregate?: Resolver<ResolversTypes['SetAggregateSelection'], ParentType, ContextType, Partial<QuerySetsAggregateArgs>>;
  setsConnection?: Resolver<ResolversTypes['SetsConnection'], ParentType, ContextType, Partial<QuerySetsConnectionArgs>>;
  targets?: Resolver<Array<ResolversTypes['Target']>, ParentType, ContextType, Partial<QueryTargetsArgs>>;
  targetsAggregate?: Resolver<ResolversTypes['TargetAggregateSelection'], ParentType, ContextType, Partial<QueryTargetsAggregateArgs>>;
  targetsConnection?: Resolver<ResolversTypes['TargetsConnection'], ParentType, ContextType, Partial<QueryTargetsConnectionArgs>>;
};

export type ResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['Result'] = ResolversParentTypes['Result']> = {
  athlete?: Resolver<ResolversTypes['Athlete'], ParentType, ContextType, RequireFields<ResultAthleteArgs, 'directed'>>;
  athleteAggregate?: Resolver<Maybe<ResolversTypes['ResultAthleteAthleteAggregationSelection']>, ParentType, ContextType, RequireFields<ResultAthleteAggregateArgs, 'directed'>>;
  athleteConnection?: Resolver<ResolversTypes['ResultAthleteConnection'], ParentType, ContextType, RequireFields<ResultAthleteConnectionArgs, 'directed'>>;
  deltaR?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  result?: Resolver<ResolversTypes['Result'], ParentType, ContextType>;
  sets?: Resolver<Array<ResolversTypes['Set']>, ParentType, ContextType, RequireFields<ResultSetsArgs, 'directed'>>;
  setsAggregate?: Resolver<Maybe<ResolversTypes['ResultSetSetsAggregationSelection']>, ParentType, ContextType, RequireFields<ResultSetsAggregateArgs, 'directed'>>;
  setsConnection?: Resolver<ResolversTypes['ResultSetsConnection'], ParentType, ContextType, RequireFields<ResultSetsConnectionArgs, 'directed'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResultAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResultAggregateSelection'] = ResolversParentTypes['ResultAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  deltaR?: Resolver<ResolversTypes['IntAggregateSelectionNullable'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResultAthleteAthleteAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResultAthleteAthleteAggregationSelection'] = ResolversParentTypes['ResultAthleteAthleteAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['ResultAthleteAthleteNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResultAthleteAthleteNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResultAthleteAthleteNodeAggregateSelection'] = ResolversParentTypes['ResultAthleteAthleteNodeAggregateSelection']> = {
  elimRating?: Resolver<ResolversTypes['IntAggregateSelectionNonNullable'], ParentType, ContextType>;
  familyName?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  givenName?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  qualRating?: Resolver<ResolversTypes['IntAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResultAthleteConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResultAthleteConnection'] = ResolversParentTypes['ResultAthleteConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ResultAthleteRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResultAthleteRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResultAthleteRelationship'] = ResolversParentTypes['ResultAthleteRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Athlete'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResultEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResultEdge'] = ResolversParentTypes['ResultEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Result'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResultSetSetsAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResultSetSetsAggregationSelection'] = ResolversParentTypes['ResultSetSetsAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['ResultSetSetsNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResultSetSetsNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResultSetSetsNodeAggregateSelection'] = ResolversParentTypes['ResultSetSetsNodeAggregateSelection']> = {
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResultSetsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResultSetsConnection'] = ResolversParentTypes['ResultSetsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ResultSetsRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResultSetsRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResultSetsRelationship'] = ResolversParentTypes['ResultSetsRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Set'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResultsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResultsConnection'] = ResolversParentTypes['ResultsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ResultEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Set'] = ResolversParentTypes['Set']> = {
  arrows?: Resolver<Array<ResolversTypes['Arrow']>, ParentType, ContextType, RequireFields<SetArrowsArgs, 'directed'>>;
  arrowsAggregate?: Resolver<Maybe<ResolversTypes['SetArrowArrowsAggregationSelection']>, ParentType, ContextType, RequireFields<SetArrowsAggregateArgs, 'directed'>>;
  arrowsConnection?: Resolver<ResolversTypes['SetArrowsConnection'], ParentType, ContextType, RequireFields<SetArrowsConnectionArgs, 'directed'>>;
  arrowsInOrder?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  athlete?: Resolver<ResolversTypes['Athlete'], ParentType, ContextType, RequireFields<SetAthleteArgs, 'directed'>>;
  athleteAggregate?: Resolver<Maybe<ResolversTypes['SetAthleteAthleteAggregationSelection']>, ParentType, ContextType, RequireFields<SetAthleteAggregateArgs, 'directed'>>;
  athleteConnection?: Resolver<ResolversTypes['SetAthleteConnection'], ParentType, ContextType, RequireFields<SetAthleteConnectionArgs, 'directed'>>;
  complete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  match?: Resolver<Maybe<ResolversTypes['Match']>, ParentType, ContextType, RequireFields<SetMatchArgs, 'directed'>>;
  matchAggregate?: Resolver<Maybe<ResolversTypes['SetMatchMatchAggregationSelection']>, ParentType, ContextType, RequireFields<SetMatchAggregateArgs, 'directed'>>;
  matchConnection?: Resolver<ResolversTypes['SetMatchConnection'], ParentType, ContextType, RequireFields<SetMatchConnectionArgs, 'directed'>>;
  sets?: Resolver<Array<ResolversTypes['Set']>, ParentType, ContextType, RequireFields<SetSetsArgs, 'directed'>>;
  setsAggregate?: Resolver<Maybe<ResolversTypes['SetSetSetsAggregationSelection']>, ParentType, ContextType, RequireFields<SetSetsAggregateArgs, 'directed'>>;
  setsConnection?: Resolver<ResolversTypes['SetSetsConnection'], ParentType, ContextType, RequireFields<SetSetsConnectionArgs, 'directed'>>;
  target?: Resolver<ResolversTypes['Target'], ParentType, ContextType, RequireFields<SetTargetArgs, 'directed'>>;
  targetAggregate?: Resolver<Maybe<ResolversTypes['SetTargetTargetAggregationSelection']>, ParentType, ContextType, RequireFields<SetTargetAggregateArgs, 'directed'>>;
  targetConnection?: Resolver<ResolversTypes['SetTargetConnection'], ParentType, ContextType, RequireFields<SetTargetConnectionArgs, 'directed'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SetAggregateSelection'] = ResolversParentTypes['SetAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetArrowArrowsAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SetArrowArrowsAggregationSelection'] = ResolversParentTypes['SetArrowArrowsAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['SetArrowArrowsNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetArrowArrowsNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SetArrowArrowsNodeAggregateSelection'] = ResolversParentTypes['SetArrowArrowsNodeAggregateSelection']> = {
  angle?: Resolver<ResolversTypes['IntAggregateSelectionNullable'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  offset?: Resolver<ResolversTypes['IntAggregateSelectionNonNullable'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['IntAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetArrowsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SetArrowsConnection'] = ResolversParentTypes['SetArrowsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['SetArrowsRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetArrowsRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['SetArrowsRelationship'] = ResolversParentTypes['SetArrowsRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Arrow'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetAthleteAthleteAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SetAthleteAthleteAggregationSelection'] = ResolversParentTypes['SetAthleteAthleteAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['SetAthleteAthleteNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetAthleteAthleteNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SetAthleteAthleteNodeAggregateSelection'] = ResolversParentTypes['SetAthleteAthleteNodeAggregateSelection']> = {
  elimRating?: Resolver<ResolversTypes['IntAggregateSelectionNonNullable'], ParentType, ContextType>;
  familyName?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  givenName?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  qualRating?: Resolver<ResolversTypes['IntAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetAthleteConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SetAthleteConnection'] = ResolversParentTypes['SetAthleteConnection']> = {
  edges?: Resolver<Array<ResolversTypes['SetAthleteRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetAthleteRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['SetAthleteRelationship'] = ResolversParentTypes['SetAthleteRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Athlete'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SetEdge'] = ResolversParentTypes['SetEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Set'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetMatchConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SetMatchConnection'] = ResolversParentTypes['SetMatchConnection']> = {
  edges?: Resolver<Array<ResolversTypes['SetMatchRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetMatchMatchAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SetMatchMatchAggregationSelection'] = ResolversParentTypes['SetMatchMatchAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['SetMatchMatchNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetMatchMatchNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SetMatchMatchNodeAggregateSelection'] = ResolversParentTypes['SetMatchMatchNodeAggregateSelection']> = {
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetMatchRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['SetMatchRelationship'] = ResolversParentTypes['SetMatchRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Match'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetSetSetsAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SetSetSetsAggregationSelection'] = ResolversParentTypes['SetSetSetsAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['SetSetSetsNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetSetSetsNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SetSetSetsNodeAggregateSelection'] = ResolversParentTypes['SetSetSetsNodeAggregateSelection']> = {
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetSetsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SetSetsConnection'] = ResolversParentTypes['SetSetsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['SetSetsRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetSetsRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['SetSetsRelationship'] = ResolversParentTypes['SetSetsRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Set'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetTargetConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SetTargetConnection'] = ResolversParentTypes['SetTargetConnection']> = {
  edges?: Resolver<Array<ResolversTypes['SetTargetRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetTargetRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['SetTargetRelationship'] = ResolversParentTypes['SetTargetRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Target'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetTargetTargetAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SetTargetTargetAggregationSelection'] = ResolversParentTypes['SetTargetTargetAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['SetTargetTargetNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetTargetTargetNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SetTargetTargetNodeAggregateSelection'] = ResolversParentTypes['SetTargetTargetNodeAggregateSelection']> = {
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  max?: Resolver<ResolversTypes['IntAggregateSelectionNonNullable'], ParentType, ContextType>;
  min?: Resolver<ResolversTypes['IntAggregateSelectionNonNullable'], ParentType, ContextType>;
  radius?: Resolver<ResolversTypes['IntAggregateSelectionNonNullable'], ParentType, ContextType>;
  rings?: Resolver<ResolversTypes['IntAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SetsConnection'] = ResolversParentTypes['SetsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['SetEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StringAggregateSelectionNonNullableResolvers<ContextType = any, ParentType extends ResolversParentTypes['StringAggregateSelectionNonNullable'] = ResolversParentTypes['StringAggregateSelectionNonNullable']> = {
  longest?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shortest?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TargetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Target'] = ResolversParentTypes['Target']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  max?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  min?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  radius?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rings?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  xRing?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TargetAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TargetAggregateSelection'] = ResolversParentTypes['TargetAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  max?: Resolver<ResolversTypes['IntAggregateSelectionNonNullable'], ParentType, ContextType>;
  min?: Resolver<ResolversTypes['IntAggregateSelectionNonNullable'], ParentType, ContextType>;
  radius?: Resolver<ResolversTypes['IntAggregateSelectionNonNullable'], ParentType, ContextType>;
  rings?: Resolver<ResolversTypes['IntAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TargetEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TargetEdge'] = ResolversParentTypes['TargetEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Target'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TargetsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TargetsConnection'] = ResolversParentTypes['TargetsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['TargetEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateArrowsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateArrowsMutationResponse'] = ResolversParentTypes['UpdateArrowsMutationResponse']> = {
  arrows?: Resolver<Array<ResolversTypes['Arrow']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateAthletesMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateAthletesMutationResponse'] = ResolversParentTypes['UpdateAthletesMutationResponse']> = {
  athletes?: Resolver<Array<ResolversTypes['Athlete']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateEventsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateEventsMutationResponse'] = ResolversParentTypes['UpdateEventsMutationResponse']> = {
  events?: Resolver<Array<ResolversTypes['Event']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateInfo'] = ResolversParentTypes['UpdateInfo']> = {
  bookmark?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodesCreated?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nodesDeleted?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  relationshipsCreated?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  relationshipsDeleted?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateMatchesMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateMatchesMutationResponse'] = ResolversParentTypes['UpdateMatchesMutationResponse']> = {
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  matches?: Resolver<Array<ResolversTypes['Match']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateResultsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateResultsMutationResponse'] = ResolversParentTypes['UpdateResultsMutationResponse']> = {
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  results?: Resolver<Array<ResolversTypes['Result']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateSetsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateSetsMutationResponse'] = ResolversParentTypes['UpdateSetsMutationResponse']> = {
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  sets?: Resolver<Array<ResolversTypes['Set']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateTargetsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateTargetsMutationResponse'] = ResolversParentTypes['UpdateTargetsMutationResponse']> = {
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  targets?: Resolver<Array<ResolversTypes['Target']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Arrow?: ArrowResolvers<ContextType>;
  ArrowAggregateSelection?: ArrowAggregateSelectionResolvers<ContextType>;
  ArrowEdge?: ArrowEdgeResolvers<ContextType>;
  ArrowSetConnection?: ArrowSetConnectionResolvers<ContextType>;
  ArrowSetRelationship?: ArrowSetRelationshipResolvers<ContextType>;
  ArrowSetSetAggregationSelection?: ArrowSetSetAggregationSelectionResolvers<ContextType>;
  ArrowSetSetNodeAggregateSelection?: ArrowSetSetNodeAggregateSelectionResolvers<ContextType>;
  ArrowsConnection?: ArrowsConnectionResolvers<ContextType>;
  Athlete?: AthleteResolvers<ContextType>;
  AthleteAggregateSelection?: AthleteAggregateSelectionResolvers<ContextType>;
  AthleteEdge?: AthleteEdgeResolvers<ContextType>;
  AthleteEventMatchesAggregationSelection?: AthleteEventMatchesAggregationSelectionResolvers<ContextType>;
  AthleteEventMatchesEdgeAggregateSelection?: AthleteEventMatchesEdgeAggregateSelectionResolvers<ContextType>;
  AthleteEventMatchesNodeAggregateSelection?: AthleteEventMatchesNodeAggregateSelectionResolvers<ContextType>;
  AthleteMatch?: AthleteMatchResolvers<ContextType>;
  AthleteMatchesConnection?: AthleteMatchesConnectionResolvers<ContextType>;
  AthleteMatchesRelationship?: AthleteMatchesRelationshipResolvers<ContextType>;
  AthleteResultResultsAggregationSelection?: AthleteResultResultsAggregationSelectionResolvers<ContextType>;
  AthleteResultResultsNodeAggregateSelection?: AthleteResultResultsNodeAggregateSelectionResolvers<ContextType>;
  AthleteResultsConnection?: AthleteResultsConnectionResolvers<ContextType>;
  AthleteResultsRelationship?: AthleteResultsRelationshipResolvers<ContextType>;
  AthleteSetSetsAggregationSelection?: AthleteSetSetsAggregationSelectionResolvers<ContextType>;
  AthleteSetSetsNodeAggregateSelection?: AthleteSetSetsNodeAggregateSelectionResolvers<ContextType>;
  AthleteSetsConnection?: AthleteSetsConnectionResolvers<ContextType>;
  AthleteSetsRelationship?: AthleteSetsRelationshipResolvers<ContextType>;
  AthletesConnection?: AthletesConnectionResolvers<ContextType>;
  CreateArrowsMutationResponse?: CreateArrowsMutationResponseResolvers<ContextType>;
  CreateAthletesMutationResponse?: CreateAthletesMutationResponseResolvers<ContextType>;
  CreateEventsMutationResponse?: CreateEventsMutationResponseResolvers<ContextType>;
  CreateInfo?: CreateInfoResolvers<ContextType>;
  CreateMatchesMutationResponse?: CreateMatchesMutationResponseResolvers<ContextType>;
  CreateResultsMutationResponse?: CreateResultsMutationResponseResolvers<ContextType>;
  CreateSetsMutationResponse?: CreateSetsMutationResponseResolvers<ContextType>;
  CreateTargetsMutationResponse?: CreateTargetsMutationResponseResolvers<ContextType>;
  DeleteInfo?: DeleteInfoResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  EventAggregateSelection?: EventAggregateSelectionResolvers<ContextType>;
  EventEdge?: EventEdgeResolvers<ContextType>;
  EventMatchMatchesAggregationSelection?: EventMatchMatchesAggregationSelectionResolvers<ContextType>;
  EventMatchMatchesNodeAggregateSelection?: EventMatchMatchesNodeAggregateSelectionResolvers<ContextType>;
  EventMatchesConnection?: EventMatchesConnectionResolvers<ContextType>;
  EventMatchesRelationship?: EventMatchesRelationshipResolvers<ContextType>;
  EventsConnection?: EventsConnectionResolvers<ContextType>;
  IDAggregateSelectionNonNullable?: IdAggregateSelectionNonNullableResolvers<ContextType>;
  IntAggregateSelectionNonNullable?: IntAggregateSelectionNonNullableResolvers<ContextType>;
  IntAggregateSelectionNullable?: IntAggregateSelectionNullableResolvers<ContextType>;
  Match?: MatchResolvers<ContextType>;
  MatchAggregateSelection?: MatchAggregateSelectionResolvers<ContextType>;
  MatchAthleteAthletesAggregationSelection?: MatchAthleteAthletesAggregationSelectionResolvers<ContextType>;
  MatchAthleteAthletesEdgeAggregateSelection?: MatchAthleteAthletesEdgeAggregateSelectionResolvers<ContextType>;
  MatchAthleteAthletesNodeAggregateSelection?: MatchAthleteAthletesNodeAggregateSelectionResolvers<ContextType>;
  MatchAthletesConnection?: MatchAthletesConnectionResolvers<ContextType>;
  MatchAthletesRelationship?: MatchAthletesRelationshipResolvers<ContextType>;
  MatchEdge?: MatchEdgeResolvers<ContextType>;
  MatchEventConnection?: MatchEventConnectionResolvers<ContextType>;
  MatchEventEventAggregationSelection?: MatchEventEventAggregationSelectionResolvers<ContextType>;
  MatchEventEventNodeAggregateSelection?: MatchEventEventNodeAggregateSelectionResolvers<ContextType>;
  MatchEventRelationship?: MatchEventRelationshipResolvers<ContextType>;
  MatchSetSetsAggregationSelection?: MatchSetSetsAggregationSelectionResolvers<ContextType>;
  MatchSetSetsNodeAggregateSelection?: MatchSetSetsNodeAggregateSelectionResolvers<ContextType>;
  MatchSetsConnection?: MatchSetsConnectionResolvers<ContextType>;
  MatchSetsRelationship?: MatchSetsRelationshipResolvers<ContextType>;
  MatchesConnection?: MatchesConnectionResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Result?: ResultResolvers<ContextType>;
  ResultAggregateSelection?: ResultAggregateSelectionResolvers<ContextType>;
  ResultAthleteAthleteAggregationSelection?: ResultAthleteAthleteAggregationSelectionResolvers<ContextType>;
  ResultAthleteAthleteNodeAggregateSelection?: ResultAthleteAthleteNodeAggregateSelectionResolvers<ContextType>;
  ResultAthleteConnection?: ResultAthleteConnectionResolvers<ContextType>;
  ResultAthleteRelationship?: ResultAthleteRelationshipResolvers<ContextType>;
  ResultEdge?: ResultEdgeResolvers<ContextType>;
  ResultSetSetsAggregationSelection?: ResultSetSetsAggregationSelectionResolvers<ContextType>;
  ResultSetSetsNodeAggregateSelection?: ResultSetSetsNodeAggregateSelectionResolvers<ContextType>;
  ResultSetsConnection?: ResultSetsConnectionResolvers<ContextType>;
  ResultSetsRelationship?: ResultSetsRelationshipResolvers<ContextType>;
  ResultsConnection?: ResultsConnectionResolvers<ContextType>;
  Set?: SetResolvers<ContextType>;
  SetAggregateSelection?: SetAggregateSelectionResolvers<ContextType>;
  SetArrowArrowsAggregationSelection?: SetArrowArrowsAggregationSelectionResolvers<ContextType>;
  SetArrowArrowsNodeAggregateSelection?: SetArrowArrowsNodeAggregateSelectionResolvers<ContextType>;
  SetArrowsConnection?: SetArrowsConnectionResolvers<ContextType>;
  SetArrowsRelationship?: SetArrowsRelationshipResolvers<ContextType>;
  SetAthleteAthleteAggregationSelection?: SetAthleteAthleteAggregationSelectionResolvers<ContextType>;
  SetAthleteAthleteNodeAggregateSelection?: SetAthleteAthleteNodeAggregateSelectionResolvers<ContextType>;
  SetAthleteConnection?: SetAthleteConnectionResolvers<ContextType>;
  SetAthleteRelationship?: SetAthleteRelationshipResolvers<ContextType>;
  SetEdge?: SetEdgeResolvers<ContextType>;
  SetMatchConnection?: SetMatchConnectionResolvers<ContextType>;
  SetMatchMatchAggregationSelection?: SetMatchMatchAggregationSelectionResolvers<ContextType>;
  SetMatchMatchNodeAggregateSelection?: SetMatchMatchNodeAggregateSelectionResolvers<ContextType>;
  SetMatchRelationship?: SetMatchRelationshipResolvers<ContextType>;
  SetSetSetsAggregationSelection?: SetSetSetsAggregationSelectionResolvers<ContextType>;
  SetSetSetsNodeAggregateSelection?: SetSetSetsNodeAggregateSelectionResolvers<ContextType>;
  SetSetsConnection?: SetSetsConnectionResolvers<ContextType>;
  SetSetsRelationship?: SetSetsRelationshipResolvers<ContextType>;
  SetTargetConnection?: SetTargetConnectionResolvers<ContextType>;
  SetTargetRelationship?: SetTargetRelationshipResolvers<ContextType>;
  SetTargetTargetAggregationSelection?: SetTargetTargetAggregationSelectionResolvers<ContextType>;
  SetTargetTargetNodeAggregateSelection?: SetTargetTargetNodeAggregateSelectionResolvers<ContextType>;
  SetsConnection?: SetsConnectionResolvers<ContextType>;
  StringAggregateSelectionNonNullable?: StringAggregateSelectionNonNullableResolvers<ContextType>;
  Target?: TargetResolvers<ContextType>;
  TargetAggregateSelection?: TargetAggregateSelectionResolvers<ContextType>;
  TargetEdge?: TargetEdgeResolvers<ContextType>;
  TargetsConnection?: TargetsConnectionResolvers<ContextType>;
  UpdateArrowsMutationResponse?: UpdateArrowsMutationResponseResolvers<ContextType>;
  UpdateAthletesMutationResponse?: UpdateAthletesMutationResponseResolvers<ContextType>;
  UpdateEventsMutationResponse?: UpdateEventsMutationResponseResolvers<ContextType>;
  UpdateInfo?: UpdateInfoResolvers<ContextType>;
  UpdateMatchesMutationResponse?: UpdateMatchesMutationResponseResolvers<ContextType>;
  UpdateResultsMutationResponse?: UpdateResultsMutationResponseResolvers<ContextType>;
  UpdateSetsMutationResponse?: UpdateSetsMutationResponseResolvers<ContextType>;
  UpdateTargetsMutationResponse?: UpdateTargetsMutationResponseResolvers<ContextType>;
};

