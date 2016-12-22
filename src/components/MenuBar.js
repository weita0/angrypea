import React, { Component } from 'react'
import { Row, Col, Icon, Menu, Switch } from 'antd'
import _ from 'lodash'
import { menu } from '../config'

const SubMenu = Menu.SubMenu

export class MenuBar extends Component {
  handleMenuClick(e) {
    let selected = e.key

  }
  render() {
    // console.log('menu >', menu)
    return (
      <Menu
        theme='dark'
        onClick={this.handleMenuClick}
        style={{width: '20%', height: '100%'}}
        mode="inline"
      >
        {
          _.map(menu, (o, idx) => {
            if (o.subMenu) {
              return (
                <SubMenu key={idx} title={<span><Icon type={o.icon} />{o.name}</span>}>
                  {
                    _.map(o.subMenu, (sub, index) =>
                      <Menu.Item key={sub.value}>
                        <Icon type={sub.icon} />
                        {sub.name}
                      </Menu.Item>
                    )
                  }
                </SubMenu>
              )
            } else {
              return <Menu.Item key={o.value}><Icon type={o.icon} />{o.name}</Menu.Item>
            }
          })
        }
      </Menu>
    )
  }
}
