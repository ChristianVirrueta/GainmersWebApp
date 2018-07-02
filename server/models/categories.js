import { API_URL } from '../../client/actions/types'
import axios from 'axios'

export function getCategoriesFind(Params) {
  return axios.get(API_URL+'/api/categories/find',{
      params: Params
  })
}