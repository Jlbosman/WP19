<script type="text/javascript" src="scripts/leapyear.js"></script>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<?php
/* Header */
$page_title = 'Webprogramming Assignment 3';
$navigation = Array(
    'active' => 'Leap Year',
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
    <h1>Welcome <?php print($_POST["name"]); ?>!</h1>
    <?php
    $place = $_POST["place"];
    if ($place === "Groningen") {
        echo "Nice, you're living in Groningen!";
    }
    ?>
    <table>
        <tr>
            <th>Year&emsp;&emsp;</th>
            <th>Age</th>
        </tr>
        <tr>
            <td>2024</td>
            <td><?php print $_POST["age"] + 5?></td>
        </tr>
        <tr>
            <td>2028</td>
            <td><?php print $_POST["age"] + 9?></td>
        </tr>
        <tr>
            <td>2032</td>
            <td><?php print $_POST["age"] + 13?></td>
        </tr>
        <tr>
            <td>2036</td>
            <td><?php print $_POST["age"] + 17?></td>
        </tr>
        <tr>
            <td>2040</td>
            <td><?php print $_POST["age"] + 21?></td>
        </tr>
    </table>
    <form action="leapyear.php" method="POST">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <div class="is-valid">
            Nice!
        </div>
        <div class="is-invalid">
            Please fill in your name!
        </div>
        <label for="age">Age:</label>
        <input type="text" id="age" name="age" required>
        <div class="is-valid">
            Looks good!
        </div>
        <div class="is-invalid">
            Please fill in your age!
        </div>
        <label for="mail">Mail address:</label>
        <input type="text" id="mail" name="mail" required>
        <div class="is-valid">
            Nice!
        </div>
        <div class="is-invalid">
            Please fill in your mail address!
        </div>
        <label for="Place">Place:</label>
        <input type="text" id="place" name="place" required>
        <div class="is-valid">
             Looks good!
        </div>
        <div class="is-invalid">
            Please fill in a valid place!
        </div>
        <button type="submit">Submit</button>
    </form>
<?php
include __DIR__ . '/tpl/body_end.php';
?>