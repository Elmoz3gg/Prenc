 let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*آهـلُِآً وُسهـلُِآً بِك فُي*:
*【مـتـجـر《🏪》𝐄𝐀𝐒𝐓】*

*✦╎إستمارة┃⛩️┃المتجر╎✦*
────── • ◈ • ──────

*✺❯ لقبك👤:*『⁩』

*✺❯ اسم النقابة🏛️:*『⁩』

*✺❯ السلعة التي تود شراءها🎼:*『』

*✺❯ اشرح السلعة حقتك بالتفاصيل📜:*『』

*✺❯ عدد الين💴 الذي بحسابك :*『』

────── • ◈ • ──────
*※〔 مع تحيات إدارة 〕※*
*【مـتـجـر《🏪》‏𝐄𝐀𝐒𝐓】*`
if (text.length < 200) throw `${fg} *✨ يحب عب بشكل الاستمارة*`
if (text.length > 1000) throw `*${fg}* اعلى شي ١٠٠٠ حرف*`
let teks = `*╭━━[ المتجر ]━━━⬣
*┃رقم الشخص الي يبي يشتري┃*

┃✦ Wa.me/${m.sender.split`@`[0]}

*┃سلعته┃*

✦ ${text}
`
  conn.reply('966547169636@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, { contextInfo: { mentionedJid: [m.sender] } });
  conn.reply('966597458551@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, { contextInfo: { mentionedJid: [m.sender] } });
   
  m.reply(`⊱🏪⊱ تم يحلو/ه ⊱🏪⊱
  
 *راح الرساله ل مسؤولين المتجر*
  
*بنجاح ✅ راح يتم خدمتك وتجهيز سلعتك بأقرب وقت ممكن *

*اذا تأخرت سلعتك اكثر من ٢٤ ساعه يرجى محاولة مره اخرى 🫶🏻*
  ────── • 🏪 • ──────
  *※〔 مع تحيات المتجر 🛡️〕※*`)

}

handler.help = ['شراء', 'سلعة'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.exp = 25 
handler.command = /^(آهـلُِآً|شراء)$/i 
export default handler