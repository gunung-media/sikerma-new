export type SidebarNavigationItem = {
    type: 'single' | 'header' | 'multiple';
    label: string;
    icon?: string;
    url?: string;
    items?: {
        label: string;
        url: string;
    }[];
    isSuperAdmin?: boolean;
};

export const sidebarNavigation: SidebarNavigationItem[] = [
    {
        type: 'single',
        label: 'Dashboard',
        icon: 'bx-home-smile',
        url: 'dashboard'
    },
    {
        type: 'single',
        label: 'Analytic',
        icon: 'bx-line-chart',
        url: 'analytic'
    },
    {
        type: 'header',
        label: 'Master Data',
        isSuperAdmin: true
    },
    {
        type: 'single',
        label: 'User',
        icon: 'bxs-user',
        url: 'master.users.index',
        isSuperAdmin: true

    },
    {
        type: 'multiple',
        label: 'Kampus',
        icon: 'bx-calendar',
        isSuperAdmin: true,
        items: [
            {
                label: 'Fakultas',
                url: 'master.faculties.index'
            },
            {
                label: 'Program Studi',
                url: 'master.study-programs.index'
            }
        ]
    },
    {
        type: 'single',
        label: 'Institusi',
        icon: 'bxs-buildings',
        url: 'master.institutes.index',
        isSuperAdmin: true,
    },
    {
        type: 'single',
        label: 'Bidang Kegiatan',
        icon: 'bx-walk',
        url: 'master.field-activities.index',
        isSuperAdmin: true,
    },
    {
        type: 'header',
        label: 'Menu'
    },
    {
        type: 'multiple',
        label: 'Kerjasama',
        icon: 'bx-calendar',
        items: [
            {
                label: 'List Kerjasama',
                url: 'partnerships.index'
            },
            {
                label: 'Tambah Kerjasama',
                url: 'partnerships.create'
            }
        ]
    },
];
