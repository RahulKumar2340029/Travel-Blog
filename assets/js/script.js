const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 60)
});
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.getElementById('commentForm');
    const nameInput = document.getElementById('nameInput');
    const commentInput = document.getElementById('commentInput');
    const commentsList = document.getElementById('commentsList');

    // Function to add a comment
    function addComment(name, comment) {
        // Create a new div for the comment
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');

        // Create a new paragraph for the name
        const nameParagraph = document.createElement('p');
        nameParagraph.classList.add('comment-name');
        nameParagraph.textContent = name;

        // Create a new paragraph for the comment
        const commentParagraph = document.createElement('p');
        commentParagraph.classList.add('comment-text');
        commentParagraph.textContent = comment;

        // Append the name and comment paragraphs to the comment div
        commentDiv.appendChild(nameParagraph);
        commentDiv.appendChild(commentParagraph);

        // Append the comment div to the comments list
        commentsList.appendChild(commentDiv);
    }

    // Event listener for form submission
    commentForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent page refresh

        const name = nameInput.value; // Get the name
        const comment = commentInput.value; // Get the comment text

        // Check if the name and comment are not empty
        if (name.trim() !== '' && comment.trim() !== '') {
            addComment(name, comment); // Add the comment to the list
            nameInput.value = ''; // Clear the name input
            commentInput.value = ''; // Clear the textarea
        }
    });
});
