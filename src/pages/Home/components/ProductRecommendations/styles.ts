import styled from 'styled-components'

export const Wrapper = styled.div`
  .product-recommendations {
    text-align: center;
    padding: 30px 0px 70px 0px;
    margin-top: 20px;
    background-image: url(https://shop.30shine.com/images/banner-group.png);
    & > div:first-child {
      font-weight: 600;
      font-family: 'Oswald';
      font-size: 30px;
      margin-bottom: 5px;
    }
    & > div:last-child {
      font-size: 20px;
      color: rgba(95, 95, 95);
      font-weight: 600;
    }
  }
  .custom-tabs {
    /* border: 1px solid rgba(10,10,10); */
    background: white;
    border-radius: 5px;
    margin-bottom: 50px;
    padding: 0px 10px;
    width: 80%;
    margin: auto;
    position: relative;
    top: -30px;
    font-weight: 600;
    font-size: 30px;
    .ant-tabs-ink-bar {
      background-color: yellow; /* Đổi màu gạch chân thành màu đỏ (#f00) */
    }
    .ant-tabs-tab-active .ant-tabs-tab-btn {
      color: yellow;
    }
  }
  .ant-tabs-tab {
    font-size: 20px;
    padding: 10px;
  }
`
