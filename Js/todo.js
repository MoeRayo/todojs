//this function will add a new to do item to the list, it is being called when the add todo item button is clicked
function addItem(){
  
  //check if the user has entered an item inside the box, if not, display an error message
    let todoItemValue = document.getElementById('todoItem').value; //Get the value of the textbox with id, todoItem. Save the value inside variable called todoItemValue.

    let todoDescriptionValue = document.getElementById('todoDescription').value;
    
    let todoResponseValue = document.getElementById('todoResponse').value;

    let newTodoResponseValue = todoResponseValue.toLowerCase();
  // let counterValue = document.getElementById('counter'); //Get the value of the textbox with id, todoItem. Save the value inside variable called todoItemValue.

 if(todoItemValue == ''){
  //This means they have not entered anything, display error  message
    // Show alert
      document.getElementById('message1').innerHTML = "You need to enter a To-Do item!"; // This is setting the error message to display
          
      document.getElementById('message1').style = 'display:block'; //This will make the hidden message box for error to appear

    // Set timeout (This means message disappears after 3 secs)
      setTimeout(function () {
        document.getElementById('message1').style = 'display:none';
      }, 3000);

 } else if( newTodoResponseValue == "yes"){
  //Display the todo item under important
  // document.getElementById('message').style = 'display:none';
  //get present list items:
    let urgentItems = document.getElementById('sidebar').innerHTML;

  //append new todo item to that.
    let newUrgentItems = urgentItems +'<li class="list-group-item todoListItem display-7">' + "<h3>"+ todoItemValue + "</h3>"  + todoDescriptionValue + '   <button onclick="deleteItem(this)" class="text-danger" title="delete this todo"><span class="fa fa-trash"></span></button><button onclick="completeItem(this)" class="text-success" title="complete this todo"><span class="fa fa-check"></span></button><td>';

  //display the new list
    document.getElementById('sidebar').innerHTML = newUrgentItems;

  // Show alert
    document.getElementById('message2').innerHTML = "To-Do Item Added"; // This is setting the success message to display
        
    document.getElementById('message2').style = 'display:block'; //This will make the hidden message box for success to appear

  // Set timeout (This means message disappears after 3 secs)
    setTimeout(function () {
      document.getElementById('message2').style = 'display:none';
    }, 3000);

  //clear the box
    document.getElementById('todoItem').value='';
    document.getElementById('todoDescription').value='';
    document.getElementById('todoResponse').value='';

 } else {
  //Display the todo item under unimportant
  //don't forget to hide the error message
  // document.getElementById('message').style = 'display:none';
  //get present list items:
    let presentListItems = document.getElementById('todoList').innerHTML;

  //append new todo item to that.
    let newListItems = presentListItems +'<li class="list-group-item todoListItem display-7">' + "<h3>"+ todoItemValue + "</h3>"  + todoDescriptionValue + '   <button onclick="deleteItem(this)" class="text-danger" title="delete this todo"><span class="fa fa-trash"></span></button><button onclick="completeItem(this)" class="text-success" title="complete this todo"><span class="fa fa-check"></span></button><td>';

  //display the new list
    document.getElementById('todoList').innerHTML = newListItems;

  // Show alert
    document.getElementById('message2').innerHTML = "To-Do Item Added"; // This is setting the success message to display
      
    document.getElementById('message2').style = 'display:block'; //This will make the hidden message box for success to appear

  // Set timeout (This means message disappears after 3 secs)
    setTimeout(function () {
      document.getElementById('message2').style = 'display:none';
    }, 3000);

  //clear the box
    document.getElementById('todoItem').value='';
    document.getElementById('todoDescription').value='';
    document.getElementById('todoResponse').value='';

 }


}

//This function will delete a single todo item from the list. 
//Takes in 1 parameter, the item to be deleted
function deleteItem(item){
  // create confrmation dialog
    if (confirm('You are about to delete To-Do item!')) {
      item.parentElement.remove(); //this gets the parent element of the delete button (i.e the <li> holding that particular button clicked), and then remove it from display
    }

  // Show alert
    document.getElementById('message1').innerHTML = "To-Do Item Deleted!"; // This is setting the success message to display
      
    document.getElementById('message1').style = 'display:block'; //This will make the hidden message box for success to appear

  // Set timeout (This means message disappears after 3 secs)
    setTimeout(function () {
      document.getElementById('message1').style = 'display:none';
    }, 3000);

}

//this function will mark a single todo item as completed. 
//Takes in 1 parameter, the item to be completed
function completeItem(item){
  //same as we did for delete, get the parent element, cross the content out to show that it has been completed
    let presentContent = item.parentElement.innerHTML;
  //add strike tag
    let newContent = '<strike>' + presentContent + '</strike>';
  //display the new content
   item.parentElement.innerHTML = newContent;

  // Show alert
    document.getElementById('message2').innerHTML = "To-Do Item Completed"; // This is setting the success message to display
        
    document.getElementById('message2').style = 'display:block'; //This will make the hidden message box for success to appear

  // Set timeout (This means message disappears after 3 secs)
    setTimeout(function () {
      document.getElementById('message2').style = 'display:none';
    }, 3000);

}

//Search both to-do lists
let search = document.getElementById('searchInput');

search.addEventListener('keyup', searchList);
function searchList(e) {
  const text = e.target.value.toLowerCase(); // this will grab the text typed in search and convert to lowercase

  // now we compare text above todo list that has a class of todoListItem
  document.querySelectorAll('.todoListItem').forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    }
    else{
      task.style.display = 'none';
    }
  });
}
