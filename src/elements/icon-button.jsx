import styled, { css } from 'styled-components';

import { BaseButton } from '../helpers/base-button';
import { Color } from '../tokens/colors';

const IconButtonColor = {
  ORANGE: 'orange',
  GREEN: 'green',
};

const IconButtonColorToCSS = {
  [IconButtonColor.ORANGE]: css`
    color: ${Color.ORANGE_30};

    &:hover,
    &:focus {
      color: ${Color.ORANGE_20};
    }

    &:active {
      color: ${Color.ORANGE_40};
    }

    &:disabled {
      color: ${Color.GRAY_30};
    }
  `,
  [IconButtonColor.GREEN]: css`
    color: ${Color.GREEN_30};

    &:hover,
    &:focus {
      color: ${Color.GREEN_20};
    }

    &:active {
      color: ${Color.GREEN_40};
    }

    &:disabled {
      color: ${Color.GRAY_30};
    }
  `,
};


const StyledIconButton = styled(BaseButton).attrs(({ color }) => ({
  color: color || IconButtonColor.ORANGE,
}))`

  ${({ color }) => IconButtonColorToCSS[color]}

  display: inline-flex;

  svg {
    color: currentColor;
  }
`;

export { IconButtonColor, StyledIconButton as IconButton };