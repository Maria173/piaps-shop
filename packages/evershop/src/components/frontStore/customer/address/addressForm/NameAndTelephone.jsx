import React from 'react';
import PropTypes from 'prop-types';
import { Field } from '@components/common/form/Field';
import { _ } from '@evershop/evershop/src/lib/locale/translate';

export function NameAndTelephone({ address }) {
  return (
    <div className="grid grid-cols-2 gap-1">
      <div>
        <Field
          type="text"
          name="address[full_name]"
          value={address?.fullName}
          label={_('ФИО')}
          placeholder={_('ФИО')}
          validationRules={[
            {
              rule: 'notEmpty',
              message: _('ФИО обязательно')
            }
          ]}
        />
      </div>
      <div>
        <Field
          type="text"
          name="address[telephone]"
          value={address?.telephone}
          label={_('Телефон')}
          placeholder={_('Телефон')}
          validationRules={[
            {
              rule: 'notEmpty',
              message: _('Телефон обязателен')
            }
          ]}
        />
      </div>
    </div>
  );
}

NameAndTelephone.propTypes = {
  address: PropTypes.shape({
    fullName: PropTypes.string,
    telephone: PropTypes.string
  })
};

NameAndTelephone.defaultProps = {
  address: {}
};
