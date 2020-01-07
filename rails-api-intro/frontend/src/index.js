const baseURL = 'http://localhost:3000/animals/'

const getAnimals = () => get(baseURL)

const createAnimal = params => post(baseURL, params)

const get = url => fetch(url).then(res => res.json())

const post = (url, body) => {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }).then(res => res.json())
}

$(function() {
  console.log('jquery document ready')
  const $tbody = $('tbody')
  const $form = $('form')

  getAnimals().then(json => {
    json.forEach(animalData => {
      const animal = new Animal(animalData)
      $tbody.append(animal.render())
    })
  })

  $form.on('submit', function(e) {
    e.preventDefault()
    const body = {}
    $(this)
      .serializeArray()
      .forEach(input => {
        body[input.name] = input.value
      })

    createAnimal(body).then(json => {
      const animal = new Animal(json)
      $tbody.append(animal.render())
    })
  })
})
