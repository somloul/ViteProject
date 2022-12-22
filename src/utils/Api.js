
export const getPersonnage = async () => {
  const req = await fetch('https://rickandmortyapi.com/api/character')
  const res = await req.json()


  return res.results
}

export const getPostFromApi = async () => {
  const req = await fetch('https://rickandmortyapi.com/api/character')
  const res = await req.json()

  return res
}

export const getEpisode = async () => {
  const req = await fetch('https://rickandmortyapi.com/api/episode')
  const res = await req.json()

  return res
}