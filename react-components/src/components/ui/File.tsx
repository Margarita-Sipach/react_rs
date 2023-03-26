import React from 'react';

interface FileProps {
  setInnerRef?: (arg: object) => void;
}

export class File extends React.Component<FileProps, { currentImg: string }> {
  private innerRef: React.RefObject<HTMLInputElement>;

  constructor(props: FileProps) {
    super(props);
    this.state = { currentImg: 'src/assets/default.png' };
    this.innerRef = React.createRef();
  }

  onLoadFile = () => {
    const files = this.innerRef.current?.files;
    if (files && files[0]) {
      const objectUrl = URL.createObjectURL(files[0]);
      this.setState({ currentImg: objectUrl });
      this.props.setInnerRef && this.props.setInnerRef({ img: objectUrl });
    }
  };

  render() {
    return (
      <div className="file">
        <img className="file__img" src={this.state.currentImg} alt="" />
        <input type="file" className="file__input" ref={this.innerRef} onChange={this.onLoadFile} />
      </div>
    );
  }
}
