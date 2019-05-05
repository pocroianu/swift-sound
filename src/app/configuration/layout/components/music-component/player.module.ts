import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {PlayerComponent} from './player.component';
import {MusicModule} from './music/music.module';
import {MatToolbarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
    declarations: [
        PlayerComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MusicModule,
        MatToolbarModule,
        FlexLayoutModule,

    ],
    exports: [
        PlayerComponent
    ],
    providers: [],
    bootstrap: [PlayerComponent]
})
export class PlayerModule {
}
