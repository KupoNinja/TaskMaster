import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie,
    //it will set the id its provided, or if that is undefined it will create a new one
    //(this is an alternative to object destructuring)
    this.id = data.id || generateId();
    this.title = data.title;
    this.tasks = data.tasks || [];
  }
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you

  get Template() {
    return /*html*/ `
    <div class="col-lg-3 col-md-12">
      <div class="card bg-primary">
        <div class="card-body">
        <div class="row d-flex justify-content-between">
          <h5 class="list-titles card-title">${this.title}</h5>
          <button type="button" class="btn btn-danger mr-2" onclick="app.listsController.removeList('${
            this.id
          }')">
            Delete List
            </button>
            </div>
          <hr class="bg-light">
            <ul>
              ${this.getTaskTemplate()}
            </ul>
            <form onsubmit="app.listsController.addTask(event, '${this.id}')">
              <input  class="task-input" type="text" name="task" placeholder="Enter Task" required/>
              <button type="submit" class="btn btn-success ml-2">Add Task</button>
            </form>
            
            
            
          </div>
        </div>
      </div>
    `;
  }

  getTaskTemplate() {
    let template = "";
    this.tasks.forEach((t, index) => {
      template += /*html*/ `
      <li class="card-text">
        ${t}<span class="pl-2" onclick="app.listsController.removeTask('${this.id}', ${index})"><i class="fas fa-ban text-danger"></i></span>
      </li>`;
    });

    return template;
  }
}
