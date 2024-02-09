import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Are you interested in me? <br className='sm:block hidden' />
        Let's build something together!
      </p>
      <Link to='/contact' className='btn'>
        Contact
      </Link>
    </section>
  );
};

export default CTA;