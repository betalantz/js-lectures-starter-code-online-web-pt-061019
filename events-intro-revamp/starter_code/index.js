//add an h2 tag "Some of My Favorites"

//add a card with an img, header, and p 

//add all info from books list in book.js

const book_list = document.querySelector('#book-list')


books.map(book =>{

	const div = document.createElement('div')

	div.className = 'card'

	const img = document.createElement('img')

	img.src = book.img

	const h3 = document.createElement('h3')

	h3.textContent = book.title

	const p = document.createElement('p')

	p.textContent = book.author

	//add all elements to div

	div.appendChild(img)

	div.appendChild(h3)

	div.appendChild(p)

	book_list.appendChild(div)


})



