import React from 'react'
import { t } from 'ab18n'
import { Card, Form, Input, Button, Typography } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import './login.css'

const { Title } = Typography

const Login = () => {
  return(
    <div className="container">
      <Card
        title={<Title type="secondary" level={4}>{t('login.title')}</Title>}
        bordered={false}
        className="box"
      >
        <Form layout="vertical">
          <Form.Item
            label={t('login.email')}
            name="email"
            rules={[{ required: true, message: t('login.required') }]}
          >
            <Input prefix={<UserOutlined className="item-icon" />} />
          </Form.Item>
          <Form.Item
            label={t('login.password')}
            name="password"
            rules={[{ required: true, message: t('login.required') }]}
          >
            <Input.Password prefix={<LockOutlined className="item-icon" />} />
          </Form.Item>
          <Form.Item>
            <Button className="btn-enter" block htmlType="submit">
              {t('login.enter')}
            </Button>
          </Form.Item>
        </Form>
        <Link className="link" to="/register">{t('login.register')}</Link>
      </Card>
    </div>
  )
}

export default Login
