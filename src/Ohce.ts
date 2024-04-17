import { Logger } from "./Logger.js"

export class Ohce {
  private readonly logger

  constructor(logger: Logger) {
    this.logger = logger
  }

  execute = (prompt: string) => {
    return this.logger.log("¡Buenos días Pedro!")
  }
}
