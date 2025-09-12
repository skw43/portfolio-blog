const bookContainer = document.querySelector(".book-container");
const newbook = document.createElement('img')
newbook.src = './book/Ulysses/Ulysses.jpg'

bookContainer.appendChild(newbook)


console.log(bookContainer);

let bookdata; // declare it outside if you need it globally

async function loadAndShowBook() {
  const res = await fetch("./books/Ulysses/Ulysses.json");
  const res2 = await fetch("./book/Ulysses/Ulysses.jpg");
  
  bookimage = await res2.jpg
  bookdata = await res.json();          // assign directly
  console.table(bookdata);              // use it here
}

loadAndShowBook(); // run it once
