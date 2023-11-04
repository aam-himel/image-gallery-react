import React from 'react'
import {useDraggable} from '@dnd-kit/core'
import {CSS} from '@dnd-kit/utilities'
const Draggable = ({children}) => {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({id: 'draggable'});
  const styles = transform ?  {
    transform: CSS.Translate.toString(transform)
  } : undefined;

  return (
    <button ref={setNodeRef} style={styles} {...listeners} {...attributes}>
      {children}
    </button>
  )
}

export default Draggable