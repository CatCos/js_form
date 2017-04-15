export function validate(value, inputName) {
  switch (inputName) {
    case 'email':
      return isEmail(value);
    default:
      return isEmpty(value);
  }
}

/**
 * Validate if value is empty
 *
 * @param value  Value to validate
 */
function isEmpty(value) {
  if (!value || value === '') {
    return 'Required';
  }

  return false;
}

/**
 * Validate if value isfix a valid email
 *
 * @param value  Value to validate
 */

function isEmail(value) {
  if (!value) {
    return 'Required';
  }

  // Let's not start a debate on email regex. This is just for an example app!
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Invalid email address';
  }

  return false;
}
