function register(){

    var firstname=$("#first_name").val()
    var lastname=$("#last_name").val()
    var gender=$("#gender").val()
    var email=$("#email").val()
    var customertype=$("#customer_type")
    var password=$("#password").val()
    

    obj= {
        op:"adduser",
        first_name: firstname,
    last_name:last_name,
    gender: gender,
    email: email,
    customerytype: customer_type,
    password: password
    }
    
    $.ajax({
        url:"PHP/load.php",
        method:"POST",
        data:obj,
        dataType:"json",
        success:function(data){
           
                if (data.status=="OK"){
                     alert("ok") 
                     location.replace("")
                }
                else if(data.status=="WRONG"){
                    alert("Mail sau parola gresita")
                }
                else{
                    alert( "Eroare serviciu logare")
                }
        }
    
        })
    
         }