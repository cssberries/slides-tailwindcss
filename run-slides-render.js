const slidesRender = require( 'slides-render-angular-tailwindcss' );
let options = {
    'ANGULAR_PORT': 9500,
    'SERVER_PORT': 9300,
    'SNAPSHOTS_PORT': 9400
}

slidesRender.run( options );