console.log("Extra smilies loaded");

//Thanks to Nodja for this code.

var smilieslist = new Array();
smilieslist.push({name: "Duck (by RiceMaster)", url: "http://i83.servimg.com/u/f83/17/49/01/19/ducks10.gif", code: ":duck:"});
smilieslist.push({name: "Prestige 10 (by RiceMaster)", url: "http://i83.servimg.com/u/f83/17/49/01/19/presti10.gif", code: ":p10:"});
smilieslist.push({name: "League 1 (by RiceMaster)", url: "http://i83.servimg.com/u/f83/17/49/01/19/lg1_g11.gif", code: ":l1:"});
smilieslist.push({name: "League 2 (by RiceMaster)", url: "http://i83.servimg.com/u/f83/17/49/01/19/lg210.gif", code: ":l2:"});
smilieslist.push({name: "League 3 (by RiceMaster)", url: "http://i83.servimg.com/u/f83/17/49/01/19/lg310.gif", code: ":l3:"});
smilieslist.push({name: "League 4 (by RiceMaster)", url: "http://i83.servimg.com/u/f83/17/49/01/19/lg410.gif", code: ":l4:"});
smilieslist.push({name: "Frog (by RiceMaster)", url: "http://i36.servimg.com/u/f36/17/49/01/19/frogst10.gif", code: ":frog:"});
smilieslist.push({name: "Froggy G", url: "http://cdn.steamcommunity.com/economy/emoticon/froggy", code: ":froggy:"});
smilieslist.push({name: "Froggy Deal With It (by Lune)", url: "http://s8.postimg.org/blaa6zrzl/frog_deal_copy.gif", code: ":dealwithit:"});
smilieslist.push({name: "Lonestar", url: "http://cdn.steamcommunity.com/economy/emoticon/lonestar", code: ":lonestar:"});
smilieslist.push({name: "Creepy Leon (by RiceMaster)", url: "http://i83.servimg.com/u/f83/17/49/01/19/creep_10.gif", code: ":creepyleon:"});
smilieslist.push({name: "Clunk", url: "http://cdn.steamcommunity.com/economy/emoticon/clunk", code: ":clunk:"});
smilieslist.push({name: "Clunk (by Muffel)", url: "http://i.imgur.com/Bf5wECc.gif", code: ":clunkangry:"});
smilieslist.push({name: "Cluck (by conorbebe)", url: "http://i.imgur.com/BBctJc8.gif", code: ":cluck:"});
smilieslist.push({name: "Voltar (by conorbebe)", url: "http://i.imgur.com/KDfPpJQ.gif", code: ":voltar:"});
smilieslist.push({name: "Gnaw (by conorbebe)", url: "http://i.imgur.com/gZ89B3d.gif", code: ":gnaw:"});
smilieslist.push({name: "Gnaw spit (by conorbebe)", url: "http://i.imgur.com/M50popG.gif", code: ":gnawspit:"});
smilieslist.push({name: "Plant1 (by Muffel)", url: "http://i.imgur.com/LjlUxjU.gif", code: ":plant1:"});
smilieslist.push({name: "Plant2 (by Muffel)", url: "http://i.imgur.com/4zgWOG5.gif", code: ":plant2:"});
smilieslist.push({name: "Coco (by RiceMaster)", url: "http://i36.servimg.com/u/f36/17/49/01/19/coco10.gif", code: ":coco:"});
smilieslist.push({name: "Yummy Skolldir (by RiceMaster)", url: "http://i83.servimg.com/u/f83/17/49/01/19/yum_sk11.gif", code: ":yummy:"});
smilieslist.push({name: "Skolldir hmm (by RiceMaster)", url: "http://i.imgur.com/neuQLpL.gif", code: ":hmm:"});
smilieslist.push({name: "Skolldir flip (by conorbebe)", url: "http://i.imgur.com/37JCLC7.gif", code: ":tableflip:"});
smilieslist.push({name: "Skolldir fist (by Lune)", url: "http://s27.postimg.org/9nly4htjz/giff.gif", code: ":shakefist:"});
smilieslist.push({name: "Rae YJM (by RiceMaster)", url: "http://i83.servimg.com/u/f83/17/49/01/19/rae_ma10.gif", code: ":YJM:"});
smilieslist.push({name: "Rae Smirk (by RiceMaster)", url: "http://i36.servimg.com/u/f36/17/49/01/19/rae_ne10.gif", code: ":smirk:"});
smilieslist.push({name: "Derpl (by RiceMaster)", url: "http://i.imgur.com/8lWTMmJ.png", code: ":derpl:"});
smilieslist.push({name: "Vinnie (by RiceMaster)", url: "http://i83.servimg.com/u/f83/17/49/01/19/vini_d10.gif", code: ":vinnie:"});
smilieslist.push({name: "Vinnie Face (by RiceMaster)", url: "http://i83.servimg.com/u/f83/17/49/01/19/vini_h10.gif", code: ":vinnieface:"});
smilieslist.push({name: "Blow spike (by conorbebe)", url: "http://i.imgur.com/jm1zqZd.gif", code: ":spikeblow:"});
smilieslist.push({name: "Genji the Gray (by RiceMaster)", url: "http://i36.servimg.com/u/f36/17/49/01/19/wizrd_10.gif", code: ":genjismoke:"});
smilieslist.push({name: "Cocoon (by Muffel)", url: "http://i.imgur.com/HdvTy6k.gif", code: ":cocoon:"});
smilieslist.push({name: "Headbanging Swiggins (by Muffel)", url: "http://i.imgur.com/Nt1ng34.gif", code: ":headbang:"});
smilieslist.push({name: "Red Droid (by Muffel)", url: "http://i.imgur.com/iqKzH2e.gif", code: ":reddroid:"});
smilieslist.push({name: "Blue Droid (by Muffel)", url: "http://i.imgur.com/8TJJRjx.gif", code: ":bluedroid:"});
smilieslist.push({name: "Creep", url: "http://cdn.steamcommunity.com/economy/emoticon/creep", code: ":creep:"});
smilieslist.push({name: "Solar Crab (by RiceMaster)", url: "http://i.imgur.com/P9qsMhz.png", code: ":solarcrab:"});
smilieslist.push({name: "Solar", url: "http://cdn.steamcommunity.com/economy/emoticon/solar", code: ":solar:"});
smilieslist.push({name: "Awesome", url: "http://cdn.steamcommunity.com/economy/emoticon/awesome", code: ":awesome:"});
smilieslist.push({name: "Toast (by RiceMaster)", url: "http://i83.servimg.com/u/f83/17/49/01/19/toooas10.gif", code: ":toast:"});



//smilieslist.push({name: " (by )", url: "", code: "::"});



function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

//if(window.location.href.indexOf("posting.php") > -1) //figure out if we're posting
if (typeof help_line != 'undefined') //figure out if bbcode help texts are loaded (aka, are we posting?)
{
   var form = document.getElementsByName('postform')[0];
   if (form.attachEvent) {
      form.attachEvent("submit", submitHandler);
   } else {
      form.addEventListener("submit", submitHandler);
   }
   
   var message = document.getElementsByName("message")[0].value;

   
   for(i=0;i<smilieslist.length;i++)
   {
      var re = new RegExp(escapeRegExp("[img]" + smilieslist[i].url  + "[/img]"),"gi");
      message = message.replace(re, smilieslist[i].code);
   }
   document.getElementsByName("message")[0].value = message;
   
   //get all row1 tds
   var allRow1 = document.evaluate
                                    (
                                      '//td[@class="row1"]',
                                      document, 
                                      null,
                                      XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
                                      null
                                    );
   for (var i=0; i<allRow1.snapshotLength; i++) 
   {
      var elem = allRow1.snapshotItem(i);
      if (elem.innerHTML.indexOf("Message body:") > -1) break;
   }
   elem.innerHTML += "<table width=\"100%\" cellspacing=\"5\" cellpadding=\"0\" border=\"0\" align=\"center\"> \
      <tbody> \
         <tr> \
            <td class=\"gensmall\" align=\"center\"><b>Custom Smilies</b></td> \
         </tr> \
         <tr> \
            <td align=\"center\" id=\"customsmilies\"> \
            </td> \
         </tr> \
         <tr> \
            <td class=\"gensmall\" align=\"center\"><a href=\"http://www.awesomenauts.com/forum/viewtopic.php?f=12&t=14829\">RiceMasters thread</a><br /> \
            <a href=\"http://www.awesomenauts.com/forum/viewtopic.php?f=12&t=18484\">Muffels thread</a><br /> \
            <a href=\"http://www.awesomenauts.com/forum/viewtopic.php?f=12&t=31372\">Lunes thread</a></td> \
         </tr> \
      </tbody> \
   </table>";
   drawSmilies();
}

function submitHandler(e)
{
   var message = document.getElementsByName("message")[0].value;
   
   for(i=0;i<smilieslist.length;i++)
   {
      var re = new RegExp(smilieslist[i].code,"gi");
      message = message.replace(re, "[img]" + smilieslist[i].url + "[/img]");
   }
   document.getElementsByName("message")[0].value = message;
    return false;
}

function drawSmilies()
{
   var smilieshtml = '';
   for(i=0;i<smilieslist.length;i++)
   {
      smilieshtml += "<a href=\"#\" onclick=\"insert_text('";
      smilieshtml += smilieslist[i].code + "', true); return false;\" style=\"line-height: 20px;\"><img src=\"";
      smilieshtml += smilieslist[i].url + "\" alt=\"";
      smilieshtml += smilieslist[i].code + "\" title=\"";
      smilieshtml += smilieslist[i].name + "\" hspace=\"2\" vspace=\"2\"></a>\n";
   }
   document.getElementById("customsmilies").innerHTML = smilieshtml;
}
