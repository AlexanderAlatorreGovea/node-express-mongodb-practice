const helmet = require('helmet');
const morgan = require('morgan');


app.use(helmet());
//turn off in production
//every time we send a request to the server, it will be logged
app.use(morgan('tiny'));

