import { API_URL, SET_CURRENT_TOKEN } from './types';
import axios from 'axios';
import config from '../../server/config';
import jwtDecode from 'jwt-decode';
import jwt from 'jsonwebtoken';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import Web3 from 'web3';

export function currentEthValid(window) {
    const web3 = new Web3(window.web3.currentProvider)
    return web3.eth.getAccounts()
}

export function currentEthNet(window) {
    const web3 = new Web3(window.web3.currentProvider)
    return web3.eth.net.getId()
}

export function validEthNet(netId, netStatus){
    let NetJSON = {
        netName: 'Kovan Network Detected',
        netRoute: '/login/change-provider'
    }
    switch (netId) {
        case 1:
            NetJSON = { netName: 'Main Network Detected', netRoute: (netStatus===2?'/betting':'/login/account-locked'), main: (netStatus===2?true:false) }
            break;
        case 2:
            NetJSON = { netName: 'Morden Network Detected', netRoute: '/login/change-provider', main: false }
            break;
        case 3:
            NetJSON = { netName: 'Ropsten Network Detected', netRoute: '/login/change-provider', main: false }
            break;
        case 4:
            NetJSON = { netName: 'Rinkeby Network detected', netRoute: '/login/change-provider', main: false }
            break
        case 42:
            NetJSON = { netName: 'Kovan Network Detected', netRoute: '/login/change-provider', main: false }
            break;
        case 999:
            NetJSON = { netName: null, netRoute: (netStatus===1)?'/betting':'/login/sign-up', main: false }
            break;
    }
    return NetJSON;
}

export function currentUserValid(EthRed) {
    return axios.get(API_URL+'/api/users/find',{
        params: {
            address: EthRed.account
        }
    })
}

export function currentUserLogin(id, EthRed){
    console.log("LOGIN")
    const token = jwt.sign({
        id      : id, 
        email   : EthRed.email, 
        user    : EthRed.user, 
        account : EthRed.account, 
        netId   : EthRed.netId,
        netName : EthRed.netName, 
        status  : EthRed.status
    }, config.jwtSecret);
    localStorage.setItem('jwtToken', token);
    //setAuthorizationToken(token);
}

export function currentUserLogout(){
    console.log("LOGOUT")
    localStorage.removeItem('jwtToken');
    //setAuthorizationToken(false);
}

export function getCurrentToken(token) {
    const token_ = jwtDecode(token)
    return {
      type: SET_CURRENT_TOKEN,
      token_
    }
}

export function renderizeRoutes(Router, EthRed, rules = null){
    console.log(Router.router.pathname+' - '+EthRed.netRoute)
    if(Router.router.pathname !== EthRed.netRoute){
        if(!rules){
            Router.pushRoute(EthRed.netRoute)
            return false
        }
        if(rules && !rules.onSession){
            Router.pushRoute(EthRed.netRoute)
            return false
        }
    }
}