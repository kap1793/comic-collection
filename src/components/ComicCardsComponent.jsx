import comics from "../comics.js";
import '../style/comicCardStyle.css';

function ComicCards() {
    return (
        <div className = "comicCards">
            {comics.map((comic) => (
                <div className="comicCard" key={comic.series + comic.issue}>
                    <div className= "cardFlipFront">
                        <img 
                            className= "comicCoverArt"
                            src={comic.coverArt}
                            alt={comic.series + ": " + comic.issue}
                        />
                    </div>
                    <div className = "cardFlipBack">
                        <h2>{comic.series}: {comic.issue}</h2>
                        <h3>{comic.releaseDate}</h3>
                        <p>{comic.description}</p>
                        <a href = {comic.webLink} className= "comicLink">Read it here!</a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ComicCards;