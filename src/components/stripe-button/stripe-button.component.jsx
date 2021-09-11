import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100; // Stripe wants price value in cents
    const publishableKey = 'pk_test_51GzX4cHp5v0iOBH4aPyA5SoyxZJ74HETZlZlS6d7U3krKslyMRxOR3ylKr5TXWf7117Zw7rSYlr0GeDaQ3CDbRPJ00AGzvngCj';
    
    // Future feature
    // Pass token to backend to create charge
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;