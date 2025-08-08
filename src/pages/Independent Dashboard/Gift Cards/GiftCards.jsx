import GiftCard from "../../../components/GiftCard";

const GiftCardsPage = () => {
  return (
    <GiftCard
      index={1}
      nameLabel="Name"
      name="James Calzoni"
      service="Gent's Standard"
      validity="Never expires"
      price="$40.00"
      purchasedDate="26/02/2025"
      purchasedTime="10:00 am"
      couponCode="SCCRP 5402376"
      showCouponInLeft={false}
    />
  );
};

export default GiftCardsPage;
