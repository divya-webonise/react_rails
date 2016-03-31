//Write componnets over here:->
//follow tutorial: https://www.youtube.com/watch?v=MlKm1T100JU
import React from 'react';

class Contact extends React.Component{
  render(){
    console.log(this.props.contact);
    return(
      <div>
        <li>
          {this.props.contact.name} {this.props.contact.phone}
        </li>
      </div>
    )
  }
}

export default Contact;
