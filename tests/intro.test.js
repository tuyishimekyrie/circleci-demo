import { describe, it, expect } from "vitest"
import { max } from "../src/intro"

describe("max", () => {
    it("return 1", () => {
        expect(max(1, 0)).toBe(1);
    })
    it("return 2", () => {
      expect(max(1, 2)).toBe(2);
    });
})