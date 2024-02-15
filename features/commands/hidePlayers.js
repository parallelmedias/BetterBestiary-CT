import { PREFIX } from "../../utils/Utils";
import { EntityPlayer } from "../../utils/Utils";

let hidePlayers = false
let user = Player.getName()

register("command", () => {
    hidePlayers = !hidePlayers
    !hidePlayers ?ChatLib.chat(`${PREFIX}&e&lPlayers Revealed`) :ChatLib.chat(`${PREFIX}&c&lPlayers Hidden`)
}).setName("hideplayers").setAliases(["hp"])

register("renderEntity", (entity, pos, pt, event) => {
  if(!hidePlayers) return
  if (entity.getEntity() instanceof EntityPlayer) {
    let entity_name = entity.getName()
    if(entity_name !== user){
      cancel(event)
    }
  }
})