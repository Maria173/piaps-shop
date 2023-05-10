import React from 'react';
import Button from '@components/frontStore/cms/Button';

export default function FeaturedCategories() {
  return (
    <div className="mt-15">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 page-width">
        <div>
          <div className="text-center">
            <img style={{maxHeight: '466.66px'}} src="https://shop-cdn1-2.vigbo.tech/shops/191374/products/20841310/images/2-b7e9c3897b394ce838d5ffe41490a5a1.JPG?version=1" alt="" />
          </div>
          <h3 className="h4 uppercase mt-1 mb-1">Сувениры</h3>
          <div className="mb-1">
            <p>
              От милых открыток до стильных подсвечников.
            </p>
          </div>
          <Button url="/category/souvenirs" title="Перейти" variant="primary" />
        </div>
        <div>
          <div>
            <img src="https://tvoe.ru/img/30q4q0g/product/754/1005/8/4620123688297.jpg" alt="" />
          </div>
          <h3 className="h4 uppercase mt-1 mb-1">Одежда</h3>
          <div className="mb-1">
            <p>
              От спортивок до элегантного платья. С любовью от местных дизайнеров.
            </p>
          </div>
          <Button url="/category/clothes" title="Перейти" variant="primary" />
        </div>
        <div>
          <div>
            <img src="https://shop-cdn1-2.vigbo.tech/shops/191374/products/21566286/images/3-a2c71c5a1bf773c97456c027c73de298.jpg" alt="" />
          </div>
          <h3 className="h4 uppercase mt-1 mb-1">Аксессуары</h3>
          <div className="mb-1">
            <p>
              Авторские аксессуары ручной работы на любой вкус и цвет.
            </p>
          </div>
          <Button url="/category/accessories" title="Перейти" variant="primary" />
        </div>
      </div>
    </div>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 10
};
