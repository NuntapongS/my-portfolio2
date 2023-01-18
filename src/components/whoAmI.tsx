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
          <div className="title-name">{myIdentity.myName}</div>
        </div>
      </div>
    </>
  );
};

export default WhoAmI;
