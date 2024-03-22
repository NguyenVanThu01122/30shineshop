import styled from 'styled-components'
import { CommonModal } from '../Ui/modal'

export const StyledCommonModal = styled(CommonModal)`
  .ant-modal-content {
  }
  .ant-modal-close-x {
    color: red;
    &:hover {
      scale: 1.5;
    }
  }
`
export const Content = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
`
