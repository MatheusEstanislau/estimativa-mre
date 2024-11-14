import { ReactNode } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

interface SortableItemProps {
  id: string | number
  children: ReactNode
}

const SortableItem: React.FC<SortableItemProps> = ({ id, children }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes}>
      <div className="drag-handle" {...listeners} style={{ cursor: 'grab' }}>
        &#9776; {/* Ícone de alça para arrastar */}
      </div>
      <div>{children}</div>
    </div>
  )
}

export default SortableItem
