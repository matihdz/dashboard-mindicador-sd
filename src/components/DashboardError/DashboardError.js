import React from 'react'

export const DashboardError = ({error}) => {
  return (
    <div>
      <h1>Error in dashboard:</h1>
      <p>{error}</p>
    </div>
  )
}
