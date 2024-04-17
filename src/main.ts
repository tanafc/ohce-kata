import { LoggerConsole } from "./Logger.js"
import { Ohce } from "./ohce.js"

const name = process.argv.at(2)
if (!name) throw Error("Name is required as argument")

const logger = new LoggerConsole()

const ohce = new Ohce(logger)

ohce.execute(name)
