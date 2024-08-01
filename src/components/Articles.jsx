export function Articles() {
  const articles = [
    {
      title: "Reviving Retro PCs",
      content: "What happens when old PCs are given modern upgrades?",
      path: "/assets/images/image-retro-pcs.jpg",
    },
    {
      title: "Top 10 Laptops of 2022",
      content: "Our best picks for various needs and budgets",
      path: "/assets/images/image-top-laptops.jpg",
    },
    {
      title: "The Growth of Gaming",
      content: "How the pandemic has sparked fresh opportunities",
      path: "/assets/images/image-gaming-growth.jpg",
    },
  ];
  return (
    <div className="articles">
      {articles.map((item, index) => {
        return (
          <div key={index} className="article">
            <img src={`${item.path}`}></img>
            <div>
              <h3>{`0${index + 1}`}</h3>
              <h4>{item.title}</h4>
              <p>{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
