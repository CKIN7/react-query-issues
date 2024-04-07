import { useLabels } from "../../hooks/useLabels"



export const LabelPicker = () => {

  const { labelsQuery } = useLabels()

  if (labelsQuery.isLoading) return <h2>Cargando...</h2>

  return (
    <div>
        <span 
            className="badge rounded-pill m-1 label-picker"
            style={{ border: `1px solid #ffccd3`, color: '#ffccd3' }}
        >
            {
              labelsQuery.data?.map( label => (
                <span 
                key={label.id}>
                {label.name}</span>
              ))
            }
        </span>
        
    </div>
  )
}
