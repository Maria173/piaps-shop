import PropTypes from 'prop-types';
import React from 'react';
import { Field } from '@components/common/form/Field';
import { Form } from '@components/common/form/Form';
import './LoginForm.scss';
import Button from '@components/common/form/Button';

export default function LoginForm({ authUrl, dashboardUrl }) {
  const [error, setError] = React.useState(null);

  const onSuccess = (response) => {
    if (!response.error) {
      window.location.href = dashboardUrl;
    } else {
      setError(response.error.message);
    }
  };

  return (
    <div className="admin-login-form">
      <div className="flex items-center justify-center mb-3">
      <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="40px" width="40px" version="1.1" id="Capa_1" viewBox="0 0 511 511">
        <g>
          <path d="M503.5,440H479V207.433c13.842-3.487,24-16.502,24-31.933v-104c0-8.547-6.953-15.5-15.5-15.5h-464   C14.953,56,8,62.953,8,71.5v104c0,15.432,10.158,28.446,24,31.933V440H7.5c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h496   c4.142,0,7.5-3.358,7.5-7.5S507.642,440,503.5,440z M488,71.5v104c0,9.383-6.999,17.384-15.602,17.834   c-4.595,0.235-8.939-1.36-12.254-4.505c-3.317-3.148-5.145-7.4-5.145-11.971V71h32.5C487.776,71,488,71.224,488,71.5z M71,71h33   v105.858c0,9.098-7.402,16.5-16.5,16.5s-16.5-7.402-16.5-16.5V71z M119,71h33v105.858c0,9.098-7.402,16.5-16.5,16.5   s-16.5-7.402-16.5-16.5V71z M167,71h33v105.858c0,9.098-7.402,16.5-16.5,16.5s-16.5-7.402-16.5-16.5V71z M215,71h33v105.858   c0,9.098-7.402,16.5-16.5,16.5s-16.5-7.402-16.5-16.5V71z M263,71h33v105.858c0,9.098-7.402,16.5-16.5,16.5s-16.5-7.402-16.5-16.5   V71z M311,71h33v105.858c0,9.098-7.402,16.5-16.5,16.5s-16.5-7.402-16.5-16.5V71z M359,71h33v105.858c0,9.098-7.402,16.5-16.5,16.5   s-16.5-7.402-16.5-16.5V71z M407,71h33v105.858c0,9.098-7.402,16.5-16.5,16.5s-16.5-7.402-16.5-16.5V71z M23,175.5v-104   c0-0.276,0.224-0.5,0.5-0.5H56v105.858c0,4.571-1.827,8.823-5.145,11.971c-3.314,3.146-7.663,4.743-12.254,4.505   C29.999,192.884,23,184.883,23,175.5z M47,207.462c5.266-1.279,10.128-3.907,14.181-7.753c0.822-0.78,1.599-1.603,2.326-2.462   c5.782,6.793,14.393,11.11,23.993,11.11c9.604,0,18.218-4.32,24-11.119c5.782,6.799,14.396,11.119,24,11.119s18.218-4.32,24-11.119   c5.782,6.799,14.396,11.119,24,11.119s18.218-4.32,24-11.119c5.782,6.799,14.396,11.119,24,11.119s18.218-4.32,24-11.119   c5.782,6.799,14.396,11.119,24,11.119s18.218-4.32,24-11.119c5.782,6.799,14.396,11.119,24,11.119s18.218-4.32,24-11.119   c5.782,6.799,14.396,11.119,24,11.119s18.218-4.32,24-11.119c5.782,6.799,14.396,11.119,24,11.119c9.6,0,18.21-4.317,23.993-11.11   c0.728,0.859,1.504,1.682,2.326,2.462c4.054,3.847,8.914,6.482,14.181,7.761V440h-33V263.5c0-8.547-6.953-15.5-15.5-15.5h-96   c-8.547,0-15.5,6.953-15.5,15.5V440H47V207.462z M416,440h-97V263.5c0-0.276,0.224-0.5,0.5-0.5h96c0.276,0,0.5,0.224,0.5,0.5V440z"/>
          <path d="M343.5,336c-4.142,0-7.5,3.358-7.5,7.5v16c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-16   C351,339.358,347.642,336,343.5,336z"/>
          <path d="M262.5,248h-174c-4.687,0-8.5,3.813-8.5,8.5v142c0,4.687,3.813,8.5,8.5,8.5h174c4.687,0,8.5-3.813,8.5-8.5v-142   C271,251.813,267.187,248,262.5,248z M256,392H95V263h161V392z"/>
        </g>
        </svg>
      </div>
      {error && <div className="text-critical py-1">{error}</div>}
      <Form
        action={authUrl}
        method="POST"
        id="adminLoginForm"
        isJSON
        onSuccess={onSuccess}
        submitBtn={false}
      >
        <Field
          name="email"
          type="email"
          label="Email"
          placeholder="Email"
          validationRules={['notEmpty', 'email']}
        />
        <Field
          name="password"
          type="password"
          label="Пароль"
          placeholder="Пароль"
          validationRules={['notEmpty']}
        />
        <div className="form-submit-button flex border-t border-divider mt-1 pt-1">
          <Button
            title="Войти"
            type="submit"
            onAction={() => {
              document
                .getElementById('adminLoginForm')
                .dispatchEvent(
                  new Event('submit', { cancelable: true, bubbles: true })
                );
            }}
          />
        </div>
      </Form>
    </div>
  );
}

LoginForm.propTypes = {
  authUrl: PropTypes.string.isRequired,
  dashboardUrl: PropTypes.string.isRequired
};

export const layout = {
  areaId: 'content',
  sortOrder: 10
};

export const query = `
  query Query {
    authUrl: url(routeId: "createAdminUserSession")
    dashboardUrl: url(routeId: "dashboard")
  }
`;
