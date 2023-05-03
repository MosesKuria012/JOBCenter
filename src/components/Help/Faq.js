import React from 'react'

const Faq = () => {
  return (
    <div>
      <h1 className="faq">FAQ</h1>
      <section className="FAQ">
        <p>
          <strong className="question">
            {' '}
            Q: How do I create an account on your platform?
          </strong>
          <br />
          <br />
          <strong>A</strong>: To create an account, simply click the "Sign up"
          button on the homepage and enter your details. You can also sign up
          using your Google or Facebook account.
        </p>
        <p>
          <strong className="question">
            Q: Can I search for jobs without creating an account?
          </strong>
          <br />
          <br />
          <strong>A</strong>: No, you need to create an account to access our
          job search function and apply for jobs.
        </p>
        <p>
          <strong className="question">
            Q: How long does it take for employers to respond to job
            applications?
          </strong>
          <br />
          <br />
          <strong>A</strong>: Employers typically review applications within a
          few days to a week. However, the time frame can vary depending on the
          employer's hiring process and the number of applications they receive.
        </p>
        <p>
          <strong className="question">
            Q: How do I edit my profile information?
          </strong>
          <br />
          <br />
          <strong>A</strong>: To edit your profile information, simply log in to
          your account and click on the "Edit profile" button. You can update
          your personal details, work experience, education, and skills.
        </p>

        <p>
          <strong className="question">Q: How do I delete my account?</strong>
          <br />
          <br />
          <strong>A</strong>: To delete your account, please contact our support
          team and they will assist you with the process.
        </p>

        <p>
          <strong className="question">
            Q:How do I post a job vacancy as an employer?
          </strong>
          <br />
          <br />
          <strong>A</strong>: To post a job vacancy, simply log in to your
          employer account and click on the "Post a job" button. You can enter
          the job details, requirements, and application instructions. Once you
          submit the posting, it will be reviewed by our team before being
          published on the platform.
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
export default Faq
