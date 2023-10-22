import PogObject from "PogData"

export const PREFIX = "&6[&bBetter Bestiary&6] "
export const SYMBOL = "☭"

export const data = new PogObject("BetterBestiary", {
    firstTime: true
}, "data/.data.json")

export const chat = (msg) => ChatLib.chat(msg)
export const chatid = (msg, id) => new Message(msg).setChatLineId(id).chat()
export const hover = (msg, value) => new TextComponent(msg).setHoverValue(value).chat()
export const breakchat = () => ChatLib.chat(ChatLib.getChatBreak(" "))

export const getSkyblockId = (item) => item?.getNBT()?.toObject()?.tag?.ExtraAttributes?.id
export const isInScoreboard = (str) => getScoreboard().some(a => a.includes(str))
export const isInTab = (str) => TabList.getNames()?.find(names => names.removeFormatting()?.match(/^Area|Dungeon: ([\w\d ]+)$/))?.includes(str)
export const checkConfig = (category, name) => data.settings[category][name]

export const getTime = (oldDate) => {
    const seconds = Math.round((Date.now() - oldDate) / 1000 % 60)
    const mins = Math.floor((Date.now() - oldDate) / 1000 / 60 % 60)
    const hours = Math.floor((Date.now() - oldDate) / 1000 / 60 / 60 % 24)

    return `${hours}:${mins}:${seconds}`
}
export const isBetween = (number, [min, max]) => (number-min) * (number-max) <= 0
export const getSeconds = (timeStamp, timeStamp2) => !timeStamp || !timeStamp2 ? "0s" : `${((timeStamp-timeStamp2)/1000).toFixed(2)}s`

// mc classes
export const EntityArmorStand = Java.type("net.minecraft.entity.item.EntityArmorStand")
export const EntityPlayer = Java.type("net.minecraft.entity.player.EntityPlayer")

export function checkForParty() {
    // TODO: check if player is in a party through a chat message that states if they are in a party
    // TODO: if a chat message is sent that states they are not in a party, then set the party to false

}

export function rotatePlayer(yaw, pitch) {
    Player.getPlayer().field_70177_z = yaw
    Player.getPlayer().field_70125_A = pitch
}

// Draw Box for Hitboxes
export const drawBox = (entity, red, green, blue, lineWidth, width, height, partialTicks) => {
    if (width === null) {
        width = entity.getWidth()
    }
    if (height === null) {
        height = entity.getHeight()
    }

    GL11.glBlendFunc(770, 771); // Q: What does this do? A: It makes the lines transparent
    GL11.glEnable(GL11.GL_BLEND);
    GL11.glLineWidth(lineWidth);
    GL11.glDisable(GL11.GL_TEXTURE_2D);
    GlStateManager.func_179094_E();

    let positions = [
        [0.5, 0.0, 0.5],
        [0.5, 1.0, 0.5],
        [-0.5, 0.0, -0.5],
        [-0.5, 1.0, -0.5],
        [0.5, 0.0, -0.5],
        [0.5, 1.0, -0.5],
        [-0.5, 0.0, 0.5],
        [-0.5, 1.0, 0.5],
        [0.5, 1.0, -0.5],
        [0.5, 1.0, 0.5],
        [-0.5, 1.0, 0.5],
        [0.5, 1.0, 0.5],
        [-0.5, 1.0, -0.5],
        [0.5, 1.0, -0.5],
        [-0.5, 1.0, -0.5],
        [-0.5, 1.0, 0.5],
        [0.5, 0.0, -0.5],
        [0.5, 0.0, 0.5],
        [-0.5, 0.0, 0.5],
        [0.5, 0.0, 0.5],
        [-0.5, 0.0, -0.5],
        [0.5, 0.0, -0.5],
        [-0.5, 0.0, -0.5],
        [-0.5, 0.0, 0.5]
    ]

    let counter = 0;

    Tessellator.begin(3).colorize(red, green, blue);
    positions.forEach(pos => {
        Tessellator.pos(
            entity.getX() + (entity.getX() - entity.getLastX()) * partialTicks + pos[0] * width,
            entity.getY() + (entity.getY() - entity.getLastY()) * partialTicks + pos[1] * height,
            entity.getZ() + (entity.getZ() - entity.getLastZ()) * partialTicks + pos[2] * width
        ).tex(0, 0);

        counter++;
        if (counter % 2 === 0) {
            Tessellator.draw();
            if (counter !== 24) {
                Tessellator.begin(3).colorize(red, green, blue);
            }
        }
    });

    GlStateManager.func_179121_F();
    GL11.glEnable(GL11.GL_TEXTURE_2D);
    GL11.glDisable(GL11.GL_BLEND);
}

/**
 * @param {string} dir The directory where the file is going to be saved
 * @param {string} fileName The file name
 * @param {object} dataToSave The object to be saved as json format
 * @param {boolean} recursive Whether to create folders to the file location if they don't exist
 */
const saveToFile = (fileName, dataToSave = {}, recursive = true) => {
    FileLib.write("BetterBestiary", fileName, JSON.stringify(dataToSave), recursive)
}

export const getJsonDataFromFile = (fileName) => JSON.parse(FileLib.read("BetterBestiary", fileName)) ?? {}

register("gameUnload", () => {
    data.save();
});




