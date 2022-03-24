function updateText() {
    let txt=document.getElementById("text-input").value;
    document.getElementById("text-output").innerText=txt;
}

function makeBold(elem) {
    elem.classList.toggle('active');
    document.getElementById("text-output").classList.toggle('bold');
}
function makeItalic(elem) {
    elem.classList.toggle('active');
    document.getElementById("text-output").classList.toggle('italic');
}
function makeLine(elem) {
    elem.classList.toggle('active');
    let ftext= document.getElementById("text-output");
    if(ftext.classList.contains('underline')){
        ftext.classList.remove('underline');
        
    }
    else{
        ftext.classList.add('underline');
        console.log("working");
    }
    
}
function alignText(elem,alignType) {
    elem.classList.toggle('active');
    document.getElementById("text-output").style.textAlign=alignType;
    let butnList = document.getElementsByClassName("align");
    for(let i=0; i< butnList.length; i++){
        butnList[i].classList.remove('active');
    }
    elem.classList.add('active');
}