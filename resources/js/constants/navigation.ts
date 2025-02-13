export type SidebarNavigationItem = {
    type: 'single' | 'header' | 'multiple';
    label: string;
    icon?: string;
    url?: string;
    items?: {
        label: string;
        url: string;
    }[];
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
        label: 'Master Data'
    },
    {
        type: 'single',
        label: 'User',
        icon: 'bxs-user',
        url: 'master.users.index'
    },
    {
        type: 'multiple',
        label: 'Kampus',
        icon: 'bx-calendar',
        items: [
            {
                label: 'Fakultas',
                url: 'master.faculties.index'
            },
            {
                label: 'Prodi',
                url: 'master.study-programs.index'
            }
        ]
    },
    {
        type: 'single',
        label: 'Institusi',
        icon: 'bxs-buildings',
        url: 'master.institutes.index'
    },
    {
        type: 'single',
        label: 'Bidang Kegiatan',
        icon: 'bxs-buildings',
        url: 'master.field-activities.index'
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
