import React, { useEffect } from 'react'
import { t } from 'ab18n'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Table, Typography } from 'antd'
import Layout from '../../layout'
import TableColumns from './tableColumns'
import * as actionEstablishment from './actions'
import './establishment.css'

const { Title } = Typography

const Establishments = ({ establishment, fetchAll }) => {
  const { data, loading } = establishment
  
  useEffect(() => {
    fetchAll()
  }, [fetchAll])
  
  return (
    <Layout>
      <Title level={3} className="title-establishment">
        {t('establishment.title')}
      </Title>
      <Table
        rowKey="id"
        columns={TableColumns()}
        dataSource={data}
        pagination={false}
        loading={loading}
      />
    </Layout>
  )
}
const mapStateToProps = ({ establishment })=> ({ establishment })
const mapDispatchToProps = dispatch => bindActionCreators(
  actionEstablishment,
  dispatch
)

export default connect(mapStateToProps, mapDispatchToProps) (Establishments)
