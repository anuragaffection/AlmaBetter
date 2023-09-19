import { useRouter } from 'next/router'
import React from 'react'


export default function setting() {

    const router = useRouter();


  return (
    <div>Welcome to Setting Page of , { router?.query.name}</div>
  )
}
