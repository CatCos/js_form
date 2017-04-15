import React from 'react';
import PropTypes from 'prop-types';

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
      subscribe: false
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
    const { e, inputName } = data;

    this.state[inputName] = !this.state[inputName];

    this.setState(this.state);

    if (this.props.onChange) {
      return this.props.onChange({
        inputName: inputName,
        value: this.state[inputName]
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    let value = e.target.value ? e.target.value : e.currentTarget.value;

    if (this.props.onClick) {
      return this.props.onClick({
        value: this.state.subscribe
      });
    }

  }

  renderLeftForm() {
    const fields = FORM_FOOTER.fields;

    let items = fields.map((field, key) => {
      return (
        <Input
          key={key}
          name={field.name}
          value={this.state[field.field]}
          text={field.text}
          type={field.type}
          field={field.field}
          onChange={this.handleChange}
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

FormFooter.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};

FormFooter.defaultProps = {
};

export default FormFooter;
