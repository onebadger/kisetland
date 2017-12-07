<?php 

if(isset($_POST['user_tel2'])) {
  $message = 'Name: ' .$_POST['user_name2'] . "\n"
    .'Phone: ' .$_POST['user_tel2'];
  mail('yakov.barsukov@gmail.com, lyashdm@gmail.com', 'KisetLand CallBack', $message);
} else {
  header('Refresh: 3; URL=../index.html');
  exit(0);
}
?>

<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="refresh" content="15; url=../index.html" />
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0" />
    <meta name="robots" content="noindex,nofollow" />
    <title>Кисеты из кожи на заказ | Кожевенная мастерская | Дмитрий Ляш</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700,900&amp;subset=cyrillic" rel="stylesheet">  
    <link rel="stylesheet" type="text/css" href="../css/normalize.css" />
    <link rel="stylesheet" type="text/css" href="../css/main.css" />
    <link rel="stylesheet" type="text/css" href="../css/responsive.css" />
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
      <div class="thanks"><h1>Спасибо. Мы скоро свяжемся с Вами!</h1></div>
      <div class="thanks-back"><p>Вернуться на <a href="../index.html">главную</a> страницу.</p></div>
    </div>
    <footer><hr>
      <div class="social">
        <a href="#" target="_blank">
          <img src="../img/ico-vk.svg">
        </a>
        <a href="#" target="_blank">
          <img src="../img/ico-fb.svg">
        </a>
        <a href="#" target="_blank">
          <img src="../img/ico-instagram2.svg">
        </a>
      </div><!-- /#.social -->
      <div class="contacts">
         <ul>
          <li><a href="tel:+79646421507"><strong>8(964)642-15-07</strong></a></li>
          <li><a href="mailto:lyashdm@gmail.com" target="_blank"><strong>lyashdm@gmail.com</strong></a></li>
          <li>Москва, Электрозаводская ул., 21</li>
          <li>10:00 - 20:00 каждый день</li>
        </ul>
      </div><!-- /#.contacts -->
      <div class="copyright">
        <p>&copy; 2017. Дмитрий Ляш. Копирование и публикация материалов со сылкой на kisetland.ru</p>
      </div>
      <p class="developer">дизайн и разработка&ensp;<a href="mailto:yakov.barsukov@gmail.com" target="_blank">onebadger</a></p>
    </footer>
  </body>
</html>