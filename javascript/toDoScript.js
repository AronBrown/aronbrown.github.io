// Aggiunge la spunta quando premi su un task
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Aggiunge un task quando premi invio sulla barra di input
var inputTask = document.getElementById("myInput");
inputTask.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("addBtn").click();
  }
});

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var oldItems = JSON.parse(localStorage.getItem('task'))||[];
  var newItem = document.getElementById("myInput").value;
  var t = document.createTextNode(newItem);
  //console.log(newItem);

  var controlloOggetto = "\\\""+newItem+"\\\"";
  var storageAttuale = JSON.stringify(localStorage.task);

  if (storageAttuale.includes(controlloOggetto)){
    alert("Attività già presente");
    document.getElementById("myInput").value = "";
    return false;
  }

  if (newItem === '') {
    alert("Non hai scritto nulla");
    return false;
  }
  oldItems.push(newItem);
  localStorage.setItem('task', JSON.stringify(oldItems));
  li.appendChild(t);
  if (newItem === '') {
    alert("Non hai scritto nulla");
  } else {
    document.getElementById("myUL").appendChild(li);
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("Nuovo!");
    span.className = "nuovo";
    span.appendChild(txt);
    li.appendChild(span)
  }
  document.getElementById("myInput").value = "";
}

function inizializzaStorageUtenti(){
  if (typeof(localStorage)=="undefined") {
    localStorage.task="[]" ;
  }
  var ls=JSON.parse(localStorage.task);
  var lsL=ls.length;
  for (i = 0; i<lsL; i+1) {
    var li = document.createElement("li");
    var passata=JSON.stringify(ls[i]).replace(/\"/g, "");
    console.log(passata)
    var t = document.createTextNode(passata);
    li.appendChild(t);
    document.getElementById("myUL").appendChild(li);
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    // Click on a close button to hide the current list item
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var contenuto = this.parentElement;
        contenuto.style.display = "none";
        var taskAttuale = contenuto.textContent.replace("×", "");
        //console.log("task attuale: "+taskAttuale);
        var taskRimozione = JSON.stringify(localStorage.task);
        //console.log("task rimozione: "+taskRimozione);
        var taskDaRimuovere = "\\\""+taskAttuale+"\\\"";
        //console.log("task da rimuovere"+taskDaRimuovere);

        taskRimozione=taskRimozione.replace(taskDaRimuovere, "");
        taskRimozione=taskRimozione.replace("\,\]", "\]");
        taskRimozione=taskRimozione.replace("\[\,", "\[");
        taskRimozione=taskRimozione.replace("\,\,", "\,");
        taskRimozione=taskRimozione.replace("\\\"\\\"", "");
        taskRimozione=taskRimozione.replace("\\\"\\\"\,", "");
        taskRimozione=taskRimozione.replace("\,\\\"\\\"", "");
        //console.log(taskRimozione);

        localStorage.setItem('task', JSON.parse(taskRimozione));
      }
    }
  }
}

function resetStorageUtenti(){
  localStorage.clear() ;
  localStorage.task="[]";
  window.location.reload();
}