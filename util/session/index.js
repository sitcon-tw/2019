const config = require("./config");
const { extractSheets } = require("spreadsheet-to-json");

function nullCoalesce(value) {
  return value == null ? "" : value
}

extractSheets(
  {
    spreadsheetKey: config.spreadsheetKey
  },
  function(err, data) {
		data.Session.shift();
    data.Speaker.shift();

    data.Session.forEach((session) => {
      // title & description
      session.zh = {}
      session.zh.title = nullCoalesce(session.title_zh)
      session.zh.description = nullCoalesce(session.description_zh)

      session.en = session.zh

      delete session.title_zh
      delete session.description_zh

      // speaker
      session.speakers = []

      for (i = 1; i <= 5; i++) {
        if (session['speaker' + i + 'id'] != null) {
          speaker = data.Speaker.find((speaker) => {
            return speaker.id === session['speaker' + i + 'id']
          })

          speaker.avatar = speaker.avatar == null ? config.default_avatar : config.avatar_base_url + speaker.avatar

          speaker.zh = {}
          speaker.zh.name = nullCoalesce(speaker.name_zh)
          speaker.zh.bio = nullCoalesce(speaker.bio_zh)

          speaker.en = speaker.zh

          delete speaker.name_zh
          delete speaker.bio_zh

          session.speakers.push(speaker)
        }

        delete session['speaker' + i]
        delete session['speaker' + i + 'id']
      }

      // broadcast
      if (session.broadcast != null) {
        session.broadcast = session.broadcast.split(',')
      }

      // tag
      session.tag = []

      for (i = 1; i <= 3; i++) {
        if (session['tag' + i] != null) {
          tag = data.Tag.find((tag) => {
            return tag.id === session['tag' + i]
          })

          session.tag.push(tag)
        }

        delete session['tag' + i]
      }
    })

    console.log(JSON.stringify(data.Session))
  }
)
