const ytdl = require("ytdl-core");
const fs = require("fs");
const hava = require('weather-js')

module.exports = {
    name: "hava",
    description: "Downloads yt video and sends as audio.",
    usage: "link <youtube adresi> (max 8dk)",
    cooldown: 2,
    aliases: ["ytmp3", "mp3"],

    async run(bot, message, args) {
        try {
            const sehir = args[0];
            hava.find({search: sehir, degreeType: 'C'}, async function (error, result){
                /*if(!args[0]) return await bot.sendText(message.from, 'Bölge gir knk')
                if(result === undefined || result.length === 0) return await bot.sendText(message.from, 'Geçersiz Konum knk')*/
                var current = result[0].current;
                var location = result[0].location;

                await bot.sendText(message.from, `${current.observationpoint} için hava tahmini/nSaat dilimi: UTC${location.timezone}/nDerece Tipi: Celcius/nSıcaklık: ${current.temperature}°/nRüzgar: current.winddisplay/nHissi: ${current.feelslike}°/nNem: ${current.humidity}%`)

            })
        } catch {
            await bot.sendText(message.from, 'Hata var geliştiricilerime ilettim 48 saat sonra tekrar dene lütfen')
            //some geliştiriciye hata iletme kodu
        }
	}
}