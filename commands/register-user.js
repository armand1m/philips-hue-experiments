const os = require("os");
const hue = require("node-hue-api");
const HueApi = hue.HueApi;

const description = os.hostname();

(async () => {
  try {
    const api = new HueApi();
    const [bridge] = await hue.nupnpSearch();
    const user = await api.registerUser(bridge.ipaddress, description);

    console.log("User successfully registered.", user);

    return user;
  } catch (error) {
    console.error("Failed to register user.", error);
  }
})();