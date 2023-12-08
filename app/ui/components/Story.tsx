const Story = ({ stories }: { stories: { title: string }[] }) => {
  if (stories.length > 0) {
    return (
      <div className="m-12 text-white">
        <h1 className="text-4xl font-bold text-marvelRed">Stories</h1>
        <ul className="m-2">
          {stories.map((story: { title: string }, id: number) => {
            if (story.title) {
              return (
                <li className="p-1 text-lg" key={id}>
                  - {story.title}
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  }
};

export default Story;
