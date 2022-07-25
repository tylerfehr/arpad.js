"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculations_1 = require("./calculations");
const interface_1 = require("./interface");
const calculateElo = (0, calculations_1.getEloCalculation)();
const playNMatches = (n) => {
    const res = [];
    for (let i = 0; i < n; i += 1) {
        const singleResult = Math.random() > 0.5 ? interface_1.Outcome.Win : interface_1.Outcome.Loss;
        res.push(singleResult);
    }
    console.log(res);
    return res;
};
const adjustRatingFromOutcomes = (playerA, playerB, outcomes) => {
    return outcomes.reduce((acc, curr) => calculateElo(acc.eloA, acc.eloB, curr), { eloA: playerA, eloB: playerB });
};
const startingA = 1000;
const startingB = 1000;
const matchOutcomes = playNMatches(1000);
console.log(adjustRatingFromOutcomes(startingA, startingB, matchOutcomes));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1hcHAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZXhhbXBsZS1hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBbUQ7QUFDbkQsMkNBQWlEO0FBRWpELE1BQU0sWUFBWSxHQUFHLElBQUEsZ0NBQWlCLEdBQUUsQ0FBQztBQUV6QyxNQUFNLFlBQVksR0FBRyxDQUFDLENBQVMsRUFBYSxFQUFFO0lBQzVDLE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUVmLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUM3QixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxtQkFBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsbUJBQU8sQ0FBQyxJQUFJLENBQUE7UUFFckUsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUN4QjtJQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFakIsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDLENBQUE7QUFFRCxNQUFNLHdCQUF3QixHQUFHLENBQUMsT0FBZSxFQUFFLE9BQWUsRUFBRSxRQUFtQixFQUFhLEVBQUU7SUFDcEcsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUNwQixDQUFDLEdBQUcsRUFBRSxJQUFhLEVBQUUsRUFBRSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQzlELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQ2pDLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDdkIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBRXZCLE1BQU0sYUFBYSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUV6QyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEVsb0NhbGN1bGF0aW9uIH0gZnJvbSAnLi9jYWxjdWxhdGlvbnMnO1xuaW1wb3J0IHsgT3V0Y29tZSwgTmV3U2NvcmVzIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5jb25zdCBjYWxjdWxhdGVFbG8gPSBnZXRFbG9DYWxjdWxhdGlvbigpO1xuXG5jb25zdCBwbGF5Tk1hdGNoZXMgPSAobjogbnVtYmVyKTogT3V0Y29tZVtdID0+IHtcbiAgY29uc3QgcmVzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpICs9IDEpIHtcbiAgICBjb25zdCBzaW5nbGVSZXN1bHQgPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gT3V0Y29tZS5XaW4gOiBPdXRjb21lLkxvc3NcblxuICAgIHJlcy5wdXNoKHNpbmdsZVJlc3VsdCk7XG4gIH1cblxuICBjb25zb2xlLmxvZyhyZXMpO1xuXG4gIHJldHVybiByZXM7XG59XG5cbmNvbnN0IGFkanVzdFJhdGluZ0Zyb21PdXRjb21lcyA9IChwbGF5ZXJBOiBudW1iZXIsIHBsYXllckI6IG51bWJlciwgb3V0Y29tZXM6IE91dGNvbWVbXSk6IE5ld1Njb3JlcyA9PiB7XG4gIHJldHVybiBvdXRjb21lcy5yZWR1Y2U8TmV3U2NvcmVzPihcbiAgICAoYWNjLCBjdXJyOiBPdXRjb21lKSA9PiBjYWxjdWxhdGVFbG8oYWNjLmVsb0EsIGFjYy5lbG9CLCBjdXJyKSxcbiAgICB7IGVsb0E6IHBsYXllckEsIGVsb0I6IHBsYXllckIgfSxcbiAgKTtcbn07XG5cbmNvbnN0IHN0YXJ0aW5nQSA9IDEwMDA7XG5jb25zdCBzdGFydGluZ0IgPSAxMDAwO1xuXG5jb25zdCBtYXRjaE91dGNvbWVzID0gcGxheU5NYXRjaGVzKDEwMDApO1xuXG5jb25zb2xlLmxvZyhhZGp1c3RSYXRpbmdGcm9tT3V0Y29tZXMoc3RhcnRpbmdBLCBzdGFydGluZ0IsIG1hdGNoT3V0Y29tZXMpKTtcbiJdfQ==