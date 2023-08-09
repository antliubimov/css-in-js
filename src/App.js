import { GlobalFonts } from './tokens/fonts';
import { Color, GlobalColors } from './tokens/colors';
import { GlobalShadows } from './tokens/shadows';
import { GlobalRadiuses } from './tokens/radiuses';
import { GlobalResets } from './tokens/resets';
import { IconName, SpriteWithIcons } from './tokens/icons';

import { TypographyVariant, Typography } from './elements/typography';
import { Icon } from './elements/icon';
import { TextButtonSize, TextButtonColor, TextButton } from './elements/text-button';
import { IconButton } from './elements/icon-button';
import { ButtonSize, ButtonColor, ButtonVariant, Button } from './elements/button';
import { Toggle } from './elements/toggle';

function App() {
  return (
    <>
      <GlobalResets />
      <GlobalFonts />
      <GlobalColors />
      <GlobalShadows />
      <GlobalRadiuses />
      <SpriteWithIcons />

      <Typography as='h1' variant={TypographyVariant.TITLE_3}>asdfa</Typography>
      <Icon name={IconName.BIKE_ADULT} />
      <Icon name={IconName.BIKE_CHILD} color={Color.GREEN_30} />

      <TextButton size={TextButtonSize.LARGE} color={TextButtonColor.ORANGE}>text-button</TextButton>

      <IconButton>
        <Icon name={IconName.BAR_CHART} />
      </IconButton>
      <IconButton>
        <Icon name={IconName.MENU} />
      </IconButton>

      <Button size={ButtonSize.LARGE} color={ButtonColor.GREEN}>
        <Icon name={IconName.BIKE_ADULT} />
        Button
      </Button>

      <Toggle label="Toogle"/>
    </>
  );
}

export default App;
