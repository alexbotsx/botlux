const handler = async (m, { conn, isAdmin, groupMetadata }) => {
  if (isAdmin) return m.reply('*@KILL BOT*');
  try {
    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote');
    await m.react(done)
    m.reply('✧ *Ya te di admin.*');
    let nn = conn.getName(m.sender);
    conn.reply('56983073328@s.whatsapp.net', `🚩 *${nn}* se dio Auto Admin en:\n> ${groupMetadata.subject}.`, m, rcanal,);
  } catch {
    m.reply('✦ Ocurrio un error.');
  }
};
handler.tags = ['owner'];
handler.help = ['autoadmin'];
handler.command = ['autoadmin', 'tenerpoder'];
handler.rowner = true;
handler.group = true;
handler.botAdmin = true;
export default handler;
