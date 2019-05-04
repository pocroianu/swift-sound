import {FuseNavigation} from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'soundcloud',
        title: 'Soundcloud',
        type: 'item',
        // icon: 'home',
        url: '/soundcloud'
    },
    {
        id: 'spotify',
        title: 'Spotify',
        type: 'item',
        // icon: 'email',
        url: '/spotify',
        /*badge: {
            title: '25',
            bg: '#F44336',
            fg: '#FFFFFF'
        }*/
    },
    {
        id: 'mixcloud',
        title: 'Mixcloud',
        type: 'item',
        // icon: 'email',
        url: '/mixcloud'
    },
    {
        id: 'bandcamp',
        title: 'Bandcamp',
        type: 'item',
        // icon: 'email',
        url: '/bandcamp'
    }
];
