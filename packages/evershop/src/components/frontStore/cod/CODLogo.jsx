import PropTypes from 'prop-types';
import React from 'react';

export default function CODLogo({ width = 100, height = 30 }) {
  return (
    <img
      width={width}
      height={height}
      src="data:image/png;base64,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"
      alt="Оплата при получении"
      role="presentation"
    />
  );
}

CODLogo.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number
};

CODLogo.defaultProps = {
  height: 30,
  width: 100
};
