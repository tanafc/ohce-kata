import { describe, expect, it, vi } from "vitest"
import { Ohce } from "./Ohce.js"
import { Logger } from "./Logger.js"

describe("Ohce", () => {
  it("greets good morning between 6 and 12 hours", () => {
    const name = "Pedro"
    const result = `¡Buenos días ${name}!`
    const loggerSpy: Logger = {
      log: vi.fn(() => result),
    }
    const ohce = new Ohce(loggerSpy)

    ohce.execute(name)

    expect(loggerSpy.log).toHaveBeenCalledWith(result)
  })
})
