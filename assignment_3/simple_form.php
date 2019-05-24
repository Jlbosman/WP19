<?php
/* Header */
$page_title = 'Webprogramming Assignment 3';
$navigation = Array(
    'active' => 'Simple Form',
    'items' => Array(
        'News' => '/WP19/assignment_3/index.php',
        'Add news item' => '/WP19/assignment_3/news_add.php',
        'Leap Year' => '/WP19/assignment_3/leapyear.php',
        'Simple Form' => '/WP19/assignment_3/simple_form.php'
    )
);
include __DIR__ . '/tpl/head.php';
include __DIR__ . '/tpl/body_start.php';
?>
<div class="col-md-12">
    <h1>Welcome <?php print($_GET["name"]); ?>!</h1>
    <?php
    $place = $_GET["place"];
    if ($place === "Amsterdam") {
        echo "You're from the capital of the Netherlands!";
    } else {
        echo "You're from $place!";
    }
    ?>
    <form action="simple_form.php" method="GET">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name">
        <label for="place">Place:</label>
        <input type="text" id="place" name="place">
        <button type="submit">Submit</button>
    </form>
</div>
<?php
include __DIR__ . '/tpl/body_end.php';
?>