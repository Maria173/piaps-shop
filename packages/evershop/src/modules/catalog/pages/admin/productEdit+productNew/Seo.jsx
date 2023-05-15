import PropTypes from 'prop-types';
import React from 'react';
import Area from '@components/common/Area';
import { Field } from '@components/common/form/Field';
import { get } from '@evershop/evershop/src/lib/util/get';
import { Card } from '@components/admin/cms/Card';

export default function SEO({ product }) {
  const fields = [
    {
      component: { default: Field },
      props: {
        id: 'urlKey',
        name: 'url_key',
        label: 'Url ключ',
        validationRules: ['notEmpty'],
        type: 'text'
      },
      sortOrder: 0
    },
    {
      component: { default: Field },
      props: {
        id: 'metaTitle',
        name: 'meta_title',
        label: 'Meta заголовок',
        type: 'text'
      },
      sortOrder: 10
    },
    {
      component: { default: Field },
      props: {
        id: 'metaKeywords',
        name: 'meta_keywords',
        label: 'Meta ключевые слова',
        type: 'text'
      },
      sortOrder: 20
    },
    {
      component: { default: Field },
      props: {
        id: 'metaDescription',
        name: 'meta_description',
        label: 'Meta описание',
        options: [
          { value: 0, text: 'Недоступный' },
          { value: 1, text: 'Доступный' }
        ],
        type: 'textarea'
      },
      sortOrder: 30
    }
  ].filter((f) => {
    // eslint-disable-next-line no-param-reassign
    if (get(product, `${f.props.id}`) !== undefined) {
      f.props.value = get(product, `${f.props.id}`);
    }
    return f;
  });

  return (
    <Card title="Оптимизация поисковой системы">
      <Card.Session>
        <Area id="productEditSeo" coreComponents={fields} />
      </Card.Session>
    </Card>
  );
}

SEO.propTypes = {
  product: PropTypes.shape({
    urlKey: PropTypes.string,
    metaTitle: PropTypes.string,
    metaKeywords: PropTypes.string,
    metaDescription: PropTypes.string
  })
};

SEO.defaultProps = {
  product: {
    urlKey: '',
    metaTitle: '',
    metaKeywords: '',
    metaDescription: ''
  }
};

export const layout = {
  areaId: 'leftSide',
  sortOrder: 60
};

export const query = `
  query Query {
    product(id: getContextValue('productId', null)) {
      urlKey
      metaTitle
      metaKeywords
      metaDescription
    }
  }
`;
