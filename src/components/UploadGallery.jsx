import React, { useState } from "react";
import "./UploadGallery.css";
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  PointerSensor,
  DragOverlay,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";

import { Grid } from "./Grid";
import { SortablePhoto } from "./SortablePhoto";
import { Photo } from "./Photo";
import photos from "./photos.json";

const UploadGallery = ({ setCheckdItem, checkedItems }) => {
  const [items, setItems] = useState(photos);
  const [activeId, setActiveId] = useState(null);
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(TouchSensor)
  );
  const [selectedIds, setSelectedIds] = useState([]);
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <div className="gallery__top">
        <div className="header">
          <div className="header__left">
            <input type="checkbox" name="" id="" />
            <h4 className="">{checkedItems.length} items selected</h4>
          </div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
      <SortableContext items={items} strategy={rectSortingStrategy}>
        <Grid columns={4}>
          {items.map((url, index) => (
            <SortablePhoto
              key={url}
              url={url}
              index={index}
              handleSelectId={handleSelectId}
            />
          ))}
        </Grid>
      </SortableContext>

      <DragOverlay adjustScale={true}>
        {activeId ? (
          <Photo url={activeId} index={items.indexOf(activeId)} />
        ) : null}
      </DragOverlay>
    </DndContext>
  );

  function handleSelectId(index) {
    console.log("selected id", index);
    if (checkedItems.includes(index)) {
      setCheckdItem(checkedItems.filter((id) => id !== index));
    } else {
      setCheckdItem([...checkedItems, index]);
    }
  }

  function handleDelete() {
    if (items && checkedItems) {
      const newItems = items.filter(
        (_, index) => !checkedItems.includes(index)
      );
      setItems(newItems);
      setCheckdItem([]);
      console.log(newItems);
    }
  }

  function handleDragStart(event) {
    setActiveId(event.active.id);
  }

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active && over && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }

    setActiveId(null);
  }

  function handleDragCancel() {
    setActiveId(null);
  }
};

export default UploadGallery;
