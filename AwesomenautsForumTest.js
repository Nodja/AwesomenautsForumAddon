console.log("Test script loaded");
// Option values for test script

//settings.push({setting: '', type: '', title: '', description: '', group: });

// Load the normal script (no need to check for legacy, legacy can't load test script)
console.log("Loading live script...");
var script = document.createElement("script");
script.type = "text/javascript";
script.src = "http://chirimorin.github.io/AwesomenautsForumAddon/AwesomenautsForumLatest.js?v=" + currentVersion;
document.body.appendChild(script);


//Test functionality starts here

