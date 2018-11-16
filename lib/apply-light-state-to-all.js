const hue = require("node-hue-api");
const getConnectedApi = require("./get-connected-api");

module.exports = async (state) => {
  const api = await getConnectedApi();
  const lightsPayload = await api.lights();
  const reachableLights = lightsPayload.lights.filter(light => light.state.reachable);

  const setLightStateRequests =
    reachableLights.map(light => api.setLightState(light.id, state)); 

  return await Promise.all(setLightStateRequests);
}