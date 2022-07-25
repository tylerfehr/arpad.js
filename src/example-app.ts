import { getEloCalculation } from './calculations';
import { Outcome, NewScores } from './interface';

const calculateElo = getEloCalculation();

const adjustRatingFromOutcomes = (playerA: number, playerB: number, matchOutcomes: Outcome[]): NewScores => {
  const initialRatings = { eloA: playerA, eloB: playerB };

  return matchOutcomes.reduce<NewScores>(
    (acc, curr: Outcome) => calculateElo(acc.eloA, acc.eloB, curr),
    initialRatings,
  );
};

const startingA = 1000;
const startingB = 1000;

const matchOutcomes: Outcome[] = [];
const numMatchesToPlay = 1000;

for (let i = 0; i < numMatchesToPlay; i += 1) {
  const singleResult = Math.random() > 0.5 ? Outcome.Win : Outcome.Loss

  matchOutcomes.push(singleResult);
}

const aWins = matchOutcomes.reduce((acc, curr) => acc + (curr === Outcome.Win ? 1 : 0), 0);
const bWins = matchOutcomes.length - aWins;

const { eloA: finalA, eloB: finalB } = adjustRatingFromOutcomes(startingA, startingB, matchOutcomes);

console.log(
  [
    `Player A won ${aWins} matches moving their Elo ${startingA} => ${finalA}`,
    `Player B won ${bWins} matches moving their Elo ${startingB} => ${finalB}`,
  ].join('\n')
)

