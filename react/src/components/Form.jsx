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
  handleChange(data) {
    const { e, inputName } = data;
    let value = e.target.value;

    this.state[inputName] = value;

    this.setState(this.state);

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
            <FormFooter />
        </div>
      </form>
    );
  }
}

export default Form;
