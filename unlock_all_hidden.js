// Kenny's Hidden Element Unlocker
// Sandboxels browser mod
//
// Reveals every element marked hidden in the game's element menu.
// Load this mod, then refresh/reload the game if the menu does not update.

(function () {
    if (typeof elements === "undefined") {
        console.error("Kenny's Hidden Element Unlocker: Sandboxels elements are not ready.");
        return;
    }

    var unlocked = 0;

    for (var elementName in elements) {
        if (!Object.prototype.hasOwnProperty.call(elements, elementName)) continue;

        var element = elements[elementName];
        if (element && element.hidden) {
            element.hidden = false;
            unlocked++;
        }
    }

    console.log("Kenny's Hidden Element Unlocker: revealed " + unlocked + " hidden elements.");
})();