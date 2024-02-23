/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import { Component } from "react";

import WinOrLoseCard from "../WinOrLoseCard";
import EmojiCard from "../EmojiCard";
import NavBar from "../NavBar";
import "./index.css";

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    isEmojiPage: true,
    selectedList: [],
  };

  getTopScore = () => {
    const { topScore, score } = this.state;
    if (topScore <= score) {
      return topScore + 1;
    }
    return topScore;
  };

  onClickEmoji = (id) => {
    const { selectedList, score } = this.state;
    const item = selectedList.find((each) => each === id);
    if (item === undefined) {
      const newSelectedList = [...selectedList, id];
      this.setState((prevState) => ({
        selectedList: newSelectedList,
        score: prevState.score + 1,
        topScore: this.getTopScore(),
        isEmojiPage: score + 1 === 12 ? false : prevState.isEmojiPage,
      }));
    } else {
      this.setState({
        isEmojiPage: false,
      });
    }
  };

  shuffleEmojisList = () => {
    const { emojisList } = this.props;
    return emojisList.sort(() => Math.random() - 0.5);
  };

  renderEmojis = () => {
    const shuffleEmojisList = this.shuffleEmojisList();
    return (
      <ul className="emojis-list">
        {shuffleEmojisList.map((each) => (
          <EmojiCard
            key={each.id}
            emojiCard={each}
            onClickEmoji={this.onClickEmoji}
          />
        ))}
      </ul>
    );
  };

  playAgain = () => {
    this.setState({
      score: 0,
      isEmojiPage: true,
      selectedList: [],
    });
  };

  render() {
    const { score, topScore, isEmojiPage } = this.state;
    const isWon = score === 12;
    const currentView = isEmojiPage ? (
      this.renderEmojis()
    ) : (
      <WinOrLoseCard
        isWon={isWon}
        score={score}
        topScore={topScore}
        playAgain={this.playAgain}
      />
    );

    return (
      <div className="emoji-app-container">
        <NavBar score={score} topScore={topScore} isEmojiPage={isEmojiPage} />
        <div className="sub-emoji-app-container">{currentView}</div>
      </div>
    );
  }
}

export default EmojiGame;
