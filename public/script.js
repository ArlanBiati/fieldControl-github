const url = "https://api.github.com/search/repositories?q="
const search = document.querySelector('#search')

async function getRepository(repository) {
  const repositoryResponse = await fetch(`${url}${repository}`)

  const seachRepository = repositoryResponse.json()

  console.log(seachRepository)
  return seachRepository

}

search.addEventListener('keyup', (event) => {
  const repository = event.target.value


  getRepository(repository).then(res => console.log(res))
})