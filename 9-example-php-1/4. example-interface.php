<?php 
interface IPlayer {
    public function getName();
    public function getColor();
}

class MarioBros implements IPlayer {
    public function getName(){
        echo __CLASS__ . "\n";
    }
    public function getColor(){
        echo "Red" . "\n";
    }

    public function c(){
        echo "";
    }
}

class Luigi implements IPlayer {
    
    public function getName(){
        echo __CLASS__ . "\n";
    }

    public function getColor(){
        echo "Green" . "\n";
    }
}

$pl1 = new MarioBros();
$pl1->getName();
$pl1->getColor();

$pl2 = new Luigi();
$pl2->getName();
$pl2->getColor();
