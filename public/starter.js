$(document).ready(async event => {
    const pug = require('pug');
    
    await $.get('/layout.pug').then(layoutPug => {
        $('body').html(
            pug.render(layoutPug)
        );
    });
});