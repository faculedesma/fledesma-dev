import "./history.scss";

const jobsHistory = [
  {
    id: "freelance",
    date: "Now",
    position: "Freelancer",
    company: {
      name: "Self-taught designer",
      url: "https://www.linkedin.com/in/facundo-ledesma/",
    },
  },
  {
    id: "soft-one",
    date: "2020",
    position: "Software Engineer",
    company: {
      name: "ICE Mortgage Technology, Inc.",
      url: "https://www.icemortgagetechnology.com/",
    },
  },
  {
    id: "soft-two",
    date: "2020",
    position: "Software Engineer",
    company: {
      name: "Leniolabs_ LLC",
      url: "https://www.leniolabs.com/",
    },
  },
  {
    id: "soft-three",
    date: "2018",
    position: "Software Engineer",
    company: { name: "Sovos Compliance, LLC", url: "https://sovos.com/" },
  },
];

const History = () => {
  return (
    <div className="container">
      <div className="history">
        <h3>History</h3>
        <div className="history-list">
          {jobsHistory.map((job) => {
            return (
              <div className="history-list--row-container">
                <div className="history-list--row">
                  <h2>{job.date}</h2>
                  <div className="history-list--row-charge">
                    <h2>{job.position}</h2>
                    <a href={job.company.url} target="_blank">
                      {job.company.name}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default History;
