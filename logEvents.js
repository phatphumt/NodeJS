const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

const fs = require('fs');
const fsPromise = require('fs').promises;
const path = require('path');

const logEvents = async (msg) => {
	const dT = `${format(new Date(), 'yyyy-MM-dd\tHH:mm:ss')}`;
	const logItem = `${dT}\t${uuid()}\t${msg}\n`;
	console.log(logItem);
	try {
		if (!fs.existsSync(path.join(__dirname, 'files', 'logs'))) {
			await fs.mkdirSync(path.join(__dirname, 'files', 'logs'));
		}
		await fsPromise.appendFile(
			path.join(__dirname, 'files', 'logs', 'eventLog.log'),
			logItem
		);
	} catch (e) {
		console.log(e);
	}
};

module.exports = logEvents;
