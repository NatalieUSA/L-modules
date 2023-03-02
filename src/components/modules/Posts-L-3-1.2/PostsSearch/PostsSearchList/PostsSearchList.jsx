import styles from './posts-search-list.module.scss';

export const PostsSearchList = ({ items, showPost }) => {
  const elements = items.map(({ id, title, body }) => (
    <li
      key={id}
      className={styles.item}
      onClick={() => showPost({ title, body })}
    >
      <h4>{title}</h4>
      <p>{body}</p>
    </li>
  ));
  return <ul className={styles.list}>{elements}</ul>;
};

PostsSearchList.defaultProps = {
  items: [],
};
