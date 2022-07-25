import { EloSystemOptions, Outcome, Result } from './interface';
/**
 * Get the function to compute new ratings for player A and player B.
 *
 * k value is a hint at the maximum adjustment possible per game. More experienced competitors
 * should use a lower k value sincetheir current ELO is closer to their actual, or true ELO.
 *
 * if a kValue isn't given, a reasonable default of 32 is used
 */
export declare const getEloCalculation: ({ kValue }?: EloSystemOptions) => (ratingA: number, ratingB: number, outcome: Outcome) => Result;
