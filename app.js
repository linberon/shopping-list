var newEl = document.createElement('li');
var newText = document.createTextNode('tomato');
newEl.appendChild(newText);
var deleteButton = document.createElement('button'); // create button
deleteButton.textContent = ‘delete’; // label it delete
$(deleteButton).on('click', function() { newEl.remove(); }); // click event handler which calls remove on the li element
newEl.appendChild(deleteButton); // add to list item
var position = document.getElementsByTagName('ul')[0];
position.appendChild(newEl);

var nextId = 0;
// var newEl = …
newEl.id = nextId++
// ...
$(deleteButton).on('click', function() { $(‘#’ + nextId).remove(); });


var checkButton = document.createElement('button'); // create button
checkButton.textContent = ‘check’; //label it check
$(checkButton).on('click', function(){newEl.addClass('shopping-item__checked'); });
newEl.appendChild(checkButton);
