import client from "../apolloClient";
import type {
  ApolloQueryResult,
  ObservableQuery,
  WatchQueryOptions,
} from "@apollo/client";
import { readable } from "svelte/store";
import type { Readable } from "svelte/store";
import gql from "graphql-tag";
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  ObjectID: any;
};

export type Address = {
  __typename?: "Address";
  address?: Maybe<Scalars["String"]>;
  city?: Maybe<Scalars["String"]>;
  state?: Maybe<Scalars["String"]>;
};

export type Capsule = {
  __typename?: "Capsule";
  dragon?: Maybe<Dragon>;
  id?: Maybe<Scalars["ID"]>;
  landings?: Maybe<Scalars["Int"]>;
  missions?: Maybe<Array<Maybe<CapsuleMission>>>;
  original_launch?: Maybe<Scalars["Date"]>;
  reuse_count?: Maybe<Scalars["Int"]>;
  status?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

export type CapsuleMission = {
  __typename?: "CapsuleMission";
  flight?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

export type CapsulesFind = {
  id?: InputMaybe<Scalars["ID"]>;
  landings?: InputMaybe<Scalars["Int"]>;
  mission?: InputMaybe<Scalars["String"]>;
  original_launch?: InputMaybe<Scalars["Date"]>;
  reuse_count?: InputMaybe<Scalars["Int"]>;
  status?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
};

export type Core = {
  __typename?: "Core";
  asds_attempts?: Maybe<Scalars["Int"]>;
  asds_landings?: Maybe<Scalars["Int"]>;
  block?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["ID"]>;
  missions?: Maybe<Array<Maybe<CapsuleMission>>>;
  original_launch?: Maybe<Scalars["Date"]>;
  reuse_count?: Maybe<Scalars["Int"]>;
  rtls_attempts?: Maybe<Scalars["Int"]>;
  rtls_landings?: Maybe<Scalars["Int"]>;
  status?: Maybe<Scalars["String"]>;
  water_landing?: Maybe<Scalars["Boolean"]>;
};

export type CoreMission = {
  __typename?: "CoreMission";
  flight?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

export type CoresFind = {
  asds_attempts?: InputMaybe<Scalars["Int"]>;
  asds_landings?: InputMaybe<Scalars["Int"]>;
  block?: InputMaybe<Scalars["Int"]>;
  id?: InputMaybe<Scalars["String"]>;
  missions?: InputMaybe<Scalars["String"]>;
  original_launch?: InputMaybe<Scalars["Date"]>;
  reuse_count?: InputMaybe<Scalars["Int"]>;
  rtls_attempts?: InputMaybe<Scalars["Int"]>;
  rtls_landings?: InputMaybe<Scalars["Int"]>;
  status?: InputMaybe<Scalars["String"]>;
  water_landing?: InputMaybe<Scalars["Boolean"]>;
};

export type Distance = {
  __typename?: "Distance";
  feet?: Maybe<Scalars["Float"]>;
  meters?: Maybe<Scalars["Float"]>;
};

export type Dragon = {
  __typename?: "Dragon";
  active?: Maybe<Scalars["Boolean"]>;
  crew_capacity?: Maybe<Scalars["Int"]>;
  description?: Maybe<Scalars["String"]>;
  diameter?: Maybe<Distance>;
  dry_mass_kg?: Maybe<Scalars["Int"]>;
  dry_mass_lb?: Maybe<Scalars["Int"]>;
  first_flight?: Maybe<Scalars["String"]>;
  heat_shield?: Maybe<DragonHeatShield>;
  height_w_trunk?: Maybe<Distance>;
  id?: Maybe<Scalars["ID"]>;
  launch_payload_mass?: Maybe<Mass>;
  launch_payload_vol?: Maybe<Volume>;
  name?: Maybe<Scalars["String"]>;
  orbit_duration_yr?: Maybe<Scalars["Int"]>;
  pressurized_capsule?: Maybe<DragonPressurizedCapsule>;
  return_payload_mass?: Maybe<Mass>;
  return_payload_vol?: Maybe<Volume>;
  sidewall_angle_deg?: Maybe<Scalars["Float"]>;
  thrusters?: Maybe<Array<Maybe<DragonThrust>>>;
  trunk?: Maybe<DragonTrunk>;
  type?: Maybe<Scalars["String"]>;
  wikipedia?: Maybe<Scalars["String"]>;
};

export type DragonHeatShield = {
  __typename?: "DragonHeatShield";
  dev_partner?: Maybe<Scalars["String"]>;
  material?: Maybe<Scalars["String"]>;
  size_meters?: Maybe<Scalars["Float"]>;
  temp_degrees?: Maybe<Scalars["Int"]>;
};

export type DragonPressurizedCapsule = {
  __typename?: "DragonPressurizedCapsule";
  payload_volume?: Maybe<Volume>;
};

export type DragonThrust = {
  __typename?: "DragonThrust";
  amount?: Maybe<Scalars["Int"]>;
  fuel_1?: Maybe<Scalars["String"]>;
  fuel_2?: Maybe<Scalars["String"]>;
  pods?: Maybe<Scalars["Int"]>;
  thrust?: Maybe<Force>;
  type?: Maybe<Scalars["String"]>;
};

export type DragonTrunk = {
  __typename?: "DragonTrunk";
  cargo?: Maybe<DragonTrunkCargo>;
  trunk_volume?: Maybe<Volume>;
};

export type DragonTrunkCargo = {
  __typename?: "DragonTrunkCargo";
  solar_array?: Maybe<Scalars["Int"]>;
  unpressurized_cargo?: Maybe<Scalars["Boolean"]>;
};

export type Force = {
  __typename?: "Force";
  kN?: Maybe<Scalars["Float"]>;
  lbf?: Maybe<Scalars["Float"]>;
};

export type HistoriesResult = {
  __typename?: "HistoriesResult";
  data?: Maybe<Array<Maybe<History>>>;
  result?: Maybe<Result>;
};

export type History = {
  __typename?: "History";
  details?: Maybe<Scalars["String"]>;
  event_date_unix?: Maybe<Scalars["Date"]>;
  event_date_utc?: Maybe<Scalars["Date"]>;
  flight?: Maybe<Launch>;
  id?: Maybe<Scalars["ID"]>;
  links?: Maybe<Link>;
  title?: Maybe<Scalars["String"]>;
};

export type HistoryFind = {
  end?: InputMaybe<Scalars["Date"]>;
  flight_number?: InputMaybe<Scalars["Int"]>;
  id?: InputMaybe<Scalars["ID"]>;
  start?: InputMaybe<Scalars["Date"]>;
};

export type Info = {
  __typename?: "Info";
  ceo?: Maybe<Scalars["String"]>;
  coo?: Maybe<Scalars["String"]>;
  cto?: Maybe<Scalars["String"]>;
  cto_propulsion?: Maybe<Scalars["String"]>;
  employees?: Maybe<Scalars["Int"]>;
  founded?: Maybe<Scalars["Int"]>;
  founder?: Maybe<Scalars["String"]>;
  headquarters?: Maybe<Address>;
  launch_sites?: Maybe<Scalars["Int"]>;
  links?: Maybe<InfoLinks>;
  name?: Maybe<Scalars["String"]>;
  summary?: Maybe<Scalars["String"]>;
  test_sites?: Maybe<Scalars["Int"]>;
  valuation?: Maybe<Scalars["Float"]>;
  vehicles?: Maybe<Scalars["Int"]>;
};

export type InfoLinks = {
  __typename?: "InfoLinks";
  elon_twitter?: Maybe<Scalars["String"]>;
  flickr?: Maybe<Scalars["String"]>;
  twitter?: Maybe<Scalars["String"]>;
  website?: Maybe<Scalars["String"]>;
};

export type Landpad = {
  __typename?: "Landpad";
  attempted_landings?: Maybe<Scalars["String"]>;
  details?: Maybe<Scalars["String"]>;
  full_name?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  landing_type?: Maybe<Scalars["String"]>;
  location?: Maybe<Location>;
  status?: Maybe<Scalars["String"]>;
  successful_landings?: Maybe<Scalars["String"]>;
  wikipedia?: Maybe<Scalars["String"]>;
};

export type Launch = {
  __typename?: "Launch";
  details?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  is_tentative?: Maybe<Scalars["Boolean"]>;
  launch_date_local?: Maybe<Scalars["Date"]>;
  launch_date_unix?: Maybe<Scalars["Date"]>;
  launch_date_utc?: Maybe<Scalars["Date"]>;
  launch_site?: Maybe<LaunchSite>;
  launch_success?: Maybe<Scalars["Boolean"]>;
  launch_year?: Maybe<Scalars["String"]>;
  links?: Maybe<LaunchLinks>;
  mission_id?: Maybe<Array<Maybe<Scalars["String"]>>>;
  mission_name?: Maybe<Scalars["String"]>;
  rocket?: Maybe<LaunchRocket>;
  ships?: Maybe<Array<Maybe<Ship>>>;
  static_fire_date_unix?: Maybe<Scalars["Date"]>;
  static_fire_date_utc?: Maybe<Scalars["Date"]>;
  telemetry?: Maybe<LaunchTelemetry>;
  tentative_max_precision?: Maybe<Scalars["String"]>;
  upcoming?: Maybe<Scalars["Boolean"]>;
};

export type LaunchFind = {
  apoapsis_km?: InputMaybe<Scalars["Float"]>;
  block?: InputMaybe<Scalars["Int"]>;
  cap_serial?: InputMaybe<Scalars["String"]>;
  capsule_reuse?: InputMaybe<Scalars["String"]>;
  core_flight?: InputMaybe<Scalars["Int"]>;
  core_reuse?: InputMaybe<Scalars["String"]>;
  core_serial?: InputMaybe<Scalars["String"]>;
  customer?: InputMaybe<Scalars["String"]>;
  eccentricity?: InputMaybe<Scalars["Float"]>;
  end?: InputMaybe<Scalars["Date"]>;
  epoch?: InputMaybe<Scalars["Date"]>;
  fairings_recovered?: InputMaybe<Scalars["String"]>;
  fairings_recovery_attempt?: InputMaybe<Scalars["String"]>;
  fairings_reuse?: InputMaybe<Scalars["String"]>;
  fairings_reused?: InputMaybe<Scalars["String"]>;
  fairings_ship?: InputMaybe<Scalars["String"]>;
  gridfins?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  inclination_deg?: InputMaybe<Scalars["Float"]>;
  land_success?: InputMaybe<Scalars["String"]>;
  landing_intent?: InputMaybe<Scalars["String"]>;
  landing_type?: InputMaybe<Scalars["String"]>;
  landing_vehicle?: InputMaybe<Scalars["String"]>;
  launch_date_local?: InputMaybe<Scalars["Date"]>;
  launch_date_utc?: InputMaybe<Scalars["Date"]>;
  launch_success?: InputMaybe<Scalars["String"]>;
  launch_year?: InputMaybe<Scalars["String"]>;
  legs?: InputMaybe<Scalars["String"]>;
  lifespan_years?: InputMaybe<Scalars["Float"]>;
  longitude?: InputMaybe<Scalars["Float"]>;
  manufacturer?: InputMaybe<Scalars["String"]>;
  mean_motion?: InputMaybe<Scalars["Float"]>;
  mission_id?: InputMaybe<Scalars["String"]>;
  mission_name?: InputMaybe<Scalars["String"]>;
  nationality?: InputMaybe<Scalars["String"]>;
  norad_id?: InputMaybe<Scalars["Int"]>;
  orbit?: InputMaybe<Scalars["String"]>;
  payload_id?: InputMaybe<Scalars["String"]>;
  payload_type?: InputMaybe<Scalars["String"]>;
  periapsis_km?: InputMaybe<Scalars["Float"]>;
  period_min?: InputMaybe<Scalars["Float"]>;
  raan?: InputMaybe<Scalars["Float"]>;
  reference_system?: InputMaybe<Scalars["String"]>;
  regime?: InputMaybe<Scalars["String"]>;
  reused?: InputMaybe<Scalars["String"]>;
  rocket_id?: InputMaybe<Scalars["String"]>;
  rocket_name?: InputMaybe<Scalars["String"]>;
  rocket_type?: InputMaybe<Scalars["String"]>;
  second_stage_block?: InputMaybe<Scalars["String"]>;
  semi_major_axis_km?: InputMaybe<Scalars["Float"]>;
  ship?: InputMaybe<Scalars["String"]>;
  side_core1_reuse?: InputMaybe<Scalars["String"]>;
  side_core2_reuse?: InputMaybe<Scalars["String"]>;
  site_id?: InputMaybe<Scalars["String"]>;
  site_name?: InputMaybe<Scalars["String"]>;
  site_name_long?: InputMaybe<Scalars["String"]>;
  start?: InputMaybe<Scalars["Date"]>;
  tbd?: InputMaybe<Scalars["String"]>;
  tentative?: InputMaybe<Scalars["String"]>;
  tentative_max_precision?: InputMaybe<Scalars["String"]>;
};

export type LaunchLinks = {
  __typename?: "LaunchLinks";
  article_link?: Maybe<Scalars["String"]>;
  flickr_images?: Maybe<Array<Maybe<Scalars["String"]>>>;
  mission_patch?: Maybe<Scalars["String"]>;
  mission_patch_small?: Maybe<Scalars["String"]>;
  presskit?: Maybe<Scalars["String"]>;
  reddit_campaign?: Maybe<Scalars["String"]>;
  reddit_launch?: Maybe<Scalars["String"]>;
  reddit_media?: Maybe<Scalars["String"]>;
  reddit_recovery?: Maybe<Scalars["String"]>;
  video_link?: Maybe<Scalars["String"]>;
  wikipedia?: Maybe<Scalars["String"]>;
};

export type LaunchRocket = {
  __typename?: "LaunchRocket";
  fairings?: Maybe<LaunchRocketFairings>;
  first_stage?: Maybe<LaunchRocketFirstStage>;
  rocket?: Maybe<Rocket>;
  rocket_name?: Maybe<Scalars["String"]>;
  rocket_type?: Maybe<Scalars["String"]>;
  second_stage?: Maybe<LaunchRocketSecondStage>;
};

export type LaunchRocketFairings = {
  __typename?: "LaunchRocketFairings";
  recovered?: Maybe<Scalars["Boolean"]>;
  recovery_attempt?: Maybe<Scalars["Boolean"]>;
  reused?: Maybe<Scalars["Boolean"]>;
  ship?: Maybe<Scalars["String"]>;
};

export type LaunchRocketFirstStage = {
  __typename?: "LaunchRocketFirstStage";
  cores?: Maybe<Array<Maybe<LaunchRocketFirstStageCore>>>;
};

export type LaunchRocketFirstStageCore = {
  __typename?: "LaunchRocketFirstStageCore";
  block?: Maybe<Scalars["Int"]>;
  core?: Maybe<Core>;
  flight?: Maybe<Scalars["Int"]>;
  gridfins?: Maybe<Scalars["Boolean"]>;
  land_success?: Maybe<Scalars["Boolean"]>;
  landing_intent?: Maybe<Scalars["Boolean"]>;
  landing_type?: Maybe<Scalars["String"]>;
  landing_vehicle?: Maybe<Scalars["String"]>;
  legs?: Maybe<Scalars["Boolean"]>;
  reused?: Maybe<Scalars["Boolean"]>;
};

export type LaunchRocketSecondStage = {
  __typename?: "LaunchRocketSecondStage";
  block?: Maybe<Scalars["Int"]>;
  payloads?: Maybe<Array<Maybe<Payload>>>;
};

export type LaunchSite = {
  __typename?: "LaunchSite";
  site_id?: Maybe<Scalars["String"]>;
  site_name?: Maybe<Scalars["String"]>;
  site_name_long?: Maybe<Scalars["String"]>;
};

export type LaunchTelemetry = {
  __typename?: "LaunchTelemetry";
  flight_club?: Maybe<Scalars["String"]>;
};

export type LaunchesPastResult = {
  __typename?: "LaunchesPastResult";
  data?: Maybe<Array<Maybe<Launch>>>;
  result?: Maybe<Result>;
};

export type Launchpad = {
  __typename?: "Launchpad";
  attempted_launches?: Maybe<Scalars["Int"]>;
  details?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  location?: Maybe<Location>;
  name?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  successful_launches?: Maybe<Scalars["Int"]>;
  vehicles_launched?: Maybe<Array<Maybe<Rocket>>>;
  wikipedia?: Maybe<Scalars["String"]>;
};

export type Link = {
  __typename?: "Link";
  article?: Maybe<Scalars["String"]>;
  reddit?: Maybe<Scalars["String"]>;
  wikipedia?: Maybe<Scalars["String"]>;
};

export type Location = {
  __typename?: "Location";
  latitude?: Maybe<Scalars["Float"]>;
  longitude?: Maybe<Scalars["Float"]>;
  name?: Maybe<Scalars["String"]>;
  region?: Maybe<Scalars["String"]>;
};

export type Mass = {
  __typename?: "Mass";
  kg?: Maybe<Scalars["Int"]>;
  lb?: Maybe<Scalars["Int"]>;
};

export type Mission = {
  __typename?: "Mission";
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  manufacturers?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name?: Maybe<Scalars["String"]>;
  payloads?: Maybe<Array<Maybe<Payload>>>;
  twitter?: Maybe<Scalars["String"]>;
  website?: Maybe<Scalars["String"]>;
  wikipedia?: Maybe<Scalars["String"]>;
};

export type MissionResult = {
  __typename?: "MissionResult";
  data?: Maybe<Array<Maybe<Mission>>>;
  result?: Maybe<Result>;
};

export type MissionsFind = {
  id?: InputMaybe<Scalars["ID"]>;
  manufacturer?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  payload_id?: InputMaybe<Scalars["String"]>;
};

export type Payload = {
  __typename?: "Payload";
  customers?: Maybe<Array<Maybe<Scalars["String"]>>>;
  id?: Maybe<Scalars["ID"]>;
  manufacturer?: Maybe<Scalars["String"]>;
  nationality?: Maybe<Scalars["String"]>;
  norad_id?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  orbit?: Maybe<Scalars["String"]>;
  orbit_params?: Maybe<PayloadOrbitParams>;
  payload_mass_kg?: Maybe<Scalars["Float"]>;
  payload_mass_lbs?: Maybe<Scalars["Float"]>;
  payload_type?: Maybe<Scalars["String"]>;
  reused?: Maybe<Scalars["Boolean"]>;
};

export type PayloadOrbitParams = {
  __typename?: "PayloadOrbitParams";
  apoapsis_km?: Maybe<Scalars["Float"]>;
  arg_of_pericenter?: Maybe<Scalars["Float"]>;
  eccentricity?: Maybe<Scalars["Float"]>;
  epoch?: Maybe<Scalars["Date"]>;
  inclination_deg?: Maybe<Scalars["Float"]>;
  lifespan_years?: Maybe<Scalars["Float"]>;
  longitude?: Maybe<Scalars["Float"]>;
  mean_anomaly?: Maybe<Scalars["Float"]>;
  mean_motion?: Maybe<Scalars["Float"]>;
  periapsis_km?: Maybe<Scalars["Float"]>;
  period_min?: Maybe<Scalars["Float"]>;
  raan?: Maybe<Scalars["Float"]>;
  reference_system?: Maybe<Scalars["String"]>;
  regime?: Maybe<Scalars["String"]>;
  semi_major_axis_km?: Maybe<Scalars["Float"]>;
};

export type PayloadsFind = {
  apoapsis_km?: InputMaybe<Scalars["Float"]>;
  customer?: InputMaybe<Scalars["String"]>;
  eccentricity?: InputMaybe<Scalars["Float"]>;
  epoch?: InputMaybe<Scalars["Date"]>;
  inclination_deg?: InputMaybe<Scalars["Float"]>;
  lifespan_years?: InputMaybe<Scalars["Float"]>;
  longitude?: InputMaybe<Scalars["Float"]>;
  manufacturer?: InputMaybe<Scalars["String"]>;
  mean_motion?: InputMaybe<Scalars["Float"]>;
  nationality?: InputMaybe<Scalars["String"]>;
  norad_id?: InputMaybe<Scalars["Int"]>;
  orbit?: InputMaybe<Scalars["String"]>;
  payload_id?: InputMaybe<Scalars["ID"]>;
  payload_type?: InputMaybe<Scalars["String"]>;
  periapsis_km?: InputMaybe<Scalars["Float"]>;
  period_min?: InputMaybe<Scalars["Float"]>;
  raan?: InputMaybe<Scalars["Float"]>;
  reference_system?: InputMaybe<Scalars["String"]>;
  regime?: InputMaybe<Scalars["String"]>;
  reused?: InputMaybe<Scalars["Boolean"]>;
  semi_major_axis_km?: InputMaybe<Scalars["Float"]>;
};

export type Query = {
  __typename?: "Query";
  capsule?: Maybe<Capsule>;
  capsules?: Maybe<Array<Maybe<Capsule>>>;
  capsulesPast?: Maybe<Array<Maybe<Capsule>>>;
  capsulesUpcoming?: Maybe<Array<Maybe<Capsule>>>;
  company?: Maybe<Info>;
  core?: Maybe<Core>;
  cores?: Maybe<Array<Maybe<Core>>>;
  coresPast?: Maybe<Array<Maybe<Core>>>;
  coresUpcoming?: Maybe<Array<Maybe<Core>>>;
  dragon?: Maybe<Dragon>;
  dragons?: Maybe<Array<Maybe<Dragon>>>;
  histories?: Maybe<Array<Maybe<History>>>;
  historiesResult?: Maybe<HistoriesResult>;
  history?: Maybe<History>;
  landpad?: Maybe<Landpad>;
  landpads?: Maybe<Array<Maybe<Landpad>>>;
  launch?: Maybe<Launch>;
  launchLatest?: Maybe<Launch>;
  launchNext?: Maybe<Launch>;
  launches?: Maybe<Array<Maybe<Launch>>>;
  launchesPast?: Maybe<Array<Maybe<Launch>>>;
  launchesPastResult?: Maybe<LaunchesPastResult>;
  launchesUpcoming?: Maybe<Array<Maybe<Launch>>>;
  launchpad?: Maybe<Launchpad>;
  launchpads?: Maybe<Array<Maybe<Launchpad>>>;
  mission?: Maybe<Mission>;
  missions?: Maybe<Array<Maybe<Mission>>>;
  missionsResult?: Maybe<MissionResult>;
  payload?: Maybe<Payload>;
  payloads?: Maybe<Array<Maybe<Payload>>>;
  roadster?: Maybe<Roadster>;
  rocket?: Maybe<Rocket>;
  rockets?: Maybe<Array<Maybe<Rocket>>>;
  rocketsResult?: Maybe<RocketsResult>;
  ship?: Maybe<Ship>;
  ships?: Maybe<Array<Maybe<Ship>>>;
  shipsResult?: Maybe<ShipsResult>;
};

export type QueryCapsuleArgs = {
  id: Scalars["ID"];
};

export type QueryCapsulesArgs = {
  find?: InputMaybe<CapsulesFind>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export type QueryCapsulesPastArgs = {
  find?: InputMaybe<CapsulesFind>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export type QueryCapsulesUpcomingArgs = {
  find?: InputMaybe<CapsulesFind>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export type QueryCoreArgs = {
  id: Scalars["ID"];
};

export type QueryCoresArgs = {
  find?: InputMaybe<CoresFind>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export type QueryCoresPastArgs = {
  find?: InputMaybe<CoresFind>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export type QueryCoresUpcomingArgs = {
  find?: InputMaybe<CoresFind>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export type QueryDragonArgs = {
  id: Scalars["ID"];
};

export type QueryDragonsArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type QueryHistoriesArgs = {
  find?: InputMaybe<HistoryFind>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export type QueryHistoriesResultArgs = {
  find?: InputMaybe<HistoryFind>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export type QueryHistoryArgs = {
  id: Scalars["ID"];
};

export type QueryLandpadArgs = {
  id: Scalars["ID"];
};

export type QueryLandpadsArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type QueryLaunchArgs = {
  id: Scalars["ID"];
};

export type QueryLaunchLatestArgs = {
  offset?: InputMaybe<Scalars["Int"]>;
};

export type QueryLaunchNextArgs = {
  offset?: InputMaybe<Scalars["Int"]>;
};

export type QueryLaunchesArgs = {
  find?: InputMaybe<LaunchFind>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export type QueryLaunchesPastArgs = {
  find?: InputMaybe<LaunchFind>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export type QueryLaunchesPastResultArgs = {
  find?: InputMaybe<LaunchFind>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export type QueryLaunchesUpcomingArgs = {
  find?: InputMaybe<LaunchFind>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export type QueryLaunchpadArgs = {
  id: Scalars["ID"];
};

export type QueryLaunchpadsArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type QueryMissionArgs = {
  id: Scalars["ID"];
};

export type QueryMissionsArgs = {
  find?: InputMaybe<MissionsFind>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type QueryMissionsResultArgs = {
  find?: InputMaybe<MissionsFind>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type QueryPayloadArgs = {
  id: Scalars["ID"];
};

export type QueryPayloadsArgs = {
  find?: InputMaybe<PayloadsFind>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export type QueryRocketArgs = {
  id: Scalars["ID"];
};

export type QueryRocketsArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type QueryRocketsResultArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type QueryShipArgs = {
  id: Scalars["ID"];
};

export type QueryShipsArgs = {
  find?: InputMaybe<ShipsFind>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export type QueryShipsResultArgs = {
  find?: InputMaybe<ShipsFind>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Scalars["String"]>;
};

export type Result = {
  __typename?: "Result";
  totalCount?: Maybe<Scalars["Int"]>;
};

export type Roadster = {
  __typename?: "Roadster";
  apoapsis_au?: Maybe<Scalars["Float"]>;
  details?: Maybe<Scalars["String"]>;
  earth_distance_km?: Maybe<Scalars["Float"]>;
  earth_distance_mi?: Maybe<Scalars["Float"]>;
  eccentricity?: Maybe<Scalars["Float"]>;
  epoch_jd?: Maybe<Scalars["Float"]>;
  inclination?: Maybe<Scalars["Float"]>;
  launch_date_unix?: Maybe<Scalars["Date"]>;
  launch_date_utc?: Maybe<Scalars["Date"]>;
  launch_mass_kg?: Maybe<Scalars["Int"]>;
  launch_mass_lbs?: Maybe<Scalars["Int"]>;
  longitude?: Maybe<Scalars["Float"]>;
  mars_distance_km?: Maybe<Scalars["Float"]>;
  mars_distance_mi?: Maybe<Scalars["Float"]>;
  name?: Maybe<Scalars["String"]>;
  norad_id?: Maybe<Scalars["Int"]>;
  orbit_type?: Maybe<Scalars["Float"]>;
  periapsis_arg?: Maybe<Scalars["Float"]>;
  periapsis_au?: Maybe<Scalars["Float"]>;
  period_days?: Maybe<Scalars["Float"]>;
  semi_major_axis_au?: Maybe<Scalars["Float"]>;
  speed_kph?: Maybe<Scalars["Float"]>;
  speed_mph?: Maybe<Scalars["Float"]>;
  wikipedia?: Maybe<Scalars["String"]>;
};

export type Rocket = {
  __typename?: "Rocket";
  active?: Maybe<Scalars["Boolean"]>;
  boosters?: Maybe<Scalars["Int"]>;
  company?: Maybe<Scalars["String"]>;
  cost_per_launch?: Maybe<Scalars["Int"]>;
  country?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  diameter?: Maybe<Distance>;
  engines?: Maybe<RocketEngines>;
  first_flight?: Maybe<Scalars["Date"]>;
  first_stage?: Maybe<RocketFirstStage>;
  height?: Maybe<Distance>;
  id?: Maybe<Scalars["ID"]>;
  landing_legs?: Maybe<RocketLandingLegs>;
  mass?: Maybe<Mass>;
  name?: Maybe<Scalars["String"]>;
  payload_weights?: Maybe<Array<Maybe<RocketPayloadWeight>>>;
  second_stage?: Maybe<RocketSecondStage>;
  stages?: Maybe<Scalars["Int"]>;
  success_rate_pct?: Maybe<Scalars["Int"]>;
  type?: Maybe<Scalars["String"]>;
  wikipedia?: Maybe<Scalars["String"]>;
};

export type RocketEngines = {
  __typename?: "RocketEngines";
  engine_loss_max?: Maybe<Scalars["String"]>;
  layout?: Maybe<Scalars["String"]>;
  number?: Maybe<Scalars["Int"]>;
  propellant_1?: Maybe<Scalars["String"]>;
  propellant_2?: Maybe<Scalars["String"]>;
  thrust_sea_level?: Maybe<Force>;
  thrust_to_weight?: Maybe<Scalars["Float"]>;
  thrust_vacuum?: Maybe<Force>;
  type?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
};

export type RocketFirstStage = {
  __typename?: "RocketFirstStage";
  burn_time_sec?: Maybe<Scalars["Int"]>;
  engines?: Maybe<Scalars["Int"]>;
  fuel_amount_tons?: Maybe<Scalars["Float"]>;
  reusable?: Maybe<Scalars["Boolean"]>;
  thrust_sea_level?: Maybe<Force>;
  thrust_vacuum?: Maybe<Force>;
};

export type RocketLandingLegs = {
  __typename?: "RocketLandingLegs";
  material?: Maybe<Scalars["String"]>;
  number?: Maybe<Scalars["Int"]>;
};

export type RocketPayloadWeight = {
  __typename?: "RocketPayloadWeight";
  id?: Maybe<Scalars["String"]>;
  kg?: Maybe<Scalars["Int"]>;
  lb?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

export type RocketSecondStage = {
  __typename?: "RocketSecondStage";
  burn_time_sec?: Maybe<Scalars["Int"]>;
  engines?: Maybe<Scalars["Int"]>;
  fuel_amount_tons?: Maybe<Scalars["Float"]>;
  payloads?: Maybe<RocketSecondStagePayloads>;
  thrust?: Maybe<Force>;
};

export type RocketSecondStagePayloadCompositeFairing = {
  __typename?: "RocketSecondStagePayloadCompositeFairing";
  diameter?: Maybe<Distance>;
  height?: Maybe<Distance>;
};

export type RocketSecondStagePayloads = {
  __typename?: "RocketSecondStagePayloads";
  composite_fairing?: Maybe<RocketSecondStagePayloadCompositeFairing>;
  option_1?: Maybe<Scalars["String"]>;
};

export type RocketsResult = {
  __typename?: "RocketsResult";
  data?: Maybe<Array<Maybe<Rocket>>>;
  result?: Maybe<Result>;
};

export type Ship = {
  __typename?: "Ship";
  abs?: Maybe<Scalars["Int"]>;
  active?: Maybe<Scalars["Boolean"]>;
  attempted_landings?: Maybe<Scalars["Int"]>;
  class?: Maybe<Scalars["Int"]>;
  course_deg?: Maybe<Scalars["Int"]>;
  home_port?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  image?: Maybe<Scalars["String"]>;
  imo?: Maybe<Scalars["Int"]>;
  missions?: Maybe<Array<Maybe<ShipMission>>>;
  mmsi?: Maybe<Scalars["Int"]>;
  model?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  position?: Maybe<ShipLocation>;
  roles?: Maybe<Array<Maybe<Scalars["String"]>>>;
  speed_kn?: Maybe<Scalars["Float"]>;
  status?: Maybe<Scalars["String"]>;
  successful_landings?: Maybe<Scalars["Int"]>;
  type?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  weight_kg?: Maybe<Scalars["Int"]>;
  weight_lbs?: Maybe<Scalars["Int"]>;
  year_built?: Maybe<Scalars["Int"]>;
};

export type ShipLocation = {
  __typename?: "ShipLocation";
  latitude?: Maybe<Scalars["Float"]>;
  longitude?: Maybe<Scalars["Float"]>;
};

export type ShipMission = {
  __typename?: "ShipMission";
  flight?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

export type ShipsFind = {
  abs?: InputMaybe<Scalars["Int"]>;
  active?: InputMaybe<Scalars["Boolean"]>;
  attempted_landings?: InputMaybe<Scalars["Int"]>;
  class?: InputMaybe<Scalars["Int"]>;
  course_deg?: InputMaybe<Scalars["Int"]>;
  home_port?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  imo?: InputMaybe<Scalars["Int"]>;
  latitude?: InputMaybe<Scalars["Float"]>;
  longitude?: InputMaybe<Scalars["Float"]>;
  mission?: InputMaybe<Scalars["String"]>;
  mmsi?: InputMaybe<Scalars["Int"]>;
  model?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  role?: InputMaybe<Scalars["String"]>;
  speed_kn?: InputMaybe<Scalars["Int"]>;
  status?: InputMaybe<Scalars["String"]>;
  successful_landings?: InputMaybe<Scalars["Int"]>;
  type?: InputMaybe<Scalars["String"]>;
  weight_kg?: InputMaybe<Scalars["Int"]>;
  weight_lbs?: InputMaybe<Scalars["Int"]>;
  year_built?: InputMaybe<Scalars["Int"]>;
};

export type ShipsResult = {
  __typename?: "ShipsResult";
  data?: Maybe<Array<Maybe<Ship>>>;
  result?: Maybe<Result>;
};

export type Volume = {
  __typename?: "Volume";
  cubic_feet?: Maybe<Scalars["Int"]>;
  cubic_meters?: Maybe<Scalars["Int"]>;
};

export type GetQueryQueryVariables = Exact<{ [key: string]: never }>;

export type GetQueryQuery = {
  __typename?: "Query";
  launchesPast?:
    | Array<
        | {
            __typename?: "Launch";
            mission_name?: string | null | undefined;
            launch_date_local?: any | null | undefined;
            launch_site?:
              | {
                  __typename?: "LaunchSite";
                  site_name_long?: string | null | undefined;
                }
              | null
              | undefined;
            ships?:
              | Array<
                  | {
                      __typename?: "Ship";
                      name?: string | null | undefined;
                      home_port?: string | null | undefined;
                      image?: string | null | undefined;
                    }
                  | null
                  | undefined
                >
              | null
              | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
};

export const GetQueryDoc = gql`
  query getQuery {
    launchesPast(limit: 10) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      ships {
        name
        home_port
        image
      }
    }
  }
`;
export const getQuery = (
  options: Omit<WatchQueryOptions<GetQueryQueryVariables>, "query">,
): Readable<
  ApolloQueryResult<GetQueryQuery> & {
    query: ObservableQuery<GetQueryQuery, GetQueryQueryVariables>;
  }
> => {
  const q = client.watchQuery({
    query: GetQueryDoc,
    ...options,
  });
  var result = readable<
    ApolloQueryResult<GetQueryQuery> & {
      query: ObservableQuery<GetQueryQuery, GetQueryQueryVariables>;
    }
  >(
    {
      data: {} as any,
      loading: true,
      error: undefined,
      networkStatus: 1,
      query: q,
    },
    set => {
      q.subscribe((v: any) => {
        set({ ...v, query: q });
      });
    },
  );
  return result;
};
