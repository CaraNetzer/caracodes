import { useRouter } from 'next/router'

export default function Page() {
    const router = userRouter()
    return <p>Post: {router.query.slug}</p>
}
