import ListPost from "../components/ListPost"
import { getPostFromApi } from "../utils/Api"

const ListOfPost = async (firstParam, secondParam) => {
  const res = await getPostFromApi()

  console.log(res);
  return ListPost(res)
}

export default ListOfPost