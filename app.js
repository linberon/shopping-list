$(function() {
  //Create a state object, with a todoItems array.
  state = {
    toDoItems: [
      { name: "apples", checked: false },
      { name: "bread", checked: true }
    ]
  };

  renderAllElements();
  //Rendering the data. renderElement(item) returns HTML for ONE element in the todoItems array

  function renderElement(item, index) {
    var checked = item.checked ? "shopping-item__checked" : "";

    return `<li>
                <span class="shopping-item ${checked}" >${item.name}</span>
                <div class="shopping-item-controls">
                  <button data-index="${index}" class="shopping-item-toggle">
                    <span class="button-label">check</span>
                  </button>
                    <button data-index="${index}" class="shopping-item-delete">
                    <span class="button-label">delete</span>
                  </button>
                </div>
              </li>`;
  }

  // use renderElement with state.todoItems.map to generate HTML for
  // all elements in todoItems

  function renderAllElements() {
    var elementsHTML = state.toDoItems.map(renderElement);
    $(".shopping-list").html(elementsHTML);
  }

  // write the addItem(name) function to add the new element into the todoItems array.

  function addItem(name) {
    state.toDoItems.push({ name: name, checked: false });
    renderAllElements();
  }

  // Add an event listener for the js-shopping-list-form

  $("#js-shopping-list-form").submit(function(event) {
    event.preventDefault();
    var name = $("#shopping-list-entry").val();
    addItem(name);
  });


  // Add an event listener for the check buttons.
  $(".shopping-list").on("click", ".shopping-item-delete", function() {
    var itemIndex = $(this).attr("data-index");
    state.toDoItems.splice(itemIndex, 1);
    renderAllElements();
  });

  $(".shopping-list").on("click", ".shopping-item-toggle", function() {
    var itemIndex = $(this).attr("data-index");
    state.toDoItems[itemIndex].checked = !state.toDoItems[itemIndex].checked;
    renderAllElements();
  });
});
