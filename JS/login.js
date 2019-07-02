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
               location.replace("")
           }
           else if(rez.Status=="Wrong"){

            alert("Try again")

           }

        }
    
        })
    
         }
    