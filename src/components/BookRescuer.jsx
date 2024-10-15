import axios from "axios";
import React from "react";
import { useAuth } from "../Context/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for the toast

const BookRescuer = ({ rescuerId }) => {
  const [auth] = useAuth();
  const url = import.meta.env.VITE_ANIMAL_RESCUE_URL;
  const token = localStorage.getItem("token") || null;

  async function createOrder() {
    console.log("order creation started");
    const orderBody = {
      amount: 500,
      currency: "INR",
      userId: 152,  //Or We can specify userId Here
      rescuerId: rescuerId,
    };
    const response = await axios.post(
      "http://localhost:8080/api/v1/order/create-order",
      orderBody,
      {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      }
    );

    const order = await response.data;
    console.log("order creation completed", order);
    if (order) {
      proceedOrder(order);
    }
  }

  const proceedOrder = (order) => {
    try {
      const options = {
        key_id: "rzp_test_t3ROS51DwZEOli",
        amount: order.amount,
        currency: "INR",
        name: "payment_demo",
        description: "Course Payment",
        order_id: order.razorPayOrderID,
        receipt: order.email,
        prefill: {
          name: "rahul",
          email: "rahul@gmail.com",
          contact: "998042988",
        },
        theme: {
          color: "#3399cc",
        },

        handler: async function (res) {
          order["razorPayOrderID"] = res.razorpay_order_id;

          try {
            const response = await axios.post(
              `${url}/order/handle-payment-callback/${res.razorpay_order_id}`,
              order,
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: token,
                },
              }
            );

            // Displaying payment successful icon toast
            toast.success("Payment Successfull", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: true,
              icon: "✔️ ", // Show only a success icon
            });
          } catch (error) {
            console.log("Payment verification failed: ", error);
            toast.error(" Payment is Failed", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: true,
              icon: "❌", // Show only an error icon
            });
          }
        },

        modal: {
          ondismiss: () => handleCancelPayment(order),
        },
      };

      const rzp1 = new window.Razorpay(options);

      rzp1.on("payment.failed", function (response) {
        toast.warning("Error while doing payment", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          icon: "⚠️  ", // Show only a warning icon
        });
      });

      rzp1.open();
    } catch (error) {
      toast.error("error", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        icon: "❌", // Show only an error icon
      });
    }
  };

  async function handleCancelPayment(order) {
    try {
      await axios
        .delete(`${url}/order/${order?.orderId}`, {
          headers: {
            Authorization: token,
          },
        })
        .catch((err) => {
          toast.warn("Warning while Payment", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            icon: "⚠️", // Show only a warning icon
          });
        });

      // Displaying payment cancellation icon toast
      toast.warn("Warning while Payment", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        icon: "⚠️", // Show only a warning icon
      });
    } catch (error) {
      console.warn("Internal Server Error: ", error);
      toast.error("error", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        icon: "❌", // Show only an error icon
      });
    }
  }

  return (
    <div>
      <button onClick={createOrder} className="btn btn-primary">
        Book Rescuer
      </button>
      {/* Make sure to include the ToastContainer */}
    </div>
  );
};

export default BookRescuer;



// import axios from "axios";
// import React from "react";
// import { useAuth } from "../Context/auth";
// import Razorpay from "razorpay";
// import {  toast } from 'react-toastify';

// const BookRescuer = ({ rescuerId }) => {
//   const [auth] = useAuth();

//   const url = import.meta.env.VITE_ANIMAL_RESCUE_URL;

//   const token = localStorage.getItem("token") || null;

//   async function createOrder() {
//     console.log("order creation started");
//     const orderBody = {
//       amount: 500,
//       currency: "INR",
//       userId: 152,
//       rescuerId: rescuerId,
//     };
//     const response = await axios.post(
//       "http://localhost:8080/api/v1/order/create-order",
//       orderBody,
//       {
//         headers: {
//           Authorization: token,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     const order = await response.data;
//     console.log("order creation completed", order);
//     if (order) {
//       proceedOrder(order);
//     }
//   }

//   const proceedOrder = (order) => {
//     try {
//       const options = {
//         //pass order details
//         key_id: "rzp_test_t3ROS51DwZEOli",
//         amount: order.amount,
//         currency: "INR",
//         name: "payment_demo",
//         description: "Course Payment",
//         order_id: order.razorPayOrderID,
//         receipt: order.email,
//         //callback_url: "http://localhost:8080/handle-payment-callback",
//         prefill: {
//           name: "rahul",
//           email: "rahul@gmail.com",
//           contact: "998042988",
//         },
//         theme: {
//           color: "#3399cc",
//         },

//         handler: function (res) {
//           order["razorPayOrderID"] = res.razorpay_order_id;

//           // You can send this data to your backend for further processing or verification
//           const response = axios
//             .post(
//               `${url}/order/handle-payment-callback/${res.razorpay_order_id}`,
//               order,
//               {
//                 headers: {
//                   "Content-Type": "application/json",
//                   Authorization: token,
//                 },
//               }
//             )
//             .catch((error) => {
//               console.log("Payment verification failed: ", error, {
//                 position: "top-right",
//                 autoClose: 3000,
//               });
//             });

//           toast.success(response.data, {
//             position: "top-right",
//             autoClose: 3000,
//           });
//         },
//         modal: {
//           // Detect when the user dismisses the modal (without completing payment)
//           ondismiss: () => handleCancelPayment(order),
//         },
//       };

//       const rzp1 = new window.Razorpay(options);

//       rzp1.on("payment.failed", function (response) {
//         toast.warning(response.error.reason, {
//           position: "top-right",
//           autoClose: 3000,
//         });
//       });

//       rzp1.open();
//     } catch (error) {
//       toast.warning("Internal Server", {
//         position: "top-right",
//         autoClose: 3000,
//       });
//     }
//     // e.preventDefault();
//   };
//   async function handleCancelPayment(order) {
//     try {
//       await axios.delete(`${url}/order/${order?.orderId}`, {
//         headers: {
//           Authorization: token,
//         },
//       })     
//         .catch((err) => {
//           toast.warn(err, {
//             position: "top-right",
//             autoClose: 3000,
//           });
//         });

//       toast.warn("Payment was cancelled by User", {
//         position: "top-right",
//         autoClose: 3000,
//       });
//     } catch (error) {
//       console.warn("Internal Server : " ,error, {
//         position: "top-right",
//         autoClose: 3000,
//       });
//     }
//   }

//   return (
//     <div>
//       <button onClick={createOrder} className="btn btn-primary">
//         Book Rescuer
//       </button>
//     </div>
//   );
// };

// export default BookRescuer;
