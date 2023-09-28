// New git testing
const titleElement = document.getElementById('title');

const pEl = document.querySelector('.cool');
pEl.innerHTML = "blah blah <strong>BIG BLAH</strong>"
titleElement.style.textAlign = 'center';
titleElement.style.color = 'blue';
const visit = document.querySelector('a');
//visit.setAttribute('href', 'https://www.google.com');
visit.classList.add('cool');
const comments = document.querySelectorAll('#comments > li');
//console.log(comments);

for (let commentEl of comments) {
    console.log(commentEl);
    console.log('worked!');
}

const listItems = document.querySelectorAll('li');
for (let item of listItems) {
    item.style.fontSize = '30px';
}