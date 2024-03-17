const comments = [
  {
    name: 'Victor Pinto',
    date: '11/02/2023',
    text: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.',
  },
  {
    name: 'Christina Cabrera',
    date: '10/28/2023',
    text: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.',
  },
  {
    name: 'Isaac Tadesse',
    date: '10/20/2023',
    text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

//find a div element ".comment" for comments
const commentsList = document.querySelector('.comment');
console.log(commentsList);

//create new elements inside ".comment"
const commentsDesktop = (item) => {
  const commentHeader = document.createElement('div');
  commentHeader.classList.add('comment__header');

  const commentName = document.createElement('p');
  commentName.classList.add('comment__header-name');
  commentName.textContent = item.name;

  const commentDate = document.createElement('p');
  commentDate.classList.add('comment__header-date');
  commentDate.textContent = item.date;

  commentHeader.append(commentName);
  commentHeader.append(commentDate);

  const commentText = document.createElement('p');
  commentText.classList.add('comment__text');
  commentText.textContent = item.text;

  commentsList.append(commentHeader);
  commentsList.append(commentText);
};

//function for display all comments on the page;
function displayComment() {
  commentsList.innerHTML = ''; // Clear the content of the commentsList

  comments.forEach((item) => {
    commentsDesktop(item);
  });
}

displayComment();

//submit form for new comment
//find form by id
const form = document.getElementById('conversation__form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); //to prevent the default refresh behaviour of the form

  const nameValue = document.querySelector('.conversation__form-name').value;
  const timeValue = new Date().toLocaleDateString('en-US', {
    timeZone: 'UTC',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  const textValue = document.querySelector('.conversation__form-text').value;

  const newComment = {
    name: nameValue,
    date: timeValue,
    text: textValue,
  };

  comments.unshift(newComment);
  displayComment(newComment);
  document.querySelector('.conversation__form-name').value = '';
  document.querySelector('.conversation__form-text').value = '';
});
