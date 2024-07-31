export function News() {
  const news = [
    {
      title: "Hydrogen VS Electric Cars",
      content: "Will hydrogen-fueled cars ever catch up to Evs?",
    },
    {
      title: "B",
      content: "qwfqwwwwwwwwf",
    },
    {
      title: "C",
      content: "qwfqwwwwwwwwf",
    },
  ];
  return (
    <aside className="news">
      <h2>New</h2>
      <ul>
      {news.map((element, i) => {
        return (
          <li key={i} style={{ color: "white" }}>
            <h4>{element.title}</h4>
            <p>{element.content}</p>
          </li>
        );
      })}
      </ul>
    </aside>
  );
}
