import { useState, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { ACCOUNT_OPTIONS, DEFAULT_VALUES } from "./accountOptions";
import luhn from "luhn-js";


export function useOMF() {
   const [accountType, setAccountType] = useState("checking");
   const [submission, setSubmission] = useState({
      inProgess:false,
      success:false
   });

   const {
      control,
      register,
      handleSubmit,
      reset,
      getValues,
      formState: { errors, isValid, isDirty },
   } = useForm({defaultValues:DEFAULT_VALUES})

   const accountTypeOnChange = (e) => {
      setAccountType(e.target.value);
   }

   const formOnSubmit = async(e) => {
      setSubmission(prev=>{
         return {...prev,inProgess:true}
      })

      await new Promise(resolve => setTimeout(resolve,2500))
      
      setSubmission(prev=>{
         return {...prev,success:true}
      })
   };

   const onlyNumbersKeyDown = (e) => {
      if (isNaN(e.key) && e.key !== "Backspace" && e.key !== "Tab") {
         e.preventDefault();
         return;
      }
   };

   const onlyLettersKeyDown = (e) => {
      let regex = new RegExp("^[A-Za-z? ]+$");
      
      if(!regex.test(e.key)) {
         e.preventDefault();
         return;
      }
   };

   const validateMatchingBankAccountNumbers = (value) => {
      const { bankAccountNumber } = getValues();
      return bankAccountNumber === value || "Bank Account Numbers should match!";
   }

   const validateCVVLength = (value) => {
      const { cvv } = getValues();
      return cvv.length === 3 || "CVV Must Be 3 digits";
   }

   const validatCardNumberLength = (value) => {
      const { cardNumber } = getValues();
      return cardNumber.length === 16 || "Card Number Must Be 16 digits";
   }

   const validatRoutingNumberLength = (value) => {
      const { routingNumber } = getValues();
      return routingNumber.length === 9 || "Routing Number Must Be 9 digits";
   }

   const validatBankAccountNumberLength = (value) => {
      const { bankAccountNumber } = getValues();
      return bankAccountNumber.length === 9 || "Bank Account Number Must Be 9 digits";
   }

   const isCardNumberValid = () => {
      const { cardNumber } = getValues();
      if(cardNumber.length < 2) return;
      return luhn.isValid(cardNumber) || "Card Number Must Be Valid";
   }

   useEffect(() => reset(),[accountType,reset])

   return {
      accountType,
      ACCOUNT_OPTIONS,
      accountTypeOnChange,
      formOnSubmit,
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
      isValid,
      isDirty,
      submission,
      isCardNumberValid
   };
}
