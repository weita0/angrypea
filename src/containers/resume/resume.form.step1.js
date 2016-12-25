/* eslint-disable */
import React, { Component } from 'react'
import { Row, Col, Timeline, Icon, Form, Input, Radio, DatePicker, Button} from 'antd'
import enUS from 'antd/lib/date-picker/locale/en_US'
import { bindActionCreators } from 'redux'
import * as actions from './actions'
import { connect } from 'react-redux'
const FormItem = Form.Item
const RadioGroup = Radio.Group
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 12 },
}

const btnLayout = {
  wrapperCol: {
    span: 14,
    offset: 6
  }
}

const current_step = 0

export class BaseInfo extends Component {
  handleSubmit(e) {
    e.preventDefault()
    let data = this.props.form.getFieldsValue()
    // console.log('data >', data)
    this.props.actions.store_resume_data(data, current_step)    
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
        <FormItem
          {...formItemLayout}
          label="Name"
          hasFeedback
        >
        {
          getFieldDecorator('name', {
            rules: [{
              type: 'string', message: 'Name must be String',
            }, {
              required: true, message: 'Name is required',
            }],
          })(
          <Input />
        )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Phone"
          hasFeedback
        >
        {
          getFieldDecorator('phone', {
            rules: [{
              required: true, message: 'PhoneNumber is required'
            }]
          })(<Input />)
        }
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Email"
          hasFeedback
        >
        {
          getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'This is not an email'
            }, {
              required: true, message: 'Email is required'
            }]
          })(<Input />)
        }
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Address"
          hasFeedback
        >
        {
          getFieldDecorator('addr', {
            rules: [{
              required: true, message: 'Email is required'
            }]
          })(<Input />)
        }
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Gender"
          hasFeedback
        >
        {
          getFieldDecorator('gender', {
            rules: []
          })(
            <RadioGroup>
              <Radio value="male">Gentle</Radio>
              <Radio value="female">Lady</Radio>
            </RadioGroup>
          )
        }
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Birthday"
          hasFeedback
        >
        {
          getFieldDecorator('birthday', {
            rules: []
          })(<DatePicker locale={enUS} />)
        }
        </FormItem>
        <FormItem
          {...btnLayout}
        >
          <Button htmlType="submit" type="primary" size="large">Next</Button>
        </FormItem>
      </Form>
    )
  }
}

// export default Form.create()(BaseInfo)

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

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(BaseInfo))
