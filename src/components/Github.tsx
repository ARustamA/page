import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Календарь <strong className="text-main_red">кодинга</strong>
      </h1>
      <GitHubCalendar
        username="arustama"
        blockSize={15}
        blockMargin={5}
        colorScheme="dark"
        style={{color: "#E1492E" }}
        fontSize={16}
        
      />
    </div>
  );
}

export  {Github};
