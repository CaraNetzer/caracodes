import { fs } from 'fs'
let path = require('path');

const postsDirectory = path.join(process.cwd(), 'blogposts')

export default function PostCard({ post }) {
    return (
        <div className="post-card">
            <h3><a href={`./blog/blogposts/${post["id"]}.html`}>{post["title"]}</a></h3>
            <p>Date: {post["date"]}</p>
            <p>{post["tagline"]}</p>
        </div>
    )
}

