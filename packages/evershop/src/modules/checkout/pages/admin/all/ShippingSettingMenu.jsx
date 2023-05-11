import PropTypes from 'prop-types';
import React from 'react';
import { Card } from '@components/admin/cms/Card';

export default function ShippingSettingMenu({ shippingSettingUrl }) {
  return (
    <Card.Session title={<a href={shippingSettingUrl}>Настройки доставки</a>}>
      <div>Настройте отправку, способы доставки и стоимость доставки</div>
    </Card.Session>
  );
}

ShippingSettingMenu.propTypes = {
  shippingSettingUrl: PropTypes.string.isRequired
};

export const layout = {
  areaId: 'settingPageMenu',
  sortOrder: 15
};

export const query = `
  query Query {
    shippingSettingUrl: url(routeId: "shippingSetting")
  }
`;
