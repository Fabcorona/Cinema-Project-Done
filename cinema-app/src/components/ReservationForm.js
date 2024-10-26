import React, { useState } from "react";

const ReservationForm = ({ movie }) => {
  const [tickets, setTickets] = useState(1);
  const [seatSelection, setSeatSelection] = useState("");
  const [paymentType, setPaymentType] = useState("reservation");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const ticketPrice = 10; // Example price per ticket
  const totalPrice = tickets * ticketPrice;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (paymentType === "purchase") {
      if (!cardNumber || !cvv || !expirationDate) {
        alert("Please enter valid payment details.");
        return;
      }
    }

    alert(
      `Your ${
        paymentType === "reservation" ? "reservation" : "purchase"
      } is successful!`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{movie.title} - Ticket Reservation/Purchase</h2>

      <label>Number of Tickets (max 5):</label>
      <input
        type="number"
        value={tickets}
        min="1"
        max="5"
        onChange={(e) => setTickets(e.target.value)}
        required
      />

      <label>Seat Selection:</label>
      <input
        type="text"
        value={seatSelection}
        onChange={(e) => setSeatSelection(e.target.value)}
        required
      />

      <label>Payment Type:</label>
      <select
        value={paymentType}
        onChange={(e) => setPaymentType(e.target.value)}
      >
        <option value="reservation">Pay at Theater</option>
        <option value="purchase">Pay Online</option>
      </select>

      {paymentType === "purchase" && (
        <>
          <label>Card Number:</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />

          <label>CVV:</label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />

          <label>Expiration Date:</label>
          <input
            type="text"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
            required
          />
        </>
      )}

      <p>Total Price: ${totalPrice}</p>

      {paymentType === "reservation" && (
        <p>You will pay ${totalPrice} at the theater.</p>
      )}

      <button type="submit">
        {paymentType === "reservation" ? "Reserve" : "Buy Now"}
      </button>
    </form>
  );
};

export default ReservationForm;
