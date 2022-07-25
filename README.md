# Arpad.js

An ELO system library written in TypeScript.

Named after its inventor, [Arpad Elo](https://en.wikipedia.org/wiki/Arpad_Elo)

## Example Usage

```typescript
// use all default options
const calculateElo = getEloCalculation();

const adjustRatingFromOutcomes = (playerA: number, playerB: number, matchOutcomes: Outcome[]): NewScores => {
  const initialRatings = { eloA: playerA, eloB: playerB };

  return matchOutcomes.reduce<NewScores>(
    (acc, curr: Outcome) => calculateElo(acc.eloA, acc.eloB, curr),
    initialRatings,
  );
};

/**
 * Starting Elos of player A and player B
 */
const startingA = 1000;
const startingB = 1000;

const matchOutcomes: Outcome[] = [];

const numMatchesToPlay = 1000;

for (let i = 0; i < numMatchesToPlay; i += 1) {
  /**
   * Each player has a 50/50 change to win, since they're starting at the same elo. In
   * reality, the probability of winning will change after each match corresponding to the Elo
   * gain/loss.
   */
  const singleResult = Math.random() > 0.5 ? Outcome.Win : Outcome.Loss

  matchOutcomes.push(singleResult);
}

const aWins = matchOutcomes.reduce((acc, curr) => acc + (curr === Outcome.Win ? 1 : 0), 0);
const bWins = matchOutcomes.length - aWins;

const { eloA: finalA, eloB: finalB }: NewScores = adjustRatingFromOutcomes(startingA, startingB, matchOutcomes);

console.log(
  [
    `Player A won ${aWins} matches moving their Elo from ${startingA} => ${finalA}`,
    `Player B won ${bWins} matches moving their Elo from ${startingB} => ${finalB}`,
  ].join('\n')
)

```

## Database Integration

- See <https://github.com/tylerfehr/arpad.js/issues/1>
