function ShowTime(){
              var date=new Date().toLocaleString();  
              document.getElementById('mdate').innerHTML=date;
              setTimeout('ShowTime()',1000);
            }

