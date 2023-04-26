import useSWR from 'swr';

import styles from './DamageReportItem.module.css'

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function DamageReportItem({ damageReport }) {
    const { data: vehicleDetail } = useSWR(`/api/vehicles/${damageReport.vehicle.id}?model_id=${damageReport.vehicle.model_id}`, fetcher);

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    className={styles.image}
                    src={damageReport.image}
                    alt={damageReport.customer.name}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Mr. {damageReport.customer.name}</h2>
                <p className={styles.line}>E-Mail Address: {damageReport.customer.email}</p>
                <p className={styles.line}>Phone Number: {damageReport.customer.phone}</p>
                <p className={styles.line}>Note: {damageReport.customer.message}</p>

                <div className="divider"></div>
                {vehicleDetail && <p className={styles.line}>Car:  {vehicleDetail.name} - {vehicleDetail?.model.name}.</p>}

                <div className="divider"></div>
                <p className={styles.line}>Damage Note: {damageReport.description}</p>
            </div>
        </div>
    )
}
