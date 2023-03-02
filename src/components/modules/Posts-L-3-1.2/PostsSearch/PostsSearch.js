import { Component } from 'react';
import { searchPosts } from 'components/shared/servises/post-api';
import { Dna } from 'react-loader-spinner';

import { PostsSearchForm } from './PostsSearchForm/PostsSearchForm';
import { PostsSearchList } from './PostsSearchList/PostsSearchList';
import styles from './posts-search.module.scss';
import Button from 'components/shared/components/Button/Button';
import { Modal } from 'components/shared/components/Modal/Modal';
import { PostDetails } from './PostDetails/PostDetails';

export class PostsSearch extends Component {
  state = {
    search: '',
    items: [],
    loading: false,
    error: null,
    page: 1,
    showModal: false,
    postDetails: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.fetchPosts();
    }
  }

  async fetchPosts() {
    try {
      this.setState({ loading: true });
      const { search, page } = this.state;
      const data = await searchPosts(search, page);
      this.setState(({ items }) => ({ items: [...items, ...data] }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  searchPosts = ({ search }) => {
    this.setState({ search, items: [], page: 1 });
  };

  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  showPost = ({ title, body }) => {
    this.setState({
      postDetails: { title, body },
      showModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      postDetails: null,
      showModal: false,
    });
  };

  render() {
    const { items, loading, error, search, showModal, postDetails } =
      this.state;
    const { searchPosts, loadMore, showPost, closeModal } = this;

    return (
      <>
        <PostsSearchForm onSubmit={searchPosts} />
        <PostsSearchList showPost={showPost} items={items} />
        {/* {!items.length && search && <p>empty results. Try one more search</p>} */}
        {error && <p className={styles.errorMessage}>{error}</p>}
        {loading && <p>...Load posts</p>}
        {Boolean(items.length) && <Button onClick={loadMore}>Load more</Button>}
        {showModal && (
          <Modal close={closeModal}>
            <PostDetails {...postDetails} />
          </Modal>
        )}
      </>
    );
  }
}
