// assets
import { IconUsers, IconBolt, IconFileInvoice, IconReceipt2 } from '@tabler/icons';

// constant
const icons = {
    IconUsers,
    IconBolt,
    IconFileInvoice,
    IconReceipt2
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
    id: 'utilities',
    title: '',
    type: 'group',
    children: [
        {
            id: 'util-typography',
            title: 'Quản Lý Khách Hàng',
            type: 'item',
            url: '/utils/util-typography',
            icon: icons.IconUsers,
            breadcrumbs: false
        },
        {
            id: 'util-color',
            title: 'Quản Lý Điện Kế',
            type: 'item',
            url: '/utils/util-color',
            icon: icons.IconBolt,
            breadcrumbs: false
        },
        {
            id: 'util-shadow',
            title: 'Quản Lý Hóa Đơn',
            type: 'item',
            url: '/utils/util-shadow',
            icon: icons.IconFileInvoice,
            breadcrumbs: false
        },
        {
            id: 'icons',
            title: 'Bảng Đơn Giá Điện',
            type: 'collapse',
            icon: icons.IconReceipt2,
            children: [
                {
                    id: 'tabler-icons',
                    title: 'Bảng Giá Điện Mới',
                    type: 'item',
                    url: '/icons/tabler-icons',
                    breadcrumbs: false
                },
                {
                    id: 'material-icons',
                    title: 'Bảng Giá Điện Cũ',
                    type: 'item',
                    url: '/icons/material-icons',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default utilities;
