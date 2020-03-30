// Code your solution in this file!
const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) {
    return console.log(driver.name)
  })
}

const logDriversByHometown = function (drivers, location) {
  if (driver.hometown === location) {
    console.log(driver.name)
  }
}

const driversByRevenue = function (drivers) {
  return driverss.slice().sort(function (driverOne, driverTwo) {
    return driverOne - driverTwo
  })
}