function miyo_setCustomSticker(id, width, height, custom_text1, custom_text2) {
  var sticker = document.getElementById(id);

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  let imgArray = ["https://lh3.googleusercontent.com/oljXMLSai65niJRDyDQyY6AXe2JBJAFnbNnTQzIqlw1EighyOD-L0ERJuy1j8pKuFYTI4Sr1zYSMuJ3iDKfTGK8_Mfplny7mnRYJVPU1ONnIxnvSeWqqWHBx8x1fex7hrIxrB4ZFsmQ=s400", "https://lh3.googleusercontent.com/PjWOC4Jd1YtqlC51l29TOwkEXcYBYHSZUxhQ7JsaVGa4hUAVmY8Kku8OXzNSrfI2TP5ccktmLJedqWk1WHDNBKi-y2JcsQEd34aLOAdpxJ0jqfOl4Dmj94Wiug_uVRnlEOCI-3WOtI4=s400", "https://lh3.googleusercontent.com/eVhto5DPs8bLa7ivYNZ_ndA1qo0gOJT8v7qlxIqyro1m4yrgAtEZrIa9-NZ1tSy1YxUYFwuevcWSND1Aa8Y0JTiM5W_GoD8eupwj9oBJ1qpziMzQWDHAxcmuICIDIZRj37S8Q2HjL1U=s400", "https://lh3.googleusercontent.com/Vxz5TIHWSyGOvtu3uSK8s7j-CyRv28ogaXXDS9mvFZUBjLq1HRGzaF7syHCF-awakQOHyqJBxYtIDBghFiw2FgLvgYuPNVm_C4bLUf78sR-A_xMbarzXiHYbn8z4WytGyST50i5AKJo=s400", "https://lh3.googleusercontent.com/R2q-5gKADn_ogyQIr2gQWe2FHDvXw1VgwwarxIkADlc5Il2ZkYPjwU_r5VT0P2TkfwqAYHSZ0jXkQHxu367Fs92PbsjLGeJO1laeyqr9H48mhcjCwejlu8sbwOnchJaZ64LUoXroTmg=s400"]
  var obniz = new Obniz("7014-5899");
  obniz.onconnect = async function () {
    // Javascript Example
    obniz.display.clear();
    obniz.switch.onchange = function (state) {
      console.log(state);
      if (state === "push") {
        obniz.display.print("Pushing");
        sticker.src = imgArray[getRandomInt(5)];
      } else {
        obniz.display.clear();
        obniz.display.print("Push Me!");
        obniz.display.print("おみくじするよ！！");
        sticker.src = "https://lh3.googleusercontent.com/WjoOCwSsU7GDfkmbEmdLh1QgIWHUtFnfCY_HtrUEVsv1088TK8wvDRQdVwG5yKg6qNp6P0Ysj-yjZf49xcaYhP9Tui_LUENB_qJD2vyJH3X8XrLIYL27_YkhrOQYJrXA35HQWFdMjhk=s400";
      }
    }
  }
}