function onSubmit() {
  var firstName = document.getElementById('first_name').value;
  var lastName = document.getElementById('last_name').value;
  var email = document.getElementById('email');
  var tooltip = document.getElementById('tooltip');
  var tooltipSpan = document.getElementById('tooltip-span');

  if (email.value === '') {
    email.className += ' input-error';
    tooltip.className += ' Tooltip-error';
    tooltipSpan.innerHTML = 'Required';
  } else if (!validateEmail(email.value)) {
    email.className += ' input-error';
    tooltip.className += ' Tooltip-error';
    tooltipSpan.innerHTML = 'Invalid Email';
  } else {
    email.classList.remove('input-error');
    tooltip.classList.remove('Tooltip-error');
  }

  return false;

}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
