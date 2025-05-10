import React, { type FC } from "react";
import Button from "../buttons/Button";
import Dots from "../../../public/svg/Dots";
import "./Profile.css";

type ProfileProps = {
  title: string;
  subTitle: string;
  desc: string;
};

const Profile: FC<ProfileProps> = ({ title, subTitle, desc }) => {
  return (
    <section id="home" className="wrapper">
      <div className="left-side">
        <div>
          <h1 className="extra-bold font60">{title}</h1>
          <h2>{subTitle}</h2>
          <br />
          <div dangerouslySetInnerHTML={{ __html: desc }} />
          <div className="buttons-row">
            <div className="responsive-button">
              <a
                href="https://www.linkedin.com/in/felicia-fel/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button title="Linkedin" border={true} />
              </a>
            </div>
            <div className="responsive-button">
              <a
                href="https://github.com/applescan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button title="Github" border={false} />
              </a>
            </div>
          </div>
          <div className="padding-top-10">
            <div className="responsive-button wide">
              <a
                href="https://www.institutedata.com/blog/unlocking-potential-felicias-journey-from-design-to-software-engineering/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  title="My Software Dev Journey: An Interview with Institute of Data"
                  border={true}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="right-side">
        <div className="image-wrapper">
          <img
            className="radius8"
            height={500}
            width={500}
            src={"/img/felicia-profile-2.png"}
            alt="profile-image"
            style={{ zIndex: 9 }}
          />
          <div className="dots-wrapper">
            <Dots />
          </div>
        </div>
        <div className="grey-div light-bg"></div>
      </div>
    </section>
  );
};
export default Profile;
