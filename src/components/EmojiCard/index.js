// Write your code here.
import "./index.css";

function EmojiCard(props) {
  const { emojiCard, onClickEmoji } = props;
  const { emojiName, emojiUrl, id } = emojiCard;

  const onEmoji = () => {
    onClickEmoji(id);
  };

  return (
    <li className="emoji-card">
      <button type="button" className="emoji-btn" onClick={onEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  );
}

export default EmojiCard;
