function login(){
  
    var username=$("#username").val() // de aici iei datele #username este id-ul din html a <imput ...  id="username"> 

    var password=$("#password").val()
    
   // aici apelezi serviciul 
    $.ajax({
        url:"PHP/load.php?op=login&email="+username+"&password="+password,
        method:"GET",
        success:function(data){
            var rez =JSON.parse(data)
           if(rez.Status=="OK"){
               alert("OK")
               location.replace("")
           }
           else if(rez.Status=="Wrong"){

            alert("Try again")

           }

        }
    
        })
    
         }
    
