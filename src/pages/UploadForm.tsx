import React, { useEffect, useRef, useState } from 'react'
import "./uploadForm.css"
import { v4 as uuidv4 } from "uuid";


import SmallInput from '../components/shared/SmallInput';
import BigInput from '../components/shared/BigInput';

import Textarea from '../components/shared/Textarea';
import { useAppDispatch, useAppSelector } from '../store';
import { handleChange, handleImage, handleTextarea, handleSubmition } from "../store/FormSlice"
import { useNavigate } from 'react-router-dom';
// import { formValidation } from '../assets/validations/formValidation';
import { formValidation } from '../assets/validations/FormValidation';
import { Errors } from '../types/errorTypes';
import { TbError404 } from 'react-icons/tb';
import ErrorComp from '../components/shared/ErrorComp';


interface latLng {
    lengitude: number
    latitude: number
}

// interface ImportMeta {
//     env: {
//         VITE_REACT_APP_API_KEY: string;

//     };
// }

const UploadForm = () => {
    const ref = useRef<HTMLInputElement>(null);
    const [latLng, setLatLng] = useState<latLng | null>(null);
    const [error, setError] = useState<Errors>()
    const dispatch = useAppDispatch()
    const [image, setImage] = useState<string>("")
    const values = useAppSelector((state) => state.form.value)
    const navigate = useNavigate();

    const pickImageHandler = (event: React.MouseEvent) => {
        event.preventDefault();
        ref.current?.click();
    };

    const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(handleChange({ name: event.target.name, value: event.target.value }))
    }

    const handleTextareas = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(handleTextarea({ name: event.target.name, value: event.target.value }))
    }

    const handleImages = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selected = event.target.files?.[0]

        if (selected) {
            const formData = new FormData
            formData.append("selected", selected)
            const fileUrl = URL.createObjectURL(selected);
            dispatch(handleImage(fileUrl))
        }

        // if (selected) {
        //     console.log(selected)
        // } else {
        //     console.log("ssas")
        // }
        // console.log(event.target.files)
        if (selected) {
            const reader = new FileReader();
            reader.readAsDataURL(selected);
            reader.onload = () => {
                setImage(reader.result as string);
            };
        }


    }

    useEffect(() => {
        const apiKey = import.meta.env.VITE_REACT_APP_API_KEY
        const url: string = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(values.location)}&key=${apiKey}`;
        if (!values.location) {
            return;
        }
        const fetchAddress = async () => {
            try {
                const response = await fetch(url)
                const data = await response.json()
                const { lat, lng }: { lat: number, lng: number } = data.results[0].geometry.location;
                setLatLng({ latitude: lat, lengitude: lng })
            } catch (error) {
                console.log(error)
            }

        }

        fetchAddress()

    }, [values.location])

    const handleLocationSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();

        dispatch(handleSubmition({ ...values, id: uuidv4(), image: image, address: { latitude: latLng?.latitude, longitude: latLng?.lengitude } }))

        console.log(formValidation({ ...values, id: uuidv4(), image: image }))
        const val = formValidation({ ...values, id: uuidv4(), image: image })
        setError(val)

        for (const [key, value] of Object.entries(error || {})) {
            if (value !== "") {
                return
            }
        }


        navigate("/items")

    };


    return (
        <div className='upload-form-container'>
            <h3>Try and find what you have lost!</h3>
            <form className='upload-form' onSubmit={handleLocationSubmit}>
                <div className='form-first-part'>
                    <div className='lost-item'>
                        {error?.title === "Please add the title!" && (
                            <ErrorComp className="error-icon-div-title" text={error?.title} />
                        )}
                        <SmallInput
                            title="Name"
                            type='text'
                            className='lost-item-small-input'
                            name='title'
                            value={values.title}
                            onChanges={handleChanges}
                            error={error?.title}
                        />
                        {error?.lost_date === "Please add the date!" && (
                            <ErrorComp className="error-icon-div-date" text={error?.lost_date} />
                        )}
                        <SmallInput
                            title="Date of loss"
                            type='date'
                            className='lost-item-small-input'
                            name='lost_date'
                            value={values.lost_date}
                            onChanges={handleChanges}
                            error={error?.lost_date}
                        />
                        <div className='lost-item-image'>
                            <input type="file" ref={ref} accept="image/*" onChange={handleImages} />
                            <button type='button' onClick={pickImageHandler}>Upload here</button>
                            {error?.image === "Please add the picture!" && (
                                <ErrorComp className="error-icon-div-image" text={error?.image} />
                            )}
                        </div>

                    </div>
                    <div className='form-image'>
                        {image && <img src={image} alt='item' />}
                    </div>
                </div>
                <div className="form-second-part">
                    {error?.location === "Please add the location!" && (
                        <ErrorComp className="error-icon-div-image" text={error?.location} />
                    )}
                    <BigInput
                        title="Location"
                        type='text'
                        className='lost-item-location'
                        name='location'
                        value={values.location}
                        onChanges={handleChanges}
                        error={error?.location}
                    />
                    <div className="lost-item-dscription">
                        <h3>Description</h3>
                        <div className='form-third-part'>
                            {error?.description === "Please add the description!" && (

                                <ErrorComp className="error-icon-div-description" text={error?.description} />
                            )}
                            <Textarea
                                className='description-text'
                                title="Describe with more details"
                                rows={4}
                                cols={30}
                                name='description'
                                value={values.description}
                                onChanges={handleTextareas}
                            />

                            <Textarea
                                className='description-text'
                                title="Would you like to add something?"
                                rows={4}
                                cols={30}
                                name='other'
                                value={values.other}
                                // value=''
                                onChanges={handleTextareas}
                            />

                        </div>
                        <button className='submit-form' type='submit'>Submit the form</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default UploadForm




// const mapRef = useRef();

// useEffect(() => {
//   new window.ol.Map({
//     target: mapRef.current.id,
//     layers: [
//       new window.ol.layer.Tile({
//         source: new window.ol.source.OSM(),
//       }),
//     ],
//     view: new window.ol.View({
//       center: window.ol.proj.fromLonLat([center.lng, center.lat]),
//       zoom: zoom,
//     }),
//   });
// }, [center, zoom]);

// return (
//   <div
//     ref={mapRef}
//     id="map"
//     className={`map ${className}`}
//     style={style}
//   ></div>
// );