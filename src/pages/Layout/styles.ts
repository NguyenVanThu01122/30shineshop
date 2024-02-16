import styled from 'styled-components'
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  .listIcon {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    z-index: 1000;
    bottom: 120px;
    right: 0px;
    transform: translateX(100%);
  }
  .hoatHinhXuatHien {
    animation-name: tuPhaiQuaTrai;
    animation-duration: 0.5s;
    animation-fill-mode: forwards; // giữ lại trạng thái hoạt hình kết thúc
  }

  @keyframes tuPhaiQuaTrai {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  .hoatHinhBienMat {
    animation-name: tuTraiQuaPhai;
    animation-duration: 0.5s !important;
  }
  @keyframes tuTraiQuaPhai {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
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
export const ItemHeader = styled.div`
  width: 100vw;
`
export const MainItem = styled.div`
  width: 100vw;
  height: 100%;
`
