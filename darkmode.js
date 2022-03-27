(function () {
    bg = "#000000"
    textP = "#ddd6b2"
    textCm = "#978dc9"
    textStr = "#b73333"
    textCmt = "#339323"
    textA = "#3d95c1"
    num = "#8adb7c"
    textkeywrd = "#9030a3"
    textCmDef = "#4444db"
    textCmVar = "#7886a9"
    textCmVar2 = "#7886a9"
    textProp = "rgb(213 206 129)"


    document.querySelector("body").style.background = bg
    document.querySelector("body").style.color = textP
    document.querySelector("blockquote p").style.color = textP


    //  cm-atom
    let cmAtom = document.querySelectorAll(".cm-atom");

    for (let i = 0; i < cmAtom.length; i++) {
	    cmAtom[i].style.color = textCm;
    }


    // cm-string
    let cmString = document.querySelectorAll(".cm-string");
    for (let i = 0; i < cmString.length; i++) {
	    cmString[i].style.color = textStr;
    }

    // cm-number
    let cmNumber = document.querySelectorAll(".cm-number");
    for (let i = 0; i < cmNumber.length; i++) {
	    cmNumber[i].style.color = num;
    }

    //  cm-comment
    let cmComm = document.querySelectorAll(".cm-comment");
    for (let i = 0; i < cmComm.length; i++) {
	    cmComm[i].style.color = textCmt;
    }

    //cm-s-default
    let cmSDef = document.querySelectorAll(".cm-s-default");
    for (let i = 0; i < cmSDef.length; i++) {
	    cmSDef[i].style.color = textCmt;
    }

    //  a
    let a = document.querySelectorAll("a");
    for (let i = 0; i < a.length; i++) {
        a[i].style.color = textA;
    }

    //  cm-keyword
    let cmKey = document.querySelectorAll(".cm-keyword");
    for (let i = 0; i < cmKey.length; i++) {
        cmKey[i].style.color = textkeywrd;
    }

    //  cm-def
    let cmDef = document.querySelectorAll(".cm-def");
    for (let i = 0; i < cmDef.length; i++) {
        cmDef[i].style.color = textCmDef;
    }

    //  cm-variable
    let cmVar = document.querySelectorAll(".cm-variable");
    for (let i = 0; i < cmVar.length; i++) {
        cmVar[i].style.color = textCmVar;
    }

    //  cm-variable-2
    let cmVar2 = document.querySelectorAll(".cm-variable-2");
    for (let i = 0; i < cmVar2.length; i++) {
        cmVar2[i].style.color = textCmVar2;
    }

    //  cm-property
    let cmProp = document.querySelectorAll(".cm-property");
    for (let i = 0; i < cmProp.length; i++) {
        cmProp[i].style.color = textProp;
    }


})()
