import axios from "axios";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Add this import to style the toast notifications

const url = import.meta.env.VITE_ANIMAL_RESCUE_URL;

const AnimalAdoption = ({ animalId , price}) => {
  const token = localStorage.getItem("token") || null;

  async function createOrder() {
    console.log("order creation started");
    const orderBody = {
      amount: price,
      currency: "INR",
      userId: 152, // Update with actual userId or get from context
      animalId: animalId,
    };
    const response = await axios.post(`${url}/adopt/adopt-animal`, orderBody, {
      headers: {
        Authorization: token,
      },
    });

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
        name: "Animal Rescue",
        description: "Adoption Payment",
        order_id: order.razorPayOrderID,
        prefill: {
          name: "rahul",
          email: "rahul@gmail.com",
          contact: "998042988",
        },
        theme: {
          color: "#3399cc",
        },

        handler: async function (response) {
          order["razorPayOrderID"] = response.razorpay_order_id;

          try {
            const paymentResponse = await axios.post(
              `${url}/adopt/handle-payment-callback/${response.razorpay_order_id}`,
              {},
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: token,
                },
              }
            );

            console.log("Payment success response: ", paymentResponse.data);

            toast.success("✔️ Payment Successful!", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: true,
            });
          } catch (error) {
            console.error("Payment verification failed: ", error);
            toast.error("❌ Payment verification failed", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: true,
            });
          }
        },

        modal: {
          ondismiss: () => handleCancelPayment(order),
        },
      };

      const rzp1 = new window.Razorpay(options);

      rzp1.on("payment.failed", function () {
        toast.warning("⚠️ Payment failed", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
        });
      });

      rzp1.open();
    } catch (error) {
      toast.error("❌ Error opening Razorpay", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
      });
    }
  };

  async function handleCancelPayment(order) {
    try {
      await axios.delete(`${url}/adopt/delete-order/${order?.orderId}`, {
        headers: {
          Authorization: token,
        },
      });

      toast.warn("⚠️ Payment was cancelled by the user", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
      });
    } catch (error) {
      console.error("Error canceling order: ", error);
      toast.error("❌ Error cancelling payment", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
      });
    }
  }

  return (
    <div>
      <button onClick={createOrder} className="btn btn-primary">
        Adopt Animal
      </button>
      {/* Include the ToastContainer */}
      <ToastContainer />
    </div>
  );
};

export default AnimalAdoption;











// import axios from "axios";
// import React from "react";
// import Razorpay from "razorpay";
// import { useAuth } from "../../Context/auth";
// import { toast } from "react-toastify";

// const url = import.meta.env.VITE_ANIMAL_RESCUE_URL;
// const AnimalAdoption = ({ animalId }) => {
//   const [auth] = useAuth();

//   console.log(auth);
//   const token = localStorage.getItem("token") || null;

//   async function createOrder() {
//     console.log("order creation started");
//     const orderBody = {
//       amount: 1000,
//       currency: "INR",
//       userId: auth?.userId,
//       animalId: animalId,
//     };
//     const response = await axios.post(`${url}/adopt/adopt-animal`, orderBody, {
//       headers: {
//         Authorization: auth?.token,
//       },
//     });

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
//         // "callback_url":"http://localhost:8080/handle-payment-callback",
//         prefill: {
//           name: "rahul",
//           email: "rahul@gmail.com",
//           contact: "998042988",
//         },
//         theme: {
//           color: "#3399cc",
//         },

//         handler: async function (response) {
//           order["razorPayOrderID"] = response.razorpay_order_id;

//           try {
//             const paymentResponse = await axios.post(
//               `${url}/adopt/handle-payment-callback/${response.razorpay_order_id}`,
//               {},
//               {
//                 headers: {
//                   "Content-Type": "application/json",
//                   Authorization: auth?.token,
//                 },
//               }
//             );
//             console.log("Payment success response: ", paymentResponse.data);

//             // Display success toast
//             toast.success("✔️ Payment Successful!", {
//               position: "top-right",
//               autoClose: 3000,
//               hideProgressBar: true,
//             });

//             // Update UI or remove adopted animal from list if needed
//             // Example: trigger state update to remove the adopted animal
//           } catch (error) {
//             console.error("Payment verification failed: ", error);
//             toast.error("❌ Payment verification failed", {
//               position: "top-right",
//               autoClose: 3000,
//               hideProgressBar: true,
//             });
//           }
//         },

//         modal: {
//           ondismiss: () => handleCancelPayment(order),
//         },
//       };

//       const rzp1 = new window.Razorpay(options);
//       rzp1.on("payment.failed", function (response) {
//         toast.warning("⚠️ Payment failed", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: true,
//         });
//       });

//       rzp1.open();
//     } catch (error) {
//       toast.error("❌ Error opening Razorpay", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: true,
//       });
//     }
//   };

//   async function handleCancelPayment(order) {
//     try {
//       await axios.delete(`${url}/adopt/delete-order/${order?.orderId}`, {
//         headers: {
//           Authorization: auth?.token,
//         },
//       });

//       toast.warn("⚠️ Payment was cancelled by the user", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: true,
//       });
//     } catch (error) {
//       console.error("Error canceling order: ", error);
//       toast.error("❌ Error cancelling payment", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: true,
//       });
//     }
//   }

//   return (
//     <div>
//       <button onClick={createOrder} className="btn btn-primary">
//         Adopt Animal
//       </button>
//     </div>
//   );
// };

// export default AnimalAdoption;
