import { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const PhoneBook = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  ]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
    if (name === 'filter') setFilter(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isDuplicate = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());

    if (!name.trim() || !number.trim()) {
      alert('Name or number is empty');
      return;
    }

    if (isDuplicate) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prev => [...prev, newContact]);
    setName('');
    setNumber('');
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  const deleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  return (
    <>
      <h1 className='text-center text-3xl'>PhoneBook</h1>
      <ContactForm name={name} number={number} onChange={handleChange} onSubmit={handleSubmit} />
      <Filter filter={filter} onChange={handleChange} />
      <ContactList contacts={getFilteredContacts()} onDelete={deleteContact} />
    </>
  );
};

export default PhoneBook;
