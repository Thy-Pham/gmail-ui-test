const exphds = require("express-handlebars");
var exphds_sections = require('express-handlebars-sections');

module.exports = (app) => {
    const hbs = exphds.create({
        defaultLayout: 'homeLayout',
        extname: 'hbs',
        helpers: {
            ifStrEquals(s1, s2) {
                if (s1 === s2)
                    return 'selected';
                return '';
            }
        }
    });

    exphds_sections(hbs); 
    
    app.engine('hbs', hbs.engine);
    app.set('view engine', 'hbs');
    app.set("views", "./views");
}
