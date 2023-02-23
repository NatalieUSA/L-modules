import { Component } from 'react';
import styles from './my-books.module.scss';
import Button from 'components/shared/components/Button/Button';
class MyBooks extends Component {
  state = {
    items: [
      {
        title: 'Fifty Shades Freed',
        author: 'Author: EL James',
      },
      {
        title: '101 Nights of Grrreat Sex',
        author: 'L Corn',
      },
    ],
  };
  render() {
    const { items } = this.state;
    const books = items.map(({ title, author }) => (
      <li>
        {title}. Author: {author}.<Button type="submit">delete</Button>
      </li>
    ));

    return (
      <div>
        <h3>My books</h3>
        <div className={styles.wrapper}>
          <div className={styles.block}>
            <h4>Add book</h4>
            <form action="">
              <div className={styles.formGroup}>
                <label>Book title</label>
                <input placeholder="enter book title" />
              </div>
              <div className={styles.formGroup}>
                <label>Book author</label>
                <input placeholder="enter author" />
              </div>
              <Button type="submit">Add book</Button>
            </form>
          </div>
          <div className={styles.block}>
            <div className={styles.formGroup}>
              <label>Filter books</label>
              <input placeholder="filter books" />
            </div>
            <ol>{books}</ol>
          </div>
        </div>
      </div>
    );
  }
}

export default MyBooks;
