// Kenny's Steam Power Mod
// Target: Sandboxels browser version 1.16.1
//
// Steam touching the Steam Generator is consumed and starts an electrical
// charge. The charge is handled by Sandboxels' native electricity system,
// so nearby conductive metal can carry it onward.

elements.steam_generator = {
    name: "Steam Generator",
    color: ["#555b63", "#777e87", "#41464d"],
    behavior: behaviors.WALL,
    category: "machines",
    state: "solid",
    movable: false,
    hardness: 1,
    conduct: 1,
    desc: "Consumes nearby steam and produces a short electrical charge.",

    tick: function(pixel) {
        // Keep the generator's own charge active while it is producing power.
        if (pixel.charge && pixel.charge > 0) {
            doDefaults(pixel);
            return;
        }

        // Steam touching any of the eight neighboring cells powers it.
        for (var i = 0; i < adjacentCoords.length; i++) {
            var offset = adjacentCoords[i];
            var x = pixel.x + offset[0];
            var y = pixel.y + offset[1];

            if (isEmpty(x, y, true)) continue;

            var neighbor = pixelMap[x][y];
            if (neighbor.element === "steam") {
                deletePixel(x, y);
                pixel.charge = 5;
                break;
            }
        }

        doDefaults(pixel);
    },
    properties: {
        charge: 0
    },
};
