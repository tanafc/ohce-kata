import { describe, expect, it } from "vitest"

describe("Ohce", () => {
  it("greets good morning between 6 and 12 hours", () => {
    const name = "Pedro"
    const ohce = new Ohce()

    const result = ohce.execute(name)

    expect(result).toBe("¡Buenos días Pedro!")
  })
})
