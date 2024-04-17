const Web3 = require('web3')
const { default: axios } = require('axios')
import IUniswapV2PairABI from '../../constants/abis/uniswap-v2-pair.json'
const NETWORK_URL = 'https://arbitchain_sepolia.api.onfinality.io/public'
const web3 = new Web3(NETWORK_URL)

export default async function handler(req, res) {
  let arbUSDCContract = new web3.eth.Contract(IUniswapV2PairABI, '0xe537f70a8b62204832B8Ba91940B77d3f79AEb81')
  const arbUSDCReserves = await arbUSDCContract.methods.getReserves().call()

  const arbUSDCPrice = (Number(arbUSDCReserves.reserve1) / Number(arbUSDCReserves.reserve0) ) * 1e12

  let aswapArbContract = new web3.eth.Contract(IUniswapV2PairABI, '0x7eDA899b3522683636746a2f3a7814e6fFca75e1')
  const aswapArbReserves = await aswapArbContract.methods.getReserves().call()

  const aswapArbPrice = Number(aswapArbReserves.reserve1) / Number(aswapArbReserves.reserve0)

  let ribArbContract = new web3.eth.Contract(IUniswapV2PairABI, '0x0acDB54E610dAbC82b8FA454b21AD425ae460DF9')
  const ribArbReserves = await ribArbContract.methods.getReserves().call()

  const ribArbPrice = Number(ribArbReserves.reserve0) / Number(ribArbReserves.reserve1)

  let ret = {}
  ret['arb'] = arbUSDCPrice
  ret['aswap'] = aswapArbPrice * arbUSDCPrice
  ret['rib'] = ribArbPrice * arbUSDCPrice
  ret['usdc'] = 1

  res.status(200).json(ret)
}
