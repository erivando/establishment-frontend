import React from 'react'
import { t } from 'ab18n'
import { Result } from 'antd'
import Layout from '../../layout'

const NotFound = () => (
  <Layout>
    <Result
      status={t('notFound.status')}
      title={t('notFound.title')}
      subTitle={t('notFound.subTitle')}
    />
  </Layout>
)

export default NotFound
