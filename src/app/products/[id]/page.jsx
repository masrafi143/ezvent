import React from 'react'

export default async function page({params}) {
    const {id} = await params;
  return (
    <div>
      <h2>product -{id} </h2>
    </div>
  )
}
