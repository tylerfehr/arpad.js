/**
 * An outcome
 */
export declare enum Outcome {
    Loss = 0,
    Win = 1,
    Draw = 0.5
}
/**
 * A competitor; can be augmented with an arbitrary data object of input type T
 */
export interface EloSystemOptions {
    /**
     * if this option is set
     */
    kValue?: number;
}
/**
 * Deflation options
 */
export interface Result {
    eloA: number;
    eloB: number;
}