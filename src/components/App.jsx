import MyBooks from './modules/MyBooks/MyBooks';
import Counter from './R-m2/Counter/Counter';
import LessonsTitle from './shared/components/LessonsTitle/LessonsTitle';

export const App = () => {
  return (
    <div className="App">
      <LessonsTitle>Repeta. Modul 2.1 Class</LessonsTitle>
      <Counter />
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
