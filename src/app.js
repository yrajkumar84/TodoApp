import { LightningElement ,track} from "lwc";

export default class App extends LightningElement {
  deleteval=''
  newTask ='';
  newTitle='';
  @track todoTask =[
    // {
    //    id: 1,
    //   title :"this.newTitle",
    //   name : "this.newTask "
    // }
  ];
//dfgdlgkldfkg

  handleInputTitle(event){
    this.newTitle = event.target.value;
    
  }
  handleInput(event){
    this.newTask = event.target.value;
    
  }
  addNewTask(){

    console.log("inputbox")
    // let inputbox = this.template.querySelector('.inputbox').innerText;
    // console.log(inputbox)
    // //this.newTask =inputbox;
     let count = this.todoTask.length;
    // console.log(count);
    let obj = {
      id: ++count,
      title :this.newTitle,
      name : this.newTask 
    }
    console.log(obj);
    this.todoTask.push(obj);
    this.newTask='';
    this.newTitle='';
    // console.log(this.todoTask);
  
 console.log(JSON.stringify(this.todoTask));
  }
  deleteTask(event){
    //let v = this.todoTask[index];
   // console.log(event.target.name);
    let index = event.target.name;
    console.log(index)
    this.todoTask.splice(--index,1)
    //console.log(this.todoTask)
    console.log(JSON.stringify(this.todoTask));
    // console.log(v);
    
  }
 
}

