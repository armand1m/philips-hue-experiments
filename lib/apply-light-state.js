const getConnectedApi = require("./get-connected-api");

module.exports = async (id, state) => {
  const api = await getConnectedApi();
  return api.setLightState(id, state);
}