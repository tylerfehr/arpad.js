/**
 * An outcome
 */
export enum Outcome {
  Loss = 0,
  Win = 1,
  Draw = 0.5,
}

export interface EloSystemOptions {
  kValue: number;
  areResultsRounded: boolean;
}

export interface NewScores {
  eloA: number;
  eloB: number;
}

/**
 * Default options object
 */
export const DEFAULT_ELO_SYSTEM_OPTIONS: EloSystemOptions = {
  kValue: 32,
  areResultsRounded: false,
}
