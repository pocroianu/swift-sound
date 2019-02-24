export interface FuseConfig {
    colorTheme: string;
    customScrollbars: boolean;
    layout: {
        style: string,
        width: 'fullwidth' | 'boxed',
        navbar: {
            primaryBackground: string,
            secondaryBackground: string,
            hidden: boolean,
            folded: boolean,
            position: 'left' | 'right' | 'top',
            variant: string
        },
        toolbar: {
            customBackgroundColor: boolean,
            background: string,
            hidden: boolean,
            position: 'above' | 'above-configuration' | 'above-fixed' | 'below' | 'below-configuration' | 'below-fixed'
        }
        footer: {
            customBackgroundColor: boolean,
            background: string,
            hidden: boolean,
            position: 'above' | 'above-configuration' | 'above-fixed' | 'below' | 'below-configuration' | 'below-fixed'
        },
        sidepanel: {
            hidden: boolean,
            position: 'left' | 'right'
        }
    };
}
