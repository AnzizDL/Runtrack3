function jsonValueKey(jsonString, key) {
    const obj = JSON.parse(jsonString)
    return obj[key]
}

const myJson = `{
    "name": "La Plateforme_",
    "address": "8 rue d'hozier",
    "city": "Marseille",
    "nb_staff": "11",
    "creation": "2019"
}`

console.log(jsonValueKey(myJson, "city"))      
console.log(jsonValueKey(myJson, "name"))      
console.log(jsonValueKey(myJson, "creation"))  
console.log(jsonValueKey(myJson, "nb_staff"))  
console.log(jsonValueKey(myJson, "address"))
