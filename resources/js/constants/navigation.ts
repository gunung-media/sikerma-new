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
        type: 'single',
        label: 'Fakultas',
        icon: 'bxs-school',
        url: 'master.faculties.index'
    },
    {
        type: 'single',
        label: 'Prodi',
        icon: 'bxs-buildings',
        url: 'master.study-programs.index'
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
