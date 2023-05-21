import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from './styles.module.css'
export default function Brand() {
  /* Cho tôi ví dụ về localStorage
    Quên kiến thức
    localStorage.setItem(key, value); 
    localStorage.setItem('name', {name: "Tuan"}); 

    console.log(localStorage.getItem('name')); // string JSON  JSON.parse

    localStorage.getItem(key);

    localStorage.removeItem(key);

    localStorage.clear()
  */

  // localStorage.setItem('so1', '1')
  // localStorage.setItem('so2', '2')
  // let getValue1 = localStorage.getItem('so1')
  // let getValue2 = localStorage.getItem('so2')

  // let kq = Number(getValue1) + Number(getValue2)
  // console.log(kq); // 3

  /* Ví dụ 2: 
Lưu đối tượng sau vào localstorage
let object = {
  name: "Tuan",
  age: 20
}
Sau đó lấy giá trị của object đó, sau đó in ra tên

*/
  /* Ví dụ 3:
Lưu mảng sau vào localStorage
let array = [1,2,3,4,5]
Sau đó lấy giá trị của mảng, và tính tổng các phần tử của mảng
*/

  /* Làm xong rồi ngủ */
  /* Nhớ kiểm tra xem lưu thành công hay chưa bằng cách bật f12, click vào mục application, chọn localStorage */

  let [list, setList] = useState([])
  let [error, setError] = useState('')

  useEffect(() => {
    axios
      .get('https://shop30shine.herokuapp.com/brand')
      .then((response) => {
        setList(response.data.brand)
        setError('')
      })
      .catch((error) => {
        setError('Lỗi server')
      })
  }, [])

  return (
    <div className={styles.pageBrand}>
      <div className={styles.title}>
        {/* <div className={styles.loginBrand}>
          <div>Trang chủ /</div>
          <div>Thương hiệu</div>
        </div> */}
        <div>THƯƠNG HIỆU</div>
      </div>
      <div className={styles.brandParent}>
        {list.map((item: any) => {
          return (
            <div className={styles.brandItem} key={item.id}>
              <img src={item.image} />
              <div>{item.name}</div>
            </div>
          )
        })}
      </div>

      {error}
    </div>
  )
}
