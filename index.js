// Code your solution in this file!
const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) {
    return console.log(driver.name)
  })
}

const logDriversByHometown = function (drivers, location) {
  if (drivers.hometown === location) {
    console.log(drivers.name)
  }
}

const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue;
  })
}

const driversByName = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.name.localeCompare(driverTwo.name)
  })
}

const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, driver) {
    return total + driver.revenue;
  })
}

const averageRevenue = function (drivers) {
  return totalRevenue(drivers)/drivers.length;
}