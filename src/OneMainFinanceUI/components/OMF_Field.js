export default function OMF_Field(props) {
   const { 
      errors, 
      fieldText, 
      fieldErrorMessage, 
      fieldOnKeyDown = () => {}, 
      fieldKey, 
      register, 
      required,
      maxLength = null,
      validateMatch = () => {},
      readOnly = false
   } = props;

   return (
      <>
         <p className={`field-inner ${errors[fieldKey] && 'error-text'}`}>{fieldText}</p>
         <div className="field-inner">
            <input 
               readOnly={readOnly}
               type="text" 
               maxLength={maxLength}
               onKeyDown={(e) => {fieldOnKeyDown(e)}}
               {...register(`${fieldKey}`, { required: required, validate: validateMatch })}
            />
         </div>
         {errors[fieldKey] && <p className="error">{errors[fieldKey].message ? errors[fieldKey].message : fieldErrorMessage}</p>}
      </>
   )
}