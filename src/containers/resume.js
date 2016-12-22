import React, { Component } from 'react'
import { Row, Col, Timeline, Icon } from 'antd'
import { Header } from '../components/Header'
import 'antd/dist/antd.css'


const layout = {
  item_title: {
  },
  timeline_item: {
  },
  exp_company: {
    fontWeight: 'bold'
  },
  self_desc: {
    paddingLeft: 8,
    paddingRight: 8,
    borderRight: '1px solid #e7e7e7'
  },
  self_desc_icon: {
    paddingRight: 4,
    textAlign: 'right'
  },
  arrow: {
    width: 0,
    height: 0,
    borderWidth: '11px 10.5px 11px 10.5px',
    borderColor: 'transparent transparent transparent #e6e6e6',
    borderStyle: 'solid'
  }
}

const TLItem = Timeline.Item

export default class Resume extends Component {
  render() {
    return (
      <Row className="all">
        <Row className="main-title">
          <Row type="flex" justify="center">
            <Col span={4} className="name-area" style={{textAlign: 'center'}}>
              陈璇
            </Col>
          </Row>
          <Row type="flex" justify="center" className="self-desc">
            <span>女</span>
            <span>23 岁</span>
            <span>{"1 年工作经验"}</span>
            <span>求职中</span>
          </Row>
          <Row type="flex" justify="center">
            <Col span={1} offset={1} style={layout.self_desc_icon}>
              <Icon type="phone" />
            </Col>
            <Col span={4}>
              17321195613
            </Col>
            <Col span={1} style={layout.self_desc_icon}>
              <Icon type="mail" />
            </Col>
            <Col span={5}>
              chenxuan19930613@sina.com
            </Col>
            <Col span={1} offset={1} style={layout.self_desc_icon}>
              <Icon type="home" />
            </Col>
            <Col span={4}>
              上海市嘉定区丰庄路
            </Col>
          </Row>
        </Row>

        <Row className="content">
          <Row className="item-list">
            <Row className="item">
              <Row className="item-title">
                <Col span={4}>
                  求职意向
                </Col>
              </Row>
              <Row className="item-content">
                <Row gutter={24} type="flex" justify="start" className="item-content-each">
                  <Col span={3} offset={1} className="item-title-sub">期望薪资</Col>
                  <div style={layout.arrow}></div>
                  <Col span={5}>6-8 万元/年</Col>
                  <Col span={3} className="item-title-sub">工作所在地</Col>
                  <div style={layout.arrow}></div>
                  <Col span={5}>上海</Col>
                </Row>
                <Row gutter={24} type="flex" justify="start" className="item-content-each">
                  <Col span={3} offset={1} className="item-title-sub">期望职位</Col>
                  <div style={layout.arrow}></div>
                  <Col span={5}>行程管理/计调</Col>
                  <Col span={3} className="item-title-sub">行业</Col>
                  <div style={layout.arrow}></div>
                  <Col span={5}>酒店/旅游</Col>
                </Row>
                <Row gutter={24} type="flex" justify="start" className="item-content-each">
                  <Col span={3} offset={1} className="item-title-sub">工作类型</Col>
                  <div style={layout.arrow}></div>
                  <Col span={5}>全职</Col>
                </Row>
              </Row>
            </Row>
            <Row className="item">
              <Row className="item-title">
                <Col span={4}>
                  教育背景
                </Col>
              </Row>
              <Row className="item-content">
                <Row gutter={24} type="flex" justify="start" className="item-content-each">
                  <Col span={3} offset={1} className="item-title-sub">学校</Col>
                  <div style={layout.arrow}></div>
                  <Col span={5}>湖北经济学院</Col>
                  <Col span={3} className="item-title-sub">专业</Col>
                  <div style={layout.arrow}></div>
                  <Col span={5}>旅游管理</Col>
                </Row>
                <Row gutter={24} type="flex" justify="start" className="item-content-each">
                  <Col span={3} offset={1} className="item-title-sub">学历／学位</Col>
                  <div style={layout.arrow}></div>
                  <Col span={5}>本科</Col>
                </Row>
              </Row>
            </Row>
            <Row className="item">
              <Row className="item-title">
                工作经验
              </Row>
              <Row className="item-content">
                <Row className="item-content-each">
                  <Col offset={1} span={16}>
                    <Timeline>
                      <TLItem color="green">
                        <p>2016/6 至今</p>
                        <p style={layout.exp_company}>南京大华国际旅行社上海分公司 | 计调部</p>
                        <p>工作描述:</p>
                        <ul style={{paddingLeft: 8}}>
                          <li>负责完成旅游行程的设计、报价的核算工作</li>
                          <li>根据季节性及市场需求性差异，按照公司整体计划，制定、调整旅游产品线路</li>
                          <li>合理平衡成本控制与团队运作质量之间的关系</li>
                          <li>对行程进行监控，强化质量监督</li>
                          <li>根据各方信息反馈，不断调整优化旅游线路产品；能对潜在的风险进行预测</li>
                          <li>与供应商保持良好沟通，开拓、优化供应商资源，为产品开发和销售提供支持</li>
                          <li>出现行程突发状况或游客投诉时，沟通协调有关部门相关人员妥善处理</li>
                          <li>旅游客人归来之后，完成团队报账事宜</li>
                        </ul>
                      </TLItem>
                      <TLItem color="green">
                        <p>2016/3-2016/6</p>
                        <p style={layout.exp_company}>上海主题乐园配套设施有限公司 | 商品部</p>
                        <p>工作描述:</p>
                        <ul style={{paddingLeft: 8}}>
                          <li>迎接游客，积极友好地与游客交流</li>
                          <li>协助客人选择喜爱的商品</li>
                          <li>积极帮助游客和同事，提供优质的服务和准确的信息</li>
                        </ul>
                      </TLItem>
                    </Timeline>
                  </Col>
                </Row>
              </Row>
            </Row>
            <Row className="item">
              <Row className="item-title">
                自我评价
              </Row>
              <Row className="item-content">
                <Row className="item-content-each">
                  <Col span={12} offset={2}>
                    <ul className="list">
                      <li>旅游管理专业背景，具有旅行社工作经验</li>
                      <li>熟悉欧洲各线路及行程中的相关事宜</li>
                      <li>对行程中的必要环节有一定的谈判技巧和能力</li>
                      <li>具备责任心，沟通能力、执行力强，做事有条理，团队合作意识强</li>
                      <li>承受一定的工作压力、能接受旅游旺季加班</li>
                    </ul>
                  </Col>
                </Row>
              </Row>
            </Row>
            <Row className="item">
              <Row className="item-title">
                资质证明
              </Row>
              <Row className="item-content">
                <Row className="item-content-each">
                  <Col span={12} offset={2}>
                    <ul className="list">
                      <li>教师资格证</li>
                      <li>导游人员资格证书</li>
                    </ul>
                  </Col>
                </Row>
              </Row>
            </Row>
          </Row>
        </Row>
      </Row>
    )
  }
}
