<?php
interface a
{
    public function foo();
}

interface b
{
    public function bar();
}

interface c extends a, b
{
    public function baz();
}

class d implements a, b
{
    public function foo()
    {
    }

    public function bar()
    {
    }

}
?>


