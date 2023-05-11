import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'urql';
import { toast } from 'react-toastify';
import { Field } from '@components/common/form/Field';
import { Form } from '@components/common/form/Form';
import { Card } from '@components/admin/cms/Card';
import SettingMenu from '@components/admin/setting/SettingMenu';

const ProvincesQuery = `
  query Province($countries: [String]) {
    provinces (countries: $countries) {
      code
      name
      countryCode
    }
  }
`;

const CountriesQuery = `
  query Country($countries: [String]) {
    countries (countries: $countries) {
      code
      name
    }
  }
`;

const TimezonesQuery = `
  query Timezones {
    timezones {
      code
      name
    }
  }
`;

const CurrencyQuery = `
  query Currencies {
    currencies {
      code
      name
    }
  }
`;

function Province({
  selectedCountry = 'RU',
  selectedProvince,
  allowedCountries = [],
  fieldName = 'storeProvince'
}) {
  const [result] = useQuery({
    query: ProvincesQuery,
    variables: { countries: allowedCountries }
  });
  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) {
    return (
      <p>
        Oh no...
        {error.message}
      </p>
    );
  }

  return (
    <Field
      type="select"
      value={selectedProvince}
      name={fieldName}
      label="Область"
      placeholder="Область"
      validationRules={['notEmpty']}
      options={data.provinces
        .filter((p) => p.countryCode === selectedCountry)
        .map((p) => ({ value: p.code, text: p.name }))}
    />
  );
}

Province.propTypes = {
  allowedCountries: PropTypes.arrayOf(PropTypes.string),
  fieldName: PropTypes.string,
  selectedCountry: PropTypes.string,
  selectedProvince: PropTypes.string
};

Province.defaultProps = {
  allowedCountries: [],
  fieldName: 'storeProvince',
  selectedCountry: 'RU',
  selectedProvince: ''
};

function Country({
  selectedCountry,
  setSelectedCountry,
  allowedCountries = [],
  fieldName = 'storeCountry'
}) {
  const onChange = (e) => {
    setSelectedCountry(e.target.value);
  };
  const [result] = useQuery({
    query: CountriesQuery,
    variables: { countries: allowedCountries }
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) {
    return (
      <p>
        Oh no...
        {error.message}
      </p>
    );
  }

  return (
    <div style={{ marginTop: '1rem' }}>
      <Field
        type="select"
        value={selectedCountry}
        label="Страна"
        name={fieldName}
        placeholder="Страна"
        onChange={onChange}
        validationRules={['notEmpty']}
        options={data.countries.map((c) => ({ value: c.code, text: c.name }))}
      />
    </div>
  );
}

Country.propTypes = {
  allowedCountries: PropTypes.arrayOf(PropTypes.string),
  fieldName: PropTypes.string,
  selectedCountry: PropTypes.string.isRequired,
  setSelectedCountry: PropTypes.func.isRequired
};

Country.defaultProps = {
  allowedCountries: [],
  fieldName: 'storeCountry'
};

function Timezone({ selectedTimeZone, fieldName = 'storeTimeZone' }) {
  const [result] = useQuery({
    query: TimezonesQuery
  });
  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) {
    return (
      <p>
        Oh no...
        {error.message}
      </p>
    );
  }

  return (
    <Field
      type="select"
      value={selectedTimeZone}
      name={fieldName}
      label="TimeZone"
      placeholder="TimeZone"
      options={data.timezones.map((t) => ({ value: t.code, text: t.name }))}
    />
  );
}

Timezone.propTypes = {
  fieldName: PropTypes.string.isRequired,
  selectedTimeZone: PropTypes.string.isRequired
};

function Currency({ selectedCurrency, fieldName = 'storeCurrency' }) {
  const [result] = useQuery({
    query: CurrencyQuery
  });
  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) {
    return (
      <p>
        Oh no...
        {error.message}
      </p>
    );
  }

  return (
    <Field
      type="select"
      value={selectedCurrency}
      name={fieldName}
      label="Валюта"
      placeholder="Валюта"
      options={data.currencies.map((c) => ({ value: c.code, text: c.name }))}
    />
  );
}

Currency.propTypes = {
  fieldName: PropTypes.string,
  selectedCurrency: PropTypes.string.isRequired
};

Currency.defaultProps = {
  fieldName: 'storeCurrency'
};

export default function StoreSetting({
  saveSettingApi,
  setting: {
    storeName,
    storeDescription,
    storeCurrency,
    storeTimeZone,
    storePhoneNumber,
    storeEmail,
    storeCountry,
    storeAddress,
    storeCity,
    storeProvince,
    storePostalCode,
    weightUnit
  }
}) {
  const [selectedCountry, setSelectedCountry] = React.useState(() => {
    const country = storeCountry;
    if (!country) {
      return 'RU';
    } else {
      return country;
    }
  });

  return (
    <div className="main-content-inner">
      <div className="grid grid-cols-6 gap-x-2 grid-flow-row ">
        <div className="col-span-2">
          <SettingMenu />
        </div>
        <div className="col-span-4">
          <Form
            method="POST"
            id="storeSetting"
            action={saveSettingApi}
            onSuccess={(response) => {
              if (!response.error) {
                toast.success('Setting saved');
              } else {
                toast.error(response.error.message);
              }
            }}
          >
            <Card>
              <Card.Session title="Информация о магазине">
                <Field
                  name="storeName"
                  label="Название магазина"
                  placeholder="Название магазина"
                  value={storeName}
                  type="text"
                />
                <Field
                  name="storeDescription"
                  label="Описание"
                  placeholder="Описание"
                  value={storeDescription}
                  type="textarea"
                />
                <Timezone selectedTimeZone={storeTimeZone} />
              </Card.Session>
              <Card.Session title="Контакты">
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div>
                    <Field
                      name="storePhoneNumber"
                      label="Номер телефона"
                      value={storePhoneNumber}
                      placeholder="Номер телефона"
                      type="text"
                    />
                  </div>
                  <div>
                    <Field
                      name="storeEmail"
                      label="Email магазина"
                      value={storeEmail}
                      placeholder="Email магазина"
                      type="text"
                    />
                  </div>
                </div>
              </Card.Session>
              <Card.Session title="Адрес">
                <Country
                  selectedCountry={storeCountry}
                  setSelectedCountry={setSelectedCountry}
                />
                <Field
                  name="storeAddress"
                  label="Адрес"
                  value={storeAddress}
                  placeholder="Адрес магазина"
                  type="text"
                />
                <div className="grid grid-cols-3 gap-2 mt-2">
                  <div>
                    <Field
                      name="storeCity"
                      label="Город"
                      value={storeCity}
                      placeholder="Город"
                      type="text"
                    />
                  </div>
                  <div>
                    <Province
                      selectedProvince={storeProvince}
                      selectedCountry={selectedCountry}
                    />
                  </div>
                  <div>
                    <Field
                      name="storePostalCode"
                      label="Индекс"
                      value={storePostalCode}
                      placeholder="Индекс"
                      type="text"
                    />
                  </div>
                </div>
              </Card.Session>
            </Card>
          </Form>
        </div>
      </div>
    </div>
  );
}

StoreSetting.propTypes = {
  saveSettingApi: PropTypes.string.isRequired,
  setting: PropTypes.shape({
    storeName: PropTypes.string,
    storeDescription: PropTypes.string,
    storeTimeZone: PropTypes.string,
    storePhoneNumber: PropTypes.string,
    storeEmail: PropTypes.string,
    storeCountry: PropTypes.string,
    storeAddress: PropTypes.string,
    storeCity: PropTypes.string,
    storeProvince: PropTypes.string,
    storePostalCode: PropTypes.string
  }).isRequired
};

export const layout = {
  areaId: 'content',
  sortOrder: 10
};

export const query = `
  query Query {
    saveSettingApi: url(routeId: "saveSetting")
    setting {
      storeName
      storeDescription
      storeTimeZone
      storePhoneNumber
      storeEmail
      storeCountry
      storeAddress
      storeCity
      storeProvince
      storePostalCode
    }
  }
`;
