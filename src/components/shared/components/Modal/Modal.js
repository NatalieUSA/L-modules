import { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from './modal.module.scss';

const modalRoot = document.querySelector('#modal-root');
console.log(modalRoot);

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModal);
  }

  closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      this.props.close();
    }
  };

  render() {
    const { children, close } = this.props;
    const { closeModal } = this;

    return createPortal(
      <div className={styles.overlay}>
        <img
          onClick={closeModal}
          alt="modal"
          src="https://www.jnsm.com.ua/ures/img/Chicago_1853.jpg"
        ></img>
        <div className={styles.modal}>
          <span onClick={close} className={styles.close}>
            X
          </span>
          {children}
        </div>
      </div>,
      modalRoot
    );
  }
}
