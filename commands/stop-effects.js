const { lightState } = require("node-hue-api");
const withLogging = require("../lib/with-logging");
const applyLightStateToAll = require("../lib/apply-light-state-to-all");

const applyState = withLogging("stop light effects")(applyLightStateToAll);

applyState(lightState.create().effect("none"));