'use client'
import {useParams} from "next/navigation";

export default function Home() {
    const { slug, badRouteParam } = useParams()
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {slug} - {badRouteParam}
        </main>
    )
}
