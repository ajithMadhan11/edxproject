function updateTextInput(val) {
    document.getElementById('rangetext').innerHTML=val + '%'; 
  }
   compute =()=>{
      let principle=document.getElementById("principal").value;
      if(principle<=0){
          alert("enter a positive value")
      }else{
      let intrest=document.getElementById("rate").value;
      let year =parseInt( document.getElementById("years").value);
      var d = new Date();
      var cyear = d.getFullYear();
      let Iyear=parseInt(cyear);
      let fyear=(Iyear+year)-1;
      let res=principle * year * intrest / 100;
      document.getElementById("result").innerHTML=`  <p>If you deposit ${principle} </p> 
 <p>at an interest rate of ${intrest} </p> 
 <p>You will receive an amount of ${res} </p> 
 <p>in the year ${fyear} </p> `;
   }
  }