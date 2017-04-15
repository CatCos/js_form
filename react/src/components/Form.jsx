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
      error: {},
      hasError: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  /**
   * Handle change event
   *
   * @param data Data from the component that triggered onChange
   */
  handleChange(data) {
    const { e, inputName, value } = data;
    let inputValue = value !== undefined ? value : e.target.value;

    this.state[inputName] = inputValue;

    this.setState(this.state);

  }

  /**
   * Handle on submit event
   *
   * @param e Event
   */
  handleSubmit(e) {
    const fields = FORM_LEFT.fields;
    let hasErrors = false;

    fields.map((field) => {
      let error = validate(this.state[field.field], field.field);

      if (error) {
        hasErrors = true;
        this.state.error[field.field] = error;
        this.state.hasError[field.field] = true;
      } else {
        this.state.error[field.name] = '';
        this.state.hasError[field.field] = false;
      }

    });
    if (!hasErrors) {
      alert('your comment was submitted ' + this.state.firstName);
    }

    this.setState(this.state);

  }

  /**
   * Handle on blur event
   *
   * @param data Data from the component that triggered onBlur
   */

  handleBlur(data) {
    const { e, inputName } = data;

    const error = validate(this.state[inputName], inputName);

    if (error) {
      this.state.error[inputName] = error;
      this.state.hasError[inputName] = true;
    } else {
      this.state.error[inputName] = '';
      this.state.hasError[inputName] = false;
    }

    this.setState(this.state);

  }

  /**
   * Render left form
   *
   */
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
          required={field.required}
          hasError={this.state.hasError[field.field]}
          error={this.state.error[field.field]}
          onChange={this.handleChange}
          onBlur={this.handleBlur}/>
      );
    });

    return items;
  }

  /**
   * Render right form
   *
   */
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

  /**
   * Render function
   *
   */
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
