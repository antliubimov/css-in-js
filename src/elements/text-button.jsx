import styled, { css } from 'styled-components';

import { BaseButton } from '../helpers/base-button';
import { Color } from '../tokens/colors';

const TextButtonSize = {
  MEDIUM: 'medium',
  LARGE: 'large',
};

const TextButtonSizeToCSS = {
  [TextButtonSize.MEDIUM]: css`
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
  `,
  [TextButtonSize.LARGE]: css`
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
  `,
};

const TextButtonColor = {
  ORANGE: 'orange',
  GREEN: 'green',
};

const TextButtonColorToCSS = {
  [TextButtonColor.ORANGE]: css`
    color: ${Color.WHITE};
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
  [TextButtonColor.GREEN]: css`
    color: ${Color.GRAY_60};
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
}

const StyledTextButton = styled(BaseButton).attrs(({ size, color }) => ({
  size: size || TextButtonSize.MEDIUM,
  color: color || TextButtonColor.ORANGE
}))`
  ${({ size }) => TextButtonSizeToCSS[size]}
  ${({ color }) => TextButtonColorToCSS[color]}
`;

export { TextButtonSize, TextButtonColor, StyledTextButton as TextButton };