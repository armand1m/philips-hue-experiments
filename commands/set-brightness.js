const { lightState } = require("node-hue-api");
const withLogging = require("../lib/with-logging");
const applyLightStateToAll = require("../lib/apply-light-state-to-all");

const brightnessLevel = Number(process.argv[2]);

if (!brightnessLevel) {
  throw new Error("Brightness level argument is missing. Make sure you ran it like: `npm run set-brightness -- 70`");
}

if (brightnessLevel > 100) {
  throw new Error("Brightness level cannot be above 100. Select a value between 0 and 100.");
}

if (brightnessLevel < 0) {
  throw new Error("Brightness level cannot be below 0. Select a value between 0 and 100.");
}

const applyState = withLogging(`set brightness to ${brightnessLevel}%`)(applyLightStateToAll);

applyState(lightState.create().brightness(brightnessLevel));