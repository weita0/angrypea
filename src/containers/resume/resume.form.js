import React, { Component } from 'react'

import { Steps, Row } from 'antd'

import BaseInfo from './resume.form.step1'
import Details from './resume.form.step2'
const Step = Steps.Step

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0
    }
  }
  componentDidMount() {
    // setInterval(() => {
    //   this.setState({
    //     current: this.state.current === 2 ? 0 : this.state.current + 1
    //   })
    // }, 1000)
  }
  render() {
    return (
      <Row>
        <Row className="form-stepbar">
          <Steps current={this.state.current}>
            <Step title="BaseInfo" description="This is a description." />
            <Step title="Education" description="This is a description." />
            <Step title="Final" description="This is a description." />
          </Steps>
        </Row>
        <Row className="form-body">
        {
          this.state.current === 0 && <BaseInfo />
        }
        {
          this.state.current === 1 && <Details />
        }
        </Row>
      </Row>
    )
  }
}
