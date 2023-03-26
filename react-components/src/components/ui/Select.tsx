import React from 'react';

interface SelectProps {
  title: string;
  values: string[];
  setInnerRef?: (arg: object) => void;
}

export class Select extends React.Component<SelectProps, { val: string }> {
  private innerRef: React.RefObject<HTMLInputElement>;

  constructor(props: SelectProps) {
    super(props);
    this.innerRef = React.createRef();
  }

  componentDidMount() {
    this.props.setInnerRef &&
      this.props.setInnerRef({ [this.props.title.toLowerCase()]: this.props.values[0] });
  }

  render() {
    return (
      <select
        name={this.props.title}
        id={this.props.title}
        onChange={() => {
          this.props.setInnerRef &&
            this.props.setInnerRef({
              [this.props.title.toLowerCase()]: this.innerRef.current?.value,
            });
        }}
      >
        {this.props.values.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    );
  }
}
