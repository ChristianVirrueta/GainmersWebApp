import { API_URL } from '../../client/actions/types'
import axios from 'axios'

export async function getOrderById(id) {
  const order = await axios.get(API_URL+'/api/orders/'+id+'.json')
  if(order.data){
    return order.data
  }
  return null
}

export async function createNewOrder(order_data) {
  const order = await axios.post(API_URL+'/api/orders.json', order_data, {
                  headers: {
                    'Content-Type': 'application/json',
                  }
                })
  if(order.data){
    return order.data
  }
  return null
}

export async function getOrdersFind(Params) {
  const orders = await axios.get(API_URL+'/api/orders/find',{
                          params: Params
                        })
  if(orders.data){
    return orders.data
  }
  return null
}