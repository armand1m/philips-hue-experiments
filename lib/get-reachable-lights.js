module.exports = async (api) => {
  const lightsPayload = await api.lights();
  const reachableLights = lightsPayload.lights.filter(light => light.state.reachable);

  return reachableLights;
};