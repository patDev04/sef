import React from "react";
import "./about.scss";
import { PiTagChevronFill } from "react-icons/pi";
import { TbMedicalCross } from "react-icons/tb";
import { IoIosConstruct } from "react-icons/io";

import img1 from "../../images/about1.jpg";

const About = () => {
  return (
    <div>
      <main>
        <div className="header">
          <h2 className="lightweight">
            ABOUT OUR COMPANY <br />
          </h2>
          <TbMedicalCross className="partition" />
          <TbMedicalCross className="partition" />
          <TbMedicalCross className="partition" />
          <br />
          <br />
          <h1>Transforming Homes. Enriching Lives</h1>
        </div>
        <div className="paragraph-one">
          <p>
            Your trusted partner in crafting exceptional living spaces. We are
            passionate about transforming houses into dream homes. With years of
            experience and a team of skilled professionals, we specialize in
            house extensions, loft conversions, and bespoke design & build
            solutions. Our commitment to excellence, attention to detail, and
            dedication to customer satisfaction set us apart as a trusted name
            in the construction industry. We take great pride in transforming
            ordinary houses into extraordinary dream homes.
            <br />
            <br />
            <br />
            <h3 className="a-heading">Our Mission - Elevating Living Spaces</h3>
            <p>
              Our mission is to enhance the living spaces of our clients and
              exceed their expectations through innovative design, expert
              craftsmanship, and personalized service. We believe that every
              home is unique, and our goal is to create bespoke solutions that
              reflect the distinct lifestyle and preferences of our clients.
            </p>
          </p>
          <img src={img1} alt="loft-img" className="one" />
        </div>
      </main>

      <div className="why-section">
        <main>
          <h2 className="a-heading">Why Choose Us?</h2>
          <ul>
            <ol className="why-list">
              <h3 className="list-heading">
                <PiTagChevronFill className="icon-point" />
                Experience and Expertise:
              </h3>
              <p>
                With a wealth of experience in the construction industry, our
                team of architects, engineers, and artisans bring a deep
                understanding of design principles and building techniques to
                every project. We pride ourselves on staying updated with the
                latest trends and technologies to deliver cutting-edge
                solutions.
              </p>
            </ol>
            <ol className="why-list">
              <h3 className="list-heading">
                <PiTagChevronFill className="icon-point" />
                Dedication to Quality:
              </h3>
              <p>
                Quality is at the heart of everything we do. We meticulously
                source the finest materials and employ skilled craftsmen who
                take immense pride in their work. The result is an impeccable
                finish that stands the test of time.
              </p>
            </ol>
            <ol className="why-list">
              <h3 className="list-heading">
                <PiTagChevronFill className="icon-point" />
                Collaborative Approach:
              </h3>
              <p>
                Your dreams and preferences are central to our design process.
                We listen attentively to your vision, offering professional
                insights and recommendations to bring your ideas to life. Our
                collaborative approach ensures that your unique personality is
                reflected in every corner of your new home.
              </p>
            </ol>
            <ol className="why-list">
              <h3 className="list-heading">
                <PiTagChevronFill className="icon-point" />
                Transparency and Communication:
              </h3>
              <p>
                Honesty and transparency are the foundations of our client
                relationships. From project timelines to budget considerations,
                we maintain clear and open communication, ensuring you are
                well-informed throughout the construction journey.
              </p>
            </ol>
            <ol className="why-list">
              <h3 className="list-heading">
                <PiTagChevronFill className="icon-point" />
                Efficiency and Timely Delivery:
              </h3>
              <p>
                We understand that time is of the essence. With a well-organized
                project management system, we strive to deliver on time without
                compromising on the quality of our work.
              </p>
            </ol>
            <ol className="why-list">
              <h3 className="list-heading">
                <PiTagChevronFill className="icon-point" />
                Customer Satisfaction:
              </h3>
              <p>
                Our ultimate goal is your satisfaction and delight. We derive
                immense joy from witnessing the smiles on our clients' faces
                when they see their dream home come to life. Your happiness is
                our true reward.
              </p>
            </ol>
          </ul>
        </main>
      </div>

      <p></p>

      <main>
        <section className="serv">
          <h2 className="a-heading">Comprehensive Services</h2>
          <ul>
            <ol className="why-list">
              <h3 className="list-heading">
                <IoIosConstruct className="icon-point" />
                House Extensions:
              </h3>
              <p>
                Create more space and breathe new life into your home with our
                expert house extensions. Our thoughtful designs seamlessly blend
                with your existing structure, providing you with the extra room
                you need while enhancing the overall aesthetic appeal of your
                property.
              </p>
            </ol>
            <ol className="why-list">
              <h3 className="list-heading">
                <IoIosConstruct className="icon-point" />
                Loft Conversions:
              </h3>
              <p>
                Unlock the untapped potential of your loft with our innovative
                loft conversion solutions. Transform the unused space into a
                stylish and functional living area, be it a master suite, an
                artist's retreat, or a home office that fuels creativity.
              </p>
            </ol>
            <ol className="why-list">
              <h3 className="list-heading">
                <IoIosConstruct className="icon-point" />
                Bespoke Design & Build Solutions:
              </h3>
              <p>
                Your imagination knows no bounds, and neither does our
                creativity. Our bespoke design & build services offer
                tailor-made homes that reflect your individual taste and
                lifestyle. From luxurious interior finishes to unique
                architectural features, your dream home becomes a living
                masterpiece.
              </p>
            </ol>
          </ul>
        </section>

        <h2 className="a-heading">
          Our Commitment - Building Dreams, Building Relationships
        </h2>
        <p>
          At North London Building Company, we are more than just a construction
          firm. We are dream builders and relationship nurturers. Our dedication
          to excellence and unwavering commitment to customer satisfaction are
          the cornerstones of our success. Over the years, we have built lasting
          relationships with homeowners who have entrusted us with the privilege
          of transforming their cherished spaces.
          <br />
          <br />
          Let us embark on this remarkable journey together. Contact us today
          for a no-obligation consultation, and allow us to reveal the boundless
          possibilities that await your home. Experience the joy of living in a
          space that truly captures the essence of your aspirations.
        </p>
      </main>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default About;
