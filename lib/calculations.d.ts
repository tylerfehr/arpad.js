import { EloSystemOptions, Outcome, NewScores } from './interface';
/**
 * Get the function to compute new ratings for player A and player B.
 *
 * k value is a hint at the maximum adjustment possible per game. More experienced competitors
 * should use a lower k value since their current ELO is closer to their actual, or true ELO.
 *
 * if a kValue isn't given, a reasonable default of 32 is used (see https://en.wikipedia.org/wiki/Elo_rating_system for other values and why they'd be used)
 */
export declare const getEloCalculation: ({ kValue }?: EloSystemOptions) => (ratingA: number, ratingB: number, outcomeA: Outcome) => NewScores;
