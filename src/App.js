import { GlobalFonts } from './tokens/fonts';
import { Color, GlobalColors } from './tokens/colors';
import { GlobalShadows } from './tokens/shadows';
import { GlobalRadiuses } from './tokens/radiuses';
import { GlobalResets } from './tokens/resets';
import { IconName, SpriteWithIcons } from './tokens/icons';

import { TypographyVariant, Typography } from './elements/typography';
import { Icon } from './elements/icon';
import { TextButtonSize, TextButton } from './elements/text-button';
import { IconButton } from './elements/icon-button';
import { ButtonSize, ButtonColor, ButtonVariant, Button } from './elements/button';
import { Toggle } from './elements/toggle';
import { Input } from './elements/input';
import { Filter } from './elements/filter';
import { Select } from './elements/select';

import { CategoryCard } from './components/category-card';

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

      <TextButton size={TextButtonSize.LARGE}>text-button</TextButton>

      <IconButton>
        <Icon name={IconName.BAR_CHART} />
      </IconButton>
      <IconButton>
        <Icon name={IconName.MENU} />
      </IconButton>

      <Button size={ButtonSize.LARGE}>
        <Icon name={IconName.BIKE_ADULT} />
        Button
      </Button>

      <Toggle label="Toogle" />

      <Input />

      <Filter label='Категория товаров'>
        <option>Оправы</option>
        <option>Линзы</option>
        <option>Очки</option>
      </Filter>

       <Select label='Категория великов'>
        <option>Прогулочные</option>
        <option>Трековые</option>
        <option>Горные</option>
      </Select>

      <CategoryCard name='Прогулочные' image='' amount='180'></CategoryCard>

    </>
  );
}

export default App;
