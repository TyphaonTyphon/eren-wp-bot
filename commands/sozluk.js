const ytdl = require("ytdl-core");
const fs = require("fs");
const tdk = require('trsozluk')

module.exports = {
    name: "tdk",
    description: "Downloads yt video and sends as audio.",
    usage: "link <youtube adresi> (max 8dk)",
    cooldown: 2,
    aliases: ["ytmp3", "mp3"],

    async run(bot, message, args) {
        try {
            const kelime = args[0];
            const anlam = await tdk(kelime);
            console.log(anlam)
            await bot.sendText(message.from, anlam.anlam)
        } catch {
            await bot.sendText(message.from, "Sonuç yok sözlüğe eklenmemiş halen")
        }
	}
}