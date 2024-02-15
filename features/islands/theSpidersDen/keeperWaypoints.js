import RenderLibV2 from "../../../../RenderLibV2/index.js";
import { isInTab } from "../../../utils/Utils.js";
import { keeperWaypoints } from "../../../utils/skyblockConst.js";

register("renderWorld", () => {
    if (!World.isLoaded()) return

    if (isInTab("Den")) {
        Object.keys(keeperWaypoints).forEach(location => {
            const [x, y, z] = keeperWaypoints[location]
            Tessellator.drawString(location, x, y, z, Renderer.WHITE, false, 0.5, true)
            // Renderer.drawString()
        })
    }
    if (isInTab("Den")) {
        // Draw lines between waypoint 1 and 2
        RenderLibV2.drawEspBox(-270, 61, -160, 1, 1, 255, 255, 255, 0.75, false)
        RenderLibV2.drawLine(-270, 61 + 2, -160, -270, 47 + 2, -167, 255, 255, 255, 0.75, false)
        // Draw lines between waypoint 2 and 3
        RenderLibV2.drawLine(-270, 47 + 2, -167, -293, 47 + 2, -168, 255, 255, 255, 0.75, false)
        // Draw lines between waypoint 3 and 4
        RenderLibV2.drawLine(-293, 47 + 2, -168, -292, 47 + 2, -184, 255, 255, 255, 0.75, false)
        // Draw lines between waypoint 4 and 5
        RenderLibV2.drawLine(-292, 47 + 2, -184, -263, 49 + 2, -192, 255, 255, 255, 0.75, false)
        // Draw lines between waypoint 5 and 6
        RenderLibV2.drawLine(-263, 49 + 2, -192, -283, 47 + 2, -196, 255, 255, 255, 0.75, false)
        // Draw lines between waypoint 6 and 7
        RenderLibV2.drawLine(-283, 47 + 2, -196, -312, 43 + 2, -233, 255, 255, 255, 0.75, false)
        // Draw lines between waypoint 7 and 8
        RenderLibV2.drawLine(-312, 43 + 2, -233, -209, 44 + 2, -260, 255, 255, 255, 0.75, false)
        // Draw lines between waypoint 8 and 9
        RenderLibV2.drawLine(-209, 44 + 2, -260, -231, 57 + 2, -308, 255, 255, 255, 0.75, false)
    }


})