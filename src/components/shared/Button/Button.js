import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    const { change: currentChange } = this.props;
    const { change: nextChange } = nextProps;

    return currentChange !== nextChange;
  }

  render() {
    const { change } = this.props;
    return (
      <button type="button" onClick={change}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
