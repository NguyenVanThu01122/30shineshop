import { Button } from 'antd'
import styled from 'styled-components'

const StyledCard: any = styled.div`
  .con1 {
    color: ${(props: any) => (props.loading ? 'red' : 'blue')};
  }
  .button1{
    color: yellow;
  }
`

const Con4 = styled.div`
  /* color: blue; */
`
const ButtonWrapper = styled(Button)`
  &.ant-btn {
    color: red;
  }
  
`
export { StyledCard, Con4, ButtonWrapper }
