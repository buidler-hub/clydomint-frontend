import { useAddress, useMetamask, useNFTCollection } from '@thirdweb-dev/react'
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next'
import React, { useState } from 'react'
import instance from '../../utils/axios'

interface Props {
  message: string
  data: {
    name: string
    image: string
    description: string
    signature: string
  }
}

export default function $id({ message, data }: Props) {
  const [loading, setLoading] = useState<boolean>(false)
  const address = useAddress()
  const authenticateMetamask = useMetamask()
  const collection = useNFTCollection(
    process.env.NEXT_PUBLIC_NFT_COLLECTION_ADDRESS
  )

  const mint = async () => {
    try {
      setLoading(true)
      const claim = await collection?.signature.mint(JSON.parse(data.signature))
      alert('Claim success!')
      setLoading(false)
    } catch (err) {
      console.error(err)
      setLoading(false)
    }
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <button
        disabled={loading}
        onClick={mint}
        className={`md rounded ${
          loading ? 'bg-blue-600' : 'bg-blue-500'
        } px-5 py-3 text-lg text-white transition-all hover:bg-blue-600`}
      >
        {loading ? 'Loading...' : 'Mint Now'}
      </button>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  try {
    const request = await instance.get(`/mintdetails/${ctx.params!.id}`)
    const data = request.data
    return { props: data }
  } catch (err) {
    console.error(err)
    return { notFound: true }
  }
}
