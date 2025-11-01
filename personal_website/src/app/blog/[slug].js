'use client';
import { useRouter } from 'next/router'
import { useParams } from 'next/navigation'

export default function Page() {
    const router = userRouter()
    const params = useParams()
    return <p>Post: {router.query.slug}</p>
    return <p>Post: {params}</p>
}
