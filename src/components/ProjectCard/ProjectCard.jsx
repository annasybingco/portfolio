import { Link } from "react-router-dom";
import tacoApp from "../../assets/images/taco-cs-img.png";
import giftstart from "../../assets/images/giftstart-img.png";
import nickgraham from "../../assets/images/nickgraham-img.png";
import "./ProjectCard.scss";

function ProjectCard() {
  return (
    <>
      <section className="project">
        <section className="project__card">
          <div className="project__description">
            <h2>Taco 'Bout It</h2>
            <div className="project__category">
              <p>Full Stack Development • JavaScript • React</p>
            </div>
            <p>
              Designed and developed a full-stack web application using Express,
              JavaScript, Node.js, and CSS, enabling customers to place orders,
              and earn rewards.
            </p>
            <Link to="project/taco-restaurant">
              <button>View Case Study</button>
            </Link>
          </div>
          <img src={tacoApp} alt="giftstart-mockup" className="project__img" />
        </section>
        <section className="project__card">
          <div className="project__description">
            <h2>Giftstart</h2>
            <div className="project__category">
              <p>Brand Creation • User Research • Tailwind Coding</p>
            </div>
            <p>
              Building a brand from just a logo, I developed a responsive design
              system for a baby registry. The site was subsequently recognized
              with a Netty award for its innovation.
            </p>
            <Link to="project/giftstart">
              <button>View Case Study</button>
            </Link>
          </div>
          <img
            src={giftstart}
            alt="giftstart-mockup"
            className="project__img"
          />
        </section>
        <section className="project__card">
          <div className="project__description">
            <h2>Nick Graham</h2>
            <div className="project__category">
              <p>UI Design • Responsive • Accessible</p>
            </div>
            <p>
              With only a conceptual vision for their website, I designed a
              homepage that followed best practices, effectively showcasing
              their full product catalog.
            </p>
            <button>View Case Study</button>
          </div>
          <img
            src={nickgraham}
            alt="giftstart-mockup"
            className="project__img"
          />
        </section>
      </section>
    </>
  );
}

export default ProjectCard;
