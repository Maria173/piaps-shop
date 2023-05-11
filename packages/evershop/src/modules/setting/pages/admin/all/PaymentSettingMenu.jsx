import PropTypes from 'prop-types';
import React from 'react';
import { Card } from '@components/admin/cms/Card';

export default function PaymentSettingMenu({ paymentSettingUrl }) {
  return (
    <Card.Session title={<a href={paymentSettingUrl}>Настройки оплаты</a>}>
      <div>Настройте доступные способы оплаты</div>
    </Card.Session>
  );
}

PaymentSettingMenu.propTypes = {
  paymentSettingUrl: PropTypes.string.isRequired
};

export const layout = {
  areaId: 'settingPageMenu',
  sortOrder: 10
};

export const query = `
  query Query {
    paymentSettingUrl: url(routeId: "paymentSetting")
  }
`;
