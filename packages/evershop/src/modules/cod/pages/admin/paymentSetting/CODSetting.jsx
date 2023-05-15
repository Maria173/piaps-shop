import PropTypes from 'prop-types';
import React from 'react';
import { Field } from '@components/common/form/Field';
import { Toggle } from '@components/common/form/fields/Toggle';
import { Card } from '@components/admin/cms/Card';

export default function CODPayment({
  setting: { codPaymentStatus, codDislayName }
}) {
  return (
    <Card title="Оплата наложенным платежом">
      <Card.Session>
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-1 items-center flex">
            <h4>Активировать?</h4>
          </div>
          <div className="col-span-2">
            <Toggle name="codPaymentStatus" value={codPaymentStatus} />
          </div>
        </div>
      </Card.Session>
      <Card.Session>
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-1 items-center flex">
            <h4>Отобразить название</h4>
          </div>
          <div className="col-span-2">
            <Field
              type="text"
              name="codDislayName"
              placeholder="Отобразить название"
              value={codDislayName}
            />
          </div>
        </div>
      </Card.Session>
    </Card>
  );
}

CODPayment.propTypes = {
  setting: PropTypes.shape({
    codPaymentStatus: PropTypes.number,
    codDislayName: PropTypes.string
  }).isRequired
};

export const layout = {
  areaId: 'paymentSetting',
  sortOrder: 20
};

export const query = `
  query Query {
    setting {
      codPaymentStatus
      codDislayName
    }
  }
`;
