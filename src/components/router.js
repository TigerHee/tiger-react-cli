import React from 'react'
import {
  Route,
} from "react-router-dom";
import Loadable from 'react-loadable'

const Loading = () => <div>Loading...</div>;

const Page1 = Loadable({
  loader: () => import('./page1/page1'),
  loading: Loading,
});
const Page2 = Loadable({
  loader: () => import('./page2/page2'),
  loading: Loading,
});

const RouterInit = () => {
  return (
    <>
      <Route exact path="/" component={Page1} />
      <Route path="/page2" component={Page2} />
    </>
  )
}
export default RouterInit