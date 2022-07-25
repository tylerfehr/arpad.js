/**
 * An outcome
 */
export declare enum Outcome {
    Loss = 0,
    Win = 1,
    Draw = 0.5
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
export declare const DEFAULT_ELO_SYSTEM_OPTIONS: EloSystemOptions;
