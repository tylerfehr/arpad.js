/**
 * An outcome
 */
export enum Outcome {
  Loss = 0,
  Win = 1,
  Draw = 0.5,
}

/**
 * A competitor; can be augmented with an arbitrary data object of input type T
 */
// export interface Competitor<T extends object> {
//   id: number;
//   totalWins: number;
//   totalLosses: number;
//   data: T
//   lastMatchDate: string;
// }

export interface EloSystemOptions {
  /**
   * if this option is set
   */
  // useStaggeredK?: boolean;

  kValue?: number;

  // deflationOptions?: DelfationOptions;
}

/**
 * Deflation options
 */
// export interface DelfationOptions {
//   maxTimeBetweenGames: string;
// }

export interface NewScores {
  eloA: number;
  eloB: number;
}

/**
 * Default options object
 */
export const DEFAULT_ELO_SYSTEM_OPTIONS = {
  kValue: 32,
}
