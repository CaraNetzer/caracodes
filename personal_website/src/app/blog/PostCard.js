import { fs } from 'fs'
let path = require('path');
import Link from 'next/link'

const postsDirectory = path.join(process.cwd(), 'blogposts')

export default async function PostCard({ post }) {
    return (
        <div className="post-card">
            <h3><Link href={`./${post.file_name}`}>{post.title}</Link></h3>
            <p>Date: {post.date}</p>
            <p>{post["tagline"]}</p>
        </div>
    )
}

