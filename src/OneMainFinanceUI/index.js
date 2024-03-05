import { useOMF } from './useOMF';
import OMF_FIELD from './components/OMF_Field';
import OMF_FIELD_ACCOUNT_OPTIONS from './components/OMF_Field_AccountOptions';
import OMF_FIELD_DATE from './components/OMF_FIeld_Date';
import OMF_PAYMENT_SUBMISSION from './components/OMF_Payment_Submission';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './styles/index.scss';

export default function OneMainFinanceUI() {
   const {
      accountType,
      ACCOUNT_OPTIONS,
      formOnSubmit,
      accountTypeOnChange,
      onlyNumbersKeyDown,
      onlyLettersKeyDown,
      validateMatchingBankAccountNumbers,
      validateCVVLength,
      validatCardNumberLength,
      validatRoutingNumberLength,
      validatBankAccountNumberLength,
      Controller,
      control,
      register,
      handleSubmit,
      errors,
      submission,
      isDirty,
      isCardNumberValid
   } = useOMF();

   return (
      <div className="container mx-auto pt-16 px-4 md:w-[654px] w-full roboto-regular">

         {
            !submission.inProgess && (
               <>
                  <p className="font-semibold mb-2">[ Golden Butler :: Senior UI Engineer ]</p>
                  <h1 className="mb-0 text-[32px] roboto-bold">{ACCOUNT_OPTIONS.formTitle}</h1>
                  <p className="font-semibold mb-2 text-xl">$4,500</p>
                  <p>{ACCOUNT_OPTIONS.formInstructions}</p>
               </>
            )
         }

         <form className="omf mt-8 relative" onSubmit={handleSubmit(formOnSubmit)}>
            <div className="omf-inner mb-[22px]">
               <div className="omf-field p-2">
                  <OMF_FIELD 
                     errors={errors}
                     fieldText={'Loan Account Number'}
                     fieldErrorMessage={"Loan Account Number is required"}
                     fieldOnKeyDown={onlyNumbersKeyDown}
                     fieldKey={"loanAcctNumber"}
                     register={register}
                     required={true}
                     maxLength={16}
                     readOnly={true}
                  />
               </div>
            <div className="grid sm:grid-cols-2 grid-cols-1">
               <div>
                  <div className="omf-field p-2 border-b-[1px]">
                     <OMF_FIELD_ACCOUNT_OPTIONS 
                        fieldText="Type Of Account" 
                        accountType={accountType} 
                        onChange={accountTypeOnChange} 
                     />
                  </div>
                  
                  {accountType === 'checking' ? (
                     <>
                        <div className="omf-field p-2 border-b-[1px]">
                           <OMF_FIELD 
                              errors={errors}
                              fieldText={'Routing Number'}
                              fieldErrorMessage={"Routing Number is required"}
                              fieldOnKeyDown={onlyNumbersKeyDown}
                              fieldKey={"routingNumber"}
                              register={register}
                              required={true}
                              maxLength={9}
                              validateMatch={validatRoutingNumberLength}
                           />
                        </div>
                        <div className="omf-field p-2 border-b-[1px]">
                           <OMF_FIELD 
                              errors={errors}
                              fieldText={'Bank Account Number'}
                              fieldErrorMessage={"Bank Account Number is required"}
                              fieldOnKeyDown={onlyNumbersKeyDown}
                              fieldKey={"bankAccountNumber"}
                              register={register}
                              required={true}
                              maxLength={9}
                              validateMatch={validatBankAccountNumberLength}
                           />
                        </div>
                        <div className="omf-field p-2 md:border-b-0">
                           <OMF_FIELD 
                              errors={errors}
                              fieldText={'Confirm Bank Account Number'}
                              fieldErrorMessage={"Bank Account Number is required"}
                              fieldOnKeyDown={onlyNumbersKeyDown}
                              fieldKey={"bankAccountNumberConfirm"}
                              register={register}
                              required={true}
                              maxLength={9}
                              validateMatch={validateMatchingBankAccountNumbers}
                           />
                        </div>
                  </>
                  ) : <>
                   <div className="omf-field p-2 border-b-[1px]">
                     <OMF_FIELD 
                        errors={errors}
                        fieldText={'Card Number'}
                        fieldErrorMessage={"Card Number is required"}
                        fieldOnKeyDown={onlyNumbersKeyDown}
                        fieldKey={"cardNumber"}
                        register={register}
                        required={true}
                        maxLength={16}
                        validateMatch={isCardNumberValid}
                     />
                  </div>
                  <div className="omf-field p-2 border-b-[1px]">
                     <OMF_FIELD 
                        errors={errors}
                        fieldText={'Name On Card'}
                        fieldErrorMessage={"Name is required"}
                        fieldOnKeyDown={onlyLettersKeyDown}
                        fieldKey={"nameOnCard"}
                        register={register}
                        required={true}
                     />
                  </div>
                  <div className='omf-field verify-info grid sm:grid-cols-2 grid-cols-1'>
                     <div className="pt-2 border-b-[1px] md:border-b-0">
                        <OMF_FIELD_DATE
                           errors={errors}
                           fieldText={'Expiration Date'}
                           fieldErrorMessage={"Date is required"}
                           fieldKey={"expirationDate"}
                           register={register}
                           required={true}
                           Controller={Controller}
                           control={control}
                           DatePicker={DatePicker}
                        />
                     </div>
                     <div className="pt-2 border-b-[1px] border-l-none md:border-b-0 md:border-l-[1px]">
                         <OMF_FIELD 
                           errors={errors}
                           fieldText={'CVV'}
                           fieldErrorMessage={"CVV is required"}
                           fieldOnKeyDown={onlyNumbersKeyDown}
                           fieldKey={"cvv"}
                           register={register}
                           required={true}
                           maxLength={3}
                           validateMatch={validateCVVLength}
                        />
                     </div>
                  </div>
                  </>
                  }
               </div>
               <div className="omf-cardtype border-l-0 md:border-l-[1px]">
                  <p>{ACCOUNT_OPTIONS[accountType].helpText}</p>
                  <div className={`help-image ${ACCOUNT_OPTIONS[accountType].helpImage}`} />
               </div>
            </div>
            </div>
            <div>
               <button
                  disabled={!isDirty}
                  className="payment-btn w-full md:w-auto">{ACCOUNT_OPTIONS.buttonText}</button>
            </div>
            { submission.inProgess && (
               <OMF_PAYMENT_SUBMISSION 
                  submission={submission} 
                  message={ACCOUNT_OPTIONS.thankYou} 
               />
            )}
         </form>
      </div>
   );
}