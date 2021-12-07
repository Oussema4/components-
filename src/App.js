
import './App.css';
import Name from './component/profile/FullName';
import Photo from './component/profile/ProfilePhoto';
import Adresse from './component/profile/Address';
function App() {
  return (
    <div >
      <Name/>
        <Photo/>
          <Adresse/>
      
    </div>
  );
}

export default App;
