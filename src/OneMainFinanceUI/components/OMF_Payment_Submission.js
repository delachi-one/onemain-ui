export default function OMF_PaymentSubmission(props) {
   const {submission, message} = props;

   return (
      <div className="omf-submitting flex">
         {submission.success ? (
            <div className="m-auto">
               <button 
                  className="payment-btn thanks" 
                  onClick={() => window.location.reload(false)}
               >{message}</button>
            </div>
         ) : <div className="processing m-auto" />}
      </div>
   )
}