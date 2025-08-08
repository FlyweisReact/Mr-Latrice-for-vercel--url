import img from "../../../assets/images/dashboard/img36.jpg";
import { ConfirmModal } from "../../../components/Modals/ConfirmModal";

const FamilyCards = ({
  data,
  isPending,
  showmodal,
  showmodal1,
  showmodal2,
  showmodal4,
  showmodal5,
  showmodal6,
}) => {
  return (
    <div className="bg-white border border-[#2F2F2F80] rounded-[20px] shadow-[0px_4px_4px_0px_#00000040] px-3 py-2.5">
      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <img
              src={img}
              alt="Profile"
              className="w-[94px] h-[94px] rounded-full object-cover"
            />
            <div>
              <h6 className="font-[700] text-[18px] sm:text-[22px] text-charcoal font-sansation">
                {data.name}
              </h6>
              <p className="font-[400] text-[15px] sm:text-[18px] text-charcoal font-sansation flex items-center gap-2">
                {data.service && !isPending && (
                  <p className="font-[400] text-[15px] sm:text-[18px] text-charcoal font-sansation flex gap-3">
                    <span>{data.service}</span> ·{" "}
                    <span>{data.paymentStatus}</span>
                  </p>
                )}
                {data.status}
              </p>
            </div>
          </div>

          {data.timeRemaining ? (
            <div className="font-[700] text-[18px] sm:text-[22px] text-charcoal font-sansation">
              {data.timeRemaining}
            </div>
          ) : isPending ? (
            <div className="flex gap-2">
              <div
                onClick={showmodal5}
                className=" cursor-pointer border border-[#2F2F2F] px-2 py-1 rounded-[4px] text-[15px] sm:text-[18px] text-charcoal"
              >
                Decline
              </div>
              <div
                onClick={showmodal6}
                className="cursor-pointer  border border-[#2F2F2F] px-2 py-1 rounded-[4px] text-[15px] sm:text-[18px] text-charcoal"
              >
                Accept
              </div>
            </div>
          ) : (
            <div
              onClick={showmodal1}
              className="border border-[#2F2F2F] px-2 py-1 rounded-[4px] text-[15px] sm:text-[18px] text-charcoal cursor-pointer"
            >
              Deactivate member
            </div>
          )}
        </div>

        <div className="flex justify-end items-center gap-2">
          {data.status == "remaining" && (
            <div
              onClick={showmodal1}
              className="border border-[#2F2F2F] px-2 py-1 rounded-[4px] text-[15px] sm:text-[18px] text-charcoal cursor-pointer"
            >
              Deactivate member
            </div>
          )}
          <div
            onClick={showmodal}
            className=" cursor-pointer border border-[#2F2F2F] px-2 py-1 rounded-[4px] text-[15px] sm:text-[18px] text-charcoal"
          >
            See Details
          </div>
          {data.timeRemaining && isPending && (
            <>
              <ConfirmModal
                text={`Confirm Payment & Connection?
You’re about to pay $85 for Nicole White’s appointment and add her to your Family & Friends list.   To review the service details you are about to pay for, tap “See Details” in the previous screen before confirming.`}
                onConfirm={() => {}}
                confirmText="Confirm & Pay"
              >
                <button className="cursor-pointer border! border-[#2F2F2F] px-2 py-1 rounded-[4px] text-[15px] sm:text-[18px] text-charcoal">
                  Decline & Reject Payment
                </button>
              </ConfirmModal>
              <ConfirmModal
                text={`Decline Connection & Payment Request?
You’re about to decline Nicole White’s request to connect and reject the payment request for her appointment.She will be notified and removed from your pending Family & Friends list.`}
                confirmText="Yes, Decline"
                onConfirm={() => {}}
              >
                <button className="cursor-pointer border! border-[#2F2F2F] px-2 py-1 rounded-[4px] text-[15px] sm:text-[18px] text-charcoal">
                  Accept & Pay Now
                </button>
              </ConfirmModal>
            </>
          )}
        </div>
        <div className="flex justify-end items-center gap-2 mt-2">
          {data.btn1 && (
            <div
              onClick={showmodal2}
              className="border border-[#2F2F2F] px-2 py-1 rounded-[4px] text-[15px] sm:text-[18px] text-charcoal cursor-pointer"
            >
              {data.btn1}
            </div>
          )}
          {data.btn2 && (
            <div
              onClick={
                data.btn2 === "Decline Request" ? showmodal5 : showmodal4
              }
              className="border border-[#2F2F2F] px-2 py-1 rounded-[4px] text-[15px] sm:text-[18px] text-charcoal cursor-pointer"
            >
              {data.btn2}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FamilyCards;
