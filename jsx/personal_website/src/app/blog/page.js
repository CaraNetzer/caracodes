// import { fs } from 'fs'
const fs = require('fs');
import PostCard from './PostCard.js'
let path = require('path');
const fsPromises = fs.promises;

const postsDirectory = path.join(process.cwd(), 'blogposts')

export default async function Blog() {

    const posts = await getData();

    return (
        <>
            <title>Blog - CaraCodes</title>
            {posts.map((post) => {
                return <PostCard post={post} key={post["id"]}/>
            })}
        </>
    );
}

export async function getData() {

    const filePath = path.join(process.cwd(), '/src/app/blog/posts.json')
    const jsonData = await fsPromises.readFile(filePath)
    const posts = JSON.parse(jsonData)

    return posts
}
