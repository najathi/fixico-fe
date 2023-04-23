import Link from "next/link";

export default function Breadcrumbs({ paths }) {
    return (
        <div className="text-sm breadcrumbs mb-5">
            <ul>
                <li><Link href="/"><a>Home</a></Link></li>
                {paths &&
                    paths.map((path, idx) => (
                        <li key={idx}><Link href={path.route}><a>{path.title}</a></Link></li>
                    ))
                }
            </ul>
        </div>
    )
}
