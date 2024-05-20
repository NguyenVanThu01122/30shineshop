import CommonLoading from '../customLoading'

export const Loading = () => {
  return (
    <div
    // style={{
    //   width: '100%',
    //   height: '500px',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignContent: 'center',
    //   marginTop: '50px'
    // }}
    >
      {/* <img
        style={{ width: '300px', height: '300px', objectFit: 'contain' }}
        // src='https://i.stack.imgur.com/hzk6C.gif'
        src='https://loading.io/assets/mod/spinner/spinner/lg.gif'
        alt='loading'
      /> */}
      <CommonLoading />
    </div>
  )
}
