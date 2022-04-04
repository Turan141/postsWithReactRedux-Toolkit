export const EmojiLikes = ({ data, increaseLikeCountHandler, id }) => {
  const emojisMap = Object.entries(data.reaction).map(([emoji, subject], i) => (
    <li key={i}>
      <div className="emojis">
        <button
          onClick={() => increaseLikeCountHandler(id, emoji)}
          className="emojisEmoji"
        >
          {emoji}
        </button>
        <div className="emojisCount">{subject}</div>
      </div>
    </li>
  ));
  return <div className="emojisDiv">{emojisMap}</div>;
};
