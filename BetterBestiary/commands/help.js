import constants from "../utils/constants";
const PREFIX = constants.PREFIX;

export function help() {
    ChatLib.chat("")
    ChatLib.chat(PREFIX + "&aCommands:")
    ChatLib.chat(PREFIX + "&a/bb &7- &fOpens the Better Bestiary GUI")
    ChatLib.chat(PREFIX + "&a/bb help &7- &fShows this menu")
    ChatLib.chat(PREFIX + "&a/hp &7- &fHides/ shows players")
    ChatLib.chat(PREFIX + "&a/warping &7- &fEnables party to warp themselves with !warp")
    // ChatLib.chat(PREFIX + "&a/bb warp (on/off)&7- &fEnables automatic party warping from !warp")
    // ChatLib.chat(PREFIX + "&a/bb avoid (on/off)&7- &fEnables automatic party warping from !warp")
    ChatLib.chat("")
}