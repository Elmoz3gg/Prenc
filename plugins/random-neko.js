import fetch from 'node-fetch';
const handler = async (m, {conn, command}) => {
  const ne = await (await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/neko.txt')).text();
  const nek = ne.split('\n');
  const neko = await nek[Math.floor(Math.random() * nek.length)];
  if (neko == '') throw 'Error';
  conn.sendFile(m.chat, neko, 'error.jpg', `اونيي تشان~ 🐾💗`, m);
};
// conn.sendButton(m.chat, 'Nyaww~ 🐾💗', wm, neko, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `/${command}`]],m)}
handler.command = /^(مياو)$/i;
handler.tags = ['anime'];
handler.help = ['neko'];
handler.limit = 1;
export default handler;
