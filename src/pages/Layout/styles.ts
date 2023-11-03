import styled from 'styled-components'
export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`
export const ItemHeader = styled.div`
  width: 100vw;
  /* height: 140px; */
`
export const MainItem = styled.div`
  width: 100vw;
  height: 100%;
  overflow-y: auto;
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
