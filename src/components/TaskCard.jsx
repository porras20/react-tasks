import React from 'react'

export  function TaskCard({task}) {
  return (
    <div>
        <div>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
    </div>
  )
}
