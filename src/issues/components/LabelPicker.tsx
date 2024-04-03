import { useLabels } from "../../hooks/useLabels"
import { LoadingIcon } from "../../shared/components/LoadingIcon"





export const LabelPicker = () => {

  const labelsQuery = useLabels()

  if(labelsQuery.isLoading) return <LoadingIcon />
  return (
    <div>
      {
        labelsQuery.data?.map( label => (
          <span 
            className="badge rounded-pill m-1 label-picker"
            key={label.id}
            style={{ border: `1px solid #${label.color}`, color: `#${label.color}` }}
        >
            {label.name}
        </span>
        ))
      }
        
    </div>
  )
}
