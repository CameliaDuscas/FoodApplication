function login(){

    var username=$("#username").val()

    var password=$("#password").val()
    

    $.ajax({
        url:"PHP/load.php?op=login&email="+username+"&password="+password,
        method:"GET",
        success:function(data){
            var rez =JSON.parse(data)
           if(rez.Status=="OK"){
               alert("OK")
               location.replace("http://localhost/RETETE%20PRELUATE%20SI%20INCERCATE/index.html")
           }
           else if(rez.Status=="Wrong"){

            alert("Try again")

           }

        }
    
        })
    
         }
    