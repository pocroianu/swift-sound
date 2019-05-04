import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatButtonModule, MatIconModule, MatCardModule, MatTabsModule} from '@angular/material';
import {TranslateModule} from '@ngx-translate/core';
import 'hammerjs';

import {FuseModule} from '@fuse/fuse.module';
import {FuseSharedModule} from '@fuse/shared.module';
import {FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule} from '@fuse/components/index';

import {fuseConfig} from '../configuration/fuse-config';

import {AppComponent} from 'app/main-application/app.component';
import {LayoutModule} from 'app/configuration/layout/layout.module';
import {Configuration} from '../configuration/configuration';
import {FlexLayoutModule} from '@angular/flex-layout';
import { SpotifyComponent } from '../components/spotify/spotify.component';
import { MixcloudComponent } from '../components/mixcloud/mixcloud.component';
import { BandcampComponent } from '../components/bandcamp/bandcamp.component';
import { SoundcloudComponent } from '../components/soundcloud/soundcloud.component';
import {SoundcloudModule} from '../components/soundcloud/soundcloud.module';
import {SpotifyModule} from '../components/spotify/spotify.module';
import {MixcloudModule} from '../components/mixcloud/mixcloud.module';
import {BandcampModule} from '../components/bandcamp/bandcamp.module';

const appRoutes: Routes = Configuration.AppRoutes;

@NgModule({
    declarations: [
        AppComponent,
        SpotifyComponent,
        MixcloudComponent,
        BandcampComponent,
        SoundcloudComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatTabsModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        FlexLayoutModule,

        // App Components modules
        LayoutModule,
        SoundcloudModule,
        SpotifyModule,
        MixcloudModule,
        BandcampModule
    ],
    bootstrap: [
        AppComponent,

    ]
})
export class AppModule {
}
