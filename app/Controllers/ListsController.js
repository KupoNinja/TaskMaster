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

//Public
export default class ListsController {
  addList(event) {
    event.preventDefault();
    let formData = event.target;
    let newList = {
      title: formData.title.value
    };
    ListsService.addList(newList);
    _drawLists();
  }

  removeList(id) {
    ListsService.removeList(id);
    _drawLists();
  }

  addTask(listId) {
    let tasks = "Get groceries";
    ListsService.addTask(listId, tasks);
    _drawLists();
  }

  removeTask(listId, taskIndex) {
    ListsService.removeTask(listId, taskIndex);
    _drawLists();
  }

  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
