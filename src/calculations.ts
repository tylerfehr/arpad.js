import { EloSystemOptions, Outcome, NewScores, DEFAULT_ELO_SYSTEM_OPTIONS } from './interface';

/**
 * Calculate expected outcome of a matchup
 */
const calculateExpectedOutcome = (firstRating: number, secondRating: number): number => {
  return 1 / (
    1 + Math.pow(10, (firstRating - secondRating) / 400)
  )
};

/**
 * Calculate new Elo rating from an outcome
 */
const adjustRating = (
  kValue: number,
  previousRating: number,
  expectedOutcome: number,
  actualOutcome: Outcome,
): number => previousRating + kValue * (actualOutcome - expectedOutcome);


/**
 * Get the function to compute new ratings for player A and player B.
 *
 * k value is a hint at the maximum adjustment possible per game. More experienced competitors
 * should use a lower k value since their current ELO is closer to their actual, or true ELO.
 *
 * if a kValue isn't given, a reasonable default of 32 is used (see https://en.wikipedia.org/wiki/Elo_rating_system for other values and why they'd be used)
 */
export const getEloCalculation = (options: EloSystemOptions = DEFAULT_ELO_SYSTEM_OPTIONS) => {
  const opts = {
    ...DEFAULT_ELO_SYSTEM_OPTIONS,
    ...options,
  };

  const { kValue, areResultsRounded } = opts;

  /**
   * Outcome is with respect to player A, so e.g. Outcome.Win means that player A wins while player B loses
   */
  return (ratingA: number, ratingB: number, outcomeA: Outcome): NewScores => {
    const outcomeB = outcomeA === Outcome.Win ? Outcome.Loss : Outcome.Win;

    const expectedOutcomeA = calculateExpectedOutcome(ratingB, ratingA);
    const expectedOutcomeB = calculateExpectedOutcome(ratingA, ratingB);

    if (areResultsRounded) {
      return {
        eloA: Math.round(adjustRating(kValue, ratingA, expectedOutcomeA, outcomeA)),
        eloB: Math.round(adjustRating(kValue, ratingB, expectedOutcomeB, outcomeB)),
      };
    }

    return {
      eloA: adjustRating(kValue, ratingA, expectedOutcomeA, outcomeA),
      eloB: adjustRating(kValue, ratingB, expectedOutcomeB, outcomeB)
    };
  };
}



