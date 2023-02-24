import { Component } from 'react';
import styles from './my-books.module.scss';
import Button from 'components/shared/components/Button/Button';
import { nanoid } from 'nanoid';

class MyBooks extends Component {
  state = {
    items: [
      {
        id: nanoid(),
        title: 'Fifty Shades Freed',
        author: 'Author: EL James',
      },
      { id: nanoid(), title: '101 Nights of Grrreat Sex', author: 'L Corn' },
    ],
    title: '',
    author: '',
    filter: '',
  };

  addBook = e => {
    e.preventDefault();
    // console.log(this.state);
    this.setState(prevState => {
      const { title, author, items } = prevState;
      if (this.isDublicate(title, author)) {
        return alert(
          `${title}, Author: ${author} - is already in Your collection`
        );
      }
      if (title === '' || author === '') {
        return alert(`Check every input value!! text something`);
      }
      const newBook = {
        id: nanoid(),
        title,
        author,
      };
      return { items: [newBook, ...items], title: '', author: '' };
    });
  };

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
    console.log(target);
    // console.log(e.target.value);
    // console.log(e.target.name);
  };

  removeBook(id) {
    this.setState(({ items }) => {
      const newBooks = items.filter(item => item.id !== id);
      return { items: newBooks };
    });
  }

  isDublicate(title, author) {
    const normalizedTitle = title.toLowerCase();
    const normalizedAuthor = author.toLowerCase();
    const { items } = this.state;
    const book = items.find(({ title, author }) => {
      return (
        title.toLowerCase() === normalizedTitle &&
        author.toLowerCase() === normalizedAuthor
      );
    });
    return Boolean(book);
  }

  getFilteredBooks() {
    const { filter, items } = this.state;
    if (!filter) {
      return items;
    }
    const normalizedFilter = filter.toLowerCase();
    const result = items.filter(({ title, author }) => {
      return (
        title.toLowerCase().includes(normalizedFilter) ||
        author.toLowerCase().includes(normalizedFilter)
      );
    });
    return result;
  }

  render() {
    const { addBook, handleChange } = this;
    const { title, author } = this.state;
    const items = this.getFilteredBooks();

    const books = items.map(({ id, title, author }) => (
      <li key={id}>
        {title}. Author: {author}.
        <Button onClick={() => this.removeBook(id)} type="submit">
          delete
        </Button>
      </li>
    ));

    return (
      <div>
        <h3>My books</h3>
        <div className={styles.wrapper}>
          <div className={styles.block}>
            <h4>Add book</h4>
            <form action="" onSubmit={addBook}>
              <div className={styles.formGroup}>
                <label>Book title</label>
                <input
                  name="title"
                  value={title}
                  onChange={handleChange}
                  placeholder="enter book title"
                />
              </div>
              <div className={styles.formGroup}>
                <label>Book author</label>
                <input
                  name="author"
                  value={author}
                  onChange={handleChange}
                  placeholder="enter author"
                />
              </div>
              <Button type="submit">Add book</Button>
            </form>
          </div>
          <div className={styles.block}>
            <div className={styles.formGroup}>
              <label>Filter books</label>
              <input
                name="filter"
                onChange={handleChange}
                placeholder="filter books"
              />
            </div>
            <ol>{books}</ol>
          </div>
        </div>
      </div>
    );
  }
}

export default MyBooks;
