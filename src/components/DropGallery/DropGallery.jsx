import React from "react";
import "./DropGallery.css";
import { charecters } from "../../data/charecters";

import { DragDropContext, Droppable, Draggable  } from "react-beautiful-dnd";

const DropGallery = () => {
  return (
    <DragDropContext>
      <Droppable droppableId="characters">
        {(provided) => (
          <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
          {charecters.map(({ id, name, thumb }, index) => {
            return (
              <Draggable key={id} draggableId={id} index={index}>
                {(provided) => (
                  <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
                    <div className="characters-thumb">
                      <img src={thumb} alt={`${name} Thumb`} />
                    </div>
                    <p>{name}</p>
                  </li>
                )}
                
              </Draggable>
            );
          })}
                {provided.placeholder}

        </ul>
        )}
        
      </Droppable>
    </DragDropContext>
  );
};

export default DropGallery;
