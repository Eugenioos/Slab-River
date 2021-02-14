<?php include($_SERVER['DOCUMENT_ROOT'] . '/templates/header.php'); ?>

<div id="es-contact-section">
	<div class="container">
		<div class="row">
			<div class="contact-left col-md-8 text-center heading-section animate-box">
				<h2>Контакты</h2>
			</div>
		</div>
		<div class="row-form row">
			<div class="col-md-4 animate-box">
				<h3 class="h3-adress">Наш адресс</h3>
				<ul class="contact-info">
					<li><i class="icon-location-pin"></i>Санкт-Петербур, Промышленная улица, дом 19Н</li>
					<li><i class="icon-phone2"></i><a href="tel:+79602537787" style="color: black">+79999999999</a></li>
					<li><i class="icon-mail"></i><a href="#">mail@gmail.com</a></li>
					<div class="social-text-align">
						<p class="es-social-icons-contact">
							<a href="https://vk.com/slabriver"><i class="icon-vk-with-circle"></i></a>
							<a href="https://t.me/SlabRiver"><i class="icon-telegram"></i></a>
							<a href="https://instagram.com/slab.river?igshid=1pxn5p0bx081v"><i class="icon-instagram-with-circle"></i></a>
						</p>
					</div>
				</ul>
			</div>

			<form action="telegram.php" class="row-form-mob" id="contact-form" method="POST">
				<div class="col-md-8 animate-box">
					<div class="row-form row">
						<div class="margin-service col-md-6">
							<div class="form-group">
								<input type="text" class="form-control" name="user_name" placeholder="Ваше имя" title="Разрешено использовать только буквы" pattern="^[А-Яа-яЁё,a-zA-Z\s]+$" maxlength="12" required="true">
							</div>
						</div>
						<div class="margin-service col-md-6">
							<div class="form-group">
								<input type="text" id="phone" name="user_phone" class="form-control" placeholder="Телефон" required="true">
							</div>
						</div>
						<div class="col-md-12">
							<div class="form-group">
								<textarea htmlspecialchars class="form-control" name="user_massage" cols="30" rows="7" placeholder="Введите сообщение" maxlength="700"></textarea>
							</div>
						</div>
						<div class="col-md-12 btn-flex">
							<div class="form-group">
								<input type="submit" class="btn btn-primary" value="Оставить заявку">
							</div>
						</div>
					</div>
				</div>
			</form>

		</div>
	</div>
</div>
<!-- End: es-contact-section -->
<!-- <div id="map" class="es-map animate-box"></div> -->
<div class="es-map animate-box">
	<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A69fc9d7ace4b5cfaa5dd3af2e5d9e5aad50e2c8f3535261fd4bbb0496185b27b&amp;width=100%&amp;height=500&amp;lang=ru_RU&amp;scroll=true"></script>
</div>
<!-- END map -->
<?php include($_SERVER['DOCUMENT_ROOT'] . '/templates/footer.php') ?>