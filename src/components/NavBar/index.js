// Write your code here.
import "./index.css";

const NavBar = (props) => {
  const { score, topScore, isEmojiPage } = props;
  const getScores = () => (
    <>
      <p className="score">Score: {score}</p>
      <p className="score">Top Score: {topScore}</p>
    </>
  );

  const showScores = isEmojiPage ? getScores() : "";
  return (
    <nav>
      <div className="img-name-container">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />

        <h1 className="emoji-logo">Emoji Game</h1>
      </div>

      <div className="score-container">{showScores}</div>
    </nav>
  );
};

export default NavBar;
