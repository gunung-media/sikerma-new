export type SidebarNavigationItem = {
    type: 'single' | 'header' | 'multiple';
    label: string;
    icon?: string;
    url?: string;
    items?: {
        label: string;
        isSuperAdmin?: boolean;
        url: string;
    }[];
    isSuperAdmin?: boolean;
    canSupervisionAccess?: boolean
};

export const sidebarNavigation: SidebarNavigationItem[] = [
    {
        type: 'single',
        label: 'Dashboard',
        icon: 'bx-home-smile',
        url: 'dashboard',
        canSupervisionAccess: true
    },
    {
        type: 'single',
        label: 'Analytic',
        icon: 'bx-line-chart',
        url: 'analytic',
        canSupervisionAccess: true
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
        label: 'Universitas',
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
        type: 'multiple',
        label: 'Unit Kerja',
        icon: 'bxs-buildings',
        isSuperAdmin: true,
        items: [
            {
                label: 'Insitusi',
                url: 'master.institutes.index'
            },
            {
                label: 'UPT',
                url: 'master.upts.index'
            }
        ]
    },
    {
        type: 'single',
        label: 'Bentuk Kegiatan',
        icon: 'bx-walk',
        url: 'master.field-activities.index',
        isSuperAdmin: true,
    },
    {
        type: 'single',
        label: 'Kriteria Mitra',
        icon: 'bxs-buildings',
        url: 'master.partner-criterias.index',
        isSuperAdmin: true,
    },
    {
        type: 'single',
        label: 'Document',
        icon: 'bx-file',
        url: 'master.documents.index',
        canSupervisionAccess: false,
    },
    {
        type: 'header',
        label: 'Menu',
        canSupervisionAccess: false,
    },
    {
        type: 'multiple',
        label: 'Kerjasama',
        icon: 'bx-calendar',
        canSupervisionAccess: false,
        items: [
            {
                label: 'List Kerjasama',
                url: 'partnerships.index'
            },
            {
                label: 'Pembobotan Kerjasama',
                url: 'partnerships.weight',
                isSuperAdmin: true,
            },
            {
                label: 'Tambah Kerjasama',
                url: 'partnerships.create'
            }
        ]
    },
];
