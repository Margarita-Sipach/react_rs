import React from 'react';

export class Search extends React.Component<object, { searchValue: string }> {
  constructor(props: { searchValue: string }) {
    super(props);
    this.state = { searchValue: '' };
  }
  componentDidMount() {
    console.log(localStorage.getItem('search'));
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
        <input
          type="text"
          placeholder="I'm searching..."
          value={this.state.searchValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.handleChange(e)}
        />
        <button>Search</button>
      </div>
    );
  }
}
