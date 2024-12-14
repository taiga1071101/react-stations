// DO NOT DELETE

import './App.css';
// なんでcssは拡張しありでjsは拡張子なし？
import { Header } from './Header';
import { Description } from './Description';
import { DogListContainer } from './DogListContainer';

/**
 * @type {() => JSX.Element}
 */
export const App = () => {



  return (
    <div>
      <Header />
      <Description />
      <DogListContainer />
    </div>
  )
}
