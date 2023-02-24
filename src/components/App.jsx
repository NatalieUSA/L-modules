import MyBooks from './modules/MyBooks/MyBooks';
import Counter from './R-m2/Counter/Counter';
import LessonsTitle from './shared/components/LessonsTitle/LessonsTitle';
import Dropdown from './R-m2/Dropdown/Dropdown';
import ColorPicker from './R-m2/ColorPicker/ColorPicker';

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
      <LessonsTitle>Repeta. Modul 2.1 Class</LessonsTitle>
      <Counter />
      <Dropdown />
      <ColorPicker options={colorPickerOptions} />
      <LessonsTitle>Lyamzin. Modul 2.3 form</LessonsTitle>
      <MyBooks />
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
