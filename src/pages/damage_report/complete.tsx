import { NextPage } from "next";

import Link from "next/link";
import dynamic from "next/dynamic";
import { server } from "../../config";
import { DamageReportType } from "../../components/DamageReportItem/DamageReportType";

const DamageReportItem = dynamic(() => import("../../components/DamageReportItem"))

interface CheckoutCompleteProps {
    [key: string]: any
}

const CheckoutComplete: NextPage<CheckoutCompleteProps> = ({ uid, damageReport }) => {
    return (
        <div className="container max-w-md mx-auto py-12">
            <div className="card w-96 mx-auto">
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold mb-6">Complete your damage report!</h2>
                    <div className="pb-12">
                        <p className="mb-4">Thank you for damage report.</p>
                        {uid &&
                            <button className={`btn bg-primary-500 hover:bg-primary-600 text-white`}>
                                <Link href={`/damage_report/status/${uid}`}>
                                    View Status
                                </Link>
                            </button>
                        }
                    </div>
                    <div className="pb-12">
                        <p className="mb-4">Your payment was successfully processed!</p>
                        <button className="btn btn-secondary">
                            <Link href={`/damage_report/submit`}>
                                Continue Submit Damage Report
                            </Link>
                        </button>
                    </div>
                </div>
            </div>

            <div className="divider"></div>
            {damageReport && <DamageReportItem damageReport={damageReport} />}
        </div>
    );
};

type QueryType = {
    uid: string;
    damageReport: DamageReportType;
    [key: string]: any
}

export const getServerSideProps = async ({ query }: QueryType) => {
    const uid: string = query.uid
    const res = await fetch(`${server}/api/damage-report/get/${uid}`)
    const damageReport: DamageReportType = await res.json()

    if (!damageReport) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            uid,
            damageReport
        },
    }
}

export default CheckoutComplete;