import List from "../Models/List.js";
import store from "../store.js";

//Public
class ListsService {
  constructor() {}
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage,
  //be sure to call the store method to save after each change
  addList(rawList) {
    store.State.lists.push(new List(rawList));
    store.saveState();
  }

  removeList(id) {
    let i = store.State.lists.findIndex(l => l.id == id);
    store.State.lists.splice(i, 1);
    store.saveState();
  }

  addTask(id, task) {
    let listToUpdate = store.State.lists.find(l => l.id == id);
    listToUpdate.tasks.push(task);
    store.saveState();
  }
}

const SERVICE = new ListsService();
export default SERVICE;
