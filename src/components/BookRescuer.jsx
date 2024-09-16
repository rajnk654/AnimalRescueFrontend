import axios from 'axios';
import React from 'react'

const BookRescuer = ({rescuerId}) => {
    const token = localStorage.getItem("token") || null;

    async function createOrder() {
        console.log("order creation started");
        const orderBody = {
            amount: 1000,
            currency: 'INR',
            userId : 152,
            rescuerId : rescuerId
        };
        const response = await axios.post("http://localhost:8080/api/v1/order/create-order",orderBody, {
            headers: {
                Authorization : token,
                'Content-Type': 'application/json'
            },
        });


        const order=await response.data;
        console.log("order creation completed", order);
        if(order){
            proceedOrder(order);
        }
    }

    const proceedOrder = (order) => {
        const options={
            //pass order details
            "key_id":"rzp_test_t3ROS51DwZEOli",
            "amount":order.amount,
            "currency":"INR",
            "name":"payment_demo",
            "description":"Course Payment",
            "order_id":order.razorPayOrderID,
            "receipt":order.email,
            "callback_url":"http://localhost:8080/handle-payment-callback",
            "prefill":{
                "name":"rahul",
                "email":"rahul@gmail.com",
                "contact":"998042988"
            },
            "theme":{
                "color":"#3399cc"
            }

        };

        const rzp1=new window.Razorpay(options);
        rzp1.open();
    }
  return (
    <div>
      <button onClick={createOrder} className='btn btn-primary'>Book Rescuer</button>
    </div>
  )
}

export default BookRescuer
