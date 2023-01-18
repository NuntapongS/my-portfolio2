import profile1 from "../image/S__8454147.jpg";
import identity from "../lang/word.json";
import "../styles/portfolio.css";

export interface IMyIdentity {
  myName: string;
}

const WhoAmI = () => {
  const myIdentity: IMyIdentity = identity;
  return (
    <>
      <div className="portfolio-body">
        <div className="landing1">
          <img src={profile1} className="circle-image" alt="profile1" />
          <div className="title-name">
            {myIdentity.myName}
            <span className="blink">|</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoAmI;
