import { createGlobalStyle } from 'styled-components';

const Shadow = {
  SHADOW_CARD_DEFAULT_CHILD: 'var(--shadow-card-default-child)',
  SHADOW_CARD_HOVER_OR_FOCUS_ADULT: 'var(--shadow-card-hover-or-focus-adult)',
  SHADOW_CARD_HOVER_OR_FOCUS_CHILD: 'var(--shadow-card-hover-or-focus-child)',
};

const GlobalShadows = createGlobalStyle`
  :root {
    --shadow-card-default-child: 0px 4px 10px rgba(0, 0, 0, 0.07);
    --shadow-card-hover-or-focus-adult: 0px 0px 0px 1px #FF833E;
    --shadow-card-hover-or-focus-child: 0px 0px 0px 1px #5FCB45;
  }
`;

export { Shadow, GlobalShadows };