const { lightState } = require("node-hue-api");
const withLogging = require("../lib/with-logging");
const applyLightStateToAll = require("../lib/apply-light-state-to-all");

const saturationLevel = process.argv[2];

if (!saturationLevel) {
  throw new Error("Saturation level argument is missing. Make sure you ran it like: `npm run set-saturation -- 50`");
}

if (saturationLevel > 100) {
  throw new Error("Saturation level cannot be above 100. Select a value between 0 and 100.");
}

if (saturationLevel < 0) {
  throw new Error("Saturation level cannot be below 0. Select a value between 0 and 100.");
}

const applyState = withLogging(`set saturation to ${saturationLevel}%`)(applyLightStateToAll);

applyState(lightState.create().saturation(saturationLevel));