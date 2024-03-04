export default function OMF_FieldAccountOptions(props) {
   const { 
     accountType,
     fieldText,
     onChange
   } = props;

   return (
      <>
         <div className="field-inner">
            <p>{fieldText}</p>
            <div className="grid grid-cols-2 py-1">
               <div>
                  <label>
                     <input 
                        type="radio" 
                        name="accountType" 
                        checked={accountType === 'checking'}  
                        value="checking" 
                        required 
                        onChange={(e) => onChange(e)}
                     />Checking</label>
               </div>
               <div>
                  <label> 
                     <input 
                        type="radio" 
                        name="accountType" 
                        checked={accountType === 'debitCard'}  
                        value="debitCard" 
                        required 
                        onChange={(e) => onChange(e)} 
                     />Debit Card</label>
               </div>
            </div>
         </div>
      </>
   )
}