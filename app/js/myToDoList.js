'use strict'

// creating the content html
var body 				= document.querySelector("body");
var container       	= document.createElement("div");
container.className 	= 'left-container';
var container2      	= document.createElement("div");
container2.className	= 'middle-container';
var container3      	= document.createElement("div");
container3.className 	= 'right-container';

// input 
var createField   = document.createElement("input");
createField.type  = "text";
createField.id    = 'listValue';

//add link
var span      		= document.createElement("span");
span.onclick    	= createTaskList;
var iIcon 			= document.createElement('i');
iIcon.className		= 'fa fa-plus-circle';
span.appendChild(iIcon);

//heading
var h2      	= document.createElement("h2");
h2.textContent 	= 'To Do List';
container.appendChild(h2);

var innerLeftContainer     = document.createElement("div");
innerLeftContainer.appendChild(createField);
innerLeftContainer.appendChild(span);
container.appendChild(innerLeftContainer);

//appending all the three columns to body
body.appendChild(container);
body.appendChild(container2);
body.appendChild(container3);

// creating the contnet html
var listDiv 		= document.createElement('div');
listDiv.className 	= 'to-do-list-container';

var ulElmt 	= document.createElement('ul');
ulElmt.id 	= 'toDoListDiv';
listDiv.appendChild(ulElmt);
container.appendChild(listDiv);

var i=1;
var commentsArr = []; // Comments Arr
var subTasksArr = []; // Subtask Arr

// Create a new list item when clicking on the "Add" button
function createTaskList() {

	var toDoValue = document.getElementById("listValue").value;
	// validating the entered text
	if(toDoValue === '')
	{
		alert('Enter To-do Task');
		return false;
	}

	document.getElementById("listValue").value = '';

	var liElement   = document.createElement("li"); // creating a new li element

	span      		= document.createElement("span");
	var toDoText  	= document.createTextNode(toDoValue);
	span.id 		= "task_"+i;
	span.onclick 	= subTask;
	span.appendChild(toDoText);  
	liElement.appendChild(span);

	//adds an element to the DOM
	ulElmt.appendChild(liElement);
	i++;
}

//deleting the lists
function deleteFunction(){

	var removeContentId 	= document.getElementById("sub_task_"+this.id.replace('remove_', ''));

	var liHide 				= removeContentId.parentElement;
	liHide.style.display 	= "none";

	document.getElementById('taskComments').style.display 	= 'none';
	document.getElementById('ulListElement').style.display 	= 'none';
}

//striking the done lists
function doneFunction(){
	var listContent 		= document.getElementById("sub_task_"+this.id.replace('done_', ''));
	listContent.innerHTML 	= '<del>'+listContent.innerHTML+'</del>';
}

function subTask()
{
	// creating the contnet html
	var subTaskDesc = document.getElementById('subTasks');

	if(typeof(subTaskDesc) != 'undefined' && subTaskDesc != null)
	{
	 	subTaskDesc.style.display = "block";
	 	document.getElementsByTagName("H4")[0].innerHTML = this.innerHTML;
	}
	else
	{
		var h4      	= document.createElement("h4");
		h4.textContent 	= this.innerHTML;
		container2.appendChild(h4);

		var commentDiv	= document.createElement("div");
		commentDiv.id  	= "subTasks";
		commentDiv.className  	= "sub-task-section";

		var createField		= document.createElement("input");
		createField.type  	= "text";
		createField.id  	= 'subTasksValue';

		var button      = document.createElement("button");
		var saveText  	= document.createTextNode("Save");
		button.onclick  = saveSubTask;
		button.appendChild(saveText);  

		commentDiv.appendChild(createField);
		commentDiv.appendChild(button);
		container2.appendChild(commentDiv);
	}

	// Creating Hidden field
	var subTaskElement =  document.getElementById('toDoSubTask');

	// Current Id 
	var taskId = this.id;
	var globalId = taskId.replace('task_', '');

	if(typeof(subTaskElement) != 'undefined' && subTaskElement != null)
	{      
		subTaskElement.value  = globalId;
	}
	else
	{
		var hiddenField   = document.createElement("input");
		hiddenField.type  = "hidden";
		hiddenField.id    = 'toDoSubTask';
		hiddenField.value = globalId;
		commentDiv.appendChild(hiddenField);
	}

  	prepareSubTask(globalId);
}

function taskDescription()
{
	// creating the contnet html
	var taskDesc = document.getElementById('taskComments');

	if(typeof(taskDesc) != 'undefined' && taskDesc != null)
	{
	 	taskDesc.style.display = "block";
	}
	else
	{
		var commentDiv			= document.createElement("div");
		commentDiv.className 	= "comment-section";
		commentDiv.id  			= "taskComments";

		var createField	= document.createElement("textarea");
		createField.id  = 'taskCommentValue';

		var button      = document.createElement("button");
		var saveText  	= document.createTextNode("Save");
		button.onclick  = saveTaskComments;
		button.appendChild(saveText);  

		commentDiv.appendChild(createField);
		commentDiv.appendChild(button);
		container3.appendChild(commentDiv);
	}

	// Creating Hidden field
	var commentElement =  document.getElementById('toDoTask');

	// Current Id 
	var taskId = this.id;
	var globalId = taskId.replace('task_', '');

	if(typeof(commentElement) != 'undefined' && commentElement != null)
	{      
		commentElement.value  = globalId;
	}
	else
	{
		var hiddenField   = document.createElement("input");
		hiddenField.type  = "hidden";
		hiddenField.id    = 'toDoTask';
		hiddenField.value = globalId;
		commentDiv.appendChild(hiddenField);
	}

  	prepareComments(globalId);
}

function saveSubTask()
{  
	var subTaskElement 	=  document.getElementById('toDoSubTask');
	var textElement 	=  document.getElementById('subTasksValue');

	if(textElement.value === '')
	{
		alert('Enter Valid Sub-Task');
		return false;
	}

	subTasksArr.push({ id: subTaskElement.value, value: textElement.value });
	textElement.value = '';
	console.log(subTasksArr);
	prepareSubTask(subTaskElement.value);
}

function saveTaskComments()
{  
	var commentElement =  document.getElementById('toDoTask');
	var textareaElement =  document.getElementById('taskCommentValue');

	if(textareaElement.value === '')
	{
		alert('Enter Comments');
		return false;
	}

	commentsArr.push({ id: commentElement.value, value: textareaElement.value });
	textareaElement.value = '';
	prepareComments(commentElement.value);
}

// Preparing the sub task
function prepareSubTask(globalId)
{	
	var subTaskElmt = document.getElementById('subTaskLists');

	if(typeof(subTaskElmt) != 'undefined' && subTaskElmt != null)
	{      
		// later purpose
	}
	else
	{
		var subTaskElmt	= document.createElement("div");
		subTaskElmt.id  = 'subTaskLists';

		container2.appendChild(subTaskElmt);
	}

	//var ulElmt 	= document.getElementById('ulSubListElement_'+globalId);
	var ulElmt 	= document.getElementById('ulSubListElement');

	if(typeof(ulElmt) != 'undefined' && ulElmt != null)
	{ 
		ulElmt.parentNode.removeChild(ulElmt);
	}

	var ulElement   = document.createElement("ul");
	ulElement.id 	= 'ulSubListElement';
	subTaskElmt.appendChild(ulElement);

  	for (var j = 0; j < subTasksArr.length; j++) 
  	{
	    if(subTasksArr[j].id == globalId)
	    {
	    	var liElement   = document.createElement("li"); // creating a new li element
			var span      	= document.createElement("span");
			span.className 	= "sub-task-list-content";
			var toDoText  	= document.createTextNode(subTasksArr[j].value);
			span.id 		= "sub_task_"+j;
			span.onclick 	= taskDescription;
			span.appendChild(toDoText);  
			liElement.appendChild(span);

			//adds an element to the DOM
			document.getElementById('ulSubListElement').appendChild(liElement);

			var span		= document.createElement("span");
			span.className 	= "sub-task-list-icon";

			var closeIcon 		= document.createElement('i');
			closeIcon.className	= 'fa fa-check';
			closeIcon.id       	= "done_"+j;
			closeIcon.onclick	= doneFunction;
			span.appendChild(closeIcon);

			var removeIcon 			= document.createElement('i');
			removeIcon.className	= 'fa fa-close';
			removeIcon.id       	= "remove_"+j;
			removeIcon.onclick		= deleteFunction;
			span.appendChild(removeIcon);

			liElement.appendChild(span);
	    }
	}
}

// Preparing the comments for the sub task
function prepareComments(globalId)
{
	var taskCommentElmt	= document.createElement("div");
	taskCommentElmt.id  = 'taskCommentLists';

	container3.appendChild(taskCommentElmt);

	var ulElmt 			= document.getElementById('ulListElement');

	if(typeof(ulElmt) != 'undefined' && ulElmt != null)
	{ 
		ulElmt.parentNode.removeChild(ulElmt);
	}

	var ulElement   = document.createElement("ul");
	ulElement.id 	= 'ulListElement';
	taskCommentElmt.appendChild(ulElement);

  	for (var j = 0; j < commentsArr.length; j++) 
  	{
	    if(commentsArr[j].id == globalId)
	    {
			var liElement 	= document.createElement("li"); // creating a new li element  
			var span      	= document.createElement("span");
			span.className 	= "comment-content";
			var toDoText  	= document.createTextNode(commentsArr[j].value);

			span.appendChild(toDoText);
			liElement.appendChild(span);

			//adds an element to the DOM
			document.getElementById("ulListElement").appendChild(liElement);
	    }
	}
}