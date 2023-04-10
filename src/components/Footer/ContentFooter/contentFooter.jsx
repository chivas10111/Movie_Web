import "./index.css";

function ContentFooter(){
    return (
        <>
            <div className="content_footer">
                <div>
                    <h3>The Basics</h3>
                    <ul>
                        <li><a href="">About TMDB</a></li>
                        <li><a href="">Contact Us</a></li>
                        <li><a href="">Support Forums</a></li>
                        <li><a href="">API</a></li>
                        <li><a href="https://status.themoviedb.org/" target="_blank" rel="noopener">System Status</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Get Involved</h3>
                    <ul>
                        <li><a href="">Contribution Bible</a></li>
                        <li><a href="">Add New Movie</a></li>
                        <li><a href="">Add New TV Show</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Community</h3>
                    <ul>
                        <li><a href="">Guidelines</a></li>
                        <li><a href="">Discussions</a></li>
                        <li><a href="">Leaderboard</a></li>
                        <li><a href="https://twitter.com/themoviedb" target="_blank" rel="noopener">Twitter</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Legal</h3>
                    <ul>
                        <li><a href="">Terms of Use</a></li>
                        <li><a href="">API Terms of Use</a></li>
                        <li><a href="">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ContentFooter;