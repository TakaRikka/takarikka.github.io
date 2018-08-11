document.getElementById("checklist").addEventListener("click", function(ev) {
   if (ev.target && ev.target.nodeName == "LI") {
      ev.target.classList.toggle("checked");
  }
});

function parseXML(name) {
  var xml = new XMLHttpRequest();
  var file = "../codes/" + name + ".xml";
  xml.onreadystatechange = function() {
    if (this.status == 200 && this.readyState == 4) {
      var xmlData = xml.responseXML;
      xmlData = (new DOMParser()).parseFromString(xml.responseText, "text/xml");
      xmlData = xmlData.getElementsByTagName("code");

      var i = 0;
      for (; i < xmlData.length; i++) {
        var li = document.createElement("li");
        var desc = xmlData[i].getElementsByTagName("title")[0].textContent;
        var t = document.createTextNode(desc);
        li.appendChild(t);
        li.setAttribute("data-codename", btoa(xmlData[i].getElementsByTagName("title")[0].textContent));
        li.setAttribute("data-codeauthor", btoa(xmlData[i].getElementsByTagName("author")[0].textContent));
        li.setAttribute("data-codedesc", btoa(xmlData[i].getElementsByTagName("description")[0].textContent));
        li.setAttribute("data-codesrc", btoa(xmlData[i].getElementsByTagName("source")[0].textContent.replace(/[\s\n\r\t]+/gm, "")));
        li.setAttribute("onmouseover", "updateDescription(this)");
        document.getElementById("checklist").appendChild(li);
      }

      var buttons = document.getElementsByTagName("button");
      for (var i = 0; i < buttons.length; i++) buttons[i].disabled = false;

      document.getElementById("gameversion").disabled = false;
    }
  };

  xml.open("GET", file);
  xml.send();
}


function downloadFile(data, filename) {

   var file = new Blob([data], {
     type: "application/octet-stream"
   });

   if (window.navigator.msSaveOrOpenBlob) window.navigator.msSaveOrOpenBlob(file, filename);
   else {
      var a = document.createElement("a"),
      url = window.URL.createObjectURL(file);
      a.href = url;
      a.download = filename;
      a.click();
      setTimeout(function() { window.URL.revokeObjectURL(url); }, 500);
  }
}

function generateGCT() {

   if (document.getElementById("gameversion").value === "Choose Version") {
     alert("Select the game version!");
     return;
   }
   var data = "00D0C0DE00D0C0DE";
   var codeList = document.getElementById("checklist").getElementsByTagName("li");
   var valueSelected = false;
   for (var i = 0; i < codeList.length; i++) {
      if (codeList[i].className === "checked") {
         data += atob(codeList[i].getAttribute("data-codesrc"));
         valueSelected = true;
      }
   }

   if (valueSelected) {
      data += "FF00000000000000";
      var rawData = new Uint8Array(data.length / 2);

      for (var x = 0; x < rawData.length; x++) {
         rawData[x] = parseInt(data.substr(x * 2, 2), 16);
      }

      downloadFile(rawData, document.getElementById("gameversion").value + ".gct");
   } else {
      alert("No cheat(s) selected!");
   }
}

function generateTXT() {

   var dolphin = (document.getElementById("downloadformat").value === "ini");

   if (document.getElementById("gameversion").value === "Choose Version") {
      alert("Select the game version!");
      return;
   }
   if (dolphin) var data = "Paste the following on top of your games .ini file:\r\n[Gecko]";
   else var data = document.getElementById("gameversion").value + "\r\nThe Legend of Zelda: Twilight Princess";
   var codeList = document.getElementById("checklist").getElementsByTagName("li");
   var valueSelected = false;
   for (var i = 0; i < codeList.length; i++) {
      if (codeList[i].className === "checked") {
         data += "\r\n";
         if (dolphin) data += "$";
         else data += "\r\n";
         data += atob(codeList[i].getAttribute("data-codename")) + " [" + atob(codeList[i].getAttribute("data-codeauthor")) + "]\r\n";
         data += (atob(codeList[i].getAttribute("data-codesrc")).match(/.{8}/g).join(" ")).replace(/(.{17})./g, "$1\r\n");
         valueSelected = true;
      }
   }


   if (valueSelected)
   downloadFile(data, document.getElementById("gameversion").value + ".txt");
   else alert("No cheat(s) selected!");
}

function downloadCodes() {
   if (document.getElementById("downloadformat").value === "gct") generateGCT();
   else generateTXT();
}

function updateCodelist() {
   resetDescription();
   document.getElementById("gameversion").disabled = true;
   var buttons = document.getElementsByTagName("button");
   for (var i = 0; i < buttons.length; i++) buttons[i].disabled = true;
   document.getElementById("checklist").innerHTML = "";
   var gameVersion = document.getElementById("gameversion").value;
   parseXML(gameVersion);
   document.getElementById("codes").style.visibility = "visible";
   while (document.getElementsByClassName("initialhidden").length > 0) {
      document.getElementsByClassName("initialhidden")[0].classList.remove("initialhidden");
   }
}

function updateDescription(s) {
   document.getElementById("infobox").innerHTML = "<h2>" +
      atob(s.getAttribute("data-codename")) + "</h2><p style=\"margin-top:0\"><i>Author(s): " +
      atob(s.getAttribute("data-codeauthor")) + "</i></p><p style=\"margin-top:0\">" +
      atob(s.getAttribute("data-codedesc")) + "</p>";
}

function resetDescription() {
   document.getElementById("infobox").innerHTML = "<p><h3>Choose your codes from the list...</h3></p>"; 
}
 
function updateChangelog() {
   document.getElementById("gameversion").style.visibility = "visible";
}

