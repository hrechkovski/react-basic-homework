import { Details } from "./Details";
import { Logo } from "./Logo";
import { Metrics } from "./Metrics";
import "./Profile.css";

export const Profile = () => {
  return (
    <div className="mainBackground">
      <div className="profileCard">
        <div className="upperBackground"></div>
        <div className="contentHandler">
          <Logo />
          <Details />
          <Metrics />
        </div>
      </div>
    </div>
  );
};
