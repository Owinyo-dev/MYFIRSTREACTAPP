import profilepic from "./assets/profilepic.jpg";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilepic} alt="Profile Picture"></img>
      <h2 className="card-title">Brenda Owinyo</h2>
      <p className="card-text">I am an aspiring software engineer</p>
    </div>
  );
}
export default Card;
