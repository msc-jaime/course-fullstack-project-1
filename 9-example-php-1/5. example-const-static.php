<?php
interface a
{
    const b = 'Interface constant' . '\n';
}

class d
{
    const e = 'Property constant';

    function getMsg(){
        return "Msg ...";
    }
}

echo a::b;
echo d::e;
$dd = new d;
echo $dd->getMsg();



