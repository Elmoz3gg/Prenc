import fetch from 'node-fetch'
import axios from 'axios'
import translate from '@vitalets/google-translate-api'
import { Configuration, OpenAIApi } from 'openai'
const configuration = new Configuration({ organization: global.openai_org_id, apiKey: global.openai_key });
const openaiii = new OpenAIApi(configuration);
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (usedPrefix == 'a' || usedPrefix == 'A') return    
if (!text) throw `اصبح جون يدعم ChatGPT عندك اسئلة سواليف اي شي قول\n\n❏ على سبيل المثال\n❏ ${usedPrefix + command} افضل انمي\n❏ ${usedPrefix + command} عطني نصيحة شي\n❏ ${usedPrefix + command} عطني نكته`     
try {
conn.sendPresenceUpdate('composing', m.chat)  
let syms = `معكم جون صنع من قبل gpt الخاص ب جون سنو `
let res = await gpt.ChatGpt(text, syms)
await m.reply(res.text)
} catch {
try {   
let ia2 = await fetch(`https://api.amosayomide05.cf/gpt/?question=${text}&string_id=${m.sender}`) //fetch(`https://api.ibeng.tech/api/info/openai?text=${text}&apikey=tamvan`)
let resu2 = await ia2.json()
m.reply(resu2.response.trim())    
} catch {        
try {    
let tioress = await fetch(`https://api.lolhuman.xyz/api/openai-turbo?apikey=${lolkeysapi}&text=${text}`)
let hasill = await tioress.json()
m.reply(`${hasill.result}`.trim())   
} catch {    
}}}}
handler.command = ['جون', 'بوت']
handler.limit = 3
export default handler