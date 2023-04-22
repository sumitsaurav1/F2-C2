let peopleList = [{id:1,name:"john",profession:"developer",age:"18"},
                {id:2, name:"jack", profession:"developer",age:"20"},
                {id:3, name:"karen",profession:"admin", age:"19"}];
let inputContainer = document.querySelectorAll("#inputContainer div input");
let cardContainer = document.querySelector(".card-container");
let k=4;
function addUser(){
   
    let details = {
       
    }
    details["id"]=k;
    details["name"]=inputContainer[0].value;
    details["age"]=inputContainer[2].value;
    details["profession"]=inputContainer[1].value;
    peopleList.push(details);
    let div = document.createElement("div");
    div.className="user-card";
    let spanId = document.createElement("span")
    spanId.innerText=k+".";
    div.appendChild(spanId)
    let spanName = document.createElement("span");
    spanName.innerText="Name: "+inputContainer[0].value;
    div.appendChild(spanName)
    let spanProfession = document.createElement("span");
    spanProfession.innerText="Profession: "+inputContainer[1].value;
    div.appendChild(spanProfession);
    let spanAge = document.createElement("span")
    spanAge.innerText = "Age: "+inputContainer[2].value;
    div.appendChild(spanAge);
    
   
    cardContainer.appendChild(div);
    console.log(peopleList);
    k++;
}

let selectList = document.getElementById("select-list");

function filterList(){
    cardContainer.innerHTML="";
    if(selectList.value==""){
        alert("select a profession before clicking the button.");
        return;
    }
    let filterUser = peopleList.filter((element)=>{
        return (selectList.value==element.profession);
    })
    k=1;
    for(let i=0;i<filterUser.length;i++){
        let div = document.createElement("div");
        div.className="user-card";
        let spanId = document.createElement("span")
        spanId.innerText=k+".";
        div.appendChild(spanId)
        let spanName = document.createElement("span");
        spanName.innerText="Name: "+filterUser[i].name;
        div.appendChild(spanName)
        let spanProfession = document.createElement("span");
        spanProfession.innerText="Profession: "+filterUser[i].profession;
        div.appendChild(spanProfession);
        let spanAge = document.createElement("span")
        spanAge.innerText = "Age: "+filterUser[i].age;
        div.appendChild(spanAge);
        
       
        cardContainer.appendChild(div);
        k++;
    }
    console.log(filterUser)
}
// for(let i=0;i<inputContainer.length)
