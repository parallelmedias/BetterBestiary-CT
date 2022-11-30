import { PREFIX } from "../utils/constants"

let hidePlayers = false
let user = Player.getName()

register("command", () => {
  hidePlayers = !hidePlayers
  !hidePlayers ?ChatLib.chat(`${PREFIX}&e&lPlayers Revealed`) :ChatLib.chat(`${PREFIX}&c&lPlayers Hidden`)
}).setName("hp")

const EntityPlayer = Java.type("net.minecraft.entity.player.EntityPlayer")

register("renderEntity", (entity, pos, pt, event) => {
    if(!hidePlayers) return
    if (entity.getEntity() instanceof EntityPlayer) {
      let entity_name = entity.getName()
      if(entity_name !== user){
        cancel(event)
      }
    }
})