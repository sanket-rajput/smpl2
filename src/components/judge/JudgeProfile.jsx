import { useEffect, useState } from "react";
import { getJudgingSlots } from "../forms/constants";
import { useGetJudgeQuery } from "../../app/services/judgeAPI";

const JudgeProfile = () => {
  const judge_data = JSON.parse(window.sessionStorage.getItem("judge_data"))
  const { data, isSuccess } = useGetJudgeQuery(judge_data.jid);
  const [judgeData, setJudgeData] = useState();
  const event_name = judge_data?.jid.slice(0, 2).toLowerCase() === 'im' ? 'impetus' : 'concepts';
  const slots = getJudgingSlots(event_name)

  useEffect(() => {
    if(isSuccess){
      setJudgeData(data);
    }
  }, [isSuccess, data])
    

  return (
    <div className="max-w-lg mx-auto max-sm:mx-2 p-px bg-gradient-to-br from-dark-blue via-light-blue to-orange-100">
    <div className="bg-tertiary shadow-lg p-4 py-8 sm:p-6 text-center">
      {/* Title */}
      <p className="text-sm text-orange-100 font-bold">INC 2026</p>
      <h2 className="text-2xl font-bold text-white-100 mb-10">Judge Profile</h2>

      {/* User Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-left">
        <div className="flex gap-2">
          <p className="text-orange-100 font-semibold">First Name:</p>
          <p className="font-bold">{judgeData?.name?.split(" ")[0]}</p>
        </div>
        <div className="flex gap-2">
          <p className="text-orange-100 font-semibold">Last Name:</p>
          <p className="font-bold">
            {judgeData?.name?.split(" ")[judgeData?.name?.split(" ").length - 1]}
          </p>
        </div>
        <div className="flex gap-2">
          <p className="text-orange-100 font-semibold">Phone:</p>
          <p className="font-bold">{judgeData?.phone}</p>
        </div>
        <div className="flex gap-2">
          <p className="text-orange-100 font-semibold">Company:</p>
          <p className="font-bold">{judgeData?.company}</p>
        </div>

      {/* Email & Address */}
      <div className="flex gap-2 sm:col-span-2">
        <p className="text-orange-100 font-semibold">Email:</p>
        <p className="font-bold">{judgeData?.email}</p>
      </div>

      <div className="flex gap-2 sm:col-span-2">
        <p className="text-orange-100 font-semibold">Address:</p>
        <p className="font-bold">{judgeData?.residential_address}</p>
      </div>

      {/* Domains */}
      <div className="sm:col-span-2">
        <p className="text-orange-100 font-semibold">Domains:</p>
        <p className="font-bold flex flex-wrap gap-2">
          {judgeData?.domains?.map((domain, index) => (
            <span key={index} className="bg-slate-800 px-2 rounded-sm">{domain}</span>
          ))}
        </p>
      </div>

      {/* Slots */}
      <div className="sm:col-span-2">
        <p className="text-orange-100 font-semibold">Slots:</p>
        <p className="font-bold flex flex-wrap gap-2">
          {judgeData?.slots?.map((slot, index) => {
            const selectedSlot = slots.find((s) => s.value === slot);
            return (
              <span key={index} className="bg-slate-800 px-2 rounded-sm">
                {selectedSlot
                  ? selectedSlot.label.split(" ")[0].substring(0, 3) +
                    " " +
                    selectedSlot?.label.split(" ").slice(1).join(" ")
                  : "Unknown Slot"}
              </span>
            );
          })}
        </p>
      </div>
      </div>
    </div>
    </div>
  );
};

export default JudgeProfile;
