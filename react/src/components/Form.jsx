import React, { PropTypes } from 'react';

import Input from './Input.jsx';
import Textarea from './Textarea.jsx';
import FormFooter from './FormFooter.jsx';

import { FORM_LEFT, FORM_RIGHT } from '../constants/form';

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
      comment: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * Handle change event
   *
   * @param e event
   */
  handleChange(e, inputName) {
    let value = e.target.value ? e.target.value : e.currentTarget.value;

  }

  renderLeftForm() {
    const fields = FORM_LEFT.fields;

    let items = fields.map((field, key) => {
      return (
        <Input key={key} name={field.name} text={field.text} type={field.type}/>
      );
    });

    return items;
  }

  renderRightForm() {
    const fields = FORM_RIGHT.fields;

    let items = fields.map((field, key) => {
      return (
        <Textarea key={key} name={field.name} text={field.text} type={field.type}/>
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
            <FormFooter />
        </div>
      </form>
    );
  }
}

export default Form;
