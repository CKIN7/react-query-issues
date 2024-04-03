import { useLabels } from "../../hooks/useLabels"
import { LoadingIcon } from "../../shared/components/LoadingIcon"
import { FC } from 'react'


interface Props {
  selectedLabels: string[]
  onChange: (labelName: string) => void
}


export const LabelPicker: FC<Props> = ({ selectedLabels, onChange}) => {

  const labelsQuery = useLabels()

  if(labelsQuery.isLoading) return <LoadingIcon />
  return (
    <div>
      {
        labelsQuery.data?.map( label => (
          <span 
            className={`badge rounded-pill m-1 label-picker ${selectedLabels.includes(label.name) ? 'label-active' : ''}`}
            key={label.id}
            style={{ border: `1px solid #${label.color}`, color: `#${label.color}` }}
            onClick={() => onChange(label.name)}
        >
            {label.name}
        </span>
        ))
      }
        
    </div>
  )
}
