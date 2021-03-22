<?php


if (isset($_POST['token'])) {
  $captcha_token = $_POST['token'];
} else {
  die('Капча работает некорректно. Обратитесь к администратору!');
}


$url = 'https://www.google.com/recaptcha/api/siteverify';
$params = [
  'secret' => '**Secret Key**',
  'response' => $captcha_token,
  'remoteip' => $_SERVER['REMOTE_ADDR']
];

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

$response = curl_exec($ch);
if (!empty($response)) $decoded_response = json_decode($response);

$success = false;
$success = $decoded_response->success;
if ($success > 0) {
  $name = $_POST['user_name'];
  $phone = $_POST['user_phone'];
  $massage = $_POST['user_massage'];
  $token = "**token**";
  $chat_id = "**chat_id**";
  $arr = array(
    'Имя клиента: ' => $name,
    'Телефон: ' => $phone,
    'Сообщение: ' => $massage,
  );

  foreach ($arr as $key => $value) {
    $txt .= "<b>" . $key . "</b> " . $value . "%0A";
  };

  $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

  if ($sendToTelegram) {
    header('Location: contact.php');
  } else {
    echo "Error";
  }
}
