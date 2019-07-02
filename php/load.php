<?php

$hostName='localhost';
$NAMEdb='food_recipes';
$userNAME='root';
$password='';

try {
    $connection = new PDO("mysql:host=$hostName;dbname=".$NAMEdb, $userNAME, $password);
    $connection->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo  $e;
    exit;
}

if ($_POST['op']   =="adduser"){
    $query="insert into users (first_name,last_name,gender,password,email,cutomer_type)
     VALUES(:first_name,:last_name, :gender,:password,:email,:cutomer_type)";
    $sth= $connection->prepare($query);
   
    $params=array(
        ":first_name"=>$_POST['first_name'],
        ":last_name"=>$_POST['last_name'],
        ":gender"=>$_POST['gender'],
        ":email"=>$_POST['email'],
        ":password"=>$_POST['password'],
        ":cutomer_type"=>"U"
);
    $sth->execute($params);
    
        echo json_encode(array("status"=>"OK"));
}