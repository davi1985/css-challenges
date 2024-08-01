import { createBrowserRouter } from 'react-router-dom'
import { Intro } from './001'
import { ChallengesList } from './challenges'
import { MenuHamburger } from './002'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <ChallengesList />,
  },
  {
    path: '/day-01',
    element: <Intro />,
  },
  {
    path: '/day-02',
    element: <MenuHamburger />,
  },
])
