const list = document.querySelector('.covid-list')
const displayDate = document.querySelector('.date')
const apiKey = 'your_api_key'
const url = 'https://api.api-ninjas.com/v1/covid19?country=canada'

;(async function getData() {
  const response = await fetch(url, {
    headers: {
      'X-Api-Key': apiKey,
    },
  })

  const data = await response.json()
  let dateFromList
  const listBoiler = (total, region) => `
    <div class='card'>
      <h2>${region}</h2>
      <p>${total}</p>
    </div>
  `
  list.innerHTML = data
    .map(({ region, cases }) => {
      const [date, { total }] = Object.entries(cases).pop()
      dateFromList = date
      return listBoiler(total, region)
    })
    .join('')
  displayDate.innerHTML = dateFromList
})()
