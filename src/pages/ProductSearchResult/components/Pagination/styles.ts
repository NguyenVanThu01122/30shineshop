import styled from 'styled-components'

export const WrapperPagination = styled.div`
  /* position: relative; */
`

export const ContentPagination = styled.div`
  display: flex;
  gap: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 50px;
  button {
    height: 35px;
    padding: 5px 25px;
    cursor: pointer;
    background-color: #3498db !important;
    color: #fff !important;
    border: none;
    border-radius: 3px;
    font-weight: 600;
    &:hover {
      filter: brightness(0.7);
    }
  }
  .disable {
    opacity: 0.3; /* Điều chỉnh độ mờ */
    cursor: not-allowed; /* Đổi kiểu con trỏ */
    pointer-events: none; /* Không cho phép sự kiện click */
  }
  .activePage {
    font-weight: bold;
    background: linear-gradient(217deg, #e250e5, #4b50e6);
  }

  @media screen and (max-width: 768px) {
  }
`
