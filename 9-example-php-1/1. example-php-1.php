<!-- Variables -->
<?php // declare(strict_types=1); // strict requirement
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
echo "Hello World!<br>";
echo "Hello World!<br>";
echo "Hello World!<br>";

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
$cars = array("Volvo", "BMW", "Toyota");
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
if (is_numeric($x)) {
    echo "Es numero";
}
echo (min(0, 150, 30, 20, -8, -200));  // returns -200
echo (max(0, 150, 30, 20, -8, -200));  // returns 150

echo (abs(-6.7));  // returns 6.7
echo (sqrt(64));  // returns 8

echo (round(0.60));  // returns 1
echo (round(0.50));  // returns 1
echo (round(0.49));  // returns 0

echo (rand(10, 100));

define("GREETING", "Welcome to W3Schools.com!");
echo GREETING;
?>

<!-- Operadores ternario y Null coalescing -->
<?php
// Operadores ternario
$cond = true;
$x = $cond ? "es verdadero" : "es falso";
echo $x;
// Null coalescing

$y = $x ?? "default value";
echo $y;
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

<!-- If -->
<?php
$t = date("H");

if ($t < "20") {
    echo "Have a good day!";
} else {
    echo "Have a good night!";
}
?>

<!-- Switch -->
<?php
$favcolor = "";

switch ($favcolor) {
    case "red":
        echo "Your favorite color is red!";
        break;
    case "blue":
        echo "Your favorite color is blue!";
        break;
    case "green":
        echo "Your favorite color is green!";
        break;
    default:
        echo "Your favorite color is neither red, blue, nor green!";
}
?>


<!-- Loop -->
<?php
// While
echo "While";
$x = 1;
while ($x <= 5) {
    echo "The number is: $x <br>";
    $x++;
}

// Do while
echo "Do while";
$x = 10;
do {
    echo "The number is: $x <br>";
    $x++;
} while ($x <= 5);


// For
for ($x = 0; $x <= 10; $x++) {
    echo "The number is: $x <br>";
}

// Foreach
$colors = array("red", "green", "blue", "yellow");
foreach ($colors as $value) {
    echo "$value <br>";
}

// Foreach in key => value
$age = array("Peter" => "35", "Ben" => "37", "Joe" => "43");

foreach ($age as $x => $val) {
    echo "$x = $val<br>";
}

// break in for
for ($x = 0; $x < 10; $x++) {
    if ($x == 4) {
        break;
    }
    echo "The number is: $x <br>";
}

// continue in for
for ($x = 0; $x < 10; $x++) {
    if ($x == 4) {
        continue;
    }
    echo "The number is: $x <br>";
}
?>

<!-- Functions -->
<?php 
// Example 1
function familyName($fname) {
  echo "$fname Refsnes.<br>";
}

familyName("Jani");
familyName("Hege");
familyName("Stale");
familyName("Kai Jim");
familyName("Borge");

// Example 2
function addNumbers(int $a, int $b) {
  return $a + $b;
}
echo addNumbers(5, 5);
// since strict is enabled and "5 days" is not an integer, an error will be thrown

// pasando parametro por referencia
function add_five(&$value) {
    $value += 5;
  }
  
$num = 2;
add_five($num);
echo $num;
?>

<!-- Array -->
<?php
$cars = array("Volvo", "BMW", "Toyota");
echo "I like " . $cars[0] . ", " . $cars[1] . " and " . $cars[2] . ".";

// count
$cars = array("Volvo", "BMW", "Toyota");
echo count($cars);

// $key => $value
$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
echo "Peter is " . $age['Peter'] . " years old.";
?>

<!-- sort -->
<?php
$numbers = array(4, 6, 2, 22, 11);
sort($numbers);
var_dump($numbers);
?>