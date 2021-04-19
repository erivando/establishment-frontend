import React from 'react'
import { t } from 'ab18n'
import { Layout } from 'antd'
import './layout.css'

const { Header, Content } = Layout

const LayoutInitial = (props) => {
  return (
    <Layout>
      <Header>
        <div className="logo">{t('initial.title')}</div>
      </Header>
      <Content className="content-layout">
        <div className="layout-body">
          {props.children}
        </div>
      </Content>
    </Layout>
  )
}

export default LayoutInitial
