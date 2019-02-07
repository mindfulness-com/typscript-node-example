import { expect } from "chai";
import server from "./index";
import "mocha";

describe("Index", () => {
  it("should return something", () => {
    expect(server).to.not.be.null;
  });
});
