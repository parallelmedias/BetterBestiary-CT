import request from "requestV2/index"
import { PREFIX } from "../utils/utils";

let avoidPeople = false

register("chat", (username, classlevel) => {
  if(!hidePlayers) return
  request("https://raw.githubusercontent.com/scoliosiss/mushroomclient/main/dungeonshitters.json").then(stuff => {
      request(`https://api.mojang.com/users/profiles/minecraft/${username}`).then(function(stuff2) {
          stuff = JSON.parse(stuff)
          stuff2 = JSON.parse(stuff2.replace(new RegExp("    ", "g"), ""))
          playeruuid = stuff2.id
          if (Object.keys(stuff).includes(stuff2.id)) {
              new Message(`&9&m${ChatLib.getChatBreak("-")}\n`,
              new TextComponent(`${PREFIX} &a&l${username} &2is a shitter because&f&l: ${stuff[playeruuid]["reason"]}`),
              new TextComponent(`\n&cClick here to kick &4${username}&c!`).setClick(
                  "run_command",
                  `/p kick ${username}`
              ).setHover(
                  "show_text",
                  `&aClick to kick this shitter\n&7/p kick ${username}`
              ),
              `\n&9&m${ChatLib.getChatBreak("-")}`).chat()
          }
      })
  }).catch(error => {
      ChatLib.chat(`${PREFIX} &cError whilst checking for update: ${error}`)
  })
}).setCriteria("Dungeon Finder > ${username} joined the dungeon group! (${classlevel})")