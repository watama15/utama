import fs from 'fs';
let handler = async (m, { conn, text, usedPrefix }) => {

    let img = fs.readFileSync('./thumbnail.jpg');
    let img2 = `https://i.ibb.co/xgbYTjP/IMG-20220926-143151.jpg`
    return conn.sendButton(m.chat, 'Scan QR Di atas\n❏ Donasi minimal 500p :v', 'Makasih, thanks for you donate...', img2, [["MENU", usedPrefix + "menu"], ["OWNER", usedPrefix + "owner"]], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: "https://instagram.com/k0nc1t.store",
                mediaType: "VIDEO",
                title: 'Donasi To KoncitOfc',
                body: bottime,
                previewType: 0,
                thumbnail: img
            }
        }
    })
}
handler.help = ['donasi']

handler.tags = ['info']

handler.command = /^(donasi|donate)$/i


export default handler