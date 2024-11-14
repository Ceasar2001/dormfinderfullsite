import './faqs.scss'


const Faqs = () => {
  return (
    <div className="faq">
      <h1>Frequently Asked Questions</h1>
      <div className="faq__section">
        <div className="faq__item">
          <h3>What is DormFinder?</h3>
          <p>
            DormFinder is your go-to platform to find the perfect accommodation
            near your school. Whether you&apos;re a student looking for a place to
            stay or a dorm owner seeking tenants, DormFinder connects you with
            ideal housing options close to your educational institution.
          </p>
        </div>
        <div className="faq__item">
          <h3>How can I find a dorm near my school?</h3>
          <p>
            Simply enter the name of your school or select the city where your
            school is located, and DormFinder will display a list of available
            dorms and boarding houses nearby.
          </p>
        </div>
        <div className="faq__item">
          <h3>Can I post my own dorm on DormFinder?</h3>
          <p>
            Yes! If you are a dorm owner, you can post your available rooms
            and property details on DormFinder to connect with students looking
            for a place to stay. All you need is a registered account and to
            select your role as a dorm owner during sign-up.
          </p>
        </div>
        <div className="faq__item">
          <h3>Is DormFinder free to use?</h3>
          <p>
            Yes, DormFinder is completely free for students to browse dorms and
            register for an account. Dorm owners may be subject to certain
            service charges based on their listing plans.
          </p>
        </div>
        <div className="faq__item">
          <h3>How do I register for DormFinder?</h3>
          <p>
            To register, simply visit our <strong>Register</strong> page, choose your role (student or dorm owner), and fill in the required
            details like name, email, and password. Once registered, you can start
            searching or posting dorm listings!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Faqs