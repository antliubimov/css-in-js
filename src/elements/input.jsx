import styled from 'styled-components';

import { BaseField } from '../helpers/base-field';

const StyledInput = styled(BaseField)`
  display: flex;
  width: 200px;
  padding: 3px 7px 5px 7px;

  &::placeholder {
    color: currentColor;
  }
`;

export { StyledInput as Input };