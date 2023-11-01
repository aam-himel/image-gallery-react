import React from "react";
import "./DropGallery.css";
import { charecters } from "../../data/charecters";

import { DragDropContext } from "react-beautiful-dnd";

const DropGallery = () => {
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <ul>
        {charecters.map(({ id, thumb, name }) => {
          return (
            <li key={id}>
              <div className="ch__sec">
                <img src="" alt="" />
              </div>
            </li>
          );
        })}
      </ul>
    </DragDropContext>
  );
};

export default DropGallery;
