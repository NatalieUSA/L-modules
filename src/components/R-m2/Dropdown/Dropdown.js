import React, { Component } from 'react';
import './Dropdown.css';
import Button from 'components/shared/components/Button/Button';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = prevState => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    const { visible } = this.state;

    return (
      <div className="Dropdown">
        <h3>Dropdown</h3>
        <Button
          type="button"
          className="Dropdown__toggle"
          onClick={this.toggle}
        >
          {visible ? 'hide' : 'show'}
          {/* {visible ? 'Скрыть' : 'Показать'} */}
        </Button>
        {visible && <div className="Dropdown__menu">Выпадающее меню</div>}

        {/* {visible && <div className="Dropdown__menu">Выпадающее меню</div>} */}
      </div>
    );
  }
}

export default Dropdown;

// class Dropdown extends Component {
//   state = {
//     visible: false,
//   };
//   show = () => {
//     this.setState({ visible: true });
//   };
//   hide = () => {
//     this.setState({ visible: false });
//   };

//   render() {
//     return (
//       <div className="Dropdown">
//         <h3>Dropdown</h3>
//         <Button className="Dropdown__toggle" onClick={this.show}>
//           show
//         </Button>
//         <Button className="Dropdown__toggle" onClick={this.hide}>
//           hide
//         </Button>
//         {this.state.visible && (
//           <div className="Dropdown__menu">Выпадающее меню</div>
//         )}
//       </div>

//       // <div className="Dropdown__menu">Выпадающее меню</div></div>
//     );
//   }
// }

// export default Dropdown;
