module.exports = {
    isValidPOST,
}

function isValidPOST(car) {
    if (!car.VIN || car.VIN.length < 17) {
        return false
    } else if (!car.Make || typeof car.Make !== "string") {
        return false
    } else if (!car.Model || typeof car.Model !== "string") {
        return false
    } else if (!car.Year || typeof car.Year !== "number") {
        return false
    } else if (!car.Mileage || typeof car.Mileage !== "number") {
        return false
        
        return true
    }
}