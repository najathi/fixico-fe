import Link from "next/link";

interface CartItemProps {
    [key: string]: any;
}

const CartItem: React.FC<CartItemProps> = ({ }) => {
    return (
        <div className="card w-3/12 glass">
            <figure><img src="/assets/images/sites/front-card-image.jpg" alt="car!" /></figure>
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

export default CartItem;
