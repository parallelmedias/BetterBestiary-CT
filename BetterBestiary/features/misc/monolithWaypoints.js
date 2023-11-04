import { dragonEggLocations, isInTab } from "../../utils/Utils";
import renderBeaconBeam from "../../../BeaconBeam";

register("renderWorld", () => {
    if (!World.isLoaded()) return

    if (isInTab("Dwarven")) {
        Object.keys(dragonEggLocations).forEach(location => {
            const [x, y, z] = dragonEggLocations[location]
            Tessellator.drawString(location, x, y, z, Renderer.WHITE, true, 0.5, true)
            renderBeaconBeam(x, y, z, 255, 0, 0, 0.75, false)
        })
    }

})