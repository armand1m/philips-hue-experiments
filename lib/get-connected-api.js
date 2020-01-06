const hue = require("node-hue-api");

const { HueApi } = hue;

const getConnectedApi = async () => {
  const [bridge] = await hue.nupnpSearch();

  return new HueApi(bridge.ipaddress, process.env.PHILIPS_HUE_USERNAME);
};

module.exports = getConnectedApi