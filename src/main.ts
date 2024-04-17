import { Ohce } from "./Ohce.js"

const name = process.argv.at(2)
if (!name) throw Error("Name is required as argument")

const ohce = new Ohce()

const result = ohce.execute(name)

console.log(result)
