import { EloSystemOptions, Outcome, NewScores, DEFAULT_ELO_SYSTEM_OPTIONS } from './interface';

/**
 * Calculate probability of win/loss; used in `adjustRating`
 */
const calculateExpectedOutcome = (firstRating: number, secondRating: number): number => {
  return 1 / (
    1 + Math.pow(10, (firstRating - secondRating) / 400)
  )
};

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
 * should use a lower k value sincetheir current ELO is closer to their actual, or true ELO.
 *
 * if a kValue isn't given, a reasonable default of 32 is used
 */
export const getEloCalculation = ({ kValue }: EloSystemOptions = DEFAULT_ELO_SYSTEM_OPTIONS) => {
  const k = kValue ?? 32;

  /**
   * Outcome is with respect to player A, so e.g. Outcome.Win means that player A wins while player B loses
   */
  return (ratingA: number, ratingB: number, outcomeA: Outcome): NewScores => {
    const expectedOutcomeA = calculateExpectedOutcome(ratingB, ratingA);
    const expectedOutcomeB = calculateExpectedOutcome(ratingA, ratingB);

    const outcomeB = outcomeA === Outcome.Win ? Outcome.Loss : Outcome.Win;

    return {
      eloA: adjustRating(k, ratingA, expectedOutcomeA, outcomeA),
      eloB: adjustRating(k, ratingB, expectedOutcomeB, outcomeB)
    };
  };
}



