let handler = async (m, { conn }) => {
let info = `
*${htki} VIRUS ${htka}*
          
 🔥BY KONCITOFC🔥
          
                  
–––––– *ᴋᴇʙɪᴊᴀᴋᴀɴ* ––––––
*📮Gunakan Dengan tujuan yang benar. Jangan untuk merugikan orang lain tanpa alasan!*
`
const sections = [
   {
    title: `✃ VIRTEX`,
	rows: [
	    {title: "😈Virtex 1", rowId: '.virtex1', description: 'Jangan SPAM' },
	    {title: "😈Virtex 2", rowId: '.virtex2', description: 'Jangan SPAM' },
	{title: "😈Virtex 3", rowId: '.virtex3', description: 'Jangan SPAM' },
	{title: "😈Virtex 4", rowId: '.virtex4', description: 'JJangan SPAMT' },
	{title: "😈Virtex 5", rowId: '.virtex5', description: 'JJangan SPAM' },
	{title: "😈Virtex 6", rowId: '.virtex6', description: 'JJangan SPAMT' },
    {title: "😈Virtex 7", rowId: '.virtex7', description: 'Jangan lupa Jangan SPAM' },
	{title: "😈Virtex 8", rowId: '.virtex8', description: 'JJangan SPAM' },
	{title: "😈Virtex 9", rowId: '.virtex9', description: 'JanganJangan SPAM' },
	{title: "😈Virtex 10", rowId: '.virtex10', description: 'JanJangan SPAM' },
	{title: "😈Virtex 11", rowId: '.virtex11', description: 'Jangan lJangan SPAM' },
	{title: "😈Virtex 12", rowId: '.virtex12', description: 'JanganJangan SPAMT' },
	{title: "😈Virtex 13", rowId: '.virtex13', description: 'Jangan lJangan SPAM' },
	{title: "😈Virtex 14", rowId: '.virtex14', description: 'Jangan lJangan SPAM' },
    {title: "😈Virtex 15", rowId: '.virtex15', description: 'Jangan Jangan SPAM' },
	{title: "😈Virtex 16", rowId: '.virtex16', description: 'Jangan Jangan SPAM' },
	{title: "😈Virtex 17", rowId: '.virtex17', description: 'JangaJangan SPAM' },
	{title: "😈Virtex 18", rowId: '.virtex18', description: 'Jangan SPAM' },
	{title: "😈Virtex 19", rowId: '.virtex19', description: 'JJangan SPAM' },
    {title: "😈Virtex 20", rowId: '.virtex20', description: 'JJangan SPAM' },

	]
    }, {
    title: `✃ INFO`,
	rows: [
	    {title: "🔥Download WhatsApp Imune", rowId: '.waantivirus', description: 'Download WhatsApp Kebal' },
	    {title: "🔥Virus Troli", rowId: '.virustroli', description: 'Jangan SPAM' },
	    {title: "🔥Virus Power", rowId: '.powerlist', description: 'Jangan SPAM' },
	    ]
        }, {
    title: `✃ BUY`,
	rows: [
	    {title: "💸Upgrade Premium", rowId: '.sewa', description: 'Dan unclock Fitur premium lainya!' },
	    ]
        },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "👺GASS",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}
handler.help = ['virtex']
handler.tags = ['virus']
handler.command = /^virtexkuatt$/i
handler.premium = true

export default handler
