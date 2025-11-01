const fs = require('fs');
const fsPromises = fs.promises;

export default async function Page({ params }) {
    const { slug } = await params

    let file = `/blogposts/${slug}.mdx`

    const { default: Post } = await import(`@${file}`)

    let { title, date } = await getMetadata(slug)

    return (
        <>
            <h1>{title}</h1>
            <p>{date}</p>
            <Post />
        </>
    )
}

async function getMetadata(slug) {

    const jsonData = await fsPromises.readFile('src/app/blog/posts.json')
    const posts = JSON.parse(jsonData)

    return posts.find(post => post.file_name == slug)
}
