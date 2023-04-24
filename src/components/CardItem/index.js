import Link from "next/link";

export default function CartItem() {
    return (
        <div className="card w-3/12 glass">
            <figure><img src="/assets/images/sites/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">Damage Report</h2>
                <p className="pb-5">Our customers would like to submit their Damage Report</p>
                <div className="card-actions justify-end">
                    <Link href="/damage_report/submit" className="btn btn-primary">
                        Submit Damage Report
                    </Link>
                </div>
            </div>
        </div>
    )
}
