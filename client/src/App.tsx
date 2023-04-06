import React from 'react';
import {Plate, TEditableProps} from '@udecode/plate';
import "./App.css";

import {
  createBlockquotePlugin,
  createBoldPlugin,
  createCodeBlockPlugin,
  createCodePlugin,
  createHeadingPlugin,
  createItalicPlugin,
} from "@udecode/plate";


const editableProps: TEditableProps = { //This would be the basic text editor. 
  placeholder:"Enter the Name Brethren"
}
const App = ()=>{
  return(
    <Plate editableProps={editableProps}/>
  )
}

export default App;

