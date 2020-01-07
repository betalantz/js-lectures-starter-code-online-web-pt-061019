// Guessing Game: What does the below code do?

fetch("http://localhost:3000/books")
  .then(function(res){
    return res.json()
  }).then(function(books){
    const characterCount = {}
    books.forEach(function(book){
      const title = book.title
      if (title.length >= 4) {
        let chars = title.split("")
        chars.forEach(function(char){
          let symbol = char.toLowerCase()
          if (characterCount.hasOwnProperty(symbol)) {
            characterCount[symbol] += 1
          } else {
            characterCount[symbol] = 1
          }
        })
      }
    })
    console.log(characterCount)
  })


// If you guessed: Counts the total number of characters in book titles where all book titles are longer than 4 characters, you're right!

// We can make this easier to read - let's put our JS knowledge into action to signal our intent.

// Finished refactor below

fetch("http://localhost:3000/books")
  .then(res => res.json())
  .then(books => books.map(book => book.title ))
  .then(titles => titles.filter(title => title.length >= 4))
  .then(filteredTitles => filteredTitles.reduce(countCharacters, {}))
  .then(console.log)


const countCharacters = (characterCount, title) => {
  let chars =[...title] // destrucure the string instead of using split
  chars.forEach(char => {
    let symbol = char.toLowerCase()
    if (characterCount.hasOwnProperty(symbol)) {
      characterCount[symbol] += 1
    } else {
      characterCount[symbol] = 1
    }
  })
  return characterCount
}
