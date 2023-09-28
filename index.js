// New git testing
const titleElement = document.getElementById('title');

const pEl = document.querySelector('.cool');
pEl.innerHTML = "blah blah <strong>BIG BLAH</strong>"
titleElement.style.textAlign = 'center';
titleElement.style.color = 'blue';
const visit = document.querySelector('a');
visit.setAttribute('href', 'https://www.google.com');
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
const inputEl = document.querySelector('input');
const ulist = document.querySelector('ul');

const button = document.getElementById('commenting');

button.addEventListener('click', function(evt) {
    const newItem = document.createElement('li');
    newItem.innerText = inputEl.value;
    ulist.append(newItem);
    inputEl.value = '';
})

function handleClick(evt) {
    console.log(evt.target);
    evt.target.setAttribute('class', 'hidden');
    //evt.target.style.color = 'green';
    // ulist.removeEventListener('click', handleClick)
    // ^ removes eventlistener so after clicking and turning one item green it stops
}

const showButton = document.getElementById('showhidden');
showButton.addEventListener('click', function(){
    const items = document.querySelectorAll('li');
    items.forEach(listItem => {
        listItem.classList.remove('hidden');
    })
})

ulist.addEventListener('click', handleClick);

const redButton = document.getElementById('red');
const blueButton = document.getElementById('blue');
const greenButton = document.getElementById('green');

const colorButtons = document.querySelectorAll('.colorbackground');

colorButtons.forEach(button => {
    button.addEventListener('click', colorChangeEvent);
});

function colorChangeEvent(evt) {
    const currentButtonID = evt.target.getAttribute('id');
    document.body.style.backgroundColor = currentButtonID;
}



