import PropTypes from 'prop-types';
import React from 'react';
import Area from '@components/common/Area';
import { Field } from '@components/common/form/Field';
import { Card } from '@components/admin/cms/Card';
import CkeditorField from '@components/common/form/fields/Ckeditor';

function SKUPriceWeight({ sku, price, weight, setting }) {
  return (
    <div className="grid grid-cols-3 gap-1 mt-15">
      <div>
        <Field
          id="sku"
          name="sku"
          value={sku}
          placeholder="Артикул"
          label="Артикул"
          type="text"
          validationRules={['notEmpty']}
        />
      </div>
      <div>
        <Field
          id="price"
          name="price"
          value={price?.value}
          placeholder="Цена"
          label="Цена"
          type="text"
          validationRules={['notEmpty']}
          suffix="RUB"
        />
      </div>
      <div>
        <Field
          id="weight"
          name="weight"
          value={weight?.value}
          placeholder="Вес"
          label="Вес"
          type="text"
          validationRules={['notEmpty']}
          suffix="кг"
        />
      </div>
    </div>
  );
}

SKUPriceWeight.propTypes = {
  price: PropTypes.number,
  sku: PropTypes.string,
  weight: PropTypes.number,
  setting: PropTypes.shape({
    storeCurrency: PropTypes.string
  }).isRequired
};

SKUPriceWeight.defaultProps = {
  price: undefined,
  sku: undefined,
  weight: undefined
};

export default function General({
  product,
  browserApi,
  deleteApi,
  uploadApi,
  folderCreateApi,
  setting
}) {
  return (
    <Card title="Основное">
      <Card.Session>
        <Area
          id="productEditGeneral"
          coreComponents={[
            {
              component: { default: Field },
              props: {
                id: 'name',
                name: 'name',
                label: 'Название',
                value: product?.name,
                validationRules: ['notEmpty'],
                type: 'text',
                placeholder: 'Название'
              },
              sortOrder: 10,
              id: 'name'
            },
            {
              component: { default: Field },
              props: {
                id: 'product_id',
                name: 'product_id',
                value: product?.productId,
                type: 'hidden'
              },
              sortOrder: 10,
              id: 'product_id'
            },
            {
              component: { default: SKUPriceWeight },
              props: {
                sku: product?.sku,
                price: product?.price.regular,
                weight: product?.weight,
                setting
              },
              sortOrder: 20,
              id: 'SKUPriceWeight'
            },
            {
              component: { default: CkeditorField },
              props: {
                id: 'description',
                name: 'description',
                label: 'Описание',
                value: product?.description,
                browserApi,
                deleteApi,
                uploadApi,
                folderCreateApi
              },
              sortOrder: 30,
              id: 'description'
            }
          ]}
        />
      </Card.Session>
    </Card>
  );
}

General.propTypes = {
  browserApi: PropTypes.string.isRequired,
  deleteApi: PropTypes.string.isRequired,
  folderCreateApi: PropTypes.string.isRequired,
  uploadApi: PropTypes.string.isRequired,
  product: PropTypes.shape({
    description: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.shape({
      regular: PropTypes.shape({
        currency: PropTypes.string,
        value: PropTypes.number
      })
    }),
    productId: PropTypes.string,
    sku: PropTypes.string,
    weight: PropTypes.shape({
      unit: PropTypes.string,
      value: PropTypes.number
    })
  }),
  setting: PropTypes.shape({
    storeCurrency: PropTypes.string
  }).isRequired
};

General.defaultProps = {
  product: undefined
};

export const layout = {
  areaId: 'leftSide',
  sortOrder: 10
};

export const query = `
  query Query {
    product(id: getContextValue("productId", null)) {
      productId
      name
      description
      sku
      price {
        regular {
          value
          currency
        }
      }
      weight {
        value
        unit
      }
    }
    setting {
      weightUnit
      storeCurrency
    }
    browserApi: url(routeId: "fileBrowser", params: [{key: "0", value: ""}])
    deleteApi: url(routeId: "fileDelete", params: [{key: "0", value: ""}])
    uploadApi: url(routeId: "imageUpload", params: [{key: "0", value: ""}])
    folderCreateApi: url(routeId: "folderCreate")
  }
`;
