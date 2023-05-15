import PropTypes from 'prop-types';
import React from 'react';
import { Field } from '@components/common/form/Field';
import { Toggle } from '@components/common/form/fields/Toggle';
import { Card } from '@components/admin/cms/Card';

export default function StripePayment({
  setting: {
    stripePaymentStatus,
    stripeDislayName,
    stripePublishableKey,
    stripeSecretKey,
    stripeEndpointSecret
  }
}) {
  return (
    <Card title="Stripe Payment">
      <Card.Session>
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-1 items-center flex">
            <h4>Активировать?</h4>
          </div>
          <div className="col-span-2">
            <Toggle name="stripePaymentStatus" value={stripePaymentStatus} />
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
              name="stripeDislayName"
              placeholder="Отобразить название"
              value="Кредитная карта"
            />
          </div>
        </div>
      </Card.Session>
      <Card.Session>
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-1 items-center flex">
            <h4>Доступный для публикации ключ</h4>
          </div>
          <div className="col-span-2">
            <Field
              type="text"
              name="stripePublishableKey"
              placeholder="Доступный для публикации ключ"
              value={stripePublishableKey}
            />
          </div>
        </div>
      </Card.Session>
      <Card.Session>
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-1 items-center flex">
            <h4>Секретный ключ</h4>
          </div>
          <div className="col-span-2">
            <Field
              type="text"
              name="stripeSecretKey"
              placeholder="Секретный ключ"
              value={stripeSecretKey}
            />
          </div>
        </div>
      </Card.Session>
      <Card.Session>
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-1 items-center flex">
            <h4>Секретный ключ Webhook</h4>
          </div>
          <div className="col-span-2">
            <Field
              type="text"
              name="stripeEndpointSecret"
              placeholder="Секретный ключ"
              value={stripeEndpointSecret}
            />
          </div>
        </div>
      </Card.Session>
    </Card>
  );
}

StripePayment.propTypes = {
  setting: PropTypes.shape({
    stripePaymentStatus: PropTypes.bool,
    stripeDislayName: PropTypes.string,
    stripePublishableKey: PropTypes.string,
    stripeSecretKey: PropTypes.string,
    stripeEndpointSecret: PropTypes.string
  }).isRequired
};

export const layout = {
  areaId: 'paymentSetting',
  sortOrder: 10
};

export const query = `
  query Query {
    setting {
      stripeDislayName
      stripePaymentStatus
      stripePublishableKey
      stripeSecretKey
      stripeEndpointSecret
    }
  }
`;
