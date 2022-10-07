<?php
// Sintaxis tradicional función
function cube($n)
{
    return($n * $n * $n);
}

$a = array(1, 2, 3, 4, 5);
$b = array_map("cube", $a);
print_r($b);

// Ejemplo funcion flecha
$funCube = fn ($x) => $x * $x * $x
?>