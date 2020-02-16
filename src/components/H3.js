import styled from 'styled-components';
import { sizes } from '../helpers/sizes';

export default styled.h3`
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.margin.between};
  color: ${({ theme }) => theme.textColor.header};
  font-size: 20px;

  ${sizes.tablet} {
    margin-top: ${({ theme }) => theme.margin.sibling};
    margin-bottom: ${({ theme }) => theme.margin.sibling};
  }
`;
