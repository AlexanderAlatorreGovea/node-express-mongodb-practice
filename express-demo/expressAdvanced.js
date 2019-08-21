//create a costum middleware function

app.use(express.json());

const logger = require('./logger');

app.use(logger)