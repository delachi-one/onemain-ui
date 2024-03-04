export default function OMF_FieldDate(props) {
   const { 
      errors, 
      fieldText, 
      fieldErrorMessage, 
      fieldKey, 
      register, 
      control,
      Controller,
      DatePicker,
   } = props;

   return (
      <>
         <p className={`field-inner ${errors[fieldKey] && 'error-text'}`}>{fieldText}</p>
         <div className="field-inner">
            <Controller
               control={control}
               name={fieldKey}   
               render={({ onChange, field, ref }) => (
                  <DatePicker
                     selected={field.value}
                     onChange={(date) => field.onChange(date)}
                     minDate={new Date()}
                     onKeyDown={(e) => e.preventDefault()}
                     inputRef={ref}
                     withPortal
                  />
               )}
               register={register}
               rules={{
                  required: "Expiration Date is required",
               }}
            />
         </div>
         {errors[fieldKey] && <p className="error">{fieldErrorMessage}</p>}
      </>
   )
}