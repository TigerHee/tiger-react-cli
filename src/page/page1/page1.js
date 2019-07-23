import React, { Component } from 'react'
import './page1.less'
import { connect } from 'react-redux'
import { update_state } from "@/redux/actions"
import { Button } from 'antd'

@connect((state) => ({
  testData: state.common.testData,
}), (dispatch) => ({
  updateState(val) {
    dispatch(update_state(val))
  },
}))

class Page1 extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  _changeRedux() {
    const val = +new Date();
    this.props.updateState({
      testData: val
    });
  }
  render() {
    const { testData } = this.props;
    console.log('testData === ', testData)
    return (
      <>
        <div className="page1">
          <div>
            <Button onClick={(e) => this._changeRedux()} type="primary">change redux value</Button>
          </div>
          <div className="page1-testData">{testData}</div>
        </div>
      </>
    )
  }
}

// const mapStateToProps = state => ({
//   testData: state.common.testData,
// })
// const mapDispatchToProps = dispatch => ({
//   updateState: val => dispatch(update_state(val)),
// })
// export default connect(mapStateToProps, mapDispatchToProps)(Page1)

export default Page1