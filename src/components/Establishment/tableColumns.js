import { t } from 'ab18n'
import { getColumnSearchProps } from '../../service/search-column'

const TableColumns = () => {
  const columns = [
    {
      title: t('establishment.table.id'),
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: t('establishment.table.address'),
      dataIndex: 'address',
      key: 'address',
      ...getColumnSearchProps('address')
    },
    {
      title: t('establishment.table.neighborhood'),
      dataIndex: 'neighborhood',
      key: 'neighborhood',
      ...getColumnSearchProps('neighborhood')
    },
    {
      title: t('establishment.table.city'),
      dataIndex: 'city',
      key: 'city',
      ...getColumnSearchProps('city')
    },
    {
      title: t('establishment.table.state'),
      dataIndex: 'state',
      key: 'state'
    },
    {
      title:'Ações',
      dataIndex: t('establishment.table.actions'),
      key: t('establishment.table.actions')
    }
  ]

  return columns
}

export default TableColumns
