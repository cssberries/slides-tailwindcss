const render = require( 'slides-render-angular-tailwindcss' );
const finder = require( 'slides-finder' );

let optionsRender = {
    'BASE_HREF_RENDER': '/slides-render-angular-tailwindcss/',
    'GH_REPOSITORY_RENDER': `git@github.com:cssberries/slides-render-angular-tailwindcss.git`,
}

let optionsFinder = {
    'GH_FINDER_REPOSITORY_NAME': 'slides-tailwindcss',
    'BASE_HREF_FINDER': '/slides-tailwindcss/',
    'DOMAIN_NAME': 'https://cssberries.github.io/slides-render-angular-tailwindcss', // Iframe domain name!
    'GH_REPOSITORY_FINDER': `git@github.com:cssberries/slides-tailwindcss.git`
}
finder.deploy( optionsFinder );
render.deploy( optionsRender );