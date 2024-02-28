// Write your code here.
import "./index.css";

const WinOrLoseCard = (props) => {
  const { isWon, score, playAgain } = props;
  const imgUrl = isWon
    ? "https://assets.ccbp.in/frontend/react-js/won-game-img.png"
    : "https://assets.ccbp.in/frontend/react-js/lose-game-img.png";
  const wonOrLose = isWon ? "Won" : "Lose";
  const scoreType = score === 12 ? "Best Score" : "Score";
  const onClickPlayAgain = () => {
    playAgain();
  };

  return (
    <div className="win-or-lose-container">
      <img src={imgUrl} alt="win or lose" className="win-or-lose-img" />
      <div className="win-lose-score-container">
        <h1 className="score-title">You {wonOrLose}</h1>
        <p className="score-type">{scoreType}</p>
        <p className="score-count">{score}/12</p>
        {isWon ? (
          <a className="telegram-link" href="https://t.me/tech_mystre">
            https://t.me/tech_mystre
          </a>
        ) : (
          <button type="button" className="play-btn" onClick={onClickPlayAgain}>
            Play Again
          </button>
        )}
      </div>
    </div>
  );
};

export default WinOrLoseCard;
