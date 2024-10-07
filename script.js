//your JS code here. If required.
// Get form elements
const title = document.getElementById('title');
const author = document.getElementById('author');
const isbn = document.getElementById('isbn');
const submitButton = document.getElementById('submit');
const bookList = document.getElementById('book-list');

// Event listener for submit button
submitButton.addEventListener('click', function (e) {
  e.preventDefault(); // Prevent page reload

  // Get input values
  const titleValue = title.value.trim();
  const authorValue = author.value.trim();
  const isbnValue = isbn.value.trim();

  // Ensure all fields are filled
  if (titleValue === '' || authorValue === '' || isbnValue === '') {
    alert('Please fill in all fields.');
    return;
  }

  // Create a new row
  const row = document.createElement('tr');

  // Insert columns
  row.innerHTML = `
    <td>${titleValue}</td>
    <td>${authorValue}</td>
    <td>${isbnValue}</td>
    <td><button class="delete">Clear</button></td>
  `;

  // Append the new row to the table
  bookList.appendChild(row);

  // Clear input fields after submission
  title.value = '';
  author.value = '';
  isbn.value = '';
});

// Event listener for delete buttons (using event delegation)
bookList.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.parentElement.remove(); // Remove the row
  }
});
