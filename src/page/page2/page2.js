import React, { Component } from 'react';
import './page2.less'
import { Carousel, Progress } from 'antd';

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
          <div>
            <Progress percent={30} />
            <Progress percent={50} status="active" />
            <Progress percent={70} status="exception" />
            <Progress percent={100} />
            <Progress percent={50} showInfo={false} />
          </div>
          <div>
            <Progress type="circle" percent={75} />
            <Progress type="circle" percent={70} status="exception" />
            <Progress type="circle" percent={100} />
          </div>
        </div>
      </>
    )
  }
}

export default Page2