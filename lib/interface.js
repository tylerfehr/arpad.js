"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_ELO_SYSTEM_OPTIONS = exports.Outcome = void 0;
/**
 * An outcome
 */
var Outcome;
(function (Outcome) {
    Outcome[Outcome["Loss"] = 0] = "Loss";
    Outcome[Outcome["Win"] = 1] = "Win";
    Outcome[Outcome["Draw"] = 0.5] = "Draw";
})(Outcome = exports.Outcome || (exports.Outcome = {}));
/**
 * Default options object
 */
exports.DEFAULT_ELO_SYSTEM_OPTIONS = {
    kValue: 32,
    areResultsRounded: false,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2ludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7R0FFRztBQUNILElBQVksT0FJWDtBQUpELFdBQVksT0FBTztJQUNqQixxQ0FBUSxDQUFBO0lBQ1IsbUNBQU8sQ0FBQTtJQUNQLHVDQUFVLENBQUE7QUFDWixDQUFDLEVBSlcsT0FBTyxHQUFQLGVBQU8sS0FBUCxlQUFPLFFBSWxCO0FBWUQ7O0dBRUc7QUFDVSxRQUFBLDBCQUEwQixHQUFxQjtJQUMxRCxNQUFNLEVBQUUsRUFBRTtJQUNWLGlCQUFpQixFQUFFLEtBQUs7Q0FDekIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQW4gb3V0Y29tZVxuICovXG5leHBvcnQgZW51bSBPdXRjb21lIHtcbiAgTG9zcyA9IDAsXG4gIFdpbiA9IDEsXG4gIERyYXcgPSAwLjUsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWxvU3lzdGVtT3B0aW9ucyB7XG4gIGtWYWx1ZTogbnVtYmVyO1xuICBhcmVSZXN1bHRzUm91bmRlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZXdTY29yZXMge1xuICBlbG9BOiBudW1iZXI7XG4gIGVsb0I6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBEZWZhdWx0IG9wdGlvbnMgb2JqZWN0XG4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX0VMT19TWVNURU1fT1BUSU9OUzogRWxvU3lzdGVtT3B0aW9ucyA9IHtcbiAga1ZhbHVlOiAzMixcbiAgYXJlUmVzdWx0c1JvdW5kZWQ6IGZhbHNlLFxufVxuIl19