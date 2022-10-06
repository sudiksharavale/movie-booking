<?php
$bookno=$_POST['Name'];
$email=$_POST['email'];
$phone=$_POST['phone'];
$pass=$_POST['pass'];
if (!empty($Name) || !empty($email) || !empty($phone))
{
$host = "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbname = "manish";
//create connection
$conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);
if (mysqli_connect_error())
{
die('Connect Error('. mysqli_connect_errno().')'. mysqli_connect_error());
}
else
{
$INSERT = "INSERT Into user(Name,email,phone,pass) values(?, ?, ?, ?)";
$stmt = $conn->prepare($INSERT);
$stmt->bind_param("ssis",$Name,$email,$phone,$pass);
$stmt->execute();
echo "New record inserted sucessfully";
}
$stmt->close();
$conn->close();
} else {
echo "All field are required";
die();
}
?>
