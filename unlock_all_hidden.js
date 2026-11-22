// Kenny's Hidden Element Unlocker
// Sandboxels browser mod
//
// Wait until Sandboxels has finished loading its elements, then reveal
// every element that is marked hidden in the element definitions.

runAfterLoad(function () {
    var unlocked = 0;

    for (var elem in elements) {
        if (elements[elem] && elements[elem].hidden) {
            delete elements[elem].hidden;
            unlocked++;
        }
    }

    console.log("Kenny's Hidden Element Unlocker: revealed " + unlocked + " hidden elements.");
});