import styled from 'styled-components';
import { sizes } from '../helpers/sizes';

export default styled.h1`
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.margin.between};
  color: ${({ theme }) => theme.textColor.secondary};
  font-size: 34px;

  ${sizes.mobileS} {
    display: none;
  }
`;
