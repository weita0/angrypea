import React, { Component } from 'react'

import { Steps, Row } from 'antd'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import BaseInfo from './resume.form.step1'
import Details from './resume.form.step2'
import * as actions from './actions'
const Step = Steps.Step

export class Form extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {

  }
  render() {
    let { current_step } = this.props.resume
    return (
      <Row>
        <Row className="form-stepbar">
          <Steps current={current_step}>
            <Step title="BaseInfo" description="This is a description." />
            <Step title="Education" description="This is a description." />
            <Step title="Final" description="This is a description." />
          </Steps>
        </Row>
        <Row className="form-body">
        {
          current_step === 0 && <BaseInfo />
        }
        {
          current_step === 1 && <Details />
        }
        </Row>
      </Row>
    )
  }
}

function mapStateToProps(state) {
  return {
    resume: state.resume
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
