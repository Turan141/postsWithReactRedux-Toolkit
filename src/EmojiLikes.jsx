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
      <span className="emojis">
        {i}
        {subject}
      </span>
    </li>
  ));

  return (
    <>
      <div className="emojisDiv">{emojisMap}</div>
    </>
  );
};
