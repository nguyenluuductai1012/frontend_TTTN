// assets
import { IconSmartHome } from '@tabler/icons';

// constant
const icons = { IconSmartHome };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: '',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Trang Tổng Quan',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconSmartHome,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
