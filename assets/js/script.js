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

    
    function addComment(name, comment) {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        const nameParagraph = document.createElement('p');
        nameParagraph.classList.add('comment-name');
        nameParagraph.textContent = name;

        const commentParagraph = document.createElement('p');
        commentParagraph.classList.add('comment-text');
        commentParagraph.textContent = comment;

        commentDiv.appendChild(nameParagraph);
        commentDiv.appendChild(commentParagraph);

        commentsList.appendChild(commentDiv);
    }

    commentForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = nameInput.value; 
        const comment = commentInput.value; 

        if (name.trim() !== '' && comment.trim() !== '') {
            addComment(name, comment); 
            nameInput.value = ''; 
            commentInput.value = ''; 
        }
    });
});
