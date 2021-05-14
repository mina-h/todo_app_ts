import React from 'react';

interface Button {
  onClick(event: React.FormEvent) : void;
}
 
const AddToDoButton: React.FC<Button> = (props) => {
     return (
      <button className="add" type="button" onClick={props.onClick}>Add</button>

     );
 }

 export default AddToDoButton;