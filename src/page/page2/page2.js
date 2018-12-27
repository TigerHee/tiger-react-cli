import React, { Component } from 'react';
import './page2.less'
import { Carousel } from 'antd';

class Page2 extends Component {
  render() {
    return (
      <>
        <div className="page2">
          <Carousel autoplay>
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
          </Carousel>
        </div>
      </>
    )
  }
}

export default Page2