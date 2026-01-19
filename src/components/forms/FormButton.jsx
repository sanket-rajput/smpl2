import { cn } from "../../lib/utils";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import Loader from "../ui/Loader";

const FormButton = ({ loading, onClick, isPrev, text, className, isDisabled }) => (
  <div className="flex justify-end">
    <button
      type="submit"
      className={cn("bg-[#060C1C] w-[100px] h-[50px] text-lg border-[1px] flex justify-center items-center border-white-100 font-semibold relative overflow-hidden disabled:opacity-70", className)}
      disabled={loading || isDisabled}
      onClick={onClick}
    >
      {
      loading ? 
      <Loader />
      :
      text ? 
      text
      :
      isPrev ? 
      <IconArrowNarrowLeft className="sm:w-[40px] sm:h-[37px]" /> 
      :
      <IconArrowNarrowRight className="sm:w-[40px] sm:h-[37px]"/>
      }
    </button>
  </div>
);
export default FormButton;
