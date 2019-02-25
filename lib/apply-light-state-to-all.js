const getConnectedApi = require("./get-connected-api");
const getReachableLights = require("./get-reachable-lights");

module.exports = async (state) => {
  const api = await getConnectedApi();
  const reachableLights = await getReachableLights(api);

  const setLightStateRequests =
    reachableLights.map(light => api.setLightState(light.id, state)); 

  return await Promise.all(setLightStateRequests);
}