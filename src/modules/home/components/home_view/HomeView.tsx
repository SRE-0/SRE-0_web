import React from 'react'
import "./HomeView.component.css"
import HomeWelcome from '../home_welcome/HomeWelcome'
import HomeProjects from '../home_projects/HomeProjects'

export default function HomeView() {
  return (
    <div className='homeViewContainer'>
      <HomeWelcome />
      <HomeProjects />
    </div>
  )
}
