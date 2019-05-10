<?php
/* Header */
$page_title = 'Webprogramming Assignment 2';
$navigation = Array(
    'active' => 'Future',
    'items' => Array(
        'Home' => '/WP19/assignment_2/index.php',
        'Links' => '/WP19/assignment_2/links.php',
        'News' => '/WP19/assignment_2/news.php',
        'Future' => '/WP19/assignment_2/future.php'
    )
);
include __DIR__ . '/tpl/head.php';
/* Body */
include __DIR__ . '/tpl/body-start.php';
?>
    <div class="col-md-12">
        <h1>By 2020, more people will own a phone than have electricity</h1>
        <p>
            The proliferation of mobile phones will continue as mobile data traffic jumps tenfold over the next four years, according to a study by Cisco.
            The mobile phone is conquering the world.
            Everywhere you turn, someone's glued to the screen of a phone, e-mailing, posting status updates or playing a mobile game. But that's largely in developed countries like the US or those in Western Europe. In many developing countries, even a basic "dumb" phone is a luxury.
            That's poised to change in the next four years. By 2020, 5.4 billion people around the world will have a phone, according to Cisco's annual report on mobile traffic growth. In comparison, 5.3 billion people will have electricity, 3.5 billion will have running water and 2.8 billion cars will be on the road.
            The mass adoption of phones underscores society's increasing reliance on handsets for all facets of life. Yes, you can use the device to make a call, but you can also message your friends and families, pay for goods and services, turn on the lights in your home or binge-watch "Boardwalk Empire." Cisco's report forecasts a tenfold growth in mobile data traffic to 366.8 exabytes by 2020.
            What is 366.8 exabytes? That's the equivalent of 81 trillion Instagram photos or 7 trillion YouTube clips.
            And while there's all sorts of hype over the Internet of Things, or the concept that every gadget and appliance is connected and talking to each other, it'll be the phones that remain the center of our lives. Phones will make up 81 percent of total mobile traffic.
            In total, Cisco estimates that there will be 11.6 billion mobile-ready devices in 2020, up from 7.9 billion last year. The company believes wearable devices and machine-to-machine connections will continue to drive that number up. The year 2020 is when many in the industry expect next-generation, superfast 5G wireless technology to truly kick off in wide scale, which should jump-start both wireless speeds and the type of devices that get a connection.
            The global average network speed will more than triple to 6.5 megabits per second, Cisco said. Many developed countries with modern LTE networks already exceed that. The US carriers, for instance, now average 9.9 megabits per second. But the rise in the global average will have a major impact on developing countries where the mobile infrastructure is still in its infancy. The Middle East and Africa are expected to have the highest growth rate in mobile data with a 15-fold increase.
            By that time, more than 75 percent of the world's mobile data will be video. That's a lot of clips of adorable cats.
        </p>
    </div>
<?php
include __DIR__ . '/tpl/body-end.php';
/* Footer */
include __DIR__ . '/tpl/footer.php';
?>