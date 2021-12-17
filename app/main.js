import { SportingGoodsController } from "./Controllers/SportingGoodsController.js";


class App {
  sportingGoodsController = new SportingGoodsController();
}

window["app"] = new App();
