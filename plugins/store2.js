import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, command }) => {
    try {
        let menu = `*【مـتـجـر《🏪》‏𝐄𝐀𝐒𝐓】*

· • • ━ ╃✦⊰ ⌝🏪⌞ ⊱✦╄ ━ • • ·

*◞مـتـجـر ايـسـت الـعـام🏪🛡️◜*  

•⤦لشراء سلعة معينة يرجى كتابة⤥•
*『 .شراء 』*

👈🏻 فقط تقوم بنسخ الاستمارة وتعبئ الاستمارة بدون تعديل على الاستمارة نهائيا فقط كم بتعبئ الفراغات وارسل بنقابه نفسها

راح يقوم البوت بتوصيل الرساله ل مسؤولين المتجر وراح يتم تنفيذ سلعتك اقرب وقت


*✺❯ رابط المتجر 🏦:*
『 ⁩https://tinyurl.com/yozcy3yw 』

*✺❯ قروب المتجر 🏪:*
『 ⁩https://tinyurl.com/yozcy3yw 』

🔴عندك اقتراحات او مشاكل او لا يعمل اي مشاكل تواجهك يرجى دخول القروب وراح يتم خدمتك بشكل جيد🤍

· • • ━ ╃✦⊰ ⌝🏪⌞ ⊱✦╄ ━ • • ·
*※〔 مع تحيات إدارة 〕※*
*【مـتـجـر《🏪》‏𝐄𝐀𝐒𝐓】*`;

        const imageURL = 'https://telegra.ph/file/db38a0650608840bd3228.jpg';

        await conn.sendMessage(m.chat, { image: { url: imageURL }, caption: menu });
    } catch (error) {
        console.log(error);
    }
};

handler.command = /^متجر$/i;


export default handler;