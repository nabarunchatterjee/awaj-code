export default function RandomSlogan({ slogan, handleClick }) {
  return (
    <div className="Main">
      {/* <div className="Slogan">{slogan}</div> */}
      <Slogan text={slogan} />
      <button className="Next button" onClick={handleClick}>
        Next
      </button>
    </div>
  );
}

function Slogan({ text }) {
  const [lead, chorus] = text.split(",");
  console.log("lead", lead, "chorus", chorus);

  return (
    <div style={{ minHeight: "60vh" }} className="Slogan">
      <div>{lead}</div>
      <div style={{ color: "#ee4b2b" }}>{chorus}</div>
    </div>
  );
}
