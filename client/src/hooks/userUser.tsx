import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { IStore } from "../types/types"

const useUser = () => { 
  const user =useSelector<IStore, IStore['user']>(state => state.user)!

  return {user}
 }

 export default useUser