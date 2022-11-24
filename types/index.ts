export enum Theme {
  Light = 'Light',
  Dark = 'Dark',
}

export type Core = {
  core_serial: string
}

export type Payload = {
  payload_id: string
  payload_type: string
}

export type Rocket = {
  rocket_id: string
  rocket_name: string
  first_stage: {
    cores: Core[]
  }
  second_stage: {
    payloads: Payload[]
  }
}

export type Links = {
  mission_patch_small: string
}

export type LaunchFailureDetails = {
  reason: string
}

export type Launch = {
  flight_number: number
  mission_name: string
  launch_date_utc: string
  rocket: Rocket
  links: Links
  launch_success: boolean | null
  launch_failure_details?: LaunchFailureDetails
}
