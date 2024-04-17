import React from 'react'
import { usePricesApi } from '../features/farm/hooks'

export const PriceContext = React.createContext({
  arb: 0,
  aswap: 0,
  rib: 0,
})

export function PriceProvider({ children }) {
  const priceData = usePricesApi()
  return <PriceContext.Provider value={priceData}>{children}</PriceContext.Provider>
}

export default PriceProvider
