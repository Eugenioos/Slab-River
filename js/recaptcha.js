jQuery(document).ready(function () {
  const TOKEN = '***';
  addFormToken(TOKEN);

  $('form').on('submit', function (e) {
    e.preventDefault();

    let form = jQuery(this);
    let url = 'telegram.php';

    jQuery.ajax({
      type: 'POST',
      url: url,
      data: form.serialize(), // serializes the form's elements.
      success: function (data) {
        location.href = '/';
        // console.log(data); // show response from the php script.
        // $('#thankMod').modal('show');
        // setTimeout(() => {
        //   $('#thankMod').modal('hide');
        // }, 3000);
      },
    });
  });
});

function addFormToken(token) {
  grecaptcha.ready(function () {
    grecaptcha.execute(token, { action: '/' }).then(function (token) {
      $('form').prepend(
        '<input type="hidden" name="token" value="' + token + '">'
      );
    });
  });
}
