export default function Blog() {
    return (
        <>
            <title>Blog - CaraCodes</title>
            <div className="post-card">
                <h3>
                    <a href="./blog/about_me.html">
                        About Me/Intro to Blogging
                    </a>
                </h3>
                <p>Date: 2025-10-01</p>
                <p>What you can expect from CaraCodes</p>
            </div>
            <div className="post-card">
                <h3>
                    <a href="./blog/documentation.html">
                        Documentation: Zero to ~Some~
                    </a>
                </h3>
                <p>Date: 2025-10-01</p>
                <p>What to do when your technical documentation exists only as an oral tradition.</p>
            </div>
        </>
    )
}
