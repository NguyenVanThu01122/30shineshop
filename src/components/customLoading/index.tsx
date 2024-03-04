import { WrapperLoading } from './styles'

export default function CommonLoading() {
  return (
    <WrapperLoading>
      <div className='multicolor-dots-loader'>
        <div className='layer red'>
          <div className='dots'></div>
        </div>
        <div className='layer orange'>
          <div className='dots'></div>
        </div>
        <div className='layer yellow'>
          <div className='dots'></div>
        </div>
        <div className='layer green'>
          <div className='dots'></div>
        </div>
        <div className='layer blue'>
          <div className='dots'></div>
        </div>
      </div>
    </WrapperLoading>
  )
}
