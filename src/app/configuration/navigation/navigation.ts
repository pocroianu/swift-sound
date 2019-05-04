import {FuseNavigation} from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'soundcloud',
        title: 'Soundcloud',
        type: 'collapsable',
        children: [
            {
                id: 'soundcloud-home',
                title: 'Soundcloud_Home',
                type: 'item',
                url: '/soundcloud-home'
            },
            {
                id: 'soundcloud-favourites',
                title: 'Soundcloud-favourites',
                type: 'item',
                url: '/soundcloud-favourites'
            }
        ],
        // icon: 'home',
        url: '/soundcloud-home'
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
