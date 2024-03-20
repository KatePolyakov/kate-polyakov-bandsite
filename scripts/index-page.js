import { BandSiteAPI } from './band-site-api.js';

const bandSiteData = new BandSiteAPI('e0eea5f0-0f8c-4b54-9fc4-ff50843766d4');

//find a div element ".comment" for comments
const commentsList = document.querySelector('.comment');

//create new elements inside ".comment"
const commentsDesktop = (item) => {
  const commentHeader = document.createElement('div');
  commentHeader.classList.add('comment__header');

  const commentName = document.createElement('p');
  commentName.classList.add('comment__header-name');
  commentName.textContent = item.name;

  const commentDate = document.createElement('p');
  commentDate.classList.add('comment__header-date');
  commentDate.textContent = new Date(item.timestamp).toLocaleDateString();

  commentHeader.append(commentName);
  commentHeader.append(commentDate);

  const commentText = document.createElement('p');
  commentText.classList.add('comment__text');
  commentText.textContent = item.comment;

  commentsList.append(commentHeader);
  commentsList.append(commentText);
};

//function for display all comments on the page;

async function displayComment() {
  commentsList.innerHTML = ''; // Clear the content of the commentsList
  const allComments = await bandSiteData.getComments();

  allComments.forEach((item) => {
    commentsDesktop(item);
  });
}

displayComment();

//submit form for new comment
//find form by id

const form = document.getElementById('conversation__form');

form.addEventListener('submit', async function (e) {
  e.preventDefault(); //to prevent the default refresh behaviour of the form

  const nameValue = document.querySelector('.conversation__form-name').value;
  const textValue = document.querySelector('.conversation__form-text').value;

  const newComment = {
    name: nameValue,
    comment: textValue,
  };
  const addedComment = await bandSiteData.postComment(newComment);
  displayComment(addedComment);

  document.querySelector('.conversation__form-name').value = '';
  document.querySelector('.conversation__form-text').value = '';
});
