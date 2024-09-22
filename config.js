const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "EqFz2AwA#U2045cuSpC0UqpftUsLFA0V_5lutgTSbUT4nsxmVdI0",
MONGODB: process.env.MONGODB || "mongodb://mongo:MfPJLADhRWNHvxuOORrlmfJHboedaADB@junction.proxy.rlwy.net:57828",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.fm/u/q92xt7qttt",
ALIVE_MSG: process.env.ALIVE_IMG || "🦊 Hi CHAMO-MD Is Online Now 💻\n*💻 Owner* - CHAMO-MD\n\n*💻 Owner Number* -94743430452",
SUDO_NB: process.env.SUDO_NB || "94743430452",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE:"true"
};
