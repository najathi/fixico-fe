import Link from "next/link";
import useSWR from 'swr';

import styles from './CartStatusItem.module.css'
import { CustomerType, VehicleType } from "../DamageReportItem/DamageReportType";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface CartStatusItemProps {
    [key: string]: any;
    image: string;
    status: string;
    customer: CustomerType;
    vehicle: VehicleType;
    uid: string;
}

const CartStatusItem: React.FC<CartStatusItemProps> = ({ image, status, customer, vehicle, uid }) => {
    const { data: vehicleDetail } = useSWR(`/api/vehicles/${vehicle.id}?model_id=${vehicle.model_id}`, fetcher);

    return (
        <div className="card card-side bg-base-100 shadow-xl mb-2">
            <figure><img className={styles.image} src={image} alt={customer?.name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{customer?.name}</h2>
                {vehicleDetail && <p>{vehicleDetail.name} - {vehicleDetail?.model.name}.</p>}
                <div className="badge badge-warning">{status}</div>
                <div className="card-actions justify-end">
                    <Link href={`/damage_report/status/${uid}`}>
                        <button className="btn btn-primary">View Report</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CartStatusItem;
