import PogObject from "PogData"

export const PREFIX = "&6[&bBetter Bestiary&6] "
export const SYMBOL = "☭"

export const data = new PogObject("BetterBestiary", {
    firstTime: true,
    x: 0,
    y: 0,
    // Personal Island
    bat_talismans: 0,
    bone_dyes: 0,
    // Hub
    epic_ghoul_pets: 0,
    legendary_ghoul_pets: 0,
    epic_hound_pets: 0,
    legendary_hound_pets: 0,
    celeste_dyes: 0,
    wolf_talismans: 0,
    // The Park
    foraging_exp_boosts: 0,
    travel_scroll_to_the_park: 0,
    weak_wolf_catalysts: 0,
    // Farming Islands
    cyclamen_dyes: 0,
    // Deep Caverns
    exp_share_cores: 0,
    nyanza_dyes: 0,
    lapis_crystals: 0,
    lapis_armor_helmets: 0,
    lapis_armor_chestplates: 0,
    lapis_armor_leggings: 0,
    lapis_armor_boots: 0,
    brick_red_dyes: 0,
    miner_helmets: 0,
    miner_chestplates: 0,
    miner_leggings: 0,
    miner_boots: 0,
    // Dwarven Mines
    ghostly_boots: 0,
    plasmas: 0,
    sorrows: 0,
    voltas: 0,
    millions: 0,
    glacite_jewels: 0,
    glacite_helmets: 0,
    glacite_chestplates: 0,
    glacite_leggings: 0,
    glacite_boots: 0,
    salmon_opals: 0,
    treasurites: 0,
    goblin_helmets: 0,
    goblin_chestplates: 0,
    goblin_leggings: 0,
    goblin_boots: 0,
    // Crystal Hollows
    corleonites: 0,
    rare_scatha_pets: 0,
    epic_scatha_pets: 0,
    legendary_scatha_pets: 0,
    control_switches: 0,
    electron_transmitters: 0,
    ftx_3070s: 0,
    robotron_reflectors: 0,
    superlite_motors: 0,
    synthetic_hearts: 0,
    celadon_dyes: 0,
    epic_bal_pets: 0,
    legendary_bal_pets: 0,
    // Spiders Den
    poison_samples: 0,
    arachnes_callings: 0,
    epic_tarantula_pets: 0,
    legendary_tarantula_pets: 0,
    travel_scroll_to_the_spiders_den_top_of_nest: 0,
    // The End
    crystal_fragments: 0,
    enchanted_end_stones: 0,
    enchanted_eye_of_enders: 0,
    enchanted_obsidians: 0,
    summoning_eyes: 0,
    obsidian_chestplates: 0,
    end_stone_bows: 0,
    enchanted_bones: 0,
    enderman_cortex_rewriters: 0,
    // Crimson Isle
    flame_dyes: 0,
    mutated_blaze_ashes: 0,
    millenia_old_blaze_ashes: 0,
    flames: 0
}, "data/data.json")

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

export let rareDropGui = new Gui()

register("dragged", (dx, dy, x, y) => {
    if (!rareDropGui.isOpen()) return
    data.x = x
    data.y = y
    data.save()
});

export const short_number = (num) => {
    if(num == undefined) return;
    return num.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// mc classes
export const EntityArmorStand = Java.type("net.minecraft.entity.item.EntityArmorStand")
export const EntityPlayer = Java.type("net.minecraft.entity.player.EntityPlayer")

export function checkForParty() {
    // TODO: check if player is in a party through a chat message that states if they are in a party
    // TODO: if a chat message is sent that states they are not in a party, then set the party to false

}

export function checkDistance(entity, distance) {
    return entity.getDistanceToEntity(Player.getPlayer()) <= distance
}

// add a check if a entity is within 15 blocks of the player
export function checkForEntity(entity) {
    return checkDistance(entity, 15)
}

export function rotatePlayer(yaw, pitch) {
    Player.getPlayer().field_70177_z = yaw
    Player.getPlayer().field_70125_A = pitch
}

export function isPlayerAt (location) 
{
    return TabList.getNames().some((l) => 
        {
            return l.removeFormatting().toLowerCase().includes(location.toLowerCase());
        }
    )
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

export const getJsonDataFromFile = (fileName) => JSON.parse(FileLib.read("BetterBestiary", fileName)) ?? {}

register("gameUnload", () => {
    data.save();
});




