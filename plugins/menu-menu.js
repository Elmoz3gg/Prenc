import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
try {
let d = new Date(new Date + 3600000)
let locale = 'ar'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = conn.getName(m.sender)
let user = global.db.data.users[m.sender]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  
let menu = `\`\`\`${date}\`\`\`
║ارحب  @${m.sender.split("@")[0]} ║

*※【﻿  لا تنسى نقطه بالبداية ياحلو/ه 】※*
*※【﻿ اذا هناك امر لا يعمل .ابلاغ عنه 】※*
*※【﻿  اذا عندك اقتراحات .اقتراح 】※*

┏━━━━━━━━━━━━━━┓
      *※【﻿  قائمة للمشرفين فقط 】※*
┃◉━━─ ─ ⊱ ❪🤖❫ ⊰ ─ ─━━◉┃
┃👩🏻‍💼 _.منشن
┃🧑🏻‍💼 _.مخفي
┃👩🏻‍💼 _.ترقية
┃🧑🏻‍💼 _.اعفاء
┃👩🏻‍💼 _.طرد
┃🧑🏻‍💼 _.حذف
┃👩🏻‍💼 _.قص
┃🧑🏻‍💼 _.قروب فتح-قفل
┃👩🏻‍💼 _.انذار
┗━━━━━━━━━━━━━━┛
*※【﻿  قائمة الأوامر الدينية 】※*
┃◉━━─ ─ ⊱ ❪🤖❫ ⊰ ─ ─━━◉┃
┃ 🕋_.آية
┃ 🕋_.آية-الكرسي
┃ 🕋_.آيات
┃ 🕋_.دين 
┃ 🕋_.قرآن 
┃ 🕋_.اذكار 
┃ 🕋_.اذكار المساء 
┃ 🕋_.اذكار الصباح 
┃🕋 _.الأسماء-الحسنى 
┃ 🕋_.أحاديث 
┗━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━┓
      *※【﻿  قائمة الأوامر العامة 】※*
┃◉━━─ ─ ⊱ ❪🤖❫ ⊰ ─ ─━━◉┃
┃🎐 _.ملصق 
┃🎐 _.سرقة
┃🎐 _.اينفوقروب
┃🎐 _.مشرفين
┃🎐 _.زخرفة 
┃🎐 _.دمج 😺+😆
┃🎐➺ _.جون 
┃🎐➺ _.تطقيم 
┃🎐➺ _.لانمي
┃🎐➺ _.البلد
┃🎐➺ _.رسم
┃🎐➺ _.احسب 
┃🎐➺ _.تعليق 
┃🎐➺ _.تسجيل 
┃🎐➺ _.بروفايل 
┗━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━┓
      *※【﻿  قائمة التسلية والالعاب 】※*
┃◉━━─ ─ ⊱ ❪🤖❫ ⊰ ─ ─━━◉┃
┃🎡 _.التسلية
┃🎮 _.الالعاب
┗━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━┓
      *※【﻿  قائمة البحث والكونفيرتر 】※*
┃◉━━─ ─ ⊱ ❪🤖❫ ⊰ ─ ─━━◉┃
┃🚀 _.اغنية
┃🚀 _.الأسم 
┃🚀 _.صورة
┃🚀 _.الأنمي 
┃🚀 _.قص
┃🚀 _.توضيح 
┃🚀 _.قوقل
┃🚀 _.يوتيوب
┃🚀 _.بيدياف
┃🚀 _.لصورة
┃🚀 _.لرابط
┃🚀 _.لمقطع
┃🚀 _.انطق
┗━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━┓
      *※【﻿  قائمة الصور عشوائية 】※*
┃◉━━─ ─ ⊱ ❪🤖❫ ⊰ ─ ─━━◉┃
┃🧩 _.قط
┃🧩 _.كلب
┃🧩 _.رونالدو
┃🧩 _.ميسي
┃🧩 _.مياو
┃🧩 _.اوني-تشان
┗━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━┓
      *※【﻿  قائمة المملكة ايست 】※*
┃◉━━─ ─ ⊱ ❪🤖❫ ⊰ ─ ─━━◉┃
┃🛡️ _.ايست
┃🛡️ _.متجر
┃🛡️ _.فيالق
┃🛡️ _.فروع
┗━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━┓
      *※【﻿  قائمة معلوماتك وجوائز 】※*
┃◉━━─ ─ ⊱ ❪🤖❫ ⊰ ─ ─━━◉┃
┃⚗️ _.الماسي
┃⚗️ _.لفل
┃⚗️ _.تحويل 
┃⚗️ _.راتب
┃⚗️ _.هديتي
┗━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━┓
      *※【﻿  قائمة للمطور فقط 】※*
┃◉━━─ ─ ⊱ ❪🤖❫ ⊰ ─ ─━━◉┃
┃👨🏻‍💻 _.الماس
┃👨🏻‍💻 _.الخبرة
┃👨🏻‍💻 _.حظرالدردشة
┃👨🏻‍💻 _.إلغاءحظرالمجموعة  
┃👨🏻‍💻 _.بان 
┃👨🏻‍💻 _.رفع-بان
┃👨🏻‍💻 _.بريميم
┃👨🏻‍💻 _.حذفبريميم
┗━━━━━━━━━━━━━━┛
𝒥𝒪𝒩 𝒮𝒩𝒪𝒲 `

const vi = ['https://telegra.ph/file/4d55a0bde8a319f600703.mp4']

try {
await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: { url: gataMenu.getRandom() }, gifPlayback: false, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: gataImg.getRandom(), gifPlayback: false, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try{
await conn.sendFile(m.chat, imagen5, 'menu.jpg', menu, fkontak, false, { mentions: [m.sender, global.conn.user.jid] })
} catch (error) {
return 
}}}} 

} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(مينيو|اوامر|الاوامر|الأوامر|أوامر|\?)$/i
handler.limit = 3
export default handler
    
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}