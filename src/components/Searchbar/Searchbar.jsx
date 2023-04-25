import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Container, Form, Button, Label, Input } from './Searchbar.styled';

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return alert('Please enter youre query');
    }
    // const form = e.target;
    // console.log(form.elements.name.value);
    onSubmit(query);
    resetForm();
  };

  const resetForm = () => {
    setQuery('');
  };

  const handleQuery = e => {
    const inputValue = e.currentTarget.value;
    setQuery(inputValue.toLowerCase());
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <BsSearch size="2rem" color="black" />
          <Label>Search</Label>
        </Button>
        <Input type="text" name="name" value={query} onChange={handleQuery} />
      </Form>
    </Container>
  );
}
