function register(){

    var first_name=$("#first_name").val()
    var last_name=$("#last_name").val()
    var gender=$("#gender").val()
    var email1=$("#email").val()
    var customer=$("#customer_type").val()
    var password1=$("#password").val()
    
    debugger;
    obj= {
    op:"adduser",
    first_name: first_name,
    last_name:last_name,
    gender: gender,
    email: email1,
    customer_type: customer,
    password: password1
    }
    
    $.ajax({
        url:"php/load.php",
        method:"POST",
        data:obj,
        dataType:"json",
        success:function(data){
           
                if (data.status=="OK"){
                     alert("ok") 
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