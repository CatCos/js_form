export function validate(value, inputName) {
  switch(inputName) {
    case 'email':
      return isEmail(value);
  }
}

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
