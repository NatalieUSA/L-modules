import { Component } from 'react';
import axios from 'axios';
import { Dna } from 'react-loader-spinner';

import styles from './posts.module.scss';
export class Posts extends Component {
  state = {
    items: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(({ data }) => {
        console.log(data);
        this.setState({ items: data });
      })
      .catch(error => {
        // console.log(error.message);
        this.setState({ error: error.message });
      })
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { items, loading, error } = this.state;
    const elements = items.map(({ id, title, body }) => (
      <li key={id} className={styles.item}>
        <h4>{title}</h4>
        <p>{body}</p>
      </li>
    ));

    return (
      <>
        {error && (
          <p>...Error ...Error ... somethig went wrong ... try later</p>
        )}
        {loading && (
          <Dna
            visible={true}
            height="180"
            width="180"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        )}

        <ul className={styles.list}>{elements}</ul>
      </>
    );
  }
}
