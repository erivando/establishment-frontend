import React from 'react'
import { t } from 'ab18n'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Card, Form, Input, Button, Typography } from 'antd'
import { MailOutlined, LockOutlined, UserOutlined } from '@ant-design/icons'
import * as action from './actions'
import './register.css'

const { Title } = Typography

const Register = ({ create }) => {

  const onFinish = (values) => {
    create({ ...values, role: 'user' })
  }

  return(
    <div className="container-register">
      <Card
        title={
          <Title type="secondary" level={3}>{t('register.title')}</Title>
        }
        className="box-register"
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label={t('register.name')}
            name="name"
            rules={[{ required: true, message: t('register.required') }]}
          >
            <Input prefix={<UserOutlined className="icon-register" />} />
          </Form.Item>
          <Form.Item
            label={t('register.email')}
            name="email"
            rules={[{ required: true, message: t('register.required') }]}
          >
            <Input prefix={<MailOutlined className="icon-register" />} />
          </Form.Item>
          <Form.Item
            label={t('register.password')}
            name="password"
            rules={[{ required: true, message: t('register.required') }]}
          >
            <Input.Password
              prefix={<LockOutlined className="icon-register" />}
            />
          </Form.Item>
          <Form.Item>
            <Button className="btn-register" htmlType="submit">
              {t('register.access')}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators(
  action,
  dispatch
)

export default connect(null, mapDispatchToProps) (Register)
