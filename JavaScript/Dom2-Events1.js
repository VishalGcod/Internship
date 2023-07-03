var CdnEle = document.getElementById("cdn");
var IniCdnEle = CdnEle.innerHTML;
var bg = document.getElementById("main");

var interval = setInterval(function () {
  if (IniCdnEle > 0) {
    IniCdnEle -= 1;
    CdnEle.innerHTML = IniCdnEle;
    CdnEle.style.fontSize = IniCdnEle * 60 + "px";
    bg.style.width = IniCdnEle * 10 + "vw";
    bg.style.height = IniCdnEle * 10 + "vh";
  }
}, 1000);

function stop() {
  clearInterval(interval);
}
