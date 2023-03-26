import React from 'react';

interface InputProps {
  attributes: {
    type?: string;
    placeholder: string;
    value?: string;
  };
  setInnerRef?: (arg: object) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export class Input extends React.Component<InputProps> {
  private innerRef: React.RefObject<HTMLInputElement>;
  private name: string;

  constructor(props: InputProps) {
    super(props);
    this.name = this.props.attributes.placeholder;
    this.innerRef = React.createRef();
  }

  render() {
    return (
      <input
        {...this.props.attributes}
        ref={this.innerRef}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          this.props.onChange && this.props.onChange(e);
          this.props.setInnerRef &&
            this.props.setInnerRef({
              [this.name.toLowerCase().replace(' ', '')]: this.innerRef.current?.value,
            });
        }}
      />
    );
  }
}
