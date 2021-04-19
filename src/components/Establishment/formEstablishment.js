import React from 'react'
import { t } from 'ab18n'
import { Row, Col, Form, Input, Button, Typography, Select } from 'antd'
import { StateList } from './stateList'

const { Title } = Typography
const { Option } = Select

const FormEstablishment = ({ onFinish }) => {
  return(
    <Form layout="vertical" onFinish={onFinish}>
      <Row gutter={[16, 8]}>
        <Col span={24}>
          <Title level={3} className="title-establishment-form">
            {t('establishment.form.title')}
          </Title>
        </Col>
        <Col span={12}>
          <Form.Item
            label={t('establishment.form.name')}
            name="name"
            rules={[
              { required: true, message: t('establishment.form.required') }
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label={t('establishment.form.address')}
            name="address"
            rules={[
              { required: true, message: t('establishment.form.required') }
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label={t('establishment.form.neighborhood')}
            name="neighborhood"
            rules={[
              { required: true, message: t('establishment.form.required') }
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label={t('establishment.form.city')}
            name="city"
            rules={[
              { required: true, message: t('establishment.form.required') }
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label={t('establishment.form.state')}
            name="state"
            rules={[
              { required: true, message: t('establishment.form.required') }
            ]}
          >
            <Select showSearch>
              {
                StateList.map(item => (
                  <Option key={item.id} value={item.name}>{item.name}</Option>
                ))
              }
            </Select>
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item>
            <Button
              type="primary"
              className="btn-establishment-form"
              htmlType="submit"
            >
              {t('establishment.form.register')}
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export default FormEstablishment
