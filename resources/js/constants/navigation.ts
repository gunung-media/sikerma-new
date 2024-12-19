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
        label: 'Role',
        icon: 'bx-shield',
        url: 'roles.index'
    },
    {
        type: 'single',
        label: 'Faculty',
        icon: 'bxs-school',
        url: 'faculties.index'
    },
    {
        type: 'single',
        label: 'Room',
        icon: 'bxs-buildings',
        url: 'rooms.index'
    },
    {
        type: 'header',
        label: 'Menu'
    },
    {
        type: 'multiple',
        label: 'Room Schedule',
        icon: 'bx-calendar',
        items: [
            {
                label: 'List Schedule',
                url: 'schedules.index'
            },
            {
                label: 'Add New Schedule',
                url: 'schedules.create'
            }
        ]
    },
    {
        type: 'multiple',
        label: 'Reservation',
        icon: 'bxs-calendar-event',
        items: [
            {
                label: 'List Reservation',
                url: 'dashboard'
            },
            {
                label: 'Add New Reservation',
                url: 'dashboard'
            }
        ]
    },
];
