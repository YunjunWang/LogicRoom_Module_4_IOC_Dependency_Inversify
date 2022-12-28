import { injectable, inject } from "inversify";
import Repository from "./Repository";

@injectable()
export default class Presenter {
  @inject(Repository)
  repository: Repository;

  load = () => {
    return { message: this.repository.load() };
  };
}
