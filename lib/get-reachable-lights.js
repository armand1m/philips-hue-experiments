const getConnectedApi = require("./get-connected-api")

module.exports = async () => {
  const api = await getConnectedApi();
  const lightsPayload = await api.lights();
  const reachableLights = lightsPayload.lights.filter(light => light.state.reachable);

  return reachableLights;
};