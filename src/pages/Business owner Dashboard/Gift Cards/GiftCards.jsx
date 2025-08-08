import React from "react";
import GiftCard from "../../../components/GiftCard";

export const GiftCardsPage = () => {
  return (
    <GiftCard
      index={1}
      nameLabel="Recipient’s Name"
      name="James Calzoni"
      service="N/A"
      validity="90 days left"
      price="$40.00"
      purchasedDate="26/02/2025"
      purchasedTime="10:00 am"
      couponCode="SCCRP 5402376"
      showCouponInLeft={false}
    />
  );
};
export const ReceivedGiftCardsPage = () => {
  return (
    <GiftCard
      index={1}
      nameLabel="Sender’s Name"
      name="James Calzoni"
      service="N/A"
      validity="90 days left"
      price="$40.00"
      purchasedDate="26/02/2025"
      purchasedTime="10:00 am"
      couponCode="SCGP 590278"
      showCouponInLeft={true}
    />
  );
};
