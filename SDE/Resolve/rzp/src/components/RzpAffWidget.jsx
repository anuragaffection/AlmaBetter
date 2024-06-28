import React, { useEffect } from 'react'

function RzpAffWidget() {

    const key = "rzp_test_xxxxxxxxxxx"
    const amount = 400000;

    useEffect(() => {
        const widgetConfig = {
            "key": key,
            "amount": amount,
        };
        const rzpAffordabilitySuite = new RazorpayAffordabilitySuite(widgetConfig);
        rzpAffordabilitySuite.render();

    }, [])


    return (
        <div>RzpAffWidget
            <div id="razorpay-affordability-widget"> </div>
        </div>
    )
}

export default RzpAffWidget