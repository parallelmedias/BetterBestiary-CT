import PogObject from "PogData"

let PogData = new PogObject("BetterBestiary", {
    "api_key": "",
    "bestiary": 0,
    "first_time": true
}, "config/bb_data.json")

export default
{
    PREFIX: "&6[&bBetter Bestiary&6] ",
    version: (JSON.parse(FileLib.read("BetterBestiary", "metadata.json"))).version,
    data: PogData
}