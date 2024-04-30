import React from 'react';
import '../App.css';

const Home = () => {
  const handleSong = async (event) => {
    const formData = new FormData(event.target);
    let song = formData.get("song");
    let rating = formData.get("rating");
    if (!containsNumber(rating))
    {
      alert("ERROR: Rating should be a number.");
    }
    else{
      fetch(`http://localhost:3000/musicProject`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(song, rating)
    }).then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    }).catch(e => {
        console.error(e);
    });
    }
  };
  function containsNumber(str) {
    return /[0-9]/.test(str);
  };
  return (
    <div className="App">
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Index</title>
    <div className="topnav">
    <p> Rowan Web Programming </p>
    <a href="contact">Contact</a>
    <a href="about">About</a>
    <a href="home">Home</a>
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
    <form onSubmit={handleSong}>
    <input type="text" placeholder="Song Name" name="song" id="song" />
    <br /> <br />
    <button type="submit" className="submit"> Submit </button>
    <br /> <br />
    <input type="text" placeholder="Rating 1-10" name="rating" id="rating" />
    </form>
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
    </div>
  </div>
    </>
    </div>
  )
}

export default Home;