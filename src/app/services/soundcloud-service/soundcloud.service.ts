import {Injectable} from '@angular/core';
import {SoundCloudStatic} from '../../configuration/static/Static';
import {Track} from '../../interfaces/Interfaces';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {Configuration} from '../../configuration/configuration';
import {Http} from '@angular/http';


const SoundCloud = require('soundcloud');

@Injectable({
    providedIn: 'root'
})

/**
 * This will be the service class that will link the Soundcloud API to
 * the Angular render interface
 */
export class SoundCloudService {

    private _currentSong;
    private _soundcloudStreamPlayer;

    public defaultTracks: Observable<Array<Track>>;
    public favouriteTracks: Observable<Array<Track>>;
    public favouriteTracks2: Array<Track>;
    public playlists: Observable<any>;

    /**
     *
     * @param _router
     */
    constructor(private _router: Router,
                private http: Http) {
        this.initializeAPI();
        this.initializeDeafultTracks();
        this.initializeFavouriteTracks();
    }

    /**
     *
     * @param url
     * @param attachClientId
     */
    public get(url, attachClientId?) {
        let u;
        attachClientId ? u = this.prepareUrl(url) : u = url;
        return this.http.get(u);
    }

    /**
     *
     * @param url
     */
    public prepareUrl(url) {
        //Attach client id to stream url
        return `${url}?client_id=${SoundCloudStatic.ClientID}`;
    }

    public getRequest(parameter: any, optional: any): any {
        return SoundCloud.get(parameter, optional);
    }

    /**
     * Initializes the Soundcloud API
     */
    private initializeAPI(): void {
        SoundCloud.initialize({
            client_id: SoundCloudStatic.ClientID,
        });
        console.log(SoundCloudStatic.SoundCloudServiceStartedMessage);
    }

    /**
     * Initializes the default tracks
     */
    private initializeDeafultTracks(): void {
        SoundCloud.get('tracks?client_id=' + SoundCloudStatic.ClientID)
            .then((content) => {
                this.defaultTracks = content;
            })
            .catch((error) => {
                console.log('Error -> tracks not returned');
            });
    }

    /**
     * Initializes the favourite tracks
     */
    private initializeFavouriteTracks(): void {

        this.favouriteTracks2 = [];

        for (let favouritetrackURL of SoundCloudStatic.SoundCloudFavouriteTracksURLs) {
            // favouriteTracks.push(SoundCloud.resolve(favouritetrackURL));
            SoundCloud.resolve(favouritetrackURL).then((track: Track) => {
                this.favouriteTracks2.push(track);
            });
        }
    }

    /**
     * Redirects the user to the login page
     * Currently,without a registered app on the Soundcloud platform , we cannot
     * use authentification for our app
     */
    private loginUser() {
    }

    /**
     * Returns the default tracks observable
     */
    public getDefaultTracks(): any {
        const tracksObservable = new Observable(observer => {
            setTimeout(() => {
                observer.next(this.defaultTracks);
            }, 1000);
        });
        return tracksObservable;
    }

    /**
     * Returns the favourite tracks observable
     */
    public getFavouriteTracks(): any {
        const tracksObservable = new Observable(observer => {
            setTimeout(() => {
                observer.next(this.favouriteTracks2);
            }, 1000);
        });
        return tracksObservable;
    }

    /**
     * Returns a playlist observable
     */
    public getPlaylists(): any {
        const playlistsObservable = new Observable(observer => {
            setTimeout(() => {
                observer.next(this.playlists);
            }, 1000);
        });
        return playlistsObservable;
    }

}


