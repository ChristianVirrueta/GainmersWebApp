import generator from '../../ethereum/generator'
import SportEvent from '../../ethereum/sportevent'
import web3 from '../../ethereum/web3'

export async function getBettingInfo(address) {
  try {
    const bet = await generator.methods.getDeployedEvents().call()
    const sportevent = SportEvent(address)
    const summary = await sportevent.methods.getDetails().call()
    var splittedName = summary[0].split(",")
    return {
      address: address,
      eventName: splittedName[0],
      country1: splittedName[1],
      country2: splittedName[2],
      date:splittedName[3],
      hour:splittedName[4],
      name: splittedName,
      balance: summary[1],
      devFee: summary[2],
      bet: bet
    }
  } catch (error) {
    console.log(error)
  }
}

export async function getSportEvent(address) {
  return SportEvent(address)
}

export async function getCurrentAccount() {
  const currentAccount = await web3.eth.getAccounts()
  if(currentAccount[0]){
    return currentAccount[0]
  }
  return null
}