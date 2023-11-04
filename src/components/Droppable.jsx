import React from 'react'

import {useDroppable} from '@dnd-kit/core'

const Droppable = ({children}) => {

  const {isOver, setNodeRef} = useDroppable({id: 'droppable'});
  const styles = {
    color: isOver ? 'green' : undefined,
  };

  return (
    <div ref={setNodeRef} style={styles}>
      {children}
    </div>
  )
}

export default Droppable