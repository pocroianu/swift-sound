import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { CommonModule } from '@angular/common';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { MusicDetailsComponent } from './music-details/music-details.component';
import { MusicProgressComponent } from './music-progress/music-progress.component';
import { MusicService } from '../../../../../services/music-service/music.service';
import {FlexModule} from '@angular/flex-layout';
import {MatIconModule} from '@angular/material';

@NgModule({
    imports: [
        FormsModule,
        HttpModule,
        CommonModule,
        FlexModule,
        MatIconModule
    ],
    exports: [
      MusicDetailsComponent,
      MusicPlayerComponent,
      MusicProgressComponent,
    ],
    declarations: [
      MusicDetailsComponent,
      MusicPlayerComponent,
      MusicProgressComponent,
    ],
    providers: [
      MusicService
    ],
})
export class MusicModule { }
