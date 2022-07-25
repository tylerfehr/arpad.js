# Arpad.js

An Elo system library written in TypeScript.

Named after its inventor, [Arpad Elo](https://en.wikipedia.org/wiki/Arpad_Elo)

## Example Usage

```typescript
import { getEloCalculation } from './calculations';
import { Outcome, NewScores } from './interface';

// use all default options
const calculateElo = getEloCalculation();

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
   * reality, the probability of winning with change after each match corresponding to the Elo
   * gain/loss.
   */
  const singleResult = Math.random() > 0.5 ? Outcome.Win : Outcome.Loss

  matchOutcomes.push(singleResult);
}

const aWins = matchOutcomes.filter((o) => o === Outcome.Win).length;
const bWins = matchOutcomes.length - aWins;

const { eloA: finalA, eloB: finalB } = matchOutcomes.reduce<NewScores>((acc, curr) => calculateElo(acc.eloA, acc.eloB, curr), { eloA: startingA, eloB: startingB });

console.log(
  [
    `Player A won ${aWins} matches moving their Elo from ${startingA} => ${finalA}`,
    `Player B won ${bWins} matches moving their Elo from ${startingB} => ${finalB}`,
  ].join('\n')
)
```

## Database Integration

- See <https://github.com/tylerfehr/arpad.js/issues/1>
