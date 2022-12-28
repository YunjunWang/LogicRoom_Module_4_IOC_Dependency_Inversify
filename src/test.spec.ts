import { container, createContainer } from "./Dependencies/IOC";
import Presenter from "./Presenter";

beforeEach(() => {
  createContainer("fake");
});

it("run code in a fake context", () => {
  expect(container.get(Presenter).load().message).toBe("fake message");
});
