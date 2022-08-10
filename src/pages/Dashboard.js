import React from 'react'
import BlogCard from '../components/BlogCard'

const Dashboard = () => {
  return (
    <div>
      <header className='text-center text-primary h1 dashboard mt-3'>
        DASHBOARD
      </header>

      <div>
        <BlogCard/>
      </div>
    </div>
  )
}

export default Dashboard