function onSubmit() {
  var firstName = document.getElementById('first_name');
  var lastName = document.getElementById('last_name');
  var email = document.getElementById('email');

  var tooltipFirstName = document.getElementById('tooltip_first_name');
  var tooltipSpanFirstName = document.getElementById('tooltip-span-first_name');

  var tooltipLastName = document.getElementById('tooltip_last_name');
  var tooltipSpanLastName = document.getElementById('tooltip-span-last_name');

  var tooltipEmail = document.getElementById('tooltip_email');
  var tooltipSpanEmail = document.getElementById('tooltip-span-email');

  validateEmail(email, email.value, tooltipEmail, tooltipSpanEmail);
  validateRequired(firstName, firstName.value, tooltipFirstName, tooltipSpanFirstName);
  validateRequired(lastName, lastName.value, tooltipLastName, tooltipSpanLastName);

  return false;

}

/**
 * Handle email validation
 *
 * @param field Input element
 * @param value Input value
 * @param tootlip Tooltip element
 * @param tooltipSpan Tooltip span element
 */
function validateEmail(field, value, tooltip, tooltipSpan) {
  if (isEmpty(value)) {
    field.className += ' input-error';
    tooltip.className += ' Tooltip-error';
    tooltipSpan.innerHTML = 'Required';
  } else if (!isEmail(value)) {
    field.className += ' input-error';
    tooltip.className += ' Tooltip-error';
    tooltipSpan.innerHTML = 'Invalid Email';
  } else {
    field.classList.remove('input-error');
    tooltip.classList.remove('Tooltip-error');
  }

  return false;
}

/**
 * Handle required validation
 *
 * @param field Input element
 * @param value Input value
 * @param tootlip Tooltip element
 * @param tooltipSpan Tooltip span element
 */

function validateRequired(field, value, tooltip, tooltipSpan) {
  var error = isEmpty(value);
  if (error) {
    field.className += ' input-error';
    tooltip.className += ' Tooltip-error';
    tooltipSpan.innerHTML = 'Required';
  } else {
    field.classList.remove('input-error');
    tooltip.classList.remove('Tooltip-error');
  }

  return false;
}

/**
 * Verify if it is a valid email
 *
 * @param email Email to validate
 */
function isEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

/**
 * Verify if value is not null or empty
 *
 * @param value Value to validate
 */
function isEmpty(value) {
  if (!value || value === '') {
    return 'Required';
  }

  return false;
}

/**
 * Handle onBlur validation
 *
 * @param value Value to validate
 * @param field Input to validate
 */
function validate(value, field) {
  var input = document.getElementById(field);
  var tooltip = document.getElementById('tooltip_' + field);
  var tooltipSpan = document.getElementById('tooltip-span-' + field);
  var error;

  if (field === 'email') {
    validateEmail(input, value, tooltip, tooltipSpan);
  } else {
    validateRequired(input, value, tooltip, tooltipSpan);
  }
}
