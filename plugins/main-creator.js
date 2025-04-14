let handler = async (m, { conn, usedPrefix, isOwner }) => {
    m.react('👤')
    let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:BOT LUX;;\nFN:BOT LUX\nORG:BOT LUX\nTITLE:\nitem1.TEL;waid=51920726588:51920726588\nitem1.X-ABLabel:BOT LUX\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:BOT LUX\nEND:VCARD`
    await conn.sendMessage(m.chat, { contacts: { displayName: '@Alexnsnk7⁩', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['staff']
handler.tags = ['main']
handler.command = ['owner', 'dueño', 'creador']

export default handler
