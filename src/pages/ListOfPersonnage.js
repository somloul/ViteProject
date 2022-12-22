import ListCard from "../components/ListCard"
import { getUserFromApi } from "../utils/Api"

const ListOfPersonnage = async (firstParam, secondParam) => {
  const res = await getUserFromApi()
  const data = res.map((element) => ({
    text: `${element.name}  `,
    src: element.image
  }))
  return ListCard(data)
}

export default ListOfPersonnage