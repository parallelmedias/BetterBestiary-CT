import { rotatePlayer } from "../../utils/Utils"

Client.settings.getSettings().func_74300_a()
const melonAngleBind = new KeyBind("Melon Angle", Keyboard.KEY_L, "Better Bestiary")
const cropAngleBind = new KeyBind("Crop Angle", Keyboard.KEY_K, "Better Bestiary")
const caneAngleBind = new KeyBind("Cane Angle", Keyboard.KEY_J, "Better Bestiary")

// melon angle
register('tick', () => {
    if (melonAngleBind.isPressed()) {
        rotatePlayer(0,-59)
    }
})

// crop angle
register('tick', () => {
    if (cropAngleBind.isPressed()) {
        rotatePlayer(90,-59)
    }
})

// cane angle
register('tick', () => {
    if (caneAngleBind.isPressed()) {
        rotatePlayer(45,-59)
    }
})