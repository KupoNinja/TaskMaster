import ListsService from "../Services/ListsService.js";
import store from "../store.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let template = "";
  let lists = store.State.lists;
  lists.forEach(l => {
    template += l.Template;
  });
  document.getElementById("lists-wrapper").innerHTML = template;
}

// _drawLists();

//Public
export default class ListsController {
  addList() {
    let fakeList = {
      title: "ToDo"
    };
    ListsService.addList(fakeList);
    _drawLists();
  }

  removeList(id) {
    ListsService.removeList(id);
    _drawLists();
  }

  addTask(id) {
    let tasks = "Get groceries";
    ListsService.addTask(id, tasks);
    _drawLists();
  }

  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
