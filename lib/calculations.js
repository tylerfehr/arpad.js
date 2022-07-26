"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEloCalculation = void 0;
const interface_1 = require("./interface");
/**
 * Calculate expected outcome of a matchup
 */
const calculateExpectedOutcome = (firstRating, secondRating) => {
    return 1 / (1 + Math.pow(10, (firstRating - secondRating) / 400));
};
/**
 * Calculate new Elo rating from an outcome
 */
const adjustRating = (kValue, previousRating, expectedOutcome, actualOutcome) => previousRating + kValue * (actualOutcome - expectedOutcome);
/**
 * Get the function to compute new ratings for player A and player B.
 *
 * k value is a hint at the maximum adjustment possible per game. More experienced competitors
 * should use a lower k value since their current ELO is closer to their actual, or true ELO.
 *
 * if a kValue isn't given, a reasonable default of 32 is used (see https://en.wikipedia.org/wiki/Elo_rating_system for other values and why they'd be used)
 */
const getEloCalculation = (options = interface_1.DEFAULT_ELO_SYSTEM_OPTIONS) => {
    const opts = Object.assign(Object.assign({}, interface_1.DEFAULT_ELO_SYSTEM_OPTIONS), options);
    const { kValue, areResultsRounded } = opts;
    /**
     * Outcome is with respect to player A, so e.g. Outcome.Win means that player A wins while player B loses
     */
    return (ratingA, ratingB, outcomeA) => {
        const outcomeB = outcomeA === interface_1.Outcome.Win ? interface_1.Outcome.Loss : interface_1.Outcome.Win;
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
};
exports.getEloCalculation = getEloCalculation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NhbGN1bGF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBK0Y7QUFFL0Y7O0dBRUc7QUFDSCxNQUFNLHdCQUF3QixHQUFHLENBQUMsV0FBbUIsRUFBRSxZQUFvQixFQUFVLEVBQUU7SUFDckYsT0FBTyxDQUFDLEdBQUcsQ0FDVCxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQ3JELENBQUE7QUFDSCxDQUFDLENBQUM7QUFFRjs7R0FFRztBQUNILE1BQU0sWUFBWSxHQUFHLENBQ25CLE1BQWMsRUFDZCxjQUFzQixFQUN0QixlQUF1QixFQUN2QixhQUFzQixFQUNkLEVBQUUsQ0FBQyxjQUFjLEdBQUcsTUFBTSxHQUFHLENBQUMsYUFBYSxHQUFHLGVBQWUsQ0FBQyxDQUFDO0FBR3pFOzs7Ozs7O0dBT0c7QUFDSSxNQUFNLGlCQUFpQixHQUFHLENBQUMsVUFBNEIsc0NBQTBCLEVBQUUsRUFBRTtJQUMxRixNQUFNLElBQUksbUNBQ0wsc0NBQTBCLEdBQzFCLE9BQU8sQ0FDWCxDQUFDO0lBRUYsTUFBTSxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQztJQUUzQzs7T0FFRztJQUNILE9BQU8sQ0FBQyxPQUFlLEVBQUUsT0FBZSxFQUFFLFFBQWlCLEVBQWEsRUFBRTtRQUN4RSxNQUFNLFFBQVEsR0FBRyxRQUFRLEtBQUssbUJBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLG1CQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxtQkFBTyxDQUFDLEdBQUcsQ0FBQztRQUV2RSxNQUFNLGdCQUFnQixHQUFHLHdCQUF3QixDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNwRSxNQUFNLGdCQUFnQixHQUFHLHdCQUF3QixDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUVwRSxJQUFJLGlCQUFpQixFQUFFO1lBQ3JCLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQzNFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQzVFLENBQUM7U0FDSDtRQUVELE9BQU87WUFDTCxJQUFJLEVBQUUsWUFBWSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDO1lBQy9ELElBQUksRUFBRSxZQUFZLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLENBQUM7U0FDaEUsQ0FBQztJQUNKLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQTtBQTdCWSxRQUFBLGlCQUFpQixxQkE2QjdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxvU3lzdGVtT3B0aW9ucywgT3V0Y29tZSwgTmV3U2NvcmVzLCBERUZBVUxUX0VMT19TWVNURU1fT1BUSU9OUyB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuLyoqXG4gKiBDYWxjdWxhdGUgZXhwZWN0ZWQgb3V0Y29tZSBvZiBhIG1hdGNodXBcbiAqL1xuY29uc3QgY2FsY3VsYXRlRXhwZWN0ZWRPdXRjb21lID0gKGZpcnN0UmF0aW5nOiBudW1iZXIsIHNlY29uZFJhdGluZzogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgcmV0dXJuIDEgLyAoXG4gICAgMSArIE1hdGgucG93KDEwLCAoZmlyc3RSYXRpbmcgLSBzZWNvbmRSYXRpbmcpIC8gNDAwKVxuICApXG59O1xuXG4vKipcbiAqIENhbGN1bGF0ZSBuZXcgRWxvIHJhdGluZyBmcm9tIGFuIG91dGNvbWVcbiAqL1xuY29uc3QgYWRqdXN0UmF0aW5nID0gKFxuICBrVmFsdWU6IG51bWJlcixcbiAgcHJldmlvdXNSYXRpbmc6IG51bWJlcixcbiAgZXhwZWN0ZWRPdXRjb21lOiBudW1iZXIsXG4gIGFjdHVhbE91dGNvbWU6IE91dGNvbWUsXG4pOiBudW1iZXIgPT4gcHJldmlvdXNSYXRpbmcgKyBrVmFsdWUgKiAoYWN0dWFsT3V0Y29tZSAtIGV4cGVjdGVkT3V0Y29tZSk7XG5cblxuLyoqXG4gKiBHZXQgdGhlIGZ1bmN0aW9uIHRvIGNvbXB1dGUgbmV3IHJhdGluZ3MgZm9yIHBsYXllciBBIGFuZCBwbGF5ZXIgQi5cbiAqXG4gKiBrIHZhbHVlIGlzIGEgaGludCBhdCB0aGUgbWF4aW11bSBhZGp1c3RtZW50IHBvc3NpYmxlIHBlciBnYW1lLiBNb3JlIGV4cGVyaWVuY2VkIGNvbXBldGl0b3JzXG4gKiBzaG91bGQgdXNlIGEgbG93ZXIgayB2YWx1ZSBzaW5jZSB0aGVpciBjdXJyZW50IEVMTyBpcyBjbG9zZXIgdG8gdGhlaXIgYWN0dWFsLCBvciB0cnVlIEVMTy5cbiAqXG4gKiBpZiBhIGtWYWx1ZSBpc24ndCBnaXZlbiwgYSByZWFzb25hYmxlIGRlZmF1bHQgb2YgMzIgaXMgdXNlZCAoc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Vsb19yYXRpbmdfc3lzdGVtIGZvciBvdGhlciB2YWx1ZXMgYW5kIHdoeSB0aGV5J2QgYmUgdXNlZClcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEVsb0NhbGN1bGF0aW9uID0gKG9wdGlvbnM6IEVsb1N5c3RlbU9wdGlvbnMgPSBERUZBVUxUX0VMT19TWVNURU1fT1BUSU9OUykgPT4ge1xuICBjb25zdCBvcHRzID0ge1xuICAgIC4uLkRFRkFVTFRfRUxPX1NZU1RFTV9PUFRJT05TLFxuICAgIC4uLm9wdGlvbnMsXG4gIH07XG5cbiAgY29uc3QgeyBrVmFsdWUsIGFyZVJlc3VsdHNSb3VuZGVkIH0gPSBvcHRzO1xuXG4gIC8qKlxuICAgKiBPdXRjb21lIGlzIHdpdGggcmVzcGVjdCB0byBwbGF5ZXIgQSwgc28gZS5nLiBPdXRjb21lLldpbiBtZWFucyB0aGF0IHBsYXllciBBIHdpbnMgd2hpbGUgcGxheWVyIEIgbG9zZXNcbiAgICovXG4gIHJldHVybiAocmF0aW5nQTogbnVtYmVyLCByYXRpbmdCOiBudW1iZXIsIG91dGNvbWVBOiBPdXRjb21lKTogTmV3U2NvcmVzID0+IHtcbiAgICBjb25zdCBvdXRjb21lQiA9IG91dGNvbWVBID09PSBPdXRjb21lLldpbiA/IE91dGNvbWUuTG9zcyA6IE91dGNvbWUuV2luO1xuXG4gICAgY29uc3QgZXhwZWN0ZWRPdXRjb21lQSA9IGNhbGN1bGF0ZUV4cGVjdGVkT3V0Y29tZShyYXRpbmdCLCByYXRpbmdBKTtcbiAgICBjb25zdCBleHBlY3RlZE91dGNvbWVCID0gY2FsY3VsYXRlRXhwZWN0ZWRPdXRjb21lKHJhdGluZ0EsIHJhdGluZ0IpO1xuXG4gICAgaWYgKGFyZVJlc3VsdHNSb3VuZGVkKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlbG9BOiBNYXRoLnJvdW5kKGFkanVzdFJhdGluZyhrVmFsdWUsIHJhdGluZ0EsIGV4cGVjdGVkT3V0Y29tZUEsIG91dGNvbWVBKSksXG4gICAgICAgIGVsb0I6IE1hdGgucm91bmQoYWRqdXN0UmF0aW5nKGtWYWx1ZSwgcmF0aW5nQiwgZXhwZWN0ZWRPdXRjb21lQiwgb3V0Y29tZUIpKSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGVsb0E6IGFkanVzdFJhdGluZyhrVmFsdWUsIHJhdGluZ0EsIGV4cGVjdGVkT3V0Y29tZUEsIG91dGNvbWVBKSxcbiAgICAgIGVsb0I6IGFkanVzdFJhdGluZyhrVmFsdWUsIHJhdGluZ0IsIGV4cGVjdGVkT3V0Y29tZUIsIG91dGNvbWVCKVxuICAgIH07XG4gIH07XG59XG5cblxuXG4iXX0=