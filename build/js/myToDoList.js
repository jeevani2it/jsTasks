"use strict";function createTaskList(){var e=document.getElementById("listValue").value;if(""===e)return alert("Enter To-do Task"),!1;document.getElementById("listValue").value="";var t=document.createElement("li");span=document.createElement("span");var n=document.createTextNode(e);span.id="task_"+i,span.onclick=subTask,span.appendChild(n),t.appendChild(span),ulElmt.appendChild(t),i++}function deleteFunction(){document.getElementById("sub_task_"+this.id.replace("remove_","")).parentElement.style.display="none",document.getElementById("taskComments").style.display="none",document.getElementById("ulListElement").style.display="none"}function doneFunction(){var e=document.getElementById("sub_task_"+this.id.replace("done_",""));e.innerHTML="<del>"+e.innerHTML+"</del>"}function subTask(){var e=document.getElementById("subTasks");if(void 0!==e&&null!=e)e.style.display="block",document.getElementsByTagName("H4")[0].innerHTML=this.innerHTML;else{var t=document.createElement("h4");t.textContent=this.innerHTML,container2.appendChild(t);var n=document.createElement("div");n.id="subTasks",n.className="sub-task-section";var a=document.createElement("input");a.type="text",a.id="subTasksValue";var l=document.createElement("button"),d=document.createTextNode("Save");l.onclick=saveSubTask,l.appendChild(d),n.appendChild(a),n.appendChild(l),container2.appendChild(n)}var i=document.getElementById("toDoSubTask"),o=this.id.replace("task_","");if(void 0!==i&&null!=i)i.value=o;else{var s=document.createElement("input");s.type="hidden",s.id="toDoSubTask",s.value=o,n.appendChild(s)}prepareSubTask(o)}function taskDescription(){var e=document.getElementById("taskComments");if(void 0!==e&&null!=e)e.style.display="block";else{var t=document.createElement("div");t.className="comment-section",t.id="taskComments";var n=document.createElement("textarea");n.id="taskCommentValue";var a=document.createElement("button"),l=document.createTextNode("Save");a.onclick=saveTaskComments,a.appendChild(l),t.appendChild(n),t.appendChild(a),container3.appendChild(t)}var d=document.getElementById("toDoTask"),i=this.id.replace("task_","");if(void 0!==d&&null!=d)d.value=i;else{var o=document.createElement("input");o.type="hidden",o.id="toDoTask",o.value=i,t.appendChild(o)}prepareComments(i)}function saveSubTask(){var e=document.getElementById("toDoSubTask"),t=document.getElementById("subTasksValue");if(""===t.value)return alert("Enter Valid Sub-Task"),!1;subTasksArr.push({id:e.value,value:t.value}),t.value="",console.log(subTasksArr),prepareSubTask(e.value)}function saveTaskComments(){var e=document.getElementById("toDoTask"),t=document.getElementById("taskCommentValue");if(""===t.value)return alert("Enter Comments"),!1;commentsArr.push({id:e.value,value:t.value}),t.value="",prepareComments(e.value)}function prepareSubTask(e){t=document.getElementById("subTaskLists");if(void 0!==t&&null!=t);else{var t;(t=document.createElement("div")).id="subTaskLists",container2.appendChild(t)}var n=document.getElementById("ulSubListElement");void 0!==n&&null!=n&&n.parentNode.removeChild(n);var a=document.createElement("ul");a.id="ulSubListElement",t.appendChild(a);for(var l=0;l<subTasksArr.length;l++)if(subTasksArr[l].id==e){var d=document.createElement("li"),i=document.createElement("span");i.className="sub-task-list-content";var o=document.createTextNode(subTasksArr[l].value);i.id="sub_task_"+l,i.onclick=taskDescription,i.appendChild(o),d.appendChild(i),document.getElementById("ulSubListElement").appendChild(d);(i=document.createElement("span")).className="sub-task-list-icon";var s=document.createElement("i");s.className="fa fa-check",s.id="done_"+l,s.onclick=doneFunction,i.appendChild(s);var c=document.createElement("i");c.className="fa fa-close",c.id="remove_"+l,c.onclick=deleteFunction,i.appendChild(c),d.appendChild(i)}}function prepareComments(e){var t=document.createElement("div");t.id="taskCommentLists",container3.appendChild(t);var n=document.getElementById("ulListElement");void 0!==n&&null!=n&&n.parentNode.removeChild(n);var a=document.createElement("ul");a.id="ulListElement",t.appendChild(a);for(var l=0;l<commentsArr.length;l++)if(commentsArr[l].id==e){var d=document.createElement("li"),i=document.createElement("span");i.className="comment-content";var o=document.createTextNode(commentsArr[l].value);i.appendChild(o),d.appendChild(i),document.getElementById("ulListElement").appendChild(d)}}var body=document.querySelector("body"),container=document.createElement("div");container.className="left-container";var container2=document.createElement("div");container2.className="middle-container";var container3=document.createElement("div");container3.className="right-container";var createField=document.createElement("input");createField.type="text",createField.id="listValue";var span=document.createElement("span");span.onclick=createTaskList;var iIcon=document.createElement("i");iIcon.className="fa fa-plus-circle",span.appendChild(iIcon);var h2=document.createElement("h2");h2.textContent="To Do List",container.appendChild(h2);var innerLeftContainer=document.createElement("div");innerLeftContainer.appendChild(createField),innerLeftContainer.appendChild(span),container.appendChild(innerLeftContainer),body.appendChild(container),body.appendChild(container2),body.appendChild(container3);var listDiv=document.createElement("div");listDiv.className="to-do-list-container";var ulElmt=document.createElement("ul");ulElmt.id="toDoListDiv",listDiv.appendChild(ulElmt),container.appendChild(listDiv);var i=1,commentsArr=[],subTasksArr=[];