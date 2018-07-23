import { API_URL } from '../../client/actions/types'
import axios from 'axios'

export async function getUserById(id) {
  const user = await axios.get(API_URL+'/api/users/'+id+'.json')
  if(user.data){
    return user.data
  }
  return null
}