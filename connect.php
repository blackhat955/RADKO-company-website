<?
$user=$_POST['user'];
$pass=$_POST['pass'];
$repass=$_POST['repass'];
$email=$_POST['email'];

//Database connection

$conn=new mysqli('localhost','root','Anilrup@123','auth');
 if($conn->connect_error){
 	die('connection Failed:'.$conn->connect_error);
 }
 else{
 	$stmt=$conn->prepare("insert into registrer(username,password,repassword,Email)values(?,?,?,?)");

 	$stmt->bind_param("ssss",$user,$pass,$repass,$email);
 	$stmt->execute();
 	echo "registration successfully";
 	$stmt->close();
 	$conn->close();
 }
?>