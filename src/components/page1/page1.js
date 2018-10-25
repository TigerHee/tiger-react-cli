import React, { Component } from 'react';
import './page1.less'

import Footer from '../todo/Footer'
import AddTodo from '../todo/AddTodo'
import VisibleTodoList from '../todo/VisibleTodoList'

class Page1 extends Component {
  render() {
    return (
      <>
        <div className="page1">
          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </div>
      </>
    )
  }
}

export default Page1