import MyBooks from './modules/MyBooks/MyBooks';
import Counter from './R-m2/Counter/Counter';
import LessonsTitle from './shared/components/LessonsTitle/LessonsTitle';
import Dropdown from './R-m2/Dropdown/Dropdown';
import ColorPicker from './R-m2/ColorPicker/ColorPicker';
import MyBooksLifeСycle from './modules/MyBooks-L-3-1/MyBooksLife';

import MyBooksComponent from './modules/MyBooks-components-example/MyBooksComponents';
import { Posts } from './modules/Posts-L-3-1.2/Posts/Posts';
import { PostsSearch } from './modules/Posts-L-3-1.2/PostsSearch/PostsSearch';
const colorPickerOptions = [
  { label: 'red', color: '#ff2803' },
  { label: 'green', color: '#10ec18' },
  { label: 'aqua', color: '#04f7f7' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#fd0357' },
  { label: 'indigo', color: '#ea03ff' },
];

export const App = () => {
  return (
    <div className="App">
      <LessonsTitle>
        Lyamzin.3-2. Posts-searhForm.
        lesson-7-lifecycle-methods-AJAX-modal-portal
      </LessonsTitle>
      <PostsSearch />
      <LessonsTitle>Lyamzin.3-1.2. Posts</LessonsTitle>
      {/* <Posts /> */}

      <LessonsTitle>Lyamzin.3.1. Lifecycle</LessonsTitle>
      <MyBooksLifeСycle />
      <LessonsTitle>Lyamzin. Modul 2.3 form</LessonsTitle>
      <MyBooks />
      <LessonsTitle> form-Component</LessonsTitle>
      <MyBooksComponent />

      <LessonsTitle>Repeta. Modul 2.1 Class</LessonsTitle>
      <Counter />
      <Dropdown />
      <ColorPicker options={colorPickerOptions} />
    </div>
  );
};

/* <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101',
      // }}
      ></div> */
