import { isAreaInTab } from "../../utils/Utils";
import { dragonEggLocations } from "../../utils/skyblockConst";
import renderBeaconBeam from "../../../BeaconBeam";
import RenderLibV2 from "../../../RenderLibV2";

register("renderWorld", () => {
    if (!World.isLoaded()) return

    if (isAreaInTab("Dwarven")) {

        Object.keys(dragonEggLocations).forEach(location => {
            const [x, y, z] = dragonEggLocations[location]
            Tessellator.drawString(location, x, y, z, Renderer.WHITE, false, 0.2, false)
            renderBeaconBeam(x, y, z, 255, 0, 0, 0.75, false, false)
            RenderLibV2.drawInnerEspBoxV2(x, y, z, 1, 1, 1, 0, 0, 0.2, false);
        })
    }

})