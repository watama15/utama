let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let imgr = flaaa.getRandom()
let text = `*SYARAT & KETENTUAN*
    

📮 S&K
1. Jangan diperjual belikan Script ini
2. Sebelum pakai jangan lupa Subscribe YT: KoncitOfc 
3. Follow Github !
4. Jangan salah gunakan script ini!
5. Jangan lupa Subscribe Youtube
6. Jangan di per jual belikan
• Jika ada eror di sc hub wa.me/6281364444859

*Mau Nyumri SCeh Ya Bang? :v\nBoleh kok, nih ...\nhttps://koncit.github.io*

--------Thanks to ✨---------
Allah STW`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Script di sini', url: 'https://go.paid4link.com/7ENnHAOL'}},
]
let tm = {
text: text,
footer: global.bottime,
templateButtons: templateButtons,
image: `${imgr + 'Script'}`,
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['sc'] 
 handler.tags = ['info'] 
 handler.command = /^(s(ourcode|c))$/i 
  
 export default handler
