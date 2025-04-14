let handler = async (m, { conn, usedPrefix, isOwner }) => {
    m.react('👤')
    let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:𝘽𝙤𝙩 𝙡𝙪𝙭;;\nFN:𝘽𝙤𝙩 𝙡𝙪𝙭\nORG:𝘽𝙤𝙩 𝙡𝙪𝙭\nTITLE:\nitem1.TEL;waid=51920726588:51920726588\nitem1.X-ABLabel:𝘽𝙤𝙩 𝙡𝙪𝙭\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:𝘽𝙤𝙩 𝙡𝙪𝙭\nEND:VCARD`
    await conn.sendMessage(m.chat, { contacts: { displayName: '@Alexnsnk7⁩', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['staff']
handler.tags = ['main']
handler.command = ['owner', 'dueño', 'creador']

export default handler
