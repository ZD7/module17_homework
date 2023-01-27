import { getPercents } from "../index.js"


describe("test getPercents", () => {
  it("getPercent 0%  to equal 100", () => {
    const result = getPercents(0, 100);
    expect(result).toBe(0);
  }),
    it("getPercent 100% to equal 0", () => {
      const result = getPercents(100, 0);
      expect(result).toBe(0);
    });
    it("getPercent 10% to equal 100", () => {
      const result = getPercents(10, 100);
      expect(result).toBe(10);
    });
});
