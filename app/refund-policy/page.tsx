import React from 'react';

const Policies = () => {
  return (
    <div className='legal'>
      <section>
        <h1>Vookad - Refund Policy</h1>
        <p>Last Updated: December 27, 2023</p>
        <p>
          Once Vookad initiates a refund for your amount, you will receive it in your bank account depending on the payment mode you&apos;ve used while placing the order.
        </p>
        <p>For payments made through:</p>
        <ul>
          <li>Wallet - refund within 24 hours</li>
          <li>UPI - refund within 3 to 5 days</li>
          <li>Credit and Debit cards - refund within 7 to 9 days</li>
        </ul>
        <p>We request you to directly contact our customer care for any further questions regarding your refund.</p>
      </section>

      <section>
        <h1>Vookad - Payment Policy</h1>
        <p>Last Updated: December 27, 2023</p>
        <p>
          Vookad doesn&apos;t charge you more than the actual price set by the shop. If a merchant forces you to pay more than the actual product price, please contact our customer support as soon as possible.
        </p>
      </section>

      <p>This Policy was last updated on December 27, 2023.</p>
    </div>
  );
};

export default Policies;
