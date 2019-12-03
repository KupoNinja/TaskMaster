import ListsService from "../Services/ListsService.js";
import store from "../store.js";

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
    let form = event.target;
    let newList = {
      title: form.title.value
    };
    ListsService.addList(newList);
    _drawLists();
  }

  removeList(id) {
    let confirmed = confirm("Are you sure you want to delete?");
    if (confirmed) {
      ListsService.removeList(id);
    }
    _drawLists();
  }

  addTask(event, listId) {
    event.preventDefault();
    let task = event.target.task.value;
    ListsService.addTask(listId, task);
    _drawLists();
  }

  removeTask(listId, taskIndex) {
    let confirmed = confirm("Are you sure you want to delete?");
    if (confirmed) {
      ListsService.removeTask(listId, taskIndex);
    }
    _drawLists();
  }

  constructor() {
    _drawLists();
  }
}
