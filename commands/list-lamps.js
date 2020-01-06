const createTable = require("../lib/create-table");
const getConnectedApi = require("../lib/get-connected-api");
const createLampTableHead = require("../lib/create-lamp-table-head");
const mapLampToTableItem = require("../lib/map-lamp-to-table-item");

(async () => {
  const api = await getConnectedApi();
  const { lights } = await api.lights();

  const table = createTable([
    createLampTableHead(),
    ...lights.map(mapLampToTableItem)
  ])

  console.log(table.toString())
})()