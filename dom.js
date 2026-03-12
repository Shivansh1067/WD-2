function result(){

  let inputData=document.getElementById('inputText').value;
  document.getElementById('text').textContent=inputData;

// valid age for vote casting...

if(inputData<=18){
    alert("Valid Data")
}
else{
     alert("Invalid Data")
}

   let changecolor=document.getElementById('text');
   changecolor.style.color="red";


   let bodycolor=document.getElementsByTagName('body')[0];
   bodycolor.style.backgroundColor="orange";
}

let para=document.getElementById('paratext');
function changetextcolor(){
    para.style.background="#"+Math.floor(Math.random() * 16777215).toString(16);
}
para.addEventListener('mouseover', changetextcolor);