function validates(){
   var username= document.getElementById("user").value;
  
   if(username.length<=0){
    alert("username cannot be blank!!!!");
   }
}

function enable(){
    var flag=document.getElementById("terms").checked;
    if(flag)
        document.getElementById("register").disabled=false;
    if(!flag)
        document.getElementById("register").disabled=true;

}
function match(){
    var f1=document.getElementById("firstname").value;
    var l1=document.getElementById("lastname").value;
    if(f1!=l1){
        alert("name must be same");
    }
}
