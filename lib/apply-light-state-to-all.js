const applyLightState = require("./apply-light-state");
const getReachableLights = require("./get-reachable-lights");

module.exports = async (state) => {
  const reachableLights = await getReachableLights();

  return await Promise.all(
    reachableLights.map(light => applyLightState(light.id, state))
  );
}