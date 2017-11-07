<?php 

if(isset($_POST['user_tel1'])) {
  $message = 'Name: ' .$_POST['user_name1'] . "\n"
    .'Phone: ' .$_POST['user_tel1'] . "\n"
    .'Email: ' .$_POST['user_mail1'];
  mail('yakov.barsukov@gmail.com, lyashdm@gmail.com', 'KisetLand main offer', $message);
} else {
  header('Refresh: 3; URL=../index.html');
  exit(0);
}
?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="refresh" content="15; url=../index.html">
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0">
    <meta name="robots" content="noindex,nofollow">
    <title>Кисеты из кожи на заказ | Кожевенная мастерская | Дмитрий Ляш</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700,900&amp;subset=cyrillic" rel="stylesheet">  
    <link rel="stylesheet" type="text/css" href="../css/normalize.css">
    <link rel="stylesheet" type="text/css" href="../css/main.css">
    <link rel="stylesheet" type="text/css" href="../css/forms.css">
    <link rel="stylesheet" type="text/css" href="../css/responsive.css">
<!--    <script src="https://code.jquery.com/jquery-3.2.1.slim.js" integrity="sha256-tA8y0XqiwnpwmOIl3SGAcFl2RvxHjA8qp0+1uCGmRmg=" crossorigin="anonymous"></script>-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  </head>
  <body>
    <div id="wrapper">
      <div class="wrapper">
        <div id="header">
          <div class="logo">
            <div class="logo-img"><a href="../index.html"><img class="svg" src="../img/logo1.svg"></a></div>
            <div class="logo-txt"><p>КОЖЕВЕННАЯ МАСТЕРСКАЯ</p></div>
          </div>
          <div class="phone">
            <div class="phone-number"><p><a href="tel:+79646421507">8(964)642-15-07</a></p><hr></div>
            <div class="phone-time"><p>с 10 до 20 каждый день</p></div>
          </div>
        </div>
        <div id="fixed-top">
          <div id="fixed-top-wrapper">
          <div id="fixed-top-img"><a href="#header"><img src="img/logo2.svg"></a></div>
          <div id="fixed-phone"><p><a href="tel:+79646421507">8(964)642-15-07</a></p></div>
          </div>
        </div>
      </div>
      <div class="thanks"><h1>Спасибо. Мы скоро свяжемся с Вами! Ага, жди.</h1></div>
      <div class="thanks-back"><p>Вернуться на <a href="../index.html">главную</a> страницу.</p></div>
    </div>
  </body>
</html>