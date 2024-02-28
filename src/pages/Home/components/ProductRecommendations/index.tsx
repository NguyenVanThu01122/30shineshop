import { Tabs } from 'antd'
import { useState } from 'react'
import { tabList } from '../../data'
import { Wrapper } from './styles'

const ProductRecommendations = () => {
  const { TabPane } = Tabs
  const [tab, setTab] = useState('1')

  const handleTabChange = (key: string) => {
    setTab(key)
  }

  return (
    <Wrapper>
      <div className='product-recommendations'>
        <div>GỢI Ý HÔM NAY MUA SẮM LIỀN TAY</div>
        <div>Lựa Chọn Ưa Chuộng Dành Cho Quý Khách</div>
      </div>
      <Tabs activeKey={tab} onChange={handleTabChange} className='custom-tabs'>
        {tabList.map((item: any) => (
          <TabPane tab={item.nameTab} key={item.key} className='tabPane'>
            <div>{item.nameTab}</div>
          </TabPane>
        ))}
      </Tabs>
    </Wrapper>
  )
}

export default ProductRecommendations
