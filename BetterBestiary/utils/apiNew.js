import { PREFIX,data } from "../utils/constants"
import axios from "../../axios"

export function setkey(args)
{
    if(args == null) {ChatLib.chat(`${PREFIX}&ePlease enter a key!`); return}
    else key = args

    data.api_key = key
    data.save()
    axios.get(`https://api.hypixel.net/key?key=${data.api_key}`)
    .then(res => {
        if(res.data.success == true)
        {
            ChatLib.chat(`${PREFIX}&aSuccsessfully set api key!`)
        }
        else
            ChatLib.chat(`${PREFIX}&eKey is not valid!`)
    })
    .catch(err => {
        ChatLib.chat(`${PREFIX}&eKey is not valid!`)
    })
}

register("chat", (key) => {
    axios.get(`https://api.hypixel.net/key?key=${key}`)
    .then(res => {
        if(res.data.success == true)
        {
            data.api_key = key
            data.save()
            ChatLib.chat(`${PREFIX}&aSuccsessfully set api key!`)
        }
        else
            ChatLib.chat(`${PREFIX}&eKey is not valid!`)
    })
    .catch(err => {
        ChatLib.chat(`${PREFIX}&eKey is not valid!`)
    })
    ChatLib.chat(`${PREFIX}&aApi Key Successfully Set!`)
}).setCriteria(/Your new API key is (.+)/)