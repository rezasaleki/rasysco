const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const uuid = require('uuid').v4;
const config = require('./config/appconfig');
const db = require('./models/db');

const Logger = require('./utils/logger');
const logger = new Logger();

const app = express();

app.use(bodyParser.json());
app.use(require('method-override')());
app.use(compression());
app.use(cors());

process.on('SIGINT', () => {
	logger.log('stopping the server', 'info');
	process.exit();
});

app.use(require('./router'));
app.set('config', config); // the system configrationsx
app.set('db', db);

app.use((req, res, next) => {
	req.identifier = uuid();
	const logString = `a request has been made with the following uuid [${req.identifier}] ${req.url} ${req.headers['user-agent']} ${JSON.stringify(req.body)}`;
	logger.log(logString, 'info');
	next();
});

app.use((req, res, next) => {
	logger.log('the url you are trying to reach is not hosted on our server', 'error');
	const err = new Error('Not Found');
	err.status = 404;
	res.status(err.status).json({ type: 'error', message: 'the url you are trying to reach is not hosted on our server' });
	next(err);
});

app.set('port', process.env.DEV_APP_PORT);

module.exports = app;
