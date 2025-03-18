let map = new Map()

map.set("nome", "Danilo")
map.set("idade", 39)
map.set("altura", 1.80)

console.log(map.get("nome"))
console.log(map.has("idade"))

console.log(map.size)

map.forEach((valor, chave)=>{
    console.log(`${chave}: ${valor}`)
})
// Remover um elemento do map
map.delete("idade");

map.forEach((valor, chave)=>{
    console.log(`${chave}: ${valor}`)
})

//Remover todos os elementos do map
map.clear()
<<<<<<< HEAD
console.log(map.size)
=======
console.log(map.size)
>>>>>>> d557431e05be311ef0d624d7ac3c9a4f22e79470
