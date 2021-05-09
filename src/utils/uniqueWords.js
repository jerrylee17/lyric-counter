export const getUnique = (lyrics) => {
    lyrics = lyrics.replace('.', '').replace('(', '').replace(')', '')
    let words = lyrics.split(/[ \n]/).map((w) => {
        return w.trim("'").toLowerCase()
    }).filter(w => w.length > 0)
    return new Set(words).size
}

// Debug

// lyrics = `
// Me and
// You always thinking you have me
// But the only way that you have me is so fucked up

// You're just a fuckboy
// You're just a fuckboy
// That  enough, boy
// You're just another motherfuck boy
// Cause you're just a fuckboy

// Cause you're just a fuckboy
// You're just a fuckboy
// No, woah-oh-oh
// Don't need another fuckboy (Fuck)

// You're just a fuckboy
// You're just a fuckboy
// That  enough, boy
// You're just another motherfuck boy
// Cause you're just a fuckboy
// `
// let s = getUnique(lyrics)
// console.log(s)
