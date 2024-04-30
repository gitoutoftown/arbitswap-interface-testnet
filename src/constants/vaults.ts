import { ChainId } from '../sdk'

export type TokenInfo = {
  id: string
  name: string
  symbol: string
  decimals?: number
}

type PairInfo = {
  id: number
  lpToken: string
  token0: TokenInfo
  token1?: TokenInfo
  name?: string
  symbol?: string
}

type AddressMap = {
  [chainId: number]: {
    [id: string]: PairInfo
  }
}

export const VAULTS: AddressMap = {
  [ChainId.ARBITCHAIN_SEPOLIA]: {
    '0': {
      id: 0,
      lpToken: '0x1B989692cd0Be0F883BBF52A206Be2A4b2d4B68a',
      token0: {
        id: '0x1B989692cd0Be0F883BBF52A206Be2A4b2d4B68a',
        name: 'Arbitswap',
        symbol: 'ASWAP',
        decimals: 18,
      },
    },
    '1': {
      id: 1,
      lpToken: '0x1B989692cd0Be0F883BBF52A206Be2A4b2d4B68a',
      token0: {
        id: '0x1B989692cd0Be0F883BBF52A206Be2A4b2d4B68a',
        name: 'Arbitswap',
        symbol: 'ASWAP',
        decimals: 18,
      },
    },
    '2': {
      id: 2,
      lpToken: '0x1B989692cd0Be0F883BBF52A206Be2A4b2d4B68a',
      token0: {
        id: '0x1B989692cd0Be0F883BBF52A206Be2A4b2d4B68a',
        name: 'Arbitswap',
        symbol: 'ASWAP',
        decimals: 18,
      },
    }
  },
}
