import React from "react";

const Button = (props) => {
  const { change } = props; // callback to act upon button click!

  return (
    <button type="button" className="btn btn-sm btn-success" onClick={change}>
      {props.children}
    </button>
  );
};

/// depricated

// class Button extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   shouldComponentUpdate(nextProps) {
//     const { change: currentChange } = this.props;
//     const { change: nextChange } = nextProps;

//     return currentChange !== nextChange;
//   }

//   render() {
//     const { change } = this.props;
//     return (
//       <button type="button" onClick={change}>
//         {this.props.children}
//       </button>
//     );
//   }
// }

export default Button;
