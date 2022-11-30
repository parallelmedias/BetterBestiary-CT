import PogObject from "PogData"

let PogData = new PogObject("BetterBestiary", {
    "api_key": "",
    "uuid": "",
    "bestiaryTier": 0,
    "first_time": true
}, "config/bb_data.json")

export const data = PogData
export const version = (JSON.parse(FileLib.read("BetterBestiary", "metadata.json"))).version
export const PREFIX = "&6[&bBetter Bestiary&6] "
export const SYMBOL = "☭"
export const drawBox = (entity, red, green, blue, lineWidth, width, height, partialTicks) => {
    if (width === null) {
        width = entity.getWidth()
    }
    if (height === null) {
        height = entity.getHeight()
    }

    GL11.glBlendFunc(770, 771);
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