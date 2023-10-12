const closeSpan = document.getElementById("close");
const clone = closeSpan.cloneNode(true);

const arr = [
    { questions: `1. Roberto is Italian. He’s ${clone.outerHTML} Italy` ,
        a:"from", b:"to", c:"at", answer:"from"
    },
    { questions: `2.I leave for work ${clone.outerHTML} quarter past eight` ,
        a:"in", b:"at", c:"on", answer:"at"
    },
    { questions: `3.${clone.outerHTML} that man in the red hat?` ,
        a:"Whose", b:"Who", c:"Who's", answer:"Who's"
    },
    { questions: `4.This letter is for Tom. Give it to ${clone.outerHTML}` ,
        a:"him", b:"he", c:"his", answer:"him"
    },
    { questions: `5.She ${clone.outerHTML} a letter at the moment.` ,
        a:"write", b:"is writing", c:"writes", answer:"is writing"
    },
    { questions: `6.What ${clone.outerHTML} on Saturdays?` ,
        a:"are you doing", b:"do you", c:"do you do", answer:"do you do"
    },
    { questions: `7.Yesterday we ${clone.outerHTML} to the cinema and saw a great film`,
        a:"go", b:"have gone", c:"went", answer:"went"
    },
    { questions: `8.${clone.outerHTML} your homework yet?`,
        a:"Do you finish", b:"Have you finished", c:"Are you finishing", answer:"Have you finished"
    },
    { questions: `9.It was a beautiful morning. The sun ${clone.outerHTML} and it was very warm. `,
        a:"shines", b:"was shining", c:"shone", answer:"was shining"
    },
    { questions: `10.“What ${clone.outerHTML} for a living?” “She’s a teacher.”.`,
        a:"does she do", b:"is she doing", c:"does she", answer:"does she do"
    },
    { questions: `11.George ${clone.outerHTML} to work hard but he does now.`,
        a:"didn't", b:"used", c:"didn't use", answer:"used"
    },
    { questions: `12.If she ${clone.outerHTML}, I’ll go on my own.`,
        a:"comes", b:"doesn't come", c:"didn't come", answer:"doesn't come"
    },
    { questions: `13.Mum asked me how long ${clone.outerHTML} for her.`,
        a:"I had been waiting", b:"had I been waiting", c:"have I been waiting", answer:"I had been waiting"
    },
    { questions: `14.I think I ${clone.outerHTML} for you here. I just can’t go on walking!`,
        a:"will wait", b:"am going to wait", c:"am waiting", answer:"will wait"
    },
    { questions: `15.Andrew has been painting ${clone.outerHTML} 2003.`,
        a:"since", b:"for", c:"in", answer:"since"
    },
    { questions: `16.If I ${clone.outerHTML} rich, I’d buy a yacht.`,
        a:"were", b:"am", c:"would be", answer:"were"
    },
    { questions: `17.Rainforests ${clone.outerHTML} down and the trees are used to make paper.`,
        a:"are cutting", b:"is cut", c:"are cut", answer:"are cut"
    },
    { questions: `18.He cleaned the carpets after he ${clone.outerHTML} finished his lunch. `,
        a:"had", b:"have", c:"has", answer:"had"
    },
    { questions: `19.I’d rather go out for dinner tonight than ${clone.outerHTML} dinner at home.`,
        a:"have", b:"having", c:"to have", answer:"have"
    },
    { questions: `20.By this time next year, Jane ${clone.outerHTML} Spanish for two years.`,
        a:"is going to study", b:"will be studying", c:"will have been studying", answer:"will have been studying"
    },
    { questions: `21.Alice won’t be able to buy that car ${clone.outerHTML} she saves some money.`,
        a:"unless", b:"if", c:"as long as", answer:"unless"
    },
    { questions: `22.John is soaking wet because he ${clone.outerHTML} in the rain.`,
        a:"has been walking", b:"will be walking", c:"had been walking", answer:"has been walking"
    },
    { questions: `23.I wish I ${clone.outerHTML} at Mike; he’s not talking to me now.`,
        a:"hadn't shouted", b:"haven't shouted", c:"didn't shout", answer:"hadn't shouted"
    },
    { questions: `24.Dogs are very loyal pets. ${clone.outerHTML}, they can guard your property.`,
        a:"Because", b:"What is more", c:"Even though", answer:"What is more"
    },
    { questions: `25.Her hair is not ${clone.outerHTML} Catherine’s.`,
        a:"so long", b:"as long as", c:"long as", answer:"as long as"
    },
    { questions: `26.“I love going to the beach.” “${clone.outerHTML}”`,
        a:"Neither do I", b:"So do I", c:"Nor do I", answer:"So do I"
    },
    { questions: `27.By the time the rain stopped, we ${clone.outerHTML} two pots of coffee.`,
        a:"have drunk", b:"had drunk", c:"had been drinking", answer:"had drunk"
    },
    { questions: `28.He can’t decide who ${clone.outerHTML} to his birthday party.`,
        a:"to invite", b:"invite", c:"inviting", answer:"to invite"
    },
    { questions: `29.When I opened the door, there wasn’t ${clone.outerHTML} there.`,
        a:"someone", b:"no one", c:"anyone", answer:"anyone"
    },
    { questions: `30.I live in the city, so I ${clone.outerHTML} busy traffic.`,
        a:"am used to", b:"get used to", c:"used to", answer:"am used to"
    },
    { questions: `31.It’s no use ${clone.outerHTML} about the exam results. You’ll know soon enough.`,
        a:"worry", b:"to worry", c:"worrying", answer:"worrying"
    },
    { questions: `32.The taxi will be here in a couple of minutes. We ${clone.outerHTML} get ready to go.`,
        a:"had better", b:"would better", c:"should better", answer:"had better"
    },
    { questions: `33.“Dad won’t mind us borrowing the car, will he?” “No, I ${clone.outerHTML}”`,
        a:"don't suppose it", b:"suppose not", c:"don't suppose", answer:"suppose not"
    },
    { questions: `34.When I asked what was wrong, ${clone.outerHTML} `,
        a:"I was explained the problem", b:"the problem was explained to me", c:"he explained me the problem", answer:"the problem was explained to me"
    },
    { questions: `35.	Steven ${clone.outerHTML} the wallet. `,
        a:"admitted to steal", b:"admitted steal", c:"admitted stealing", answer:"admitted stealing"
    },
    { questions: `36.We should use ${clone.outerHTML} time we have available to discuss John’s proposal.`,
        a:"the little of", b:"the little", c:"little", answer:"the little"
    },
    { questions: `37.Some experience is ${clone.outerHTML} for the job. `,
        a:"really essential", b:"fairly essential", c:"very essential", answer:"really essential"
    },
    { questions: `38.${clone.outerHTML} in my seventies and rather unfit, I might consider taking up squash.`,
        a:"Were I not", b:"Was I not", c:"If I wasn't", answer:"Were I not"
    },
    { questions: `39.We were delayed ${clone.outerHTML} an accident.`,
        a:"because", b:"because of", c:"of because", answer:"because of"
    },
    { questions: `40.${clone.outerHTML} they slept soundly.`,
        a:"Hot though the night air was", b:"Hot though was the night air", c:"Hot although the night air was", answer:"Hot though the night air was"
    },

];
let answ_obj= {}
closeSpan.parentNode.replaceChild(clone, closeSpan);


//add Children q//
for (let i=0;i<arr.length;i++){
    let qt=document.getElementsByClassName("question")[0].cloneNode(true)
    qt.style.display="flex"
    qt.children[0].innerHTML=arr[i].questions
    qt.children[1].innerHTML=arr[i].a
    qt.children[2].innerHTML=arr[i].b
    qt.children[3].innerHTML=arr[i].c

    document.getElementsByClassName("mid_test")[0].appendChild(qt)
}



/// Event click + move

let mid=document.getElementsByClassName("mid_test")[0]


for(let i=0;i<mid.children.length;i++){
    let child=mid.children[i]
    let nextChild=mid.children[i+1]
    for(let j=1;j<child.children.length;j++){

        child.children[j].addEventListener("click",function (e){
            child.children[1].style.borderColor="rgb(114,182,212)"
            child.children[2].style.borderColor="rgb(114,182,212)"
            child.children[3].style.borderColor="rgb(114,182,212)"
            e.target.style.borderColor="rgb(285,160,86)"
            let answ=e.target.textContent
            answ_obj[i]=answ

            nextChild.scrollIntoView({behavior :"smooth"})
        })
    }
}


mid.addEventListener("scroll",function (e){
    let element=e.target
    const scrollTop = element.scrollTop;
    const scrollHeight = element.scrollHeight;
    const height = element.clientHeight;

    const scrolledPercentage = (scrollTop / (scrollHeight - height)) * 100;
    document.getElementsByClassName("bar_color")[0].style.width=`${scrolledPercentage}vw`

})
let finish=document.getElementsByClassName("finish")[0]

mid.insertBefore(finish,mid.children[42])
finish.addEventListener("click",function (){
        let point=0
        for(let key in answ_obj){
            if(answ_obj[key]===arr[key-2].answer){
                point++
            }
        }
        document.getElementsByClassName("result")[0].style.opacity="1"
        document.getElementsByClassName("result")[0].style.zIndex="1"
    let text=document.getElementsByClassName("lvl_text")[0]
    let lvl_img_text_a=document.getElementsByClassName("lvl_img_text")[0]
    if(point<=10){
        text.textContent=`Твій рівень - Beginner`
        lvl_img_text_a.textContent="Pre-A1"
    }
    else if(point<=17){
        text.textContent=`Твій рівень - Elementary`
        lvl_img_text_a.textContent="A1"
    }
    else if(point<=23){
        text.textContent=`Твій рівень - Pre-Intermediate`
        lvl_img_text_a.textContent="A2"
    }
    else if(point<=29){
        text.textContent=`Твій рівень - Intermediate`
        lvl_img_text_a.textContent="B1"
    }
    else if(point<=35){
        text.textContent=`Твій рівень - Upper-Intermediate`
        lvl_img_text_a.textContent="B2"
    }
    else if(point<=40){
        text.textContent=`Твій рівень - Advanced`
        lvl_img_text_a.textContent="C1"
    }


})



// 1-10 Beginner Pre-A1
// 11-17 Elementary A1
// 18-23 Pre-Intermediate A2
// 24-29 Intermediate B1
// 30-35 Upper- Intermediate B2
// 36-40 Advanced C1
