import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const WrapperBrand = styled.div`
  height: 100%;
  width: 100vw;

  @media screen and (max-width: 768px) {
    padding: 0px 0px;
    width: 100%;
  }
`

export const Title = styled.div`
  max-width: 1200px;
  margin: auto;
  margin-bottom: 10px;

  font-weight: 600;
  font-size: 1.75rem;
  font-family: 'Oswald';

  @media screen and (max-width: 768px) {
    margin: 0px 16px;
  }
`

export const IconBack = styled(FontAwesomeIcon)`
  display: none;
  margin-right: 8px;
`
