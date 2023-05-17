
export default function Home() {
  let token = localStorage.getItem('token');
  if(!token){
   window.location.href="/login"
  }
  else{
    alert('chào mừng bạn')
  }


  return (
    <div>
      <div>chào mừng {localStorage.getItem('name')}</div>
     
    </div>
  )
}
