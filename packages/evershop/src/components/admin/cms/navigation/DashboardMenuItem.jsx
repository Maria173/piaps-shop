import PropTypes from 'prop-types';
import React from 'react';
import Icon from '@heroicons/react/solid/esm/HomeIcon';
import MenuItem from '@components/admin/cms/NavigationItem';

export default function DashboardMenuItem({ url }) {
  return <MenuItem Icon={Icon} title="Статистика" url={url} />;
}

DashboardMenuItem.propTypes = {
  url: PropTypes.string.isRequired
};
