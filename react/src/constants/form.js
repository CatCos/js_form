export const FORM_LEFT = {
  fields: [{
    name: 'first_name',
    text: 'First Name',
    type: 'text',
    field: 'firstName',
    required: true
  }, {
    name: 'last_name',
    text: 'Last Name',
    type: 'text',
    field: 'lastName',
    required: true
  }, {
    name: 'email',
    text: 'Email',
    type: 'text',
    field: 'email',
    required: true
  }]
};

export const FORM_RIGHT = {
  fields: [{
    name: 'comment',
    text: 'Comment',
    type: 'text',
    field: 'comment'
  }]
};

export const FORM_FOOTER = {
  fields: [{
    name: 'subscribe',
    text: 'Subscribe to follow up comments from this post',
    type: 'checkbox',
    field: 'subscribe'
  }]
};
