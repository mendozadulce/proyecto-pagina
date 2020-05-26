<?php
//conectamos Con el servidor
$host ="localhost";
$user ="root";
$pass ="";
$db="prueba";
//funcion llamada conexion con (dominio,usuarios,contraseña,base_de_datos)
$con = mysqli_connect($host,$user,$pass,$db)or die("hay fallas en el sistema");
mysqli_select_db($con,$db)or die("problemas al conectar con la base de datos");


//recuperar las variables
$nombre=$_POST['nombre'];
$correo=$_POST['correo'];
$sugerencias=$_POST['sugerencias'];
//hacemos la sentencia de sql
$sql="INSERT INTO datos VALUES('$nombre',
          '$correo',
          '$sugerencias')";
//ejecutamos la sentencia de sql
$ejecutar=mysqli_query($con,$sql);
//verificamos la ejecucion
if(!$ejecutar){
 echo"Algo salio mal";
}else{
 echo"Proceso completado<br><a href='index.html'>Atras</a>";
}
?>