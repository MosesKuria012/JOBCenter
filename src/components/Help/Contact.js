const Contact = () => {
  return (
    <div>
      <h2 className="contact-header">Contact US</h2>
      <section className="contact">
        <form>
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
  )
}
export default Contact
