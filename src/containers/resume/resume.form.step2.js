import React, { Component } from 'react'

import { Row, Col, Icon, Form, Input } from 'antd'

const FormItem = Form.Item

const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}

export class Details extends Component {
  handleSubmit() {

  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form horizontal onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label='Expected Salary'
          hasFeedback
        >
        {
          getFieldDecorator('salary', {
            rules: []
          })(<Input />)
        }
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(Details)
