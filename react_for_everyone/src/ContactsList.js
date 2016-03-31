//Write componnets over here:->
//follow tutorial: https://www.youtube.com/watch?v=MlKm1T100JU
import React from 'react';
import Contact from './Contact';

class ContactsList extends React.Component{
  render(){
    console.log(this.props.contacts);
    return(
      <div>
        <ul>
        {this.props.contacts.map((contact)=> {
          return <Contact contact={contact} key={contact.id}/>
        })}
        </ul>
        <input type='text' defaultValue='Level Up' />
      </div>
    )
  }
}

export default ContactsList;
