import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Color } from '../tokens/colors';
import { Shadow } from '../tokens/shadows';
import { Radius } from '../tokens/radiuses';

const StyledBaseCard = styled(Link)`
  position: relative;
  display: grid;
  border-radius: ${Radius.R4};
  background-color: ${Color.GRAY_40};
  overflow: hidden;

  &:hover,
  &:focus {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: ${Radius.R4};
      box-shadow: ${Shadow.SHADOW_CARD_HOVER_OR_FOCUS_ADULT};
      pointer-events: none;
    }
  }
`;

export { StyledBaseCard as BaseCard };
