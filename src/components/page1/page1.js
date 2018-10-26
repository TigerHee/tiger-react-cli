import React, { Component } from 'react';
import './page1.less'
import { connect } from 'react-redux'
import Footer from '../todo/Footer'
import AddTodo from '../todo/AddTodo'
import VisibleTodoList from '../todo/VisibleTodoList'

class Page1 extends Component {
  constructor(props){
    super(props)
    console.log('---------Page1---------')
    console.log(props)
  }
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
const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps)(Page1)