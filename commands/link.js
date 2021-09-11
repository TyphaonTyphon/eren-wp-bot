const { prefix } = require("../config.json");
const ytdl = require("ytdl-core");
const fs = require("fs");
FileReader = require('filereader')
const { decryptMedia } = require("@open-wa/wa-decrypt");
const uaOverride = "WhatsApp/2.2029.4 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36";

module.exports = {
	name: "link",
	description: "Resim veya videoyu stickere çevirir.",
	usage: "Bir içeriğin altına '" + prefix + "sticker' yazarak veya içeriği alıntılayarak kullanılır.",
	aliases: [],

	async run(bot, message, args) {
		const videoURL = args[0];
		async function gonder() {

			const audio = 'audio.mp3'
			await bot.sendFile(message.from, audio, "audio", "audio", null, false, true, false, false);
		}
		const download = ytdl(videoURL, { filter: 'audioonly' });
		const data = ytdl.getInfo(videoURL, function(err, info) {})

		const writeStream = fs.createWriteStream('audio.mp3');
		download.pipe(writeStream);

		download.on('progress', function (info) {
			console.log('iniyo')
		})
		download.on('end', function (info) {
			console.log('indi')
			gonder();
		})
	}
}