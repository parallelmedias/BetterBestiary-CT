import { data } from "./constants";
import axios from "../../axios";

let bestiaryData={
    mob:[10,15,75,150,250,500,1500,2500,5000,15000,25000,50000,...new Array(42-13).fill(100000)],
    boss:[2,3,5,10,10,10,10,25,25,50,50,100,...new Array(42-13).fill(100)],
    private:[10,15,75,150,250]};


username = Player.getName()
//this is the function that gets the bestiary tier
export function getBestiaryTier() {
    axios.get(`https://sky.shiiyu.moe/api/v2/profile/${username}`)
        .then((response) => {
            let tier = 0
            // from response get the bestiary level
            let bestiaryLevel = response.data.profiles[`9421eadfd23444ad9de4e275b2307431`].data.bestiary.level
            tier += bestiaryLevel
            data.bestiaryTier = tier
            data.save()
        })
        .catch((error) => {
            ChatLib.chat("&cError: &7" + error)
        })
}

register("renderOverlay", () => {
    Renderer.drawStringWithShadow(`&6Bestiary Tier: ${data.bestiaryTier}`, 60, 60)
})