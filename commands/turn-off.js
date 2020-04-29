const { lightState } = require("node-hue-api");
const commandLineArgs = require('command-line-args')

const withLogging = require("../lib/with-logging");
const applyLightState = require("../lib/apply-light-state");
const applyLightStateToAll = require("../lib/apply-light-state-to-all");

const applyStateToAll = withLogging("turn all lights off")(applyLightStateToAll);

const optionDefinitions = [
  { name: 'id', type: Number, multiple: true },
  { name: 'all', alias: 'A', type: Boolean, defaultOption: false }
]

const options = commandLineArgs(optionDefinitions)

const state = lightState.create().off();

const run = async () => {
  if (options.all) {
    await applyStateToAll(state);
    process.exit(0);
  }
  
  if (!options.id) {
    console.log("Provide one id at least or run with the --all flag.");
    process.exit(0);
  }
  
  options.id.forEach(id => {
    const applyState = withLogging(`turn light with id ${id} off`)(applyLightState)
    applyState(id, state)
  })
}

run();
