import React from 'react'
import Home from './views/home'
import BasicComputing from './views/BasicComputing'
import LinearEquations from './views/LinearEquations'
import Interpolation from './views/Interpolation'
import Differentiation from './views/Differentiation'
import Integration from './views/Integration'
import Rootfinding from './views/Rootfinding'

const rounting = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "commath-project",
      element: <Home />,
    },
    {
      path: "BasicComputing",
      element: <BasicComputing />,
    },
    {
      path: "LinearEquations",
      element: <LinearEquations />,
    },
    {
      path: "Interpolation",
      element: <Interpolation />,
    },
    {
      path: "Differentiation",
      element: <Differentiation />,
    },
    {
      path: "Integration",
      element: <Integration />,
    },
    {
      path: "Rootfinding",
      element: <Rootfinding />,
    },
  ];
  
  export default rounting;
