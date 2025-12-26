//import iskender from "/iskender.jpg";

function Greeting() {
  return <h1>&quot;This is a simple greeting component i created!&quot;</h1>;
}

function FavoriteFood() {
  return (
    <>
      <div className="intro">
        <h1>Welcome to my website!</h1>
      </div>
      <p className="summary">
        You can find my thoughts here.
        <br /><br/>
        <b>
          And <i>pictures</i>
        </b>{" "}
        of scientists!
      </p>
    </>
  );
}

export { Greeting as default, FavoriteFood };
