import "./features/chat"
import "./features/hide"
import "./features/hitbox"
import "./features/spiderDen"
import "./commands/warping"
import "./features/zombieVillager"
import "./features/headlessHorsemen"
import "./commandManager"
import "./utils/compatabilityCheck"
import { PREFIX, data, version } from "./utils/constants"
import { getBestiaryTier } from "./utils/getBestiaryTier"
import axios from "../axios"

register("step", () => {
    // First Start
    if (data.first_time) {
        data.first_time = false
        data.save()
        ChatLib.chat("------------------")
        ChatLib.chat(ChatLib.getCenteredText(`${PREFIX}&7Version: &b${version}`))
        ChatLib.chat(PREFIX + "&aWelcome! Please set your API key with /api new")
        ChatLib.chat(PREFIX + "&aRun /bb help for a list of commands")
        ChatLib.chat("------------------")
    }
    if (data.api_key == undefined || data.api_key == "") return
}).setFps(1)

register("step", () => {
    username = Player.getName()
    axios.get(`https://api.mojang.com/users/profiles/minecraft/+${username}`)
        .then(res => {
            if (res.data.id != data.uuid) {
                data.uuid = res.data.id
                data.save()
            }
        })
}).setFps(1)

register("step", () => {
    if (data.bestiaryTier == undefined || data.bestiaryTier == 0) {
        getBestiaryTier()
    }
}).setFps(1)
