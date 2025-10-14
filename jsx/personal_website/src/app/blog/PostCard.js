import fs from 'fs'

const postsDirectory = path.join(process.cwd(), 'blogposts')

export default function PostCard({ id }) {
    return (
        <div className="post-card">
            <h3><a href=`./blog/${id}.html`>{title}</a></h3>
            <p>Date: {date}</p>
            <p>{description}</p>
        </div>
    )
}


// export default function Blog(props) {
//
//
//     const fileNames = fs.readdirSync(postsDirectory);
//
//     const allPostsData = fileNames.map((fileName) => {
//         const id = fileName.replace(/\.html$/, '');
//         return <PostCard id={id} />
//     });
//
//     return (
//         <>
//             <title>Blog - CaraCodes</title>
//             {fileNames.map((fileName) => {
//                 const id = fileName.replace(/\.html$/, '');
//                 return <PostCard id={id} />
//             }
//         </>
//     )
// }
//
// export async function getStaticProps() {
//
//     const filePath = path.join(process.cwd(), 'posts.json');
//     const jsonData = await fsPromises.readFile(filePath);
//     const posts = JSON.parse(jsonData);
//
//     return { props: posts }
// }
