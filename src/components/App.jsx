import React from 'react';
import TicketList from './KegList';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import NewKegForm from './NewKegForm';
import Error404 from './Error404';
import EditKegForm from './EditKegForm';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route path='/newkeg' component={NewKegForm} />
        <Route path='/editkeg/:id' component={EditKegForm} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;