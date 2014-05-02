console.log("Test script loaded");
//Load the normal script (no need to check for legacy, legacy can't load test script)
console.log("Loading live script...");
var script = document.createElement("script");
script.type = "text/javascript";
script.src = "http://chirimorin.github.io/AwesomenautsForumAddon/AwesomenautsForumLatest.js?v=" + currentVersion;
document.body.appendChild(script);

//Test functionality starts here

if (GetUSStorage('betterMarkRead'))
{
    var markReadLink = $('a').filter(function(index) { return $(this).text() === "Mark topics read"; });
    var markReadURL = $(markReadLink).prop('href');
    $(markReadLink).attr("href","#");
    $(markReadLink).click(function() {
        $("#wrapcentre").append('<iframe id="markTopicsRead" height="0" width = "0" frameborder="0"></iframe>');
        $("iframe#markTopicsRead").attr('src', markReadURL);
        $("iframe#markTopicsRead").load(function() {
            location.reload(true);
        });
        return false;
    });
}