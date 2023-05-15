import React from 'react';
import PropTypes from 'prop-types';

export function SubTotal({ count, total }) {
  return (
    <div className="summary-row">
      <span>Промежуточный итог</span>
      <div>
        <div>{count} позиций</div>
        <div>{total}</div>
      </div>
    </div>
  );
}

SubTotal.propTypes = {
  count: PropTypes.number.isRequired,
  total: PropTypes.string.isRequired
};
