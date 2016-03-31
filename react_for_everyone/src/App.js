//Write componnets over here:->
//follow tutorial: https://www.youtube.com/watch?v=MlKm1T100JU
import React from 'react';
import ContactsList from './ContactsList';

// let contacts = {

//   name: 'Divya',
//   phone: '555 555 5555'
// }
let contacts = [{
  id: 1,
  name: 'Divya',
  phone: '555 555 5555'
}, {
  id: 2,
  name: 'Scott',
  phone: '76543587654'
}, {
  id: 3,
  name: 'Anshul',
  phone: '0987654328765'
}, {
  id: 4,
  name: 'Sheena',
  phone: '6567 54987654'
}]

class App extends React.Component{
  render(){
    return(
      <div>
        <h1>Contacts Lists</h1>
          <ContactsList contacts={this.props.contacts}/>
      </div>
    )
  }
}

// React.render(<App />, document.getElementById('app'));
React.render(<App contacts={contacts}/>, document.getElementById('app'));
