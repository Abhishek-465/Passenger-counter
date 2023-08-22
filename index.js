let count=0
let saveEl=document.getElementById("save-el")
function increment(){
    count=count+1;
    document.getElementById("count-el").innerHTML=count

}
function save(){
    saveEl.innerHTML+=" "+count+" "+"-"
    count=0;
    document.getElementById("count-el").innerHTML=count

     

}
