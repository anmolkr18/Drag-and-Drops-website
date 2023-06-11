var draggedItem = null;
var container2 = document.getElementById('container2');
var resetButton = document.getElementById('resetButton');
var successMessage = document.createElement('p');
successMessage.className = 'success-message';

// Add event listeners for drag events
document.addEventListener('dragstart', dragStart);
document.addEventListener('dragend', dragEnd);
container2.addEventListener('dragover', dragOver);
container2.addEventListener('dragenter', dragEnter);
container2.addEventListener('dragleave', dragLeave);
container2.addEventListener('drop', drop);
resetButton.addEventListener('click', resetContainers);

// Drag start event handler
function dragStart(event) {
  draggedItem = event.target;
  draggedItem.classList.add('dragging');
}

// Drag end event handler
function dragEnd(event) {
  draggedItem.classList.remove('dragging');
  draggedItem = null;
}

// Drag over event handler
function dragOver(event) {
  event.preventDefault();
}

// Drag enter event handler
function dragEnter(event) {
  event.preventDefault();
  container2.classList.add('drag-enter');
}

// Drag leave event handler
function dragLeave(event) {
  container2.classList.remove('drag-enter');
}

// Drop event handler
function drop(event) {
  event.preventDefault();
  container2.classList.remove('drag-enter');
  container2.appendChild(draggedItem);

  // Display success message
  successMessage.textContent = 'Item dropped successfully!';
  container2.appendChild(successMessage);
}

// Reset button click event handler
function resetContainers() {
  // Clear the second container
  container2.innerHTML = '';

  // Reset the first container
  var container1 = document.getElementById('container1');
  container1.innerHTML = '';
  container1.appendChild(document.getElementById('item1'));
  container1.appendChild(document.getElementById('item2'));
  container1.appendChild(document.getElementById('item3'));

  // Remove the success message
  container2.removeChild(successMessage);
}
