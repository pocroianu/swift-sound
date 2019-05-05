import {NgModule} from '@angular/core';
import {MatSidenavModule} from '@angular/material';

import {FuseSidebarModule, FuseThemeOptionsModule} from '@fuse/components';
import {FuseSharedModule} from '@fuse/shared.module';

import {ContentModule} from 'app/configuration/layout/components/content/content.module';
import {FooterModule} from 'app/configuration/layout/components/footer/footer.module';
import {NavbarModule} from 'app/configuration/layout/components/navbar/navbar.module';
import {QuickPanelModule} from 'app/configuration/layout/components/quick-panel/quick-panel.module';
import {ToolbarModule} from 'app/configuration/layout/components/toolbar/toolbar.module';

import {HorizontalLayout1Component} from 'app/configuration/layout/horizontal/layout-1/layout-1.component';
import {PlayerModule} from '../../components/music-component/player.module';

@NgModule({
    declarations: [
        HorizontalLayout1Component
    ],
    imports: [
        MatSidenavModule,

        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        ContentModule,
        FooterModule,
        NavbarModule,
        QuickPanelModule,
        ToolbarModule,
        PlayerModule
    ],
    exports: [
        HorizontalLayout1Component
    ]
})
export class HorizontalLayout1Module {
}
