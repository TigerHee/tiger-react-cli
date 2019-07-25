import React, { Component } from 'react'
import './page1.less'
import { connect } from 'react-redux'
import { update_state, update_state_asyncSaga, update_state_TakeLatest } from "@/redux/actions"
import { Button } from 'antd'

@connect((state) => ({
  testData: state.common.testData,
}), (dispatch) => ({
  updateState(val) {
    dispatch(update_state(val))
  },
  updateStateAsyncSaga(val) {
    dispatch(update_state_asyncSaga(val))
  },
  updateStateTakeLatest(val) {
    dispatch(update_state_TakeLatest(val))
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

  _changeReduxAsync = () => {
    const val = +new Date();
    this.props.updateStateAsyncSaga({
      testData: val
    });
  }
  _changeReduxTakeLatset = () => {
    const val = +new Date();
    this.props.updateStateTakeLatest({
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
            <br /><br />
            <Button onClick={(e) => this._changeReduxAsync()} type="primary">change redux value async</Button>
            <br /><br />
            <Button onClick={(e) => this._changeReduxTakeLatset()} type="primary">change redux value TakeLatest</Button>
            <br /><br />
          </div>
          <div className="page1-testData">{testData}</div>
        </div>
      </>
    )
  }
}

//旧版不适用Decorator时的connect：
// const mapStateToProps = state => ({
//   testData: state.common.testData,
// })
// const mapDispatchToProps = dispatch => ({
//   updateState: val => dispatch(update_state(val)),
// })
// export default connect(mapStateToProps, mapDispatchToProps)(Page1)

export default Page1