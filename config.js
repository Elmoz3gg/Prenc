import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"
import fs from "fs"
import cheerio from "cheerio"
import fetch from "node-fetch"
import axios from "axios"
import moment from "moment-timezone"





global.owner = [
  ['20 1114329294', 'ITACHI 🛡️', true],
   ['201224563219', 'NARUTO', true]
]

//💌------------------------------------------💌


//💌global.pairingNumber = "" //put your bot number here💌
global.mods = ['201224563219'] 
global.prems = ['201114329294']
global.allowed = ['']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']
//💌------------------------------------------💌



// APIS
global.APIs = { // API Prefix
  // name: 'https://website'
  CFROSAPI: 'https://api.cafirexos.com',
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
// 💌------------------------------------------💌




//APIKEYS
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api.fgmods.xyz': 'dEBWvxCY'
}
//💌------------------------------------------💌



// Bot Images 
global.imagen1 = fs.readFileSync("./Assets/menus/Menu.png")
global.imagen2 = fs.readFileSync("./Assets/menus/Menu1.jpg")
global.imagen3 = fs.readFileSync("./Assets/menus/Menu2.jpg")
global.imagen4 = fs.readFileSync("./Assets/menus/Menu3.jpg")
global.imagen5 = fs.readFileSync("./Assets/menus/img2.jpg")
global.imagen6 = fs.readFileSync("./Assets/menus/img5.jpg")
global.imagen7 = fs.readFileSync("./Assets/menus/img6.jpg")
global.imagen8 = fs.readFileSync("./Assets/menus/img8.jpg")
global.imagen9 = fs.readFileSync("./Assets/menus/img9.jpg")
global.imagen10 = fs.readFileSync("./Assets/menus/img11.jpg")
global.imagen11 = fs.readFileSync("./Assets/menus/img12.jpg")
//💌------------------------------------------💌



global.img = 'https://telegra.ph/file/30c1cd55e66d7c39eea3a.jpg'
global.img2 = 'https://telegra.ph/file/30c1cd55e66d7c39eea3a.jpg'
global.img3 = 'https://telegra.ph/file/30c1cd55e66d7c39eea3a.jpg' 
global.img4 = 'https://telegra.ph/file/30c1cd55e66d7c39eea3a.jpg' 
global.img5 = 'https://telegra.ph/file/30c1cd55e66d7c39eea3a.jpg'
global.img6 = 'https://telegra.ph/file/30c1cd55e66d7c39eea3a.jpg'
global.img7 = 'https://telegra.ph/file/30c1cd55e66d7c39eea3a.jpg'
global.img8 = 'https://telegra.ph/file/30c1cd55e66d7c39eea3a.jpg'
global.img9 = 'https://telegra.ph/file/30c1cd55e66d7c39eea3a.jpg'
global.img10 = 'https://telegra.ph/file/30c1cd55e66d7c39eea3a.jpg'
global.img11 = 'https://telegra.ph/file/30c1cd55e66d7c39eea3a.jpg'
global.img12 = 'https://telegra.ph/file/30c1cd55e66d7c39eea3a.jpg'
global.img13 = 'https://telegra.ph/file/30c1cd55e66d7c39eea3a.jpg'
global.img14 = 'https://telegra.ph/file/30c1cd55e66d7c39eea3a.jpg'
global.img15 = 'https://telegra.ph/file/30c1cd55e66d7c39eea3a.jpg'
global.img16 = 'https://telegra.ph/file/30c1cd55e66d7c39eea3a.jpg'
global.img17 = 'https://telegra.ph/file/30c1cd55e66d7c39eea3a.jpg'
//💌------------------------------------------💌


//Chatgpt
global.gpt1 = fs.readFileSync("./Assets/GPT/gpt1.jpg")
global.gpt2 = fs.readFileSync("./Assets/GPT/gpt2.png")
global.gpt3 = fs.readFileSync("./Assets/GPT/gpt3.png")
global.gpt4 = fs.readFileSync("./Assets/GPT/gpt4.png")
global.gpt5 = fs.readFileSync("./Assets/GPT/gpt5.png")
global.gpt6 = fs.readFileSync("./Assets/GPT/gpt6.png")
//💌------------------------------------------💌


// Randome
global.princeMenu = [img, img2, img6, img7, img8, img9, img13, img14, img15, img16, img17]
global.princeImg = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10, imagen11]
global.princegpt = [gpt1, gpt2, gpt3, gpt4, gpt5, gpt6]
//💌------------------------------------------💌



// Moderator 
global.developer = 'https://wa.me/97474727015' //contact
//💌------------------------------------------💌



//Sticker WM
global.botname = '𝙹𝙾𝙽 𝚂𝙽𝙾𝚆 𝙱𝙾𝚃'
global.princebot = '𝙹𝙾𝙽 𝚂𝙽𝙾𝚆 𝙱𝙾𝚃'
global.packname = '𝐉𝐎𝐍 𝐒𝐍𝐎𝐖' 
global.author = 'GOJU' 
global.princeig = 'https://instagram.com/ 3mk_ryozaki' 
global.princegp = 'https://instagram.com/ 3mk_ryozaki'
global.menuvid = 'https://telegra.ph/file/4d55a0bde8a319f600703.mp4'
global.Princesc = 'https://instagram.com/ 3mk_ryozaki' 
global.princeyt = 'https://instagram.com/ 3mk_ryozaki'
global.Princelog = 'https://telegra.ph/file/30c1cd55e66d7c39eea3a.jpg'
global.wm = '🛡️GOJU🛡️'
global.titulowm = '\`\`\`𝙹𝙾𝙽 𝚂𝙽𝙾𝚆 𝙱𝙾𝚃\`\`\`'
global.titulowm2 = `\`\`\`𝙹𝙾𝙽 𝚂𝙽𝙾𝚆 𝙱𝙾𝚃\`\`\``
global.igfg = '\`\`\`𝙹𝙾𝙽 𝚂𝙽𝙾𝚆 𝙱𝙾𝚃\`\`\`'
global.gt = '\`\`\`𝙹𝙾𝙽 𝚂𝙽𝙾𝚆 𝙱𝙾𝚃\`\`\`'
global.mysticbot = '\`\`\`𝙹𝙾𝙽 𝚂𝙽𝙾𝚆 𝙱𝙾𝚃\`\`\`'
global.md = 'https://instagram.com/ 3mk_ryozaki'
global.mysticbot = 'https://instagram.com/ 3mk_ryozaki'
global.waitt = '*[❗] جار التحميل، يرجى الانتظار لحظة...*'
global.waittt = '*[❗] جار التحميل، يرجى الانتظار لحظة...*'
global.waitttt = '*[❗] جار التحميل، يرجى الانتظار لحظة...*'
global.nomorown = '201224563219'
global.thumb = fs.readFileSync('./Assets/Prince.png')
//💌------------------------------------------💌



//Reactions
global.wait = '*[❗] جار التحميل، يرجى الانتظار لحظة...*'
global.imgs = '*[❗] جار التحميل، يرجى الانتظار لحظة...*'
global.rwait = '♻️'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🌀' 
global.multiplier = 69 
global.maxwarn = '2' 
//💌------------------------------------------💌






let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
