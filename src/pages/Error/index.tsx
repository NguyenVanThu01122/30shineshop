import { Input } from 'antd'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ButtonWrapper, StyledCard } from './style'

const { Search } = Input

export default function Error() {
  

  const [loading, setLoading] = useState(false)
  return (
    <StyledCard loading={loading}>
      
      <div className='con1'>Con 1</div>
      <button className={`${loading ? 'button1' : ''}`} onClick={() => setLoading(!loading)}>
        Thay đổi trạng thái
      </button>
      <div style={{ color: loading ? 'red' : 'blue' }}>Loading: {String(loading)} </div>
      <ButtonWrapper>Button 1</ButtonWrapper>
      {/* <div className='div1'>
        <Button onClick={() => setLoading(true)}>Loading</Button>
      </div>
      <div className='div2'>
        <Button onClick={() => setLoading(false)} type='primary' size='small'>
          Ket thuc loading
        </Button>
      </div>
      <Button onClick={() => message.error('ban da that bai')}>thong bao that bai</Button>
      <Button onClick={() => message.success('Ban thanh cong')}>Thong bao thanh cong</Button>
      <Input className='input' size='small' placeholder='vui long nhap mat khau' />
      <Search placeholder='vui long nhap keyword' enterButton='tim kiem' size='large' loading={loading} /> */}
    </StyledCard>
  )
}
