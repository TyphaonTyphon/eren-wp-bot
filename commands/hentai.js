const ytdl = require("ytdl-core");
const fs = require("fs");
const hmfull = require("hmfull");

module.exports = {
    name: "anime",
    description: "Downloads yt video and sends as audio.",
    usage: "link <youtube adresi> (max 8dk)",
    cooldown: 1,
    aliases: ["ğ"],

    async run(bot, message, args) {
        if (args[0] === "zettaiRyouiki") {
            try {
                const anime = hmfull.HMtai.nsfw.zettaiRyouiki()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'That one part of the flesh being squeeze in thigh-highs~<3')
            } catch {
                const anime = hmfull.HMtai.nsfw.zettaiRyouiki()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'That one part of the flesh being squeeze in thigh-highs~<3')
            }
        }
        if (args[0] === "nsfwMobileWallpaper") {
            try {
                const anime = hmfull.HMtai.nsfw.nsfwMobileWallpaper()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'NSFW Anime Mobile Wallpaper')
            } catch {
                const anime = hmfull.HMtai.nsfw.nsfwMobileWallpaper()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'NSFW Anime Mobile Wallpaper')
            }
        }
        if (args[0] === "nsfwNeko") {
            try {
                const anime = hmfull.HMtai.nsfw.neko()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'NSFW Neko Girls (Cat Girls)')
            } catch {
                const anime = hmfull.HMtai.nsfw.neko()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'NSFW Neko Girls (Cat Girls)')
            }
        }
        if (args[0] === "gif") {
            try {
                const anime = hmfull.HMtai.nsfw.gif()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'Basically an animated image, so yes :3')
            } catch {
                const anime = hmfull.HMtai.nsfw.gif()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'Basically an animated image, so yes :3')
            }
        }
        if (args[0] === "tentacles") {
            try {
                const anime = hmfull.HMtai.nsfw.tentacles()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'Im sorry but, why do you like it? Uh..')
            } catch {
                const anime = hmfull.HMtai.nsfw.tentacles()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'Im sorry but, why do you like it? Uh..')
            }
        }
        if (args[0] === "gangbang") {
            try {
                const anime = hmfull.HMtai.nsfw.gangbang()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', '5 on 1? Uh..')
            } catch {
                const anime = hmfull.HMtai.nsfw.gangbang()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', '5 on 1? Uh..')
            }
        }
        if (args[0] === "uniform") {
            try {
                const anime = hmfull.HMtai.nsfw.uniform()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'School and many other Uniforms~')
            } catch {
                const anime = hmfull.HMtai.nsfw.uniform()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'School and many other Uniforms~')
            }
        }
        if (args[0] === "ahegao") {
            try {
                const anime = hmfull.HMtai.nsfw.ahegao()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'So happy woman faces :))')
            } catch {
                const anime = hmfull.HMtai.nsfw.ahegao()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'So happy woman faces :))')
            }
        }
        if (args[0] === "vagina") {
            try {
                const anime = hmfull.HMtai.nsfw.vagina()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'The genitals of a female, or a cat, you give the meaning.')
            } catch {
                const anime = hmfull.HMtai.nsfw.vagina()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'The genitals of a female, or a cat, you give the meaning.')
            }
        }
        if (args[0] === "thighs") {
            try {
                const anime = hmfull.HMtai.nsfw.thighs()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'Oh, i so like it, its best of the best, like a religion <3')
            } catch {
                const anime = hmfull.HMtai.nsfw.thighs()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'Oh, i so like it, its best of the best, like a religion <3')
            }
        }
        if (args[0] === "foot") {
            try {
                const anime = hmfull.HMtai.nsfw.foot()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'So you like smelly feet huh?')
            } catch {
                const anime = hmfull.HMtai.nsfw.foot()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'So you like smelly feet huh?')
            }
        }
        if (args[0] === "boobjob") {
            try {
                const anime = hmfull.HMtai.nsfw.boobjob()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'So soft, round ... gentle ... damn we love it')
            } catch {
                const anime = hmfull.HMtai.nsfw.boobjob()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'So soft, round ... gentle ... damn we love it')
            }
        }
        if (args[0] === "blowjob") {
            try {
                const anime = hmfull.HMtai.nsfw.blowjob()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'Basically an image of a girl sucking on a sharp blade!')
            } catch {
                const anime = hmfull.HMtai.nsfw.blowjob()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'Basically an image of a girl sucking on a sharp blade!')
            }
        }
        if (args[0] === "cuckold") {
            try {
                const anime = hmfull.HMtai.nsfw.cuckold()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'Wow, I wont even question your fetishes.')
            } catch {
                const anime = hmfull.HMtai.nsfw.cuckold()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'Wow, I wont even question your fetishes.')
            }
        }
        if (args[0] === "glasses") {
            try {
                const anime = hmfull.HMtai.nsfw.glasses()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'Girls that wear glasses, uwu~')
            } catch {
                const anime = hmfull.HMtai.nsfw.glasses()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'Girls that wear glasses, uwu~')
            }
        }
        if (args[0] === "pantsu") {
            try {
                const anime = hmfull.HMtai.nsfw.pantsu()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'I mean... just why? You like underwear?')
            } catch {
                const anime = hmfull.HMtai.nsfw.pantsu()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'I mean... just why? You like underwear?')
            }
        }
        if (args[0] === "yuri") {
            try {
                const anime = hmfull.HMtai.nsfw.yuri()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'What about cute Les?~')
            } catch {
                const anime = hmfull.HMtai.nsfw.yuri()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'What about cute Les?~')
            }
        }
        if (args[0] === "elves") {
            try {
                const anime = hmfull.HMtai.nsfw.elves()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'So, its not Elvis Presley, but i know, you like it :)')
            } catch {
                const anime = hmfull.HMtai.nsfw.elves()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'So, its not Elvis Presley, but i know, you like it :)')
            }
        }
        if (args[0] === "orgy") {
            try {
                const anime = hmfull.HMtai.nsfw.orgy()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'Group Lewd Acts')
            } catch {
                const anime = hmfull.HMtai.nsfw.orgy()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'Group Lewd Acts')
            }
        }
        if (args[0] === "ero") {
            try {
                const anime = hmfull.HMtai.nsfw.ero()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'eros, ero Uniforms, etc, you know what eros are :3')
            } catch {
                const anime = hmfull.HMtai.nsfw.ero()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'eros, ero Uniforms, etc, you know what eros are :3')
            }
        }
        if (args[0] === "public") {
            try {
                const anime = hmfull.HMtai.nsfw.public()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'Some people like do it on a public..uh~')
            } catch {
                const anime = hmfull.HMtai.nsfw.public()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'Some people like do it on a public..uh~')
            }
        }
        if (args[0] === "masturbation") {
            try {
                const anime = hmfull.HMtai.nsfw.masturbation()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'You like lewd solo?~')
            } catch {
                const anime = hmfull.HMtai.nsfw.masturbation()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'You like lewd solo?~')
            }
        }
        if (args[0] === "incest") {
            try {
                const anime = hmfull.HMtai.nsfw.incest()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'I know, you like it. Brother and sister <3 And..mo...omg')
            } catch {
                const anime = hmfull.HMtai.nsfw.incest()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'I know, you like it. Brother and sister <3 And..mo...omg')
            }
        }
        if (args[0] === "hentai") {
            try {
                const anime = hmfull.HMtai.nsfw.hentai()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'Sends a random vanilla hentai imageURL~')
            } catch {
                const anime = hmfull.HMtai.nsfw.hentai()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'Sends a random vanilla hentai imageURL~')
            }
        }
        if (args[0] === "femdom") {
            try {
                const anime = hmfull.HMtai.nsfw.femdom()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'Female Domination?')
            } catch {
                const anime = hmfull.HMtai.nsfw.femdom()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'Female Domination?')
            }
        }
        if (args[0] === "manga") {
            try {
                const anime = hmfull.HMtai.nsfw.manga()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'Sends a random doujin page imageURL!')
            } catch {
                const anime = hmfull.HMtai.nsfw.manga()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'Sends a random doujin page imageURL!')
            }
        }
        if (args[0] === "creampie") {
            try {
                const anime = hmfull.HMtai.nsfw.creampie()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'So hot, sticky, and inside uwu')
            } catch {
                const anime = hmfull.HMtai.nsfw.creampie()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'So hot, sticky, and inside uwu')
            }
        }
        if (args[0] === "cum") {
            try {
                const anime = hmfull.HMtai.nsfw.cum()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'Basically sticky white stuff that is usually milked from sharpies.')
            } catch {
                const anime = hmfull.HMtai.nsfw.cum()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'Basically sticky white stuff that is usually milked from sharpies.')
            }
        }
        if (args[0] === "bdsm") {
            try {
                const anime = hmfull.HMtai.nsfw.bdsm()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'If you dont know what it is, search it up')
            } catch {
                const anime = hmfull.HMtai.nsfw.bdsm()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'If you dont know what it is, search it up')
            }
        }
        if (args[0] === "ass") {
            try {
                const anime = hmfull.HMtai.nsfw.ass()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'I know you like anime ass~ uwu')
            } catch {
                const anime = hmfull.HMtai.nsfw.ass()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'I know you like anime ass~ uwu')
            }
        }
        if (args[0] === "wallpaper") {
            try {
                const anime = hmfull.HMtai.sfw.wallpaper()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'ğ')
            } catch {
                const anime = hmfull.HMtai.sfw.wallpaper()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'ğ')
            }
        }
        if (args[0] === "slap") {
            try {
                const anime = hmfull.HMtai.sfw.slap()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'SFW slap gifs xD')
            } catch {
                const anime = hmfull.HMtai.sfw.slap()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'SFW slap gifs xD')
            }
        }
        if (args[0] === "lick") {
            try {
                const anime = hmfull.HMtai.sfw.lick()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'SFW licks gifs :P')
            } catch {
                const anime = hmfull.HMtai.sfw.lick()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'SFW licks gifs :P')
            }
        }
        if (args[0] === "jahy") {
            try {
                const anime = hmfull.HMtai.sfw.jahy()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'So hot Jahy :3')
            } catch {
                const anime = hmfull.HMtai.sfw.jahy()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'So hot Jahy :3')
            }
        }
        if (args[0] === "neko") {
            try {
                const anime = hmfull.HMtai.sfw.neko()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'SFW Neko Girls (Cat Girls)')
            } catch {
                const anime = hmfull.HMtai.sfw.neko()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'SFW Neko Girls (Cat Girls)')
            }
        }
        if (!args[0]) {
            try {
                const anime = hmfull.HMtai.sfw.mobileWallpaper()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'SFW Anime')
            } catch {
                const anime = hmfull.HMtai.sfw.mobileWallpaper()
                await bot.sendImage(message.from, anime.url, 'filename.jpg', 'SFW Anime')
            }
        }
    }
}