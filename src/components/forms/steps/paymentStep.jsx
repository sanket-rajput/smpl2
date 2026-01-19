import { useEffect, useState } from "react";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import FormButton from "../FormButton";
import EventDetail from "../eventDetail";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { submit_step4 } from "../../../app/features/form/formSlice";
import { useStepFourMutation } from "../../../app/services/formAPI";
import scrollToTop from "../../../utils/scrollToTop";
import { useNavigate } from "react-router-dom";
import { IconCircleCheck } from "@tabler/icons-react";

const initialState = {
  payment_id: "",
}

const PaymentStep = ({ event, imagePath, amount, prevStep }) => {
  const step4 = useSelector(state => state.form.step4)
  const [formData, setFormData] = useState(step4);
  const dispatch = useDispatch();
  const [ stepFour, { isLoading } ] = useStepFourMutation();
  const [hasRegistered, setHasRegistered] = useState(false);
  const form = JSON.parse(window.sessionStorage.getItem('form'));
  const isPICT = form?.step3?.isPICT === "1";
  const isInternational = form?.step3?.isInternational === "1";
  const techfiesta = form?.step1?.techfiesta === "1";
  const [ countdown, setCountdown ] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    scrollToTop();
  }, [])

  useEffect(() => {
    let timer;
    if (hasRegistered) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      if (countdown === 0) {
        clearInterval(timer);
        navigate("/");
      }
    }
    return () => clearInterval(timer);
  }, [countdown, hasRegistered]);

  const validate = () => {
    let count = 0;
    if (!formData.payment_id) {
      count++;
    } else if (formData.payment_id.length !== 12) {
      count++;
    }
    return count === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "payment_id" && value.length > 12) return;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(hasRegistered){
      toast.info("You have already registered.")
      return;
    }
    if(!isInternational && !isPICT && !techfiesta && !validate()){
      toast.error("Fill all the required details correctly!")
      return;
    }
    try{
      const ticket = window.localStorage.getItem('ticket') || '';
      await stepFour({ ticket, data: formData, event }).unwrap()
      toast.success(<p>Form Submitted<br />Payment Under Verification</p>)
      window.localStorage.removeItem('ticket');
      window.localStorage.removeItem('event_name');
      dispatch(submit_step4(formData))
      setFormData(initialState);
      setHasRegistered(() => true)
    }
    catch(error){
      toast.info(error?.data?.message || error?.message  || 'Failed to Submit')
    }
  };

  return (
    <form
      className="w-full bg-tertiary p-4 sm:p-10 flex flex-col gap-8"
      onSubmit={handleSubmit}
    >
      <div className="space-y-8">
        {/* Event Details Section */}
        <EventDetail event_name={event} amount={amount}/>

        {/* Payment Section */}
        {!isInternational && !isPICT && !techfiesta && !hasRegistered && (
          <div className="space-y-8">
            <div className="bg-blue-900/20 p-6 border border-blue-500/30">
              <h3 className="text-xl font-semibold mb-4 text-center text-blue-100">
                Scan the QR to pay &nbsp;<span className="text-green-500" dangerouslySetInnerHTML={{ __html: amount}}></span>
              </h3>
              <div className="flex justify-center">
                <div className="bg-white p-6 max-w-xs">
                  <img loading='lazy' 
                    src={imagePath}
                    alt="Payment QR Code"
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            {/* Transaction ID Input */}
            <div className="space-y-2">
              <Label required className="text-lg flex items-center gap-2">
                Transaction/UTR ID
                {/* <AlertCircle
                  className="h-4 w-4 text-blue-400"
                  title="12 digit transaction ID required"
                /> */}
              </Label>
              <Input
                type="text"
                name="payment_id"
                value={formData.payment_id}
                onChange={handleInputChange}
                validate={(value) => {
                  return value.length !== 12
                }}
                errorMessage={"Transaction ID must be exactly 12 digits"}
                placeholder="Please enter the 12-digit Transaction ID received after payment"
                className=""
              />
            </div>
          </div>
        )}

        {/* Show message for international participants */}
        {(isInternational || isPICT || techfiesta) && (
          <div className="bg-green-900/20 p-6 border border-green-500/30 text-center">
            <h3 className="text-xl font-semibold text-green-500">
              Free Registration for {isInternational ? 'International' : techfiesta ? 'Techfiesta' : 'PICT'} Participants.
            </h3>
            <p className="text-slate-500 mt-2">
              You can proceed without payment.
            </p>
          </div>
        )}

        {
          hasRegistered && 
          <div className="bg-blue-900/20 p-6 border flex flex-col items-center border-blue-500/30">
            <IconCircleCheck color="#22c55e" size={80}/>
            <h3 className="text-xl font-semibold text-center text-green-500">
              Thank You for Registering <br />
              Confirmation Mail will be received once details are verified. <br />
              <span className="text-secondary">Redirecting in {countdown}...</span>
            </h3>
          </div>
        }

        {/* Submit Button */}
        <div className="mt-6 flex w-full justify-between">
          <FormButton isPrev onClick={() => prevStep()}/>
          <FormButton loading={isLoading} text={'Submit'} />
        </div>
      </div>
    </form>
  );
};

export default PaymentStep;