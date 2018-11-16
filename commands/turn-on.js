const { lightState } = require("node-hue-api");
const withLogging = require("../lib/with-logging");
const applyLightStateToAll = require("../lib/apply-light-state-to-all");

const applyState = withLogging("turn lights on")(applyLightStateToAll);

applyState(lightState.create().on());