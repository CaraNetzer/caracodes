import fs from 'fs'
import PostCard from './PostCard.js'

const postsDirectory = path.join(process.cwd(), 'blogposts')

export default function Blog(props) {

    const posts = props.posts;

    const fileNames = fs.readdirSync(postsDirectory);

    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.html$/, '');
        return <PostCard id={id} />
    });

    return (
        <>
            <title>Blog - CaraCodes</title>
            {fileNames.map((fileName) => {
                const id = fileName.replace(/\.html$/, '');
                return <PostCard id={id} />
            })
            }
        </>
    )
}

export async function getStaticProps() {

    const filePath = path.join(process.cwd(), 'posts.json');
    const jsonData = await fsPromises.readFile(filePath);
    const posts = JSON.parse(jsonData);

    return { props: posts }
}
