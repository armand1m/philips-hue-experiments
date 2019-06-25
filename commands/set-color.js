const color = require('onecolor');
const colorToName = require('color-to-name');
const { lightState } = require('node-hue-api');

const withLogging = require('../lib/with-logging');
const applyLightStateToAll = require('../lib/apply-light-state-to-all');
const createColorErrorMessage = require('../lib/create-color-error-message');

const colorHex = process.argv[2];

if (!colorHex) {
  throw new Error(createColorErrorMessage('Color was not defined'));
}

const recognizedColor = color(colorHex);

if (!recognizedColor) {
  throw new Error(createColorErrorMessage('Color could not be recognized'));
}

const colorAsHex = recognizedColor.hex();
const [red, green, blue] = recognizedColor.toJSON().slice(1, -1);
const colorName = colorToName.findClosestColor(colorAsHex).name;

const applyState = withLogging(`set color to '${colorName} (${colorAsHex})'`)(applyLightStateToAll);

applyState(lightState.create().rgb(red, green, blue));