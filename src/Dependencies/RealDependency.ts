import IDependency from "./IDependency";
import { injectable } from "inversify";

@injectable()
export default class RealDependency implements IDependency {
  message() {
    return "real message";
  }
}
