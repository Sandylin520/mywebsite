setTimeout(function() {
var todos= ["Buy a pan"];
var input = prompt("what would you like to do today?");
while(input !== "quit"){
 //handle input
  if( input === "list"){
  listToDo();
} else if( input === "new") {
  addToDo();
} else if(input === "delete") {
  deleteToDo();
}
  //ask again for new input
  input = prompt("What would you like to do?");
}

function listToDo(){
  console.log("**********");
  todos.forEach(function(todo, i){
  console.log( i + ":" + todo);
  });
  console.log("**********");
}

function addToDo(){
  var newTodo = prompt("what would you like to do today?");
  //add the todos array
  todos.push(newTodo);
  console.log("added Todo");
}

function deleteToDo(){
  var index = prompt("Enter index of todo to delete");
  //delete that todos
  //splice()
  todos.splice(index,1);
  console.log("deleted Todo");
}

//if input === quit,離開迴圈
console.log('Ok,you can quit the App')
}, 200);

/*
setTimeout(function() {
var todos= ["Buy a pan"];
var input = prompt("what would you like to do today?");
while(input !== "quit"){
 //handle input
 if( input === "list"){
  console.log("**********");
  todos.forEach(function(todo, i){
   console.log( i + ":" + todo);
  });
  console.log("**********");
} else if( input === "new") {
  //ask for new todo
  var newTodo = prompt("what would you like to do today?");
  //add the todos array
  todos.push(newTodo);
  console.log("Added Todo");
} else if(input === "delete") {
  //ask for index of todo to be deleted
  var index = prompt("Enter index of todo to delete");
  //delete that todos
  //splice()
  todos.splice(index,1);
  console.log("Deleted Todo");
}
  //ask again for new input
  input = prompt("What would you like to do?");
}
//if input === quit,離開迴圈
console.log('Ok,you can quit the App')
}, 200);
*/  