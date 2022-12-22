import Episode from "../components/Episode"
import { getEpisode } from "../utils/Api"
import ListEpisode from "../components/ListEpisode"

const ListOfEpisode = async (firstParam, secondParam) => {
  const res = await getEpisode()
  const data = res.map((element) => ({
    textTitle: `${element.name} `,
    textDate: `${element.air_date} `,
  }))
  return ListEpisode(data)
}

export default ListOfEpisode