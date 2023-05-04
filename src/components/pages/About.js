import React from 'react'

const About = () => {
  return (
    <div className="container">
      <div className="left-content">
        <img
          src="https://images.pexels.com/photos/5256816/pexels-photo-5256816.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="image of Job Center"
        />
      </div>
      <section className="right-content">
        <h2>Why Choose us?</h2>
        <p>
          At our platform, we understand that finding the right job can be a
          daunting and time-consuming process, especially in a highly
          competitive job market like Nairobi. That's why we strive to make the
          job search process as easy and efficient as possible.
          <br />
        </p>
        <h2>Purpose</h2>
        <p>
          Our platform provides a user-friendly interface where job seekers can
          create their profiles, upload their resumes, and apply for job
          vacancies that match their skills and qualifications. We also offer a
          job search function that allows job seekers to filter by location, job
          type, and salary range to find the perfect job.{' '}
          <strong>
            We not only cater for white collar jobs but blue collar jobs as
            well.
          </strong>
        </p>
        <h2>Mission</h2>
        <p>
          Our mission is to help job seekers and employers in Nairobi to connect
          and build successful careers and businesses. We believe that everyone
          deserves the opportunity to find a fulfilling career, and we are
          committed to making that happen through our platform.
        </p>
      </section>

      <footer className="footer">
        <p>
          <p>&copy; 2023 JOB CENTER. All rights reserved.</p>
        </p>
      </footer>
    </div>
  )
}
export default About
