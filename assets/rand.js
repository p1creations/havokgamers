var casFeat = '<iframe src="https://player.twitch.tv/?video=v913456125&parent=www.havokgamers.com&autoplay=true&muted=false" height="500" width="100%" allowfullscreen="true"></iframe>';
var daddyFeat = '<iframe src="https://player.twitch.tv/?video=v1108705814&parent=www.havokgamers.com&autoplay=true&muted=false" height="500" width="100%" allowfullscreen="true"></iframe>';
var eirFeat = '<iframe src="https://clips.twitch.tv/embed?clip=EagerAssiduousSushiBuddhaBar-gRimpZBSFn_UHgsG&parent=www.havokgamers.com&autoplay=true&muted=false" height="500" width="100%" allowfullscreen="true"></iframe>';
var kralkFeat = '<iframe src="https://clips.twitch.tv/embed?clip=FlirtyInterestingArmadilloFeelsBadMan-0pA31RU8DfzC8y-T&parent=www.havokgamers.com&autoplay=true&muted=false" height="500" width="100%" allowfullscreen="true"></iframe>';
var p1Feat = '<iframe src="https://player.twitch.tv/?video=v1218012018&parent=www.havokgamers.com&autoplay=true&muted=false" height="500" width="100%" allowfullscreen="true"></iframe>';
var shelbyFeat = '<iframe src="https://clips.twitch.tv/embed?clip=HungrySpookyCougarDeIlluminati-JG-vgKszrWAvjLqi&parent=www.havokgamers.com&autoplay=true&muted=false" height="500" width="100%" allowfullscreen="true"></iframe>';
var shipFeat = '<iframe src="https://clips.twitch.tv/embed?clip=CulturedCulturedHyenaDancingBanana-Exd5W0ju5qrYW8R_&parent=www.havokgamers.com&autoplay=true&muted=false" height="500" width="100%" allowfullscreen="true"></iframe>';
var skyFeat = '<iframe src="https://player.twitch.tv/?video=v1057407054&parent=www.havokgamers.com&autoplay=true&muted=false" height="500" width="100%" allowfullscreen="true"></iframe>';
var sitloFeat = '<iframe src="https://player.twitch.tv/?video=1572871233&parent=www.havokgamers.com&autoplay=true&muted=false" height="500" width="100%" allowfullscreen="true"></iframe>';
var databyte = '<iframe src="https://player.twitch.tv/?video=v1426055302&parent=www.havokgamers.com&autoplay=true&muted=true" height="500" width="100%" allowfullscreen="true"></iframe>';
var iwarriors = '<iframe src="https://clips.twitch.tv/embed?clip=AcceptableFrozenNikudonGingerPower-V1Kj5moxpy8eqk_c&parent=www.havokgamers.com&autoplay=true&muted=true" height="500" width="100%" allowfullscreen="true"></iframe>';
var b0sbeatdown = '<iframe src="https://clips.twitch.tv/embed?clip=StrongTolerantWoodpeckerMcaT-v9HeE5j9TemZjdPi?&parent=www.havokgamers.com&autoplay=true&muted=true" height="500" width="100%" allowfullscreen="true"></iframe>';
var megamimoritv = '<iframe src="https://clips.twitch.tv/embed?clip=BigCleverAlfalfaHeyGirl-oizJ4yrlIO06Y1nU&parent=www.havokgamers.com&autoplay=true&muted=true" height="500" width="100%" allowfullscreen="true"></iframe>';
var sykogrimm = '<iframe src="https://clips.twitch.tv/embed?clip=FrozenSteamyCocoaDatBoi-7sGC89vkOHJ_Dt5P&parent=www.havokgamers.com&autoplay=true&muted=true" height="500" width="100%" allowfullscreen="true"></iframe>';
var expoxmvpz = '<iframe src="https://clips.twitch.tv/embed?clip=ImpartialCleanGnatPoooound-eX4W0ZmCXkaKLgPA&parent=www.havokgamers.com&autoplay=true&muted=true" height="500" width="100%" allowfullscreen="true"></iframe>';
var countrymama9388 = '<iframe src="https://player.twitch.tv/?video=1220664481&parent=www.havokgamers.com&autoplay=true&muted=true" height="500" width="100%" allowfullscreen="true"></iframe>';

function myFunction() {
  var rand = Math.floor((Math.random() * 16) + 1);
  if(rand === 1) { rand = casFeat;}
  if(rand === 2) { rand = daddyFeat;}
  if(rand === 3) { rand = eirFeat;}
  if(rand === 4) { rand = kralkFeat;}
  if(rand === 5) { rand = p1Feat;}
  if(rand === 6) { rand = shelbyFeat;}
  if(rand === 7) { rand = shipFeat;}
  if(rand === 8) { rand = skyFeat;}
  if(rand === 9) { rand = sitloFeat;}
  if(rand === 10) { rand = databyte;}
  if(rand === 11) { rand = iwarriors;}
  if(rand === 12) { rand = b0sbeatdown;}
  if(rand === 13) { rand = megamimoritv;}
  if(rand === 14) { rand = sykogrimm;}
  if(rand === 15) { rand = expoxmvpz;}
  if(rand === 16) { rand = countrymama9388;}


  document.getElementById("featuredContent").innerHTML = rand;
  
}
