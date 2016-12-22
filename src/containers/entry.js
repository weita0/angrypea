import React, { Component } from 'react'
import { Row, Col, Timeline, Icon, Menu, Switch } from 'antd'
import { Header } from '../components/Header'
import { MenuBar } from '../components/MenuBar'
import 'antd/dist/antd.css'

const SubMenu = Menu.SubMenu

export default class Entry extends Component {
  render() {
    return (
      <Row className="main-page-body">
        <MenuBar />
      </Row>
    )
  }
}
