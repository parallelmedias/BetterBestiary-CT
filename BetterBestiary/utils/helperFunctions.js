import axios from "../../axios";
import constants from "./constants";

export function getApiKey() {
    return constants.data.get("api_key");
}

export function getCurrentProfile() {
    // Get current profile
    // axios.get(`https://api.hypixel.net/skyblock/profiles?key=${getApiKey()}&uuid=${Player.getUUID()}`)
    axios.get(`https://sky.shiiyu.moe/api/v2/profile/${username}`)
        .then(res => {
            let profiles = res.data.profiles;
            let selectedProfile = data.profiles.find(profile => profile.selected).profile_id;
            let profile = profiles.find(profile => profile.profile_id === selectedProfile);
            console.log(profile);
            return profile;
        })
        .catch(err => {
            ChatLib.chat(`${constants.PREFIX}&cFetch Profile Error: ${err}`);
        });
    
}

const spiderDenLocations = ["Spider's Den", "Arachne's Nest"];
const endIslandLocations = ["The End", "Void Sepulture", "Dragon's Nest", "Void Slate", "Zealot Bruiser Hideout"];
export function checkInSpidersDen() {
    // Check if player is in Spider's Den
    const scoreBoard = Scoreboard.getLines()
    for (let i = 0; i < scoreBoard.length; i++) {
        for (let j = 0; j < spiderDenLocations.length; j++) {
            if (scoreBoard[i].toString().includes(spiderDenLocations[j])) {
                return true;
            }
        }
    }
    return false
}
export function checkInEndIsland() {
    // Check if player is in End Island
    let scoreBoard = Scoreboard.getLines();
    for (let i = 0; i < scoreBoard.length; i++) {
        for (let j = 0; j < endIslandLocations.length; j++) {
            if (scoreBoard[i].toString().includes(endIslandLocations[j])) {
                return true;
            }
        }
    }
    return false
}

export function updateProfile() {
    // Update current profile
    if (constants.data.get("profile") == undefined) {
        // This is called when the player has no profile set
        // Get current profile
        getCurrentProfile();
    } else {
        // This is called when the player has a profile set
        // Get current profile
        getCurrentProfile();
        // Check if current profile is the same as the set profile
        if (constants.data.get("profile") == getCurrentProfile()) {
            // If the profiles are the same, do nothing
            return;
        } else {
            // If the profiles are not the same, update the profile
            constants.data.set("profile", getCurrentProfile());
            constants.data.save();
        }
    }
}

// export function getBestiaryTier() {
//     // Get current bestiary tier from profile

// }

// export function updateBestiaryGui() {
//     // Update bestiary gui with current bestiary tier

// }

// export function updateBestiaryTier() {
//     // Update bestiary tier with current bestiary tier

// }