import React from 'react'
import {
  Route,
} from "react-router-dom";
import Page1 from './page1/page1'
import Page2 from './page2/page2'
const RouterInit = () => {
  return (
    <>
      <Route exact path="/" component={Page1} />
      <Route path="/page2" component={Page2} />
    </>
  )
}
export default RouterInit