let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: Kawan Bee
╠➥ Script: @kelvin44 (kalo yg bikin @Nurotomo)
║
╠➥ Github: https://github.com/kelvin44/
╠➥ Instagram: https://Instagram.com/ff.kelvin15/
╠➥ YouTube: -
║
╠═〘 Thanks To 〙 ═
╠➥ Nurotomo
╠➥ MfarelS
╠➥ ST4RZ
╠➥ Dan kawan yang lain :)
║
╠═〘 DONASI 〙 ═
╠➥ Tsel: 0812-1830-5935
╠➥ Tsel: 0852-1283-0930
╠➥ Dana : 0852-1283-0930
║
║>Request? Wa.me/6281218305935
║
╠═〘 KOPET BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['about']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

