import ListCard from "../components/ListCard"
import { getPersonnage } from "../utils/Api"

const ListOfPersonnage = async (firstParam, secondParam) => {
  const res = await getPersonnage()
  const data = res.map((element) => ({
    text: `${element.name} ${element.statut} ${element.species} ${element.type} `,
    src: element.image
  }))
  return ListCard(data)
}

export default ListOfPersonnage