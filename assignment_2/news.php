<?php
/* Header */
$page_title = 'Webprogramming Assignment 2';
$navigation = Array(
    'active' => 'News',
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
        <h1>Franse basisschool schrijft vijftien schapen in om sluiting klas te voorkomen</h1>
        <p>
            Een Franse basisschool met teruglopende leerlingenaantallen heeft er in één klap vijftien nieuwe leerlingen bij. Ouders die vreesden dat een klas zou sluiten, hebben vijftien schapen laten inschrijven.
            De ludieke actie volgde nadat de school in Crêts-en-Belledonne, een dorp dat aan de voet van de Alpen ligt, aankondigde dat een van de elf klassen dicht moest, omdat het aantal leerlingen was gedaald van 266 naar 261.
            Een lokale herder kwam dinsdag met vijftig schapen op de proppen. Vijftien dieren konden worden ingeschreven, omdat alleen die in het bezit waren van een officieel geboortecertificaat.
            "Nu hoeven we geen klassen meer te sluiten", zei een van de ouders achter het initiatief glimlachend tegen AFP. De actie is behalve ludiek, ook een sneer naar de Franse onderwijsautoriteit.
            De basisschoolkinderen zullen nog wel even moeten wennen aan hun nieuwe medeleerlingen, die onder meer luisteren naar de namen Baa-bete, Saute-Mouton en Shaun.
        </p>
    </div>
<?php
include __DIR__ . '/tpl/body-end.php';
/* Footer */
include __DIR__ . '/tpl/footer.php';
?>