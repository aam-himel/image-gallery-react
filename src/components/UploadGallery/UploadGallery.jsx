import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
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

import { Grid } from "../Grid";
import { SortablePhoto } from "../SortablePhoto";
import { Photo } from "../Photo/Photo";
import productPhotos from "../../data/productPhotos.json";
import UploadImg from "../../assets/upload.svg";
import "./UploadGallery.css";

const UploadGallery = ({ setCheckdItem, checkedItems }) => {
  const [items, setItems] = useState(productPhotos);
  const [activeId, setActiveId] = useState(null);
  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(TouchSensor)
  );
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <div className="gallery__top">
        {checkedItems.length ? (
          <div className="header">
            <div className="header__left">
              <input type="checkbox" defaultChecked />
              <h4 className="">{checkedItems.length} items selected</h4>
            </div>
            <button onClick={handleDelete} className="deleteBtn">
              Delete
            </button>
          </div>
        ) : (
          <div className="header">
            <div className="header__left">
              <h4 className="">Gallery</h4>
            </div>
          </div>
        )}
      </div>
      <SortableContext items={items} strategy={rectSortingStrategy}>
        <Grid columns={4}>
          {items.map((url, index) => (
            <SortablePhoto
              key={url}
              url={url}
              index={index}
              handleSelectId={handleSelectId}
              checkedItems={checkedItems}
            />
          ))}
          <div>
            <div className="addImg">
              <div className="addImgContent">
                <h3>Add Image</h3>
                <img src={UploadImg} alt="img placeholder" />
              </div>
              <input
                type="file"
                className="customFileInputnput"
                id="fileInput"
                onChange={handleChange}
                multiple
              />
            </div>
          </div>
        </Grid>
      </SortableContext>

      <DragOverlay adjustScale={true}>
        {activeId ? (
          <Photo url={activeId} index={items.indexOf(activeId)} />
        ) : null}
      </DragOverlay>
    </DndContext>
  );

  function handleChange(e) {
    const newImages = [...e.target.files];
    const tempImages = [];
    if (e.target.files) {
      newImages.map((image, index) =>
        tempImages.push(URL.createObjectURL(image))
      );
    }
    setItems((prevImages) => [...prevImages, ...tempImages]);
  }
  function handleSelectId(index) {
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
