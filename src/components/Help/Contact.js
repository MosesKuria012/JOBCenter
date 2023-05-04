
// import React, { useState } from 'react';
// import './Contact.css';

// const Contact = () => {
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//   }

//   const handleGoBack = () => {
//     setSubmitted(false);
//   }

//   return (
//     <div className="frame">
//       {submitted ? (
//         <div className="congratulations">
//           <img src="https://www.gifs.cc/thankyou/thank-you-flowers-1.jpg" alt="Congratulations flower" />
//           <p style={{color: "green"}}>Thank you for your message!</p>
//           <p style={{color: "green"}}>We are also here to help you for more </p>
//           <p style={{color: "green"}}>you can reach us by phone or email provided below</p>
//           <p>For urgent matters, please call <a href="tel:0700000000">0700000000</a>.</p>
//           <p>You can also reach us by email at <a href="mailto:jobcenter@gmail.com">jobcenter@gmail.com</a>.</p>
//           <button className="go-back" onClick={handleGoBack}>Back</button>
//         </div>
//       ) : (
//         <div>
//           <h2 className="contact-header">Contact US</h2>
//           <section className="contact">
//             <form onSubmit={handleSubmit}>
//               <label>
//                 <span>
//                   <span>First Name:</span>
//                   <input type="text" required />
//                 </span>
//               </label>
//               <br />
//               <br />
//               <label>
//                 <span>
//                   <span>Last Name:</span>
//                   <input type="text" required />
//                 </span>
//               </label>
//               <br />
//               <br />
//               <label>
//                 <span>
//                   <span>Email:</span>
//                   <input type="email" name="email" required />
//                 </span>
//               </label>
//               <br />
//               <br />
//               <label>
//                 <span>Your Message: </span>
//                 <textarea name="message" required></textarea>
//               </label>

//               <br />
//               <br />
//               <button className="submit">Submit</button>
//             </form>
//           </section>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Contact;
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // set loading to true when the form is submitted
    setTimeout(() => {
      setLoading(false); // set loading back to false after a 2 second delay (simulate server response time)
      setSubmitted(true);
    }, 2000);
  }

  const handleGoBack = () => {
    setSubmitted(false);
  }

  return (
    <div className="frame">
      {loading ? (
        <div className="loading">Loading...</div> // show loading indicator while form is being submitted
      ) : submitted ? (
        <div className="congratulations">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpq_ngbhG43R_e7J0GtFMumjXDzcXQLSvmjQ&usqp=CAU" alt="Congratulations flower" />
          <p style={{color: "green"}}>Thank you for your message!</p>
          <p style={{color: "green"}}>We are also here to help you </p>
          <p style={{color: "green"}}>For more information you can reach us by phone or email provided below</p>
          <p>For urgent matters, please call <a href="tel:0700000000">0700000000</a>.</p>
          <p>You can also reach us by email at <a href="mailto:jobcenter@gmail.com">jobcenter@gmail.com</a>.</p>
          <button className="go-back" onClick={handleGoBack}>Back</button>
        </div>
      ) : (
        <div>
          <h2 className="contact-header">Contact US</h2>
          <section className="contact">
            <form onSubmit={handleSubmit}>
              <label>
                <span>
                  <span>First Name:</span>
                  <input type="text" required />
                </span>
              </label>
              <br />
              <br />
              <label>
                <span>
                  <span>Last Name:</span>
                  <input type="text" required />
                </span>
              </label>
              <br />
              <br />
              <label>
                <span>
                  <span>Email:</span>
                  <input type="email" name="email" required />
                </span>
              </label>
              <br />
              <br />
              <label>
                <span>Your Message: </span>
                <textarea name="message" required></textarea>
              </label>

              <br />
              <br />
              <button className="submit">Submit</button>
            </form>
          </section>
        </div>
      )}
    </div>
  )
}

export default Contact;
