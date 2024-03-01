import styled from 'styled-components'

export const WrapperImage = styled.div`
  .listIcon {
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    z-index: 1000;
    bottom: -140px;
    right: -200px;
    transition: transform 0.5s ease;
  }

  .hoatHinhXuatHien {
    transform: translateY(-100%) translateX(-210px);
  }
  .hoatHinhBienMat {
    transform: translateY(-100%) translateX(-100%);
  }
  .iconPhone {
    width: 85px;
    height: 85px;
    padding: 15px 15px;
    color: black;
    border-radius: 50%;
    cursor: pointer;
  }
  .iconMessenger {
    width: 53px;
    height: 53px;
    border-radius: 50%;
    margin-bottom: 15px;
    cursor: pointer;
  }
  .iconZalo {
    width: 50px;
    height: 50px;
    margin-bottom: 15px;
    cursor: pointer;
  }
  .iconUp {
    width: 45px;
    height: 45px;
    padding: 10px 10px;
    color: aliceblue;
    border-radius: 10px;
    background-color: rgba(255, 192, 1, 0.806);
    cursor: pointer;
  }
`
