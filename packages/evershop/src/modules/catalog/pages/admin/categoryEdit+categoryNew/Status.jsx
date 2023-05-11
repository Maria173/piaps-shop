import PropTypes from 'prop-types';
import React from 'react';
import { Field } from '@components/common/form/Field';
import { Card } from '@components/admin/cms/Card';

export default function Status({ category }) {
  return (
    <Card>
      <Card.Session title="Статус">
        <Field
          type="radio"
          name="status"
          options={[
            { value: 0, text: 'Недоступный' },
            { value: 1, text: 'Доступный' }
          ]}
          value={category?.status}
        />
      </Card.Session>
      <Card.Session title="Включить в меню магазина">
        <Field
          type="radio"
          name="include_in_nav"
          options={[
            { value: 0, text: 'Нет' },
            { value: 1, text: 'Да' }
          ]}
          value={category?.includeInNav}
        />
      </Card.Session>
    </Card>
  );
}

Status.propTypes = {
  category: PropTypes.shape({
    status: PropTypes.number,
    includeInNav: PropTypes.number
  })
};

Status.defaultProps = {
  category: {}
};

export const layout = {
  areaId: 'rightSide',
  sortOrder: 15
};

export const query = `
  query Query {
    category(id: getContextValue("categoryId", null)) {
      status
      includeInNav
    }
  }
`;
