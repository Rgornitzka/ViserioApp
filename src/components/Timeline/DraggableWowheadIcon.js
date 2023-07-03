import React from 'react';
import { useDrag } from 'react-dnd';
import WowheadIcon from '../WowheadIcon';

function DraggableWowheadIcon({ name, alt, style }) {
  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'icon', name },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.5 : 1;

  return (
    <div ref={dragRef} style={{ opacity, ...style }}>
      <WowheadIcon name={name} alt={alt} />
    </div>
  );
}

export default DraggableWowheadIcon;
