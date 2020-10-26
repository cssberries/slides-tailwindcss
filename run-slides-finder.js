const slidesFinder = require( 'slides-finder' );
let options = {
    'ANGULAR_PORT': 2500,
    'SERVER_PORT': 2300,
    'SNAPSHOTS_PORT': 2400,
    'DEV_RENDER_PORT': 9500,
    'slidesListModulePathRender': 'node_modules/slides-render-angular-tailwindcss/src/app/slides/slides-list.module.ts',
    'slidesRenderComponentPath': `.`,
}

slidesFinder.run( options );