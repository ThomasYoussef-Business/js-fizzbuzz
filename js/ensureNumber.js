/* ----------------- This method makes it so you don't need ----------------- */
/* ---------- a while loop to get float or int input from the user ---------- */
function ensureFloatFromPrompt(firstPromptMessage, errorMessage, keepAskingIfTrue) {
    "use strict";
    keepAskingIfTrue = keepAskingIfTrue ? keepAskingIfTrue : (x) => false;
    let parsedValue = parseFloat(prompt(firstPromptMessage));
    if (!isNaN(parsedValue) && !keepAskingIfTrue(parsedValue)) {
        return parsedValue; // If the parsed value is all good, just return that
    }

    // Otherwise, keep asking until it is
    while (isNaN(parseFloat(parsedValue)) ||
        keepAskingIfTrue(parseFloat(parsedValue))) {
        parsedValue = prompt(errorMessage);
    }

    return parseFloat(parsedValue);
}

// To get an integer version, let's just get the float version and parse to int
function ensureIntFromPrompt(firstPromptResult, errorMessage, keepAskingIfTrue) {
    "use strict";
    return parseInt(ensureFloatFromPrompt(firstPromptResult, errorMessage, keepAskingIfTrue));
}

export {ensureFloatFromPrompt, ensureIntFromPrompt}