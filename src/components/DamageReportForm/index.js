import { Fragment, useCallback, useState } from "react";
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function DamageReportForm() {
    const { data: vehicles, error } = useSWR('/api/vehicles', fetcher);

    const [models, setModels] = useState(null);
    const [data, setData] = useState({
        vehicle_id: "",
        model_id: "",
        image: null,
        image_url: "",
        description: "",
        cName: "",
        cEmail: "",
        cPhone: "",
        cMessage: "",
        isImageLoading: false,
        isSubmitting: false,
        errorMessage: null
    });

    const handleInputChange = useCallback((event) => {
        if (!event) return;

        let name = event.target ? event.target.name : event.name;
        let value = event.target ? event.target.value : event.value;
        let type = event.target ? event.target.type : null;

        if (!name) return;

        if (type === 'checkbox') {
            value = event.target.checked;
        } else if (type === 'file') {
            value = event.target.files[0];
            imageUploadHandler(value);
        }

        setData({
            ...data,
            [name]: value
        });
    }, [data]);

    const mapToModelFieldHandler = (event) => {
        if (!vehicles || !event.target.value) return;

        handleInputChange(event);
        const vehicleId = event.target.value
        const foundModel = vehicles.find(vehicle => vehicle.id === +vehicleId);
        if (foundModel?.models) setModels(foundModel.models || []);
    }

    const imageUploadHandler = (file) => {
        setData({
            ...data,
            isImageLoading: true,
        });

        const formData = new FormData();
        formData.append("image", file);

        fetch("/api/upload", {
            method: "POST",
            body: formData,
        })
            .then((response) => {
                console.log(response)
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((rdata) => {
                console.log("Server response:", rdata);
                setData({
                    ...data,
                    image_url: rdata.url,
                    isImageLoading: false
                })
            })
            .catch((error) => {
                console.error("Error uploading image:", error);
                setData({
                    ...data,
                    isImageLoading: false,
                });
            });
    };


    const damageReportSubmitHandler = useCallback(async (event) => {
        event.preventDefault();

        setData({
            ...data,
            isSubmitting: true,
            errorMessage: null
        });

        try {
            const formData = {
                vehicle: {
                    id: data.vehicle_id,
                    model_id: data.model_id
                },
                image: data.image_url,
                description: data.description,
                customer: {
                    name: data.cName,
                    email: data.cEmail,
                    phone: data.cPhone,
                    message: data.cMessage
                }
            }

            const res = await fetch('/api/submit', {
                method: 'POST',
                body: JSON.stringify(formData)
            });
            if (!res.ok) throw new Error('Submission failed');

            setData({
                ...data,
                isSubmitting: false,
                errorMessage: null
            });
        } catch (e) {
            setData({
                ...data,
                isSubmitting: false,
                errorMessage: error.errors || e.message
            });
        }
    }, [data, error?.errors]);

    return (
        <div>
            <ul className="steps steps-vertical lg:steps-horizontal mb-4 w-full">
                <li className="step step-primary">Vehicle details</li>
                <li className="step step-primary">Upload image</li>
                <li className="step">Contact</li>
                <li className="step">Summery</li>
            </ul>

            <form onSubmit={damageReportSubmitHandler}>

                <p className="text-sky-400 underline pb-3">Vehicle details</p>
                <div className="form-control w-full max-w-xs pb-3">
                    <label className="label">
                        <span className="label-text">Brand</span>
                    </label>
                    {vehicles &&
                        <select
                            className="select select-bordered select-sm"
                            name="vehicle_id"
                            id="vehicle_id"
                            value={data.vehicle_id}
                            onChange={mapToModelFieldHandler}
                            required
                        >
                            {vehicles.map(item => (
                                <Fragment key={item.id}>
                                    <option value={item.id}>{item.name}</option>
                                </Fragment>
                            ))}
                        </select>
                    }
                </div>

                {data.vehicle_id &&
                    models && models.length > 0 &&
                    <div className="form-control w-full max-w-xs pb-3">
                        <label className="label">
                            <span className="label-text">Model</span>
                        </label>
                        <select
                            className="select select-bordered select-sm"
                            name="model_id"
                            id="model_id"
                            value={data.model_id}
                            onChange={handleInputChange}
                            required
                        >
                            {models.map(item => (
                                <Fragment key={item.id}>
                                    <option value={item.id}>{item.name}</option>
                                </Fragment>
                            ))}
                        </select>
                    </div>
                }

                <p className="text-sky-400 underline py-3">Upload photo's of the damage</p>
                <div className="form-control w-full max-w-xs pb-3">
                    <label className="label">
                        <span className="label-text">Photo's of the damage?</span>
                    </label>
                    <input
                        type="file"
                        className="file-input file-input-bordered file-input-sm w-full max-w-xs"
                        name="image"
                        id="image"
                        onChange={handleInputChange}
                        required
                    />

                    {data.isImageLoading && <p>Image is Uploading</p>}
                </div>

                <div className="form-control w-full max-w-xs pb-3">
                    <label className="label">
                        <span className="label-text">description?</span>
                    </label>
                    <textarea
                        placeholder="Description"
                        className="textarea textarea-bordered textarea-sm w-full max-w-xs"
                        name="description"
                        id="description"
                        value={data.description}
                        onChange={handleInputChange}
                        required
                    ></textarea>
                </div>

                <p className="text-sky-400 underline py-3">Customer details</p>
                <div className="form-control w-full max-w-xs pb-3">
                    <label className="label">
                        <span className="label-text">Your name?</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs input-sm"
                        name="cName"
                        id="cName"
                        value={data.cName}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-control w-full max-w-xs pb-3">
                    <label className="label">
                        <span className="label-text">E-Mail Address?</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs input-sm"
                        name="cEmail"
                        id="cEmail"
                        value={data.cEmail}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-control w-full max-w-xs pb-3">
                    <label className="label">
                        <span className="label-text">Phone Number?</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs input-sm"
                        name="cPhone"
                        id="cPhone"
                        value={data.cPhone}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-control w-full max-w-xs pb-3">
                    <label className="label">
                        <span className="label-text">Message?</span>
                    </label>
                    <textarea
                        placeholder="Type here"
                        className="textarea textarea-bordered textarea-sm w-full max-w-xs"
                        name="cMessage"
                        id="cMessage"
                        value={data.cMessage}
                        onChange={handleInputChange}
                        required
                    >
                    </textarea>
                </div>

                <button type="submit" className="btn btn-primary" disabled={data.isSubmitting || data.isImageLoading}>Submit</button>
            </form>
        </div>
    )
}
