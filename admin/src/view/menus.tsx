import Permissions from 'src/security/permissions';
import { i18n } from 'src/i18n';
import config from 'src/config';

const permissions = Permissions.values;

export default [
  {
    id: '0',
    path: '/user',
    exact: true,
    icon: 'fas fa-users',
    label: i18n('dashboard.menu'),
    className: 'menu-li side-menue',
    permissionRequired: permissions.userRead,
  },


  {
    id: '0',
    path: '/category',
    exact: true,
    icon: 'fab fa-whatsapp',
    label: i18n('dashboard.check'),
    className: 'menu-li side-menue',
    permissionRequired: permissions.categoryRead,
  },

 
  {
    id: '0',
    path: '/record',
    exact: true,
    icon: 'fas fa-clipboard',
    label: i18n('dashboard.record'),
    className: 'menu-li side-menue',
    permissionRequired: permissions.categoryRead,
  },
 
].filter(Boolean);
