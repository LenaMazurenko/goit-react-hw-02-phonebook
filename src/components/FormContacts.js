import React, { Component } from 'react';
import s from './FormContacts.module.css';

class FormContacts extends Component {
  state = {
    name: '',
    number: '',
  };

  //==============================================
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  //=================================
  handleSubmit = evt => {
    evt.preventDefault();
    // Проп который передается форме для вызова при сабмите
    this.props.onSubmitProp(this.state);
    this.reset();
  };

  //===========================================
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.FormContacts}>
        <label className={s.Label}>
          Name
          <input
            type="text"
            placeholder="Vinny Pooch"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>

        <label className={s.Label}>
          Number
          <input
            type="tel"
            placeholder="+380800-00-00"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>

        <button className={s.SubmitBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
export default FormContacts;
