<?php
class MyHashSet
{
    /**
     */
    function __construct()
    {
        $this->keyRange = 769;
        $this->buckets = array_fill(0, $this->keyRange, new Bucket());
    }

    private function hash($key)
    {
        return $key % $this->keyRange;
    }

    /**
     * @param Integer $key
     * @return NULL
     */
    function add($key)
    {
        return $this->buckets[$this->hash($key)]->insert($key);
    }

    /**
     * @param Integer $key
     * @return NULL
     */
    function remove($key)
    {
        return $this->buckets[$this->hash($key)]->delete($key);
    }

    /**
     * @param Integer $key
     * @return Boolean
     */
    function contains($key)
    {
        return $this->buckets[$this->hash($key)]->exists($key);
    }
}

class Node
{
    public $value;
    public $next;
    function __construct($value, $nextNode = null)
    {
        $this->value = $value;
        $this->next = $nextNode;
    }
}

class Bucket
{
    public $head;

    function __construct()
    {
        $this->head = new Node(0);
    }

    public function insert($newValue)
    {
        if (!$this->exists($newValue)) {
            $this->head->next = new Node($newValue, $this->head->next);
        }
    }

    public function delete($value)
    {
        $prev = $this->head;
        $curr = $this->head->next;
        while ($curr != null) {
            if ($curr->value == $value) {
                $prev->next = $curr->next;
                return;
            }
            $prev = $curr;
            $curr = $curr->next;
        }
    }

    public function exists($value)
    {
        $curr = $this->head->next;
        while ($curr != null) {
            if ($curr->value == $value) {
                return true;
            }
            $curr = $curr->next;
        }
        return false;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * $obj = MyHashSet();
 * $obj->add($key);
 * $obj->remove($key);
 * $ret_3 = $obj->contains($key);
 */
