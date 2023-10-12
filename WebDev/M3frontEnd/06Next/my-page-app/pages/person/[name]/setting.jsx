import { useRouter } from 'next/router'
import React from 'react'


export default function Setting() {

    const router = useRouter();


  return (
    <div>Welcome to Setting Page of , { router?.query.name}</div>
  )
}
