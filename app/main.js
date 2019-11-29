import ListsController from "./Controllers/ListsController.js";

//NOTE This should be good to go
class App {
  listsController = new ListsController();
}

window["app"] = new App();
