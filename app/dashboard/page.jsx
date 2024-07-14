import { UserButton } from '@clerk/nextjs'
import React from 'react'

function Dashboard() {
  return (
    <div className=''>
      <h1>Dashboard</h1>
      <UserButton/>
    </div>
  )
}

export default Dashboard
