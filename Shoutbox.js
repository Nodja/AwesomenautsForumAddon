console.log("Shoutbox script loaded");

var currentVersion = 1.24;
var focus = true;
var lastRead;
var originalTitle;
var timeoutSessionOriginal;
var repost = false;
var MOTD = false;
function preparedMOTD()
{
    //$("#MOTD").html('#StoPlateJoinSnow');
    
    var target_date = new Date();
    target_date.setUTCMonth(7);
    target_date.setUTCDate(1);
    target_date.setUTCHours(17);
    target_date.setUTCMinutes(00);
    target_date.setUTCSeconds(00);
    
    var timerInterval = setInterval(function () {
        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;
        var total_time = seconds_left;
        
        var timestring = "";
        
        var addlink = false;
        
        if (total_time > 0)
        {
            if (total_time > 86400)
            {
                timestring += parseInt(seconds_left / 86400) + " day" + ((parseInt(seconds_left / 86400) != 1) ? "s" : "") + " ";
                seconds_left = seconds_left % 86400;
            }
            
            if (total_time > 3600)
            {
                timestring += parseInt(seconds_left / 3600) + "h ";
                seconds_left = seconds_left % 3600;
                
            }
            
            if (total_time > 60)
            {
                timestring += parseInt(seconds_left / 60) + "m ";
            }
            
            timestring += parseInt(seconds_left % 60) + "s ";
            
            if (total_time < 7200)
            {
                addlink = true;
            }
            
            $("#MOTD").html('Patch 2.6 \'big feature\' reveal livestream starts in: ' + timestring + '<a href="http://www.timeanddate.com/counters/fullscreen.html?mode=a&year=2014&month=8&day=1&hour=19&min=0&sec=0&p0=1302&msg=Awesomenauts%20Patch%202.6%20Livestream">Official countdown</a> ' + ((addlink) ? "- <a href='http://www.twitch.tv/RonimoGames'>Live here soon™!</a>" : ""));  
        }
        else
        {
            clearInterval(timerInterval);
            $("#MOTD").html("Patch 2.6 \'big feature\' reveal livestream! <span id='#onlineStatus'></span> <a href='http://www.twitch.tv/RonimoGames'>Watch it here!</a>");
            
        }
    }, 1000);
}

var Ronimo = new Array();
Ronimo.push("Jasper");

var Adminauts = new Array();
Adminauts.push("Sir Emo Chap");

var Specials = new Array();
Specials.push("Chirimorin");

var smilieslist = new Array();
smilieslist.push({code: ":monkey:", url: "http://www.awesomenauts.com/forum/images/smilies/Smiley_Monkey.gif", name: "Happy monkey"});
smilieslist.push({code: ":ayla:", url: "http://www.awesomenauts.com/forum/images/smilies/Smiley_Ayla.gif", name: "happy"});
smilieslist.push({code: ":aylaroll:", url: "http://www.awesomenauts.com/forum/images/smilies/Smiley_AylaRoll.gif", name: "roll"});
smilieslist.push({code: ":voltarroll:", url: "http://www.awesomenauts.com/forum/images/smilies/Smiley_VoltarRoll.gif", name: "roll eyes"});
smilieslist.push({code: ":drool:", url: "http://www.awesomenauts.com/forum/images/smilies/Smiley_DerplDrool.gif", name: "drool"});
smilieslist.push({code: ":thumb:", url: "http://www.awesomenauts.com/forum/images/smilies/Smiley_FroggyThumb.gif", name: "thumb"});
smilieslist.push({code: ":leoneyes:", url: "http://www.awesomenauts.com/forum/images/smilies/Smiley_LeonEyes.gif", name: "leonEyes"});
smilieslist.push({code: ":shrug:", url: "http://www.awesomenauts.com/forum/images/smilies/Smiley_FrogShrug.gif", name: "shrug"});
smilieslist.push({code: ":gnawshock:", url: "http://www.awesomenauts.com/forum/images/smilies/Smiley_GnawSurprise.gif", name: "shock"});
smilieslist.push({code: ":huh:", url: "http://www.awesomenauts.com/forum/images/smilies/Smiley_YuriHuh.gif", name: "huh"});
smilieslist.push({code: ":lolstar:", url: "http://www.awesomenauts.com/forum/images/smilies/Smiley_lolstar.gif", name: "laughing"});
smilieslist.push({code: ":derp:", url: "http://www.awesomenauts.com/forum/images/smilies/SpikeDerp.gif", name: "derp"});
smilieslist.push({code: ":kiss:", url: "http://www.awesomenauts.com/forum/images/smilies/Smiley_CocoKiss.gif", name: "kiss"});
smilieslist.push({code: ":worship:", url: "http://www.awesomenauts.com/forum/images/smilies/Smiley_GenjiWorship.gif", name: "worship"});
smilieslist.push({code: ":rae:", url: "http://www.awesomenauts.com/forum/images/smilies/Smiley_Raelynn.gif", name: "Raelynn"});
smilieslist.push({code: ":blabl:", url: "http://www.awesomenauts.com/forum/images/smilies/Smiley_Derpl.gif", name: "baffled"});
smilieslist.push({code: ":drone:", url: "http://www.awesomenauts.com/forum/images/smilies/Smiley_Drone.gif", name: "mind_blown"});
smilieslist.push({code: ":chew:", url: "http://www.awesomenauts.com/forum/images/smilies/Smiley_ClunkBite.gif", name: "Chew"});
smilieslist.push({code: ":sleep:", url: "http://www.awesomenauts.com/forum/images/smilies/Smiley_ClunkNose.gif", name: "sleep"});
smilieslist.push({code: ":think:", url: "http://www.awesomenauts.com/forum/images/smilies/Smiley_SentryThinking.gif", name: "think"});
smilieslist.push({code: ":facepalm:", url: "http://www.awesomenauts.com/forum/images/smilies/Smiley_SwigginsFacepalm.gif", name: "facepalm"});
smilieslist.push({code: ":tear:", url: "http://www.awesomenauts.com/forum/images/smilies/Smiley_TedTear.gif", name: "tear"});
smilieslist.push({code: ":clap:", url: "http://www.awesomenauts.com/forum/images/smilies/Smiley_VinnieClapping.gif", name: "clapping"});
smilieslist.push({code: ":shady:", url: "http://www.awesomenauts.com/forum/images/smilies/Smiley_VoltarLook.gif", name: "shady"});
smilieslist.push({code: ":party:", url: "http://www.awesomenauts.com/forum/images/smilies/Smiley_PartyPenny.gif", name: "party"});

var customSmilieslist = new Array();
customSmilieslist.push({name: "Duck (by RiceMaster)", url: "http://i83.servimg.com/u/f83/17/49/01/19/ducks10.gif", code: ":duck:"});
customSmilieslist.push({name: "Prestige 10 (by RiceMaster)", url: "http://i83.servimg.com/u/f83/17/49/01/19/presti10.gif", code: ":p10:"});
customSmilieslist.push({name: "League 1 (by RiceMaster)", url: "http://i83.servimg.com/u/f83/17/49/01/19/lg1_g11.gif", code: ":l1:"});
customSmilieslist.push({name: "League 2 (by RiceMaster)", url: "http://i83.servimg.com/u/f83/17/49/01/19/lg210.gif", code: ":l2:"});
customSmilieslist.push({name: "League 3 (by RiceMaster)", url: "http://i83.servimg.com/u/f83/17/49/01/19/lg310.gif", code: ":l3:"});
customSmilieslist.push({name: "League 4 (by RiceMaster)", url: "http://i83.servimg.com/u/f83/17/49/01/19/lg410.gif", code: ":l4:"});
customSmilieslist.push({name: "Frog (by RiceMaster)", url: "http://i36.servimg.com/u/f36/17/49/01/19/frogst10.gif", code: ":frog:"});
customSmilieslist.push({name: "Froggy G", url: "http://cdn.steamcommunity.com/economy/emoticon/froggy", code: ":froggy:"});
customSmilieslist.push({name: "Froggy Deal With It (by Lune)", url: "http://s8.postimg.org/blaa6zrzl/frog_deal_copy.gif", code: ":dealwithit:"});
customSmilieslist.push({name: "Lonestar", url: "http://cdn.steamcommunity.com/economy/emoticon/lonestar", code: ":lonestar:"});
customSmilieslist.push({name: "Creepy Leon (by RiceMaster)", url: "http://i83.servimg.com/u/f83/17/49/01/19/creep_10.gif", code: ":creepyleon:"});
customSmilieslist.push({name: "Clunk", url: "http://cdn.steamcommunity.com/economy/emoticon/clunk", code: ":clunk:"});
customSmilieslist.push({name: "Clunk (by Muffel)", url: "http://i.imgur.com/Bf5wECc.gif", code: ":clunkangry:"});
customSmilieslist.push({name: "Cluck (by conorbebe)", url: "http://i.imgur.com/BBctJc8.gif", code: ":cluck:"});
customSmilieslist.push({name: "Voltar (by conorbebe)", url: "http://i.imgur.com/KDfPpJQ.gif", code: ":voltar:"});
customSmilieslist.push({name: "Gnaw (by conorbebe)", url: "http://i.imgur.com/gZ89B3d.gif", code: ":gnaw:"});
customSmilieslist.push({name: "Gnaw spit (by conorbebe)", url: "http://i.imgur.com/M50popG.gif", code: ":gnawspit:"});
customSmilieslist.push({name: "Plant1 (by Muffel)", url: "http://i.imgur.com/LjlUxjU.gif", code: ":plant1:"});
customSmilieslist.push({name: "Plant2 (by Muffel)", url: "http://i.imgur.com/4zgWOG5.gif", code: ":plant2:"});
customSmilieslist.push({name: "Coco (by RiceMaster)", url: "http://i36.servimg.com/u/f36/17/49/01/19/coco10.gif", code: ":coco:"});
customSmilieslist.push({name: "Yummy Skolldir (by RiceMaster)", url: "http://i83.servimg.com/u/f83/17/49/01/19/yum_sk11.gif", code: ":yummy:"});
customSmilieslist.push({name: "Skolldir hmm (by RiceMaster)", url: "http://i.imgur.com/neuQLpL.gif", code: ":hmm:"});
customSmilieslist.push({name: "Skolldir flip (by conorbebe)", url: "http://i.imgur.com/37JCLC7.gif", code: ":tableflip:"});
customSmilieslist.push({name: "Skolldir fist (by Lune)", url: "http://s27.postimg.org/9nly4htjz/giff.gif", code: ":shakefist:"});
customSmilieslist.push({name: "Rae YJM (by RiceMaster)", url: "http://i83.servimg.com/u/f83/17/49/01/19/rae_ma10.gif", code: ":YJM:"});
customSmilieslist.push({name: "Rae Smirk (by RiceMaster)", url: "http://i36.servimg.com/u/f36/17/49/01/19/rae_ne10.gif", code: ":smirk:"});
customSmilieslist.push({name: "Derpl (by RiceMaster)", url: "http://i.imgur.com/8lWTMmJ.png", code: ":derpl:"});
customSmilieslist.push({name: "Vinnie (by RiceMaster)", url: "http://i83.servimg.com/u/f83/17/49/01/19/vini_d10.gif", code: ":vinnie:"});
customSmilieslist.push({name: "Vinnie Face (by RiceMaster)", url: "http://i83.servimg.com/u/f83/17/49/01/19/vini_h10.gif", code: ":vinnieface:"});
customSmilieslist.push({name: "Blow spike (by conorbebe)", url: "http://i.imgur.com/jm1zqZd.gif", code: ":spikeblow:"});
customSmilieslist.push({name: "Genji the Gray (by RiceMaster)", url: "http://i36.servimg.com/u/f36/17/49/01/19/wizrd_10.gif", code: ":genjismoke:"});
customSmilieslist.push({name: "Cocoon (by Muffel)", url: "http://i.imgur.com/HdvTy6k.gif", code: ":cocoon:"});
customSmilieslist.push({name: "Headbanging Swiggins (by Muffel)", url: "http://i.imgur.com/Nt1ng34.gif", code: ":headbang:"});
customSmilieslist.push({name: "Red Droid (by Muffel)", url: "http://i.imgur.com/iqKzH2e.gif", code: ":reddroid:"});
customSmilieslist.push({name: "Blue Droid (by Muffel)", url: "http://i.imgur.com/8TJJRjx.gif", code: ":bluedroid:"});
customSmilieslist.push({name: "Creep", url: "http://cdn.steamcommunity.com/economy/emoticon/creep", code: ":creep:"});
customSmilieslist.push({name: "Solar Crab (by RiceMaster)", url: "http://i.imgur.com/P9qsMhz.png", code: ":solarcrab:"});
customSmilieslist.push({name: "Solar", url: "http://cdn.steamcommunity.com/economy/emoticon/solar", code: ":solar:"});
customSmilieslist.push({name: "Awesome", url: "http://cdn.steamcommunity.com/economy/emoticon/awesome", code: ":awesome:"});
customSmilieslist.push({name: "Toast (by RiceMaster)", url: "http://i83.servimg.com/u/f83/17/49/01/19/toooas10.gif", code: ":toast:"});

//I see what you're trying to do!
var secretSmilieslist = new Array();
var _0xed16=["\x54\x75\x6D\x62\x6C\x65\x63\x72\x61\x62","\x68\x74\x74\x70\x3A\x2F\x2F\x69\x2E\x69\x6D\x67\x75\x72\x2E\x63\x6F\x6D\x2F\x6C\x39\x4A\x42\x70\x31\x35\x2E\x67\x69\x66","\x3A\x74\x75\x6D\x62\x6C\x65\x63\x72\x61\x62\x3A","\x70\x75\x73\x68","\x54\x75\x6D\x62\x6C\x65\x77\x65\x65\x64","\x68\x74\x74\x70\x3A\x2F\x2F\x69\x2E\x69\x6D\x67\x75\x72\x2E\x63\x6F\x6D\x2F\x77\x37\x48\x67\x52\x57\x46\x2E\x67\x69\x66","\x3A\x74\x75\x6D\x62\x6C\x65\x77\x65\x65\x64\x3A","\x68\x74\x74\x70\x3A\x2F\x2F\x69\x2E\x69\x6D\x67\x75\x72\x2E\x63\x6F\x6D\x2F\x43\x7A\x56\x4D\x56\x6E\x6B\x2E\x67\x69\x66","\x3A\x74\x75\x6D\x62\x6C\x65\x77\x65\x65\x64\x32\x3A","\x68\x74\x74\x70\x3A\x2F\x2F\x69\x2E\x69\x6D\x67\x75\x72\x2E\x63\x6F\x6D\x2F\x4F\x78\x43\x55\x54\x41\x6D\x2E\x67\x69\x66","\x3A\x74\x75\x6D\x62\x6C\x65\x77\x65\x65\x64\x33\x3A","\x6F\x2E\x4F","\x68\x74\x74\x70\x3A\x2F\x2F\x63\x64\x6E\x2E\x73\x74\x65\x61\x6D\x63\x6F\x6D\x6D\x75\x6E\x69\x74\x79\x2E\x63\x6F\x6D\x2F\x65\x63\x6F\x6E\x6F\x6D\x79\x2F\x65\x6D\x6F\x74\x69\x63\x6F\x6E\x2F\x73\x70\x61\x7A\x64\x75\x6E\x6E\x6F","\x3A\x73\x70\x61\x7A\x64\x75\x6E\x6E\x6F\x3A","\x6D\x61\x6E\x74\x69\x73","\x68\x74\x74\x70\x3A\x2F\x2F\x63\x64\x6E\x2E\x73\x74\x65\x61\x6D\x63\x6F\x6D\x6D\x75\x6E\x69\x74\x79\x2E\x63\x6F\x6D\x2F\x65\x63\x6F\x6E\x6F\x6D\x79\x2F\x65\x6D\x6F\x74\x69\x63\x6F\x6E\x2F\x66\x74\x6C\x6D\x61\x6E\x74\x69\x73","\x3A\x66\x74\x6C\x6D\x61\x6E\x74\x69\x73\x3A","\x43\x6F\x66\x66\x65\x65\x20\x62\x72\x65\x61\x6B","\x68\x74\x74\x70\x3A\x2F\x2F\x63\x64\x6E\x2E\x73\x74\x65\x61\x6D\x63\x6F\x6D\x6D\x75\x6E\x69\x74\x79\x2E\x63\x6F\x6D\x2F\x65\x63\x6F\x6E\x6F\x6D\x79\x2F\x65\x6D\x6F\x74\x69\x63\x6F\x6E\x2F\x62\x72\x65\x61\x6B","\x3A\x63\x6F\x66\x66\x62\x72\x65\x61\x6B\x3A"];secretSmilieslist[_0xed16[3]]({name:_0xed16[0],url:_0xed16[1],code:_0xed16[2]});secretSmilieslist[_0xed16[3]]({name:_0xed16[4],url:_0xed16[5],code:_0xed16[6]});secretSmilieslist[_0xed16[3]]({name:_0xed16[4],url:_0xed16[7],code:_0xed16[8]});secretSmilieslist[_0xed16[3]]({name:_0xed16[4],url:_0xed16[9],code:_0xed16[10]});secretSmilieslist[_0xed16[3]]({name:_0xed16[11],url:_0xed16[12],code:_0xed16[13]});secretSmilieslist[_0xed16[3]]({name:_0xed16[14],url:_0xed16[15],code:_0xed16[16]});secretSmilieslist[_0xed16[3]]({name:_0xed16[17],url:_0xed16[18],code:_0xed16[19]});

var filteredWords = new Array();
filteredWords.push("fuck", "dick", "cunt", "shit", "ass", "bitch", "blowjob", "cock", "cum", "faggot", "porn");

function updateSettings()
{
    if (GetUSStorage('version') == undefined)
    {
        SetUSStorage('version',0); //Set current version to 0. Will induce all default settings. 
    }

    if (GetUSStorage('version') < currentVersion)
    {
        var storedVersion = GetUSStorage('version');
        console.log('settings for version ' + storedVersion + ' found. Updating...');
        
        if (storedVersion < 1.13)
        {
            SetUSStorage('autoHideNewMessMarker', true);
        }
        
        if (storedVersion < 1.15)
        {
            SetUSStorage('noTimeout', false);
        }
        
        if (storedVersion < 1.16)
        {
            SetUSStorage('noRefresh', true);
        }
        
        if (storedVersion < 1.17)
        {
            SetUSStorage('tryPostAgain', false);
            SetUSStorage('savedMsg', "");
        }
        
        if (storedVersion < 1.22)
        {
            SetUSStorage('wordFilter', true);
        }
        
        SetUSStorage('version', currentVersion);
        console.log('all settings updated to version ' + currentVersion);
    }
}

function noTimeoutChanged(newVal)
{
    if (newVal)
    {
        timeoutSession = function() { }
        $("#noRefreshDiv").slideDown();
    }
    else
    {
        timeoutSession = function() 
        {
            timeoutSessionOriginal();
            $("title").text("Disconnected - " + originalTitle);
        }
        $("#noRefreshDiv").slideUp();
    }
}

var oldData = "";
function formSubmitted(e)
{
    if (GetUSStorage('noTimeout') && GetUSStorage('noRefresh'))
    {
        e.preventDefault();
        $.ajax({
            type: 'post',
            url: $('form[name=shoutbox]').attr('action'),
            data: $('form[name=shoutbox]').serialize(),
            success: function(data) {
                oldData = data;
                console.log("Data callback received. Saved data");
                if (data.indexOf("alert('Double post detected or session timed out, in that case just post again.')") != -1 && !repost)
                {
                    console.log("Timeout detected... refreshing");
                    SetUSStorage('savedMsg', $("input[name=txtMessage]", $('form[name=shoutbox]')).val()); 
                    SetUSStorage('tryPostAgain', true);
                    location.reload(true);
                }
                else
                {
                    console.log("No timeout detected.");
                    
                    var newdata = $($(data).filter('#contentarea').html().bold());
                    newdata.find('script').remove();
                    $('#contentarea').html(newdata.html());
                    postEdits(false);
                    
                    $("input[name=txtMessage]", $('form[name=shoutbox]')).val(""); 
                }
                repost = false; 
            } 
        });
    }
}

function settingSaved(element)
{
    MsgSaved=document.createElement('span');
    $(element).append(MsgSaved);
    $(MsgSaved).html(" Saved!")
            .css("color", "#0A0")
            .delay(1500)
            .fadeOut(1000, function() {
                $(this).remove();
            });
}

function postEdits(newMess) //Changes to posts, should be called for every load. 
{
    //New message (instead of page load)
    if (newMess)
    {
        if (GetUSStorage('playSound')) //Play a sound
        {
            new Audio('http://static.freeshoutbox.net/newmess.wav').play();
        }
        
        if (!focus) //Edit the title
        {
            $("title").text("New messages - " + originalTitle);
        }
    }
    
    $(document).ready(function(){
        console.log("Refreshing post edits...");
        
        $(".postbody", $("#contentarea")).each(function(){ //Loop through all posts
            var post = this;
            
            //Word filter
            if (GetUSStorage('wordFilter'))
            {
                $.each(filteredWords, function() {
                    $(post).html($(post).html().replace(new RegExp(" " + this + " ", "gi"), ' * '));
                });
            }
            
            //Smilies
            $.each(smilieslist, function() {
                $(post).html($(post).html().replace(new RegExp(this.code, "gi"), '<img src="' + this.url + '" alt="'+this.code.replace(/:/gi,"")+'" title="'+this.name+'" />'));
            });
            $.each(customSmilieslist, function() {
                $(post).html($(post).html().replace(new RegExp(this.code, "gi"), '<img src="' + this.url + '" alt="'+this.code.replace(/:/gi,"")+'" title="'+this.name+'" />'));
            });
            $.each(secretSmilieslist, function() {
                $(post).html($(post).html().replace(new RegExp(this.code, "gi"), '<img src="' + this.url + '" alt="secret" title="'+this.name+'" />'));
            });
            
            //Find specials and color them accordingly
            $("b", this).each(function(){
                name = $(this).html().replace(/(<([^>]+)>)/ig,"").replace(":","");
                
                if (jQuery.inArray(name, Ronimo) != -1) { $(this).prepend("<img src=\"http://img4.wikia.nocookie.net/__cb20131011154248/awesomenauts/images/f/f2/UI_PrestigeRonimo.png\" height=\"17px\" /> "); $(this).wrap("<span style='color:#AA0000'></span>") }
                if (jQuery.inArray(name, Adminauts) != -1) { $(this).wrap("<span style='color:#FF9900'></span>") }
                if (jQuery.inArray(name, Specials) != -1) { $(this).wrap("<span style='color:#0000AA'></span>") }
            });
            
            //Unread marker
            if (!focus && ($(post).attr('id') > lastRead))
            {
                $(post).prepend('<span class="unreadMarker">* </span>');
            }
            
            //Parse BBcode, external library. 
            $(this).html(XBBCODE.process({text: $(this).html()}).html);
            
            //Timestamps
            var wrapper = $(this).parent()
            if (!$(wrapper).hasClass("wrapie")) { wrapper = $(wrapper).parent(); }
            var time = $(wrapper).attr("title").split("@ ")[1].split(" UTC")[0].split(":");
            dt = new Date();
            dt.setUTCHours(time[0]);
            var hours = dt.getHours(); //Javascript date will automatically convert to the right timezone.
            var minutes = time[1];
            $(post).prepend("[" + hours + ":" + minutes + "] ");
        });
    });
} 

var checker = 0;
function main() {
    console.log("Shoutbox jQuery found; running shoutbox script version " + currentVersion);
    
    originalTitle = $("title").text();
    
    $(window).focus(function(){
        focus = true;
        $("title").text(originalTitle);
        if (GetUSStorage('autoHideNewMessMarker'))
            $(".unreadMarker").delay(3000).fadeOut(500);
    });
    
    $(window).blur(function() {
        lastRead = $(".postbody", $("#contentarea")).first().attr('id');
        focus = false;
    });
    
    GetUSStorage = function(item)
    {
        return JSON.parse(localStorage.getItem("UserScript" + item));
    }

    SetUSStorage = function(item, value)
    {
        localStorage.setItem("UserScript" + item, JSON.stringify(value));
    }
    
    updateSettings();
    
    //Remove pesky ads
    $("div[id^=div-gpt-ad]").each(function() { $(this).remove(); });
    
    $('head').append('<link rel="stylesheet" href="http://chirimorin.github.io/AwesomenautsForumAddon/xbbcode/xbbcode.css" type="text/css" />');
    
    $(document).ready(function(){
        //Hide MOTD bar (used for loading this script)
        //Or add the message of the day instead!
        if (MOTD)
        {
            $("#ShoutboxScript").parent().prepend("<span id=\"MOTD\"></span>");
            preparedMOTD();
        }
        else
        {
            $("#ShoutboxScript").parent().parent().parent().parent().parent().hide();
        }
        
        //Custom emotes input
        $("#divOptions").prepend("<table cellspacing=\"5\" cellpadding=\"0\" border=\"0\" align=\"center\"> \
                                    <tbody> \
                                        <tr> \
                                            <td align=\"center\"><b>Default Smilies</b></td> \
                                            <td align=\"center\"><b>Custom Smilies</b></td> \
                                        </tr> \
                                        <tr> \
                                            <td align=\"center\" id=\"defaultsmilies\"></td> \
                                            <td align=\"center\" id=\"customsmilies\"></td> \
                                        </tr> \
                                    </tbody> \
                                </table>");

        $.each(smilieslist, function() {
            $("#defaultsmilies").append('<a href="#" onclick="addSmiley(\''+this.code+'\')" style="line-height: 20px;"><img src="'+this.url+'" alt="'+this.code.replace(/:/gi,"")+'" title="'+this.name+'" hspace="2"></a>');
        });
        $.each(customSmilieslist, function() {
            $("#customsmilies").append('<a href="#" onclick="addSmiley(\''+this.code+'\')" style="line-height: 20px;"><img src="'+this.url+'" alt="'+this.code.replace(/:/gi,"")+'" title="'+this.name+'" hspace="2"></a>');
        });
        
        $("input[name='txtMessage']").width('100%');
        
        if ($('input[name=newmess]').length != 0) //Settings. Only needed on first page.
        {
            $('input[name=newmess]').attr('checked', false);
            savesoundselection();
            $('input[name=newmess]').hide().after('<input type="checkbox" id="playsound" name="playsound" onchange="SetUSStorage(\'playSound\', this.checked)">');
            $('#playsound').attr('checked', GetUSStorage('playSound'));
            
            $('#playsound').before('<span><input type="checkbox" id="autoHideNewMessMarker" onchange="SetUSStorage(\'autoHideNewMessMarker\', this.checked); settingSaved($(this).parent());"> Auto hide unread message marker</span><br />\
                                    <span><input type="checkbox" id="noTimeout" onchange="SetUSStorage(\'noTimeout\', this.checked); noTimeoutChanged(this.checked); settingSaved($(this).parent());"> Turn off chat timeout</span><br />\
                                    <div id="noRefreshDiv"><span><input type="checkbox" id="noRefresh" onchange="SetUSStorage(\'noRefresh\', this.checked); settingSaved($(this).parent());"> No refresh mode (experimental)</span><br /></div>\
                                    <span><input type="checkbox" id="wordFilter" onchange="SetUSStorage(\'wordFilter\', this.checked); settingSaved($(this).parent());"> Word filter</span><br />');
            
            $('#autoHideNewMessMarker').attr('checked', GetUSStorage('autoHideNewMessMarker'));
            $('#noTimeout').attr('checked', GetUSStorage('noTimeout'));
            $('#noRefresh').attr('checked', GetUSStorage('noRefresh'));
            $('#wordFilter').attr('checked', GetUSStorage('wordFilter'));
            
            
            $('form[name=shoutbox]').submit(formSubmitted);
        }
        
        //Edit all posts
        postEdits(false);
        
        //Make sure editing the posts is part of re-rendering the shoutbox (This is always called, no matter your user-level or loading method)
        var renderShoutboxOld = renderShoutbox;
        renderShoutbox = function(data) {
            renderShoutboxOld(data);
            postEdits(true);
        }
        
        timeoutSessionOriginal = timeoutSession;
        noTimeoutChanged(GetUSStorage('noTimeout'));
        
        //Mark the latest post as read
        lastRead = $(".postbody", $("#contentarea")).first().attr('id');
        
        //If a timeout has been detected, retry posting the message. 
        if (GetUSStorage('tryPostAgain'))
        {
            console.log("tryPostAgain found. Reposting message.");
            $("input[name=txtMessage]", $('form[name=shoutbox]')).val(GetUSStorage('savedMsg'));
            SetUSStorage('tryPostAgain', false);
            repost = true;
            $('form[name=shoutbox]').submit();
        }
    });
}

function checkJquery() {
    if (window.jQuery) 
        main();
    else
        window.setTimeout(checkJquery, 100);
}    

checkJquery();


