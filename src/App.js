import React, { useState, useEffect, useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import HomeScreen from './components/HomeScreen/HomeScreen';
import Jobs from './components/Jobs/Jobs';
import Service from './components/Service/Service';
import Contacts from './components/Contacts/Contacts';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form/Form.js';
import Login from './components/Login/Login';
import Company from './components/Company/Company';
import { AuthProvider } from './Auth';
import Background from './Images/Logo.png';
import firebase from './firebase.js';

function App() {

  /*
 useEffect(() => {
    if (groceryListId) {
      FirestoreService.getGroceryList(groceryListId)
        .then(groceryList => {
          if (groceryList.exists) {
            setError(null);
            setGroceryList(groceryList.data());
          } else {
            setError('grocery-list-not-found');
            setGroceryListId();
          }
        })
        .catch(() => setError('grocery-list-get-fail'));
    }s
  }, [groceryListId, setGroceryListId]);
  */

  /*
  const [tengilidir, setTengilidir] = useState([])

  useEffect(() => {
    
    const fetchData = async () => {
      const db = firebase.firestore()
      const data = await db.collection("tengilidir").get()
      setTengilidir(data.docs.map(doc => ({...doc.data(), id: doc.id})))
    }
    fetchData()
  }, [])

*/
  return (
    <AuthProvider>
    <div style={{backgroundColor: '#D3D3D3'}}>
      <div style={{position:'relative', overflow: 'hidden', paddingTop: '10px', paddingBottom: '10px'}}>
        <div style={{marginLeft: 'auto', marginRight: 'auto', width: '1200px'}}>
          <img src={require('./Images/RafPRO.png')} alt=""/>
        </div>
      </div>
      <div>
        <NavigationBar />
      </div>
      <div>
        <div style={{width: '70%', margin: '0 auto'}}>
          <Switch>
            <Route exact path="/" component={HomeScreen}/>
            <Route exact path="/fyrirtaekid" component={Company}/>
            <Route exact path="/tengilidir" component={Contacts}/>
            <Route exact path="/verkefni" component={Jobs}/>
            <Route exact path="/thjonusta" component={Service}/>
            <Route exact path="/fyrirspurn" component={Form}/>
          </Switch>
          <Route exact path="/login" component={Login} />
        </div>
      </div>
    </div>
    </AuthProvider>
  );
}

export default App;

/*
    <Switch>
      <Route exact path ="/" render={() => ( <div>Main site</div>)} />
      <Route path="/about" render={() => ( <div>About</div>)} />
    </Switch>
*7

/*

*/
