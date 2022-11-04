import React, { Component } from 'react';

import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

import { FofmStyle } from './form.styled';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  hendleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <FofmStyle onSubmit={this.handleSubmit}>
        <Input
          name="name"
          type="text"
          label="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={this.state.name}
          onChange={this.hendleInputChange}
        />
        <Input
          name="number"
          type="tel"
          label="Number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={this.state.number}
          onChange={this.hendleInputChange}
        />
        <Button type="submit" text="Add contact"></Button>
      </FofmStyle>
    );
  }
}

export default Form;
