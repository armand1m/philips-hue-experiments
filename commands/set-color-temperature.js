const { lightState } = require("node-hue-api");
const withLogging = require("../lib/with-logging");
const applyLightStateToAll = require("../lib/apply-light-state-to-all");

const colorTemperatureLevel = Number(process.argv[2]);

if (!colorTemperatureLevel) {
  throw new Error("ColorTemperature level argument is missing. Make sure you ran it like: `npm run set-color-temperature -- 170`");
}

if (colorTemperatureLevel > 500) {
  throw new Error("Color Temperature level cannot be above 500. Select a value between 153 and 500.");
}

if (colorTemperatureLevel < 153) {
  throw new Error("Color Temperature level cannot be below 153. Select a value between 153 and 500.");
}

const applyState = withLogging(`set color temperature to "${colorTemperatureLevel}"`)(applyLightStateToAll);

applyState(lightState.create().colorTemperature(colorTemperatureLevel));