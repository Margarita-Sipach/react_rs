import React from 'react';

interface BoxProps {
  title: string;
  type: 'checkbox' | 'radio';
  values: string[];
  setInnerRef: (arg: object) => void;
}

export class Box extends React.Component<BoxProps, { val: object }> {
  private innerRef: React.RefObject<HTMLInputElement>[];

  constructor(props: BoxProps) {
    super(props);

    this.state = { val: [] };
    this.innerRef = this.props.values.map(() => React.createRef());
  }

  render() {
    return (
      <div className="checkbox">
        {this.props.values.map((item, index) => (
          <label key={item} htmlFor={item}>
            <input
              type={this.props.type}
              name={this.props.title}
              value={item}
              id={item}
              ref={this.innerRef[index]}
              onClick={() => {
                const val =
                  this.props.type === 'radio'
                    ? { [item]: this.innerRef[index].current?.checked }
                    : { ...this.state.val, [item]: this.innerRef[index].current?.checked };
                this.props.setInnerRef({
                  [this.props.title.toLowerCase()]: Object.entries(val).reduce(
                    (acc: string[], item) => (item[1] ? [...acc, item[0]] : acc),
                    []
                  ),
                });
                this.setState({ val: val });
              }}
            />
            {item}
          </label>
        ))}
      </div>
    );
  }
}
