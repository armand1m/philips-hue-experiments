const mapLampToTableItem = lamp => [
  lamp.id,
  lamp.name,
  lamp.manufacturername,
  lamp.productname,
  lamp.modelid,
  lamp.state.reachable ? "Yes" : "No",
  lamp.state.on ? "On" : "Off",
]

module.exports = mapLampToTableItem