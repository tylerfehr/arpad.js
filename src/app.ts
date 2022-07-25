import { getEloCalculation } from './calculations';
import { Outcome, Result } from './interface';

const calculateElo = getEloCalculation();

const playNMatches = (n: number): Outcome[] => {
  const res = [];

  for (let i = 0; i < n; i += 1) {
    const singleResult = Math.random() > 0.5 ? Outcome.Win : Outcome.Loss

    res.push(singleResult);
  }

  console.log(res);

  return res;
}

const adjustRatingFromOutcomes = (playerA: number, playerB: number, outcomes: Outcome[]): Result => {
  return outcomes.reduce<Result>(
    (acc, curr: Outcome) => calculateElo(acc.eloA, acc.eloB, curr),
    { eloA: playerA, eloB: playerB },
  );
};

const startingA = 1025;
const startingB = 1000;

const matchOutcomes = playNMatches(10000);

console.log(adjustRatingFromOutcomes(startingA, startingB, matchOutcomes));
