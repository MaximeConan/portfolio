<?php

class Post {
    public $id;
    public $title;
    public $resume;
    public $content;
    public $date;
    public $category;

    public function __construct($id='', $title='', $resume='', $content='', $date='', $category='') {
        $this->id = $id;
        $this->title = $title;
        $this->resume = $resume;
        $this->content = $content;
        $this->date = $date;
        $this->category = $category;
    }

    public function getDateFr() {
        return date('d/m/Y', strtotime($this->date));
    }
}