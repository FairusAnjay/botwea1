let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *INDOSAT:* [085649064565]
┣➥ *OVO:* [085804325802]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/6285649064565*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
