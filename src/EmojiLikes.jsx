export const EmojiLikes = () => {
  const emojis = {
    smile: "😀",
    cat: "😸",
    clown: "🤡",
    boom: "💥",
    thunder: "⚡"
  };

  const emojisMap = Object.entries(emojis).map(([key, subject], i) => (
    <li key={i}>
      <div className="emojis">
        <button className="emojisEmoji">{subject}</button>
        <div className="emojisCount">{i}</div>
      </div>
    </li>
  ));

  return (
    <>
      <div className="emojisDiv">{emojisMap}</div>
    </>
  );
};
