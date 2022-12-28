import IDependency from "./IDependency";
import { injectable } from "inversify";

@injectable()
export default class FakeDependency implements IDependency {
  message() {
    return "fake message";
  }
}
