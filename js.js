// 1.
let strawberry = document.getElementById('berry');
console.log(strawberry);
console.log(strawberry.innerHTML);
strawberry.style.backgroundColor = 'Salmon';

//2.
let orange = document.querySelector('li[data-foodtype]');
orange.style.backgroundColor = 'Orange';

//3.
let collection = document.getElementsByTagName('li');
console.log(collection);

for (let i = 0; i < collection.length; i++) {
  console.log(collection[i]);
  if (collection[i].innerHTML === 'Pear') {
    collection[i].style.backgroundColor = 'YellowGreen';
  }
  collection[i].style.width = '100px';
  collection[i].style.listStyle = 'None';
}

//4.
let queryCollection = document.querySelectorAll('li');
console.log(queryCollection);

queryCollection.forEach(function(item) {
  console.log(item.innerHTML);
  item.style.border = "solid black 1px"
});
