import ListCard from "../components/ListCard"
import { getEpisode } from "../utils/Api"

const ListOfEpisode = async (firstParam, secondParam) => {
  const res = await getEpisode()
  const data = res.map((element) => ({
    text: `${element.episode} ${element.name} `,
  }))
  return ListCard(data)
}

export default ListOfEpisode