import {FuseNavigation} from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'home',
        title: 'Home',
        type: 'item',
        icon: 'home',
        url: '/home'
    },
    {
        id: 'stream',
        title: 'Stream',
        type: 'item',
        icon: 'email',
        url: '/stream',
        badge: {
            title: '25',
            bg: '#F44336',
            fg: '#FFFFFF'
        }
    },
    {
        id: 'library',
        title: 'Library',
        type: 'item',
        icon: 'email',
        url: '/library'
    }
];
