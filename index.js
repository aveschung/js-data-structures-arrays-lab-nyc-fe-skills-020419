// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name)
}
function destructivelyRemoveLastDriver() {
  drivers.pop()
} 
function appendDriver(name) {
  let driversCopy = drivers.slice()
  driversCopy.push(name)
  
return driversCopy 
}
