import PogObject from "PogData"

let PogData = new PogObject("BetterBestiary", {
    "api_key": "",
    "curProfile": "",
    "uuid": "",
    "first_time": true,
}, "data/.bb.json")

let BestiaryTier = new PogObject("BetterBestiary", {
    "tier": 0,
}, "data/.bestiarytier.json")

const PREFIX = "&6[&bBetter Bestiary&6] "
export default constants = {
    PREFIX: PREFIX,
    data: PogData,
    bTierData: BestiaryTier,
    version: (JSON.parse(FileLib.read("BetterBestiary", "metadata.json"))).version
}