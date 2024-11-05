<?php
require "connection.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") 
{
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $email_id = $_POST['email_id'];
    $password = $_POST['password'];
    $phone_number = $_POST['phone_number'];

    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    $check_sql = "SELECT * FROM users WHERE email_id = '$email_id' OR phone_number = '$phone_number'";
    $check = mysqli_query($conn, $check_sql);

    if (mysqli_num_rows($check)) 
    {
        echo "<script>alert('User Already Exists! Login Here');</script>";
    } 
    else 
    {
        $query = "INSERT INTO users (first_name, last_name, email_id, password, phone_number) VALUES ('$first_name', '$last_name', '$email_id', '$hashed_password', '$phone_number')";
        
        if (mysqli_query($conn, $query)) 
        {
        
            echo "<script>alert('Registration successful! Redirecting to login page...');</script>";
            echo "<script>window.location.href='login.html';</script>"; 
            exit;
        } 
        else 
        {
            echo "<script>alert('Registration failed. Please try again.');</script>";
        }
    }

    $conn->close();
}
?>
