import React, { PropTypes } from 'react';

import { FORM_FOOTER } from '../constants/form';

import Input from './Input.jsx';
import Button from './Button.jsx';
/**
 * Render function
 *
 * @params props Component properties
 */
class FormFooter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * Handle change event
   *
   * @param e event
   */
  handleChange(e, inputName) {
    let value = e.target.value ? e.target.value : e.currentTarget.value;

  }

  handleSubmit(e, inputName) {
    let value = e.target.value ? e.target.value : e.currentTarget.value;

  }

  renderLeftForm() {
    const fields = FORM_FOOTER.fields;

    let items = fields.map((field, key) => {
      return (
        <Input key={key} name={field.name} text={field.text} type={field.type}
          className='checkbox'/>
      );
    });

    return items;
  }

  renderButton() {
    return (
      <Button
        text='Submit comment'
        onSubmit={this.handleSubmit}/>
    );
  }

  render() {
    return (
      <div className="form-footer">
           <div className="left-form-footer">
              {this.renderLeftForm()}
           </div>
           <div className="right-form-footer">
               {this.renderButton()}
           </div>
       </div>
    );
  }

}

export default FormFooter;
