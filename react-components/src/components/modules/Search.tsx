import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import React from 'react';

export class Search extends React.Component<object, { searchValue: string }> {
  constructor(props: { searchValue: string }) {
    super(props);
    this.state = { searchValue: '' };
  }
  componentDidMount() {
    this.setState({ searchValue: localStorage.getItem('search') || '' });
  }
  componentWillUnmount() {
    this.state.searchValue && localStorage.setItem('search', this.state.searchValue);
  }
  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ searchValue: e.target.value });
  }
  render() {
    return (
      <div className="search">
        <Input
          attributes={{
            type: 'text',
            placeholder: "I'm searching...",
            value: this.state.searchValue,
          }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.handleChange(e)}
        />
        <Button>Search</Button>
      </div>
    );
  }
}
