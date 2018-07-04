import { API_URL } from '../../client/actions/types'
import axios from 'axios'

export function getGroupMatchesFind(Params) {
  return axios.get(API_URL+'/api/group-matches/find',{
      params: Params
  })
}