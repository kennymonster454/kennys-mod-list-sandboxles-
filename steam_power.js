// Kenny's Steam Generator
// Sandboxels browser mod
// Based on the working SteamTurbine pattern in the official ExtraMachines mod.
//
// Steam touching the generator is consumed and starts Sandboxels electricity.
// Conductive materials touching the generator can carry the charge.

runAfterLoad(function () {
    elements.steam_generator = {
        name: "Steam Generator",
        color: "#826c6e",
        behavior: behaviors.WALL,
        desc: "Consumes touching steam and produces an electrical charge.",
        tick: function (pixel) {
            for (var i = 0; i < adjacentCoords.length; i++) {
                var coords = adjacentCoords[i];
                var x = pixel.x + coords[0];
                var y = pixel.y + coords[1];

                if (!isEmpty(x, y, true)) {
                    var sensed = pixelMap[x][y];
                    if (sensed.element === "steam" || sensed.element === "rad_steam") {
                        deletePixel(x, y);
                        pixel.charge = 5;
                        break;
                    }
                }
            }
            doDefaults(pixel);
        },
        conduct: 1,
        movable: false,
        category: "machines",
        state: "solid",
        hardness: 1,
    };
});