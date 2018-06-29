import React from 'react'
import Layout from '../../components/layout'
import Router from 'next/router'
import { currentEthValid, 
        currentEthNet, 
        validEthNet, 
        currentUserValid, 
        currentUserLogin, 
        currentUserLogout, 
        getCurrentToken, 
        renderizeRoutes } from '../actions/authActions'

const mockedRouter = { push: () => {} }
Router.router = mockedRouter

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email   : '',
            user    : '',
            account : '',
            netId   : 0, 
            netName : '', 
            netRoute: '/login/install-metamask',
            status  : 0
        }
    }

    static async getInitialProps({req}) {
        return {
            session: null,
            lang: 'en'
        }
    }

    sessionValidate = async function(Router, rules = null){
        let EthAcc, EthNet, UsrAcc
        let current = this
        if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
            EthAcc = currentEthValid(window)
            EthAcc.then(function(response){
                current.setState({ status: (response.length===1)?2:1, account: (response.length===1?response[0]:'') })

                EthNet = currentEthNet(window)
                EthNet.then(netId => {
                    current.setState({ netId: netId })
                    const NetJSON = validEthNet(netId, current.state.status)
                    current.setState({ netName: NetJSON.netName, netRoute: NetJSON.netRoute })

                    if(localStorage.jwtToken){
                        if(current.state.account !== ''){
                            let local = getCurrentToken(localStorage.jwtToken)
                            if(local.token_.account !== current.state.account){

                                UsrAcc = currentUserValid(current.state)
                                UsrAcc.then(function(res){
                                    if(res.data.length === 1){
                                        current.setState({ email: res.data[0].email, user: res.data[0].name })
                                        currentUserLogin(res.data[0].id, current.state)
                                    }
    
                                    const UsrJSON = validEthNet(999, res.data.length)
                                    current.setState({ netRoute: UsrJSON.netRoute })
                                    renderizeRoutes(Router, current.state, (NetJSON.main?rules:null))
                                }).catch(function(error){
                                    console.log(error)
                                })

                            }else{
                                current.setState({ email: local.token_.email, user: local.token_.user })
                            }
                        }else{
                            currentUserLogout()
                        }

                        renderizeRoutes(Router, current.state, (NetJSON.main?rules:null))
                    }else{
                        if(current.state.account !== ''){
                            UsrAcc = currentUserValid(current.state)
                            UsrAcc.then(function(res){
                                if(res.data.length === 1){
                                    current.setState({ email: res.data[0].email, user: res.data[0].name })
                                    currentUserLogin(res.data[0].id, current.state)
                                }

                                const UsrJSON = validEthNet(999, res.data.length)
                                current.setState({ netRoute: UsrJSON.netRoute })
                                renderizeRoutes(Router, current.state, (NetJSON.main?rules:null))
                            }).catch(function(error){
                                console.log(error)
                            })
                        }else{
                            renderizeRoutes(Router, current.state, (NetJSON.main?rules:null))
                        }
                    }
                })
            })
        }else{
            renderizeRoutes(Router, current.state)
        }
    }

    adminAcccessOnly() {
        return (
            <Layout {...this.props} navmenu={false}>
              <div className="text-center pt-5 pb-5">
                <h1 className="display-4 mb-5">Access Denied</h1>
                <p className="lead">You must be signed in as an administrator to access this page.</p>
              </div>
            </Layout>
        )
    }
}