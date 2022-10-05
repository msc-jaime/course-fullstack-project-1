<?php

class Category {

    protected $name;

    public function getAll(){
        return "Show all the category";
    }
}

class Post {

    protected $category;

    public function __construct(Category $category){
        $this->category = $category;
    }

    public function getAll(){
        return "Show all the post";
    }

    public function getCategoriesFromPost(){
        return $this->category->getAll();
    }
}

$category = new Category;
$post = new Post(new Category);
echo $post->getAll() . "\n";
echo $post->getCategoriesFromPost() . "\n";




