import React from 'react'
import { Row, Col } from 'antd'
import Layout from '../../layout'
import FormEstablishment from './formEstablishment'
import './establishment.css'

const CreateEstablishment = () => {

  const onFinish = (values) => {
    console.log(values);
  }

  return(
    <Layout>
      <Row>
        <Col span={14} offset={5}>
          <FormEstablishment onFinish={onFinish} />
        </Col>
      </Row>
    </Layout>
  )
}

export default CreateEstablishment
