let handler = async function (m) {
let list = []
  for (let i of owner.map(v => v + '@s.whatsapp.net')) {
  list.push({
            "displayName": 'Gw Gaada Pcr Ajg_-',
            "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Pairuzz\nitem1.TEL;waid='6285649064565':'085649064565'\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
          })
  }
        test = await this.sendMessage(m.chat, {
        "displayName": `${list.length} Contact`,
        "contacts": list 
        }, 'contactsArrayMessage', { quoted: m })
        test.reply('Bintang 1 , ★☆☆☆☆')
}
handler.help = ['pacarowner']
handler.tags = ['info']

handler.command = /^(pacarowner)$/i

module.exports = handler
