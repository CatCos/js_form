import React, { PropTypes } from 'react';

import Input from './Input.jsx';
import Textarea from './Textarea.jsx';
import FormFooter from './FormFooter.jsx';

import { FORM_LEFT, FORM_RIGHT } from '../constants/form';

import { validate } from '../utils/validate.js';
/**
 * Button component
 *
 */
class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      comment: '',
      subscribe: false,
      error: '',
      hasError: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * Handle change event
   *
   * @param e event
   */
  handleChange(data) {
    const { e, inputName, value } = data;
    let inputValue = value !== undefined ? value : e.target.value;

    this.state[inputName] = inputValue;

    this.setState(this.state);

  }

  handleSubmit(e) {
    const error = validate(this.state.email, 'email');

    if (error) {
      this.state.error = error;
      this.state.hasError = true;
      this.setState(this.state);
    } else {
      this.state.error = '';
      this.state.hasError = false;
      this.setState(this.state);
    }

  }

  renderLeftForm() {
    const fields = FORM_LEFT.fields;

    let items = fields.map((field, key) => {
      return (
        <Input
          key={key}
          name={field.name}
          value={this.state[field.field]}
          text={field.text}
          type={field.type}
          field={field.field}
          hasError={field.field === 'email' && this.state.hasError}
          error={this.state.error}
          onChange={this.handleChange}/>
      );
    });

    return items;
  }

  renderRightForm() {
    const fields = FORM_RIGHT.fields;

    let items = fields.map((field, key) => {
      return (
        <Textarea
          key={key}
          name={field.name}
          value={this.state[field.field]}
          text={field.text}
          type={field.type}
          field={field.field}
          onChange={this.handleChange}/>
      );
    });

    return items;
  }

  render() {

    return (
      <form className="form-validation">
        <div className="main-form">
            <div className="form-inputs">
              <div className="left-form">
                  {this.renderLeftForm()}
              </div>
              <div className="right-form">
                {this.renderRightForm()}
              </div>
            </div>
            <FormFooter onClick={this.handleSubmit}  onChange={this.handleChange}/>
        </div>
      </form>
    );
  }
}

export default Form;
