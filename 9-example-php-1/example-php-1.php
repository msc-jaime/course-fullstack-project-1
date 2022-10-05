
<!-- Variables -->
<?php
$var = "str ....";
$a = 10;
$b = 3;
$x = false;
$c = $a / $b;
// Coment one line
# Coment one line
/*
Coment two line
,,,,
*/
echo $c;
ECHO "Hello World!<br>";
echo "Hello World!<br>";
EcHo "Hello World!<br>";

$color = "red";
echo "My car is " . $color . "<br>";
echo "My house is " . $COLOR . "<br>";
echo "My boat is " . $coLOR . "<br>";

print "<h2>PHP is Fun!</h2>";
print "Hello world!<br>";
print "I'm about to learn PHP!";

// Concat
$txt1 = "Learn PHP";
$txt2 = "W3Schools.com";

print "<br><h2>" . $txt1 . "</h2>";
print "Study PHP at " . $txt2 . "<br>";

// Info var using var_dump
$x = 5985;
$y = [10, 20, 30, 50];
$cars = array("Volvo","BMW","Toyota");
var_dump($cars);
var_dump($x);
var_dump($y);
?>

<!-- PHP function-->
<?php
echo strlen("Hello world!"); // outputs 12
echo str_word_count("Hello world!"); // outputs 2
echo strpos("Hello world!", "world"); // outputs 6
echo str_replace("world", "Dolly", "Hello world!"); // outputs Hello Dolly!
$x = 5985.1;
$a = "str ...";
echo var_dump(is_int($x));
echo var_dump(is_int($a));
if (is_numeric($x)){
    echo "Es numero";
}
echo(min(0, 150, 30, 20, -8, -200));  // returns -200
echo(max(0, 150, 30, 20, -8, -200));  // returns 150

echo(abs(-6.7));  // returns 6.7
echo(sqrt(64));  // returns 8

echo(round(0.60));  // returns 1
echo(round(0.50));  // returns 1
echo(round(0.49));  // returns 0

echo(rand(10, 100));

define("GREETING", "Welcome to W3Schools.com!");
echo GREETING;
?>

<!-- Operadores ternario -->
<?php
$cond = true
$x = cond ? "es verdadero" : "es falso";
// https://www.w3schools.com/php/php_operators.asp
?>

<!-- PHP Casting -->
<?php
// Cast float to int
$x = 23465.768;
$int_cast = (int)$x;
echo $int_cast;

echo "<br>";

// Cast string to int
$x = "23465.768";
$int_cast = (int)$x;
echo $int_cast;
?>
