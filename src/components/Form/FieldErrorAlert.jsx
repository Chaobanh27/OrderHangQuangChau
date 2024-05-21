
function FieldErrorAlert({ errors, fieldName }) {
  if (!errors || !errors[fieldName]) return null
  return (
    <div className="" style= {{ marginTop: '0.7em', overflow: 'hidden', color: 'red' }}>
      {errors[fieldName]?.message}
    </div>
  )
}

export default FieldErrorAlert