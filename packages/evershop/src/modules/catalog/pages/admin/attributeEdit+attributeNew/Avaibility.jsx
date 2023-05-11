import PropTypes from 'prop-types';
import React from 'react';
import { Field } from '@components/common/form/Field';
import { Card } from '@components/admin/cms/Card';

export default function General({ attribute }) {
  return (
    <Card title="Настройки" subdued>
      <Card.Session>
        <Field
          id="is_required"
          type="radio"
          name="is_required"
          label="Требуется?"
          options={[
            { value: 0, text: 'Не требуется' },
            { value: 1, text: 'Требуется' }
          ]}
          value={attribute?.isRequired}
        />
      </Card.Session>
      <Card.Session>
        <Field
          id="is_filterable"
          type="radio"
          name="is_filterable"
          label="Фильтруется?"
          options={[
            { value: 0, text: 'Нет' },
            { value: 1, text: 'Да' }
          ]}
          value={attribute?.isFilterable}
        />
      </Card.Session>
      <Card.Session>
        <Field
          id="display_on_frontend"
          type="radio"
          name="display_on_frontend"
          label="Показать покупателям?"
          options={[
            { value: 0, text: 'Нет' },
            { value: 1, text: 'Да' }
          ]}
          value={attribute?.displayOnFrontend}
        />
      </Card.Session>
      <Card.Session>
        <Field
          id="sort_order"
          type="text"
          name="sort_order"
          label="Порядок сортировки"
          value={attribute?.sortOrder}
          validationRules={['notEmpty', 'number']}
        />
      </Card.Session>
    </Card>
  );
}

General.propTypes = {
  attribute: PropTypes.shape({
    displayOnFrontend: PropTypes.number,
    isFilterable: PropTypes.number,
    isRequired: PropTypes.number,
    sortOrder: PropTypes.number
  })
};

General.defaultProps = {
  attribute: {}
};

export const layout = {
  areaId: 'rightSide',
  sortOrder: 10
};

export const query = `
  query Query {
    attribute(id: getContextValue("attributeId", null)) {
      attributeId
      isFilterable
      isRequired
      displayOnFrontend
      sortOrder
    }
  }
`;
