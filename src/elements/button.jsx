import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { BaseButton } from '../helpers/base-button';
import { Color } from '../tokens/colors';
import { Radius } from '../tokens/radiuses';

const ButtonSize = {
  MEDIUM: 'medium',
  LARGE: 'large',
};

const ButtonVariant = {
  FILLED: 'filled',
  OUTLINED: 'outlined',
}

const ButtonColor = {
  ORANGE: 'orange',
  GREEN: 'green',
};

const ButtonColorToCSS = {
  [ButtonColor.ORANGE]: css`
    --color-button: ${Color.ORANGE_30};

    &:hover,
    &:focus {
      --color-button: ${Color.ORANGE_20};
    }

    &:active {
      --color-button: ${Color.ORANGE_40};
    }

    &:disabled {
      --color-button: ${Color.GRAY_30};
    }
  `,
  [ButtonColor.GREEN]: css`
    --color-button: ${Color.GREEN_30};

    &:hover,
    &:focus {
      --color-button: ${Color.GREEN_20};
    }

    &:active {
      --color-button: ${Color.GREEN_40};
    }

    &:disabled {
      --color-button: ${Color.GRAY_30};
    }
  `,
};

const ButtonVariantToCSS = {
  [ButtonVariant.FILLED]: css`
    border-color: transparent;
    color: ${Color.WHITE};
    background-color: var(--color-button);
  `,
  [ButtonVariant.OUTLINED]: css`
    border-color: var(--color-button);
    color: var(--color-button);
    background-color: transparent;
  `,
};

const ButtonSizeToCSS = {
  [ButtonSize.MEDIUM]: css`
    padding: 1px 5px 3px 5px;
  `,
  [ButtonSize.LARGE]: css`
    padding: 3px 7px 5px 7px;
  `,
};

const CSS = css`
  ${({ size }) => ButtonSizeToCSS[size]}
  ${({ color }) => ButtonColorToCSS[color]}
  ${({ variant }) => ButtonVariantToCSS[variant]}

  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  line-height: 22px;
  border-width: 1px;
  border-style: solid;
  border-radius: ${Radius.R4};
  gap: 4px;
  cursor: pointer;

  svg {
    color: currentColor;
  }
`;

const attrsFactory = ({ size, color, variant }) => ({
  size: size || ButtonSize.MEDIUM,
  color: color || ButtonColor.ORANGE,
  variant: variant || ButtonVariant.FILLED,
});

const StyledButton = styled(BaseButton).attrs(attrsFactory)`
  ${CSS}
`;

const StyledLink = styled(Link).attrs(attrsFactory)`
  ${CSS}
`;

export { ButtonSize, ButtonColor, ButtonVariant, StyledButton as Button, StyledLink as Link };