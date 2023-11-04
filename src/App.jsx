import { useState } from "react";
import DemoGallery from "./components/DemoGallery";
// import "./App.css";

import {DndContext} from '@dnd-kit/core'

import Draggable from "./components/Draggable";
import Droppable from "./components/Droppable";

const App = () => {
  const [isDropped, setIsDropped] = useState(false)

  const draggableMarkup = (
    <Draggable>Drag Me!</Draggable>
  )
  return (
    <DndContext onDragEnd={handleDragEnd}>
      {!isDropped ? draggableMarkup : undefined}
      <Droppable>
        {isDropped ? draggableMarkup : 'Drop here'}
      </Droppable>
    </DndContext>
  );

  function handleDragEnd(event) {
    console.log(event)
    if (event.over && event.over.id === 'droppable') {
      setIsDropped(true);
    }
  }
};

export default App;
