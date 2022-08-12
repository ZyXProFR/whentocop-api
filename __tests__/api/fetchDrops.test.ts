import { expect, it, describe } from 'vitest';
import fetchDrops from "../../src/index";

describe("fetchDrops tests", () => {
  it("should fetch drops", async () => {
    await expect(fetchDrops(new Date())).resolves.not.toThrowError();
  });
}) 