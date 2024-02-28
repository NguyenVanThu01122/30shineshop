export const Loading = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '500px',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
      }}
    >
      <img
        style={{ width: '300px', height: '300px', objectFit: 'contain' }}
        src='https://i.stack.imgur.com/hzk6C.gif'
        alt='loading'
      />
    </div>
  )
}
