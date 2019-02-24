import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'quick-panel',
    templateUrl: './quick-panel.component.html',
    styleUrls: ['./quick-panel.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class QuickPanelComponent {
    date: Date;

    /**
     * Constructor
     */
    constructor() {
        // Set the defaults
        this.date = new Date();

    }
}
