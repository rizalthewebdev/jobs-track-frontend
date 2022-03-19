import React from 'react'

const Dashboard = () => {
  const localUser = localStorage.getItem('user')
const user = JSON.parse(localUser)

  return (
    <div>Hi, {user.name}</div>
  )
}

export default Dashboard