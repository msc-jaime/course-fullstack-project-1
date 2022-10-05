<?php
interface a
{
    const b = 'Interface constant' . '\n';

    public function c();
    
}

class d
{
    const e = 'Interface constant';
    
}

class m implements a {
    public function c(){
        echo '';
    }
}


