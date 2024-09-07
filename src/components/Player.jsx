export const Player =({fn,song})=>{
    return(
        <div>
            <button onClick={()=>{
                fn(false,null)
            }} className="btn btn-dark">Back to Songs</button>
            <br />
            <br />
            <p>
            <img src= {song.artworkUrl100}/>
             <br />
              <br />
            {song?.artistName} {song?.trackName}
            </p>
            <br />
            <br />
        <audio controls>
            <source src={song?.previewUrl} type="audio/mp4"/>
        </audio>
        </div> )
}