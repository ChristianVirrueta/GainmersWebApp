import { API_URL } from '../../client/actions/types'
import axios from 'axios'

export function getGroupStagesFind(Params) {
  return axios.get(API_URL+'/api/group-stages/find',{
      params: Params
  })
}