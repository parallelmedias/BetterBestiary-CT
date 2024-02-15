import { stripFormatting } from "../../utils/Utils";

const listPath = "./config/ChatTriggers/modules/BetterBestiary/data/blockList.json";
var blockList = { players: [], pcmsg: false };

register("chat", (player) => {
    checkListLoaded();

    player = stripFormatting(player.toLocaleLowerCase());

    if (checkPlayer(player)) {
        Client.showTitle("&r&cBlocked&r", "", 1, 30, 1);
        Client.showTitle("&r&cSHITTER&r", "", 1, 30, 1);
        const blockMessage = new Message(
            new TextComponent("&r&cTHIS PLAYER IS A SHITTER!!!&r\nClick here to kick them!").setClick("run_command", `/party kick ${player}`)
        );
        ChatLib.chat(blockMessage);
        if (blockList.pcmsg) {
            ChatLib.command("party chat pooper detected", false);
        }
    }

}).setCriteria("&dParty Finder &r&f> ${player} &r&ejoined the group!").setContains();

function addToList(username) {
    if (!username) { ChatLib.chat("Error! No username provided"); return; }
    blockList.players.push(username);
    ChatLib.chat("&r&6Added: &r" + username + " to the list.");
}

function removeFromList(username) {
    if (!username) { ChatLib.chat("Error! No username provided"); return; }
    let index = blockList.players.indexOf(username);
    if (index == -1) { ChatLib.chat("Error! The provided username is not in the list"); return; }
    blockList.players.splice(index, 1);
    ChatLib.chat("&r&6Removed: &r" + username + " from the list.");
}

function clearList() {
    blockList.players = [];
    ChatLib.chat("&r&6Cleared the list!&r");
}

function viewList() {
    ChatLib.chat("&r&6Block List:\n----------------&r");
    blockList.players.forEach(player => {
        ChatLib.chat("- " + player);
    });
}

function checkPlayer(player) {
    return blockList.players.includes(player);
}

function checkListLoaded() {
    if (blockList.players.length == 0) {
        loadList();
    }
}

function loadList() {
    let fileContent = FileLib.read(listPath);
    if (fileContent == "") {
        FileLib.write(listPath, JSON.stringify(blockList));
    } else {
        blockList = JSON.parse(fileContent);
    }
}

function writeList() {
    FileLib.write(listPath, JSON.stringify(blockList));
}


register("command", (method, data) => {
    checkListLoaded();
    method = method.toLowerCase();
    switch (method.toLowerCase()) {
        // case "help":
        //     ChatLib.chat(`&r&6Shitter List&r\n------------
        //     - help: Displays this menu
        //     - add {username}: Adds username names to the list
        //     - list: Lists all usernames on the list
        //     - delete {username}: Removes a username from the list
        //     - clear: Clears the list
        //     - toggle pcmsg: Toggles sending a msg to party chat whenever a shitter joins 
        //     break;
        case "list":
            viewList();
            break;
        case "add":
            addToList(data.toLowerCase());
            break;
        case "remove":
            removeFromList(data.toLowerCase());
            break;
        case "clear":
            clearList();
            break;
        case "toggle":
            data = data.toLowerCase();
            switch (data) {
                case "pcmsg":
                    blockList.pcmsg = !blockList.pcmsg;
                    ChatLib.chat(`Toggled party chat message to ${blockList.pcmsg}`);
                    break;
            }
            break;
    }
    writeList();
}).setName("block").setAliases("b");

// PUZZLE FAIL! DeadlySA killed a Blaze in the wrong order! Yikes!