import { data } from "./constants";
import axios from "../../axios";

let bestiaryData={
    mob:[10,15,75,150,250,500,1500,2500,5000,15000,25000,50000,...new Array(42-13).fill(100000)],
    boss:[2,3,5,10,10,10,10,25,25,50,50,100,...new Array(42-13).fill(100)],
    private:[10,15,75,150,250]};


export function getBestiaryTier(family){
    axios.get(`https://api.hypixel.net/skyblock/profiles?key=${data.api_key}&uuid=${data.uuid}`)
        .then(res => {
            for(let i=0; i < res.data.profiles.length; i+=1) 
                {
                    if(res.data.profiles[i].selected == true) 
                        profileData = res.data.profiles[i]
                }
            let bestiary = profileData.members[data.uuid].stats
            print(bestiary)
        })
}

