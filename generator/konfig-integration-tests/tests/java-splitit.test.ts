import { e2e } from "../util";
import { test } from "vitest";

test("splitit/java-splitit", async () => {
  await e2e(4023);
});
