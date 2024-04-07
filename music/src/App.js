import './App.css';
{/*
    Author: Jack Healy
    School Name: healyj53
    Course: Web Programming CS04305
    Instructor: Marquise Pullen

    Honor Pledge: I pledge that this work is entirely my own
*/}

function App() {
  return (
    <div className="App">
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Index</title>
    <div className="topnav">
    <p> Rowan Web Programming </p>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
    <a href="#home">Home</a>
  </div>
  <div className="hero">
    {" "}
    <p className="statement">
      {" "}
      Team #02 <br />
      <hr className="heroline"></hr>
      Song Rating App <br />{" "}
    </p>{" "}
  </div>
  <div className="mainbox">
    <div className="descbox">
    <h2 className="descheader"> Description </h2>
    <p className="description"> Please input a song and give it a rating. </p>
    </div>
    <div className="entrybox">
    <h2 className="entryboxheader"> Song Entry Box </h2>
    <textarea placeholder="Song Name"></textarea>
    <br /> <br />
    <button type="submit" className="submit"> Submit </button>
    <br /> <br />
    <textarea placeholder="Rating 1-10"></textarea>
    </div>
    <div className="songlist">
      <table className="songtable">
        <tr>
        <th className="header"> Song </th> <th className="ratingheader"> Rating </th>
        </tr>
        <tr>
          <td> Song1 </td> <td> 9.0 </td>
        </tr>
        <tr>
          <td> Song2 </td> <td> 7.5 </td>
        </tr>
      </table>
    </div>
    <div className="footer">
      <p className="referencesheader"> References </p>
      <p className="references"> temporary references </p>
    </div>
  </div>
    </>
    </div>
  );
}

export default App;
