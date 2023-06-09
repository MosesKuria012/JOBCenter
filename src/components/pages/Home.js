import React from 'react'

const Home = () => {
  return (
    <div className="container">
      <div className="left-content">
        <img
          src="https://images.pexels.com/photos/3801422/pexels-photo-3801422.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="image of Job Center"
        />
      </div>
      <section className="right-content">
        <h1 className="home-h1">
          <strong>
            Join over 100,000 Registered Users Who Trust Job Central
          </strong>
        </h1>
        <p>
          Welcome to our job linking platform based in
          <strong> Nairobi, Kenya.</strong> Our goal is to connect job seekers
          with potential employers in the region, making the job search process
          easier and more efficient.
        </p>

        <p>
          Our platform offers a user-friendly interface, where job seekers can
          create their profiles and upload their resumes. We also provide a job
          search function, where job seekers can filter by location, job type,
          and salary range to find the perfect job.
        </p>
        <p>
          Employers can also use our platform to post job vacancies and search
          for potential candidates based on their skills and qualifications. At
          our job linking platform, we believe that everyone deserves the
          opportunity to find a fulfilling career. With our easy-to-use
          platform, we strive to make the job search process in Nairobi as
          seamless as possible.
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
export default Home
