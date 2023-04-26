import Link from "next/link";

const CheckoutComplete = ({ uid }) => {
    return (
        <div className="container max-w-md mx-auto py-12">
            <div className="card w-96 mx-auto">
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold mb-6">Complete your damage report!</h2>
                    <div className="pb-12">
                        <p className="mb-4">Thank you for damage report.</p>
                        <Link href={`/damage_report/status/${uid}`}>
                            <button className={`btn bg-primary-500 hover:bg-primary-600 text-white`}>
                                View Status
                            </button>
                        </Link>
                    </div>
                    <div className="pb-12">
                        <p className="mb-4">Your payment was successfully processed!</p>
                        <Link href={`/damage_report/submit`}>
                            <button className="btn btn-secondary">
                                Continue Submit Damage Report
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps = async (context) => {
    const uid = context.query.uid

    return {
        props: {
            uid
        },
    }
}

export default CheckoutComplete;