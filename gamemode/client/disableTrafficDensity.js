const config = {
  pedFrequency: 0,
  trafficFrequency: 0
};
setTick(() => {
  SetPedDensityMultiplierThisFrame(config.pedFrequency);
  SetScenarioPedDensityMultiplierThisFrame(config.pedFrequency, config.pedFrequency);
  SetRandomVehicleDensityMultiplierThisFrame(config.trafficFrequency);
  SetParkedVehicleDensityMultiplierThisFrame(config.trafficFrequency);
  SetVehicleDensityMultiplierThisFrame(config.trafficFrequency);
});