import { GlobalFonts } from './tokens/fonts';
import { Color, GlobalColors } from './tokens/colors';
import { GlobalShadows } from './tokens/shadows';
import { GlobalRadiuses } from './tokens/radiuses';
import { GlobalResets } from './tokens/resets';
import { IconName, SpriteWithIcons } from './tokens/icons';

// import { TypographyVariant, Typography } from './elements/typography';
// import { Icon } from './elements/icon';
// import { TextButtonSize, TextButton } from './elements/text-button';
// import { IconButton } from './elements/icon-button';
// import { ButtonSize, ButtonColor, ButtonVariant, Button } from './elements/button';
// import { Toggle } from './elements/toggle';
// import { Input } from './elements/input';
// import { Filter } from './elements/filter';
// import { Select } from './elements/select';

import { CategoryCard } from './components/category-card';
import { NewsCard } from './components/news-card';
import { ProductCard } from './components/product-card';
import { Banner, BannerSize } from './components/banner';

function App() {
  return (
    <>
      <GlobalResets />
      <GlobalFonts />
      <GlobalColors />
      <GlobalShadows />
      <GlobalRadiuses />
      <SpriteWithIcons />



      <CategoryCard
        name='Прогулочные'
        amount='189 моделей'
        image='/images/categories/1.jpg'
        imageAlt='Красный прогулочный велик'
      />

      <NewsCard
        title='Велопробег в Москве'
        date='02.04.2022'
        image='/images/news/1.jpg'
        imageAlt='Велосипедисты едут по дороге в пасмурный день'
      />

      <ProductCard
        name='Велик BMC'
        price='94 000 ₽'
        image='/images/products/1.jpg'
        imageAlt='Серый велик с чёрными ободами'
        hit
        novelty
        discount
      />

       <ProductCard
        name='Велик BMC'
        price='94 000 ₽'
        image='/images/products/1.jpg'
        imageAlt='Серый велик с чёрными ободами'
        hit
        novelty
        discount
        unavailable
      />

       <Banner
        title='Трековые велики'
        image='/images/banners/1.jpg'
        imageAlt='Чёрный трековый велик на фоне серой стены'
      />
      <Banner
        size={BannerSize.LARGE}
        title='Трековые велики'
        discount='50%'
        image='/images/banners/1.jpg'
        imageAlt='Чёрный трековый велик на фоне серой стены'
      />

    </>
  );
}

export default App;
