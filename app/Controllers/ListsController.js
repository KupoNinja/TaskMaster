import ListsService from "../Services/ListsService.js";
// import Swal from "sweetalert2";
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
    Swal.fire({
      title: "Delete this list?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.value) {
        ListsService.removeList(id);
        Swal.fire("Deleted!", "The list has been deleted.", "success");
        _drawLists();
      }
    });

    // let confirmed = confirm("Are you sure you want to delete?");
    // if (confirmed) {
    //   ListsService.removeList(id);
    // }
    // _drawLists();
  }

  addTask(event, listId) {
    event.preventDefault();
    let task = event.target.task.value;
    ListsService.addTask(listId, task);
    _drawLists();
  }

  removeTask(listId, taskIndex) {
    Swal.fire({
      title: "Delete this task?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.value) {
        ListsService.removeTask(listId, taskIndex);
        Swal.fire("Deleted!", "The task has been deleted.", "success");
        _drawLists();
      }
    });

    // let confirmed = confirm("Are you sure you want to delete?");
    // if (confirmed) {
    //   ListsService.removeTask(listId, taskIndex);
    // }
    // _drawLists();
  }

  constructor() {
    _drawLists();
  }
}
