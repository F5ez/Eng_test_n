
let res=0
let answ=""
let text_lvl=""

if(localStorage.getItem("point")!==null){
    res=Number(localStorage.getItem("point"))
    alert(res)

}

if(res<=10){
    answ="Pre-A1"
    text_lvl="Beginner"
}
else if(res<=17){
    answ="A1"
    text_lvl="Elementary"
}
else if(res<=23){
    answ="A2"
    text_lvl="Pre-Intermediate"
}
else if(res<=29){
    answ="B1"
    text_lvl="Intermediate"
}
else if(res<=35){
    answ="B2"
    text_lvl="Upper-Intermediate"
}
else if(res<=40){
    answ="C1"
    text_lvl="Advanced"
}
document.getElementsByClassName("lvl_2")[0].innerHTML=text_lvl
document.getElementsByClassName("text_l_a")[0].innerHTML=answ
localStorage.removeItem("point")