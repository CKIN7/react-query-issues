import Oval from "react-loading-icons/dist/esm/components/oval";
import { useLabels } from "../../hooks/useLabels"
import { FC } from "react";

interface Props {
  selectedLabels: string[]
  onChange: (labelName: string) => void
}


export const LabelPicker: FC<Props> = ({ selectedLabels, onChange}) => {

  const { labelsQuery } = useLabels();

  if(labelsQuery.isLoading) return <Oval /> 

  return (
    <div>
      {
        labelsQuery.data?.map(label => (
          <span 
            className={ `badge rounded-pill m-1 label-picker ${selectedLabels.includes(label.name) ? 'label-active' : ''}` }
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