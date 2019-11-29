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
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you

  get Template() {
    return /*html*/ `
    <div class="col-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${this.title}</h5>
            <ul>
              ${this.getTaskTemplate()}
            </ul>
            <button type="button" class="btn btn-success" onclick="app.listsController.addTask('${
              this.id
            }')">Add Task</button>
            <button type="button" class="btn btn-danger" onclick="app.listsController.removeList('${
              this.id
            }')">
            Delete List
            </button>
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
        ${t}<span class="btn btn-warning" onclick="app.listsController.removeTask('${this.id}', ${index})">X</span>
      </li>`;
    });

    return template;
  }
}
