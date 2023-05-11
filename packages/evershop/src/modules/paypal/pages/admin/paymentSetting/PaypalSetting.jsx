import PropTypes from 'prop-types';
import React from 'react';
import { Field } from '@components/common/form/Field';
import { Toggle } from '@components/common/form/fields/Toggle';
import { Card } from '@components/admin/cms/Card';

export default function PaypalPayment({
  setting: {
    paypalPaymentStatus,
    paypalDislayName,
    paypalClientId,
    paypalClientSecret,
    paypalEnvironment
  }
}) {
  return (
    <Card title="Paypal Payment">
      <Card.Session>
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-1 items-center flex">
            <h4>Активировать?</h4>
          </div>
          <div className="col-span-2">
            <Toggle name="paypalPaymentStatus" value={paypalPaymentStatus} />
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
              name="paypalDislayName"
              placeholder="Отобразить название"
              value={paypalDislayName}
            />
          </div>
        </div>
      </Card.Session>
      <Card.Session>
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-1 items-center flex">
            <h4>ID Клиента</h4>
          </div>
          <div className="col-span-2">
            <Field
              type="text"
              name="paypalClientId"
              placeholder="Общедоступный ключ"
              value={paypalClientId}
            />
          </div>
        </div>
      </Card.Session>
      <Card.Session>
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-1 items-center flex">
            <h4>Секрет клиента</h4>
          </div>
          <div className="col-span-2">
            <Field
              type="text"
              name="paypalClientSecret"
              placeholder="Секретный ключ"
              value={paypalClientSecret}
            />
          </div>
        </div>
      </Card.Session>
      <Card.Session>
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-1 items-center flex">
            <h4>Среда</h4>
          </div>
          <div className="col-span-2">
            <Field
              type="radio"
              name="paypalEnvironment"
              placeholder="Среда"
              value={paypalEnvironment}
              options={[
                {
                  text: 'Sandbox',
                  value: 'https://api-m.sandbox.paypal.com'
                },
                {
                  text: 'Live',
                  value: 'https://api-m.paypal.com'
                }
              ]}
            />
          </div>
        </div>
      </Card.Session>
    </Card>
  );
}

PaypalPayment.propTypes = {
  setting: PropTypes.shape({
    paypalPaymentStatus: PropTypes.number,
    paypalDislayName: PropTypes.string,
    paypalClientId: PropTypes.string,
    paypalClientSecret: PropTypes.string,
    paypalEnvironment: PropTypes.string
  })
};

PaypalPayment.defaultProps = {
  setting: {
    paypalPaymentStatus: 0,
    paypalDislayName: '',
    paypalClientId: '',
    paypalClientSecret: '',
    paypalEnvironment: ''
  }
};

export const layout = {
  areaId: 'paymentSetting',
  sortOrder: 15
};

export const query = `
  query Query {
    setting {
      paypalPaymentStatus
      paypalDislayName
      paypalClientId
      paypalClientSecret
      paypalEnvironment
    }
  }
`;
