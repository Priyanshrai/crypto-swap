import { NextResponse } from 'next/server'

const assets = [
  {
    id: 'btc',
    name: 'BTC/USD',
    icon: '/icons/btc.png',
    lastTrade: 63000.00,
    change24h: -2.21,
    changeAmount24h: -1426.18,
  },
  // Add more assets here
]

export async function GET() {
  return NextResponse.json(assets)
}
