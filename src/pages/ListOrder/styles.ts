import styled from 'styled-components'

export const WrapperOrder = styled.div`
  max-width: 1600px;
  display: flex;
  justify-content: center;
  margin: 35px 0px;
`
export const ItemOrder = styled.div`
  flex: 0.7;
  background-color: rgb(238, 238, 238);
  padding: 20px 0px;
  height: 80vh;
  overflow-y: auto;
  position: relative;
  ::-webkit-scrollbar {
    width: 5px; /* Độ rộng của thanh cuộn */
    margin-right: 10px !important; /* Khoảng cách margin bên phải */
  }
  ::-webkit-scrollbar-thumb {
    background-color: orange; /* Màu nền của nút cuộn (thumb) */
    border-radius: 10px; /* Bo góc của nút cuộn */
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* Màu nền khi hover lên nút cuộn */
  }
  ::-webkit-scrollbar-track {
    background-color: rgb(0, 0, 0, 0.1); /* Màu nền của thanh cuộn */
  }

  ::-webkit-scrollbar-track:hover {
    background-color: #d4d4d4; /* Màu nền khi hover lên thanh cuộn */
  }
`
export const MyOrder = styled.div`
  color: red;
  padding: 8px 0px;
  font-size: 25px;
  font-family: 'Oswald';
  font-weight: 600;
  background-color: rgb(238, 238, 238);
`
