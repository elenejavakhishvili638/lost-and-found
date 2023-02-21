import React, { useEffect, useRef, useState } from 'react'
import "./uploadForm.css"
import { v4 as uuidv4 } from "uuid";


import SmallInput from '../components/shared/SmallInput';
import BigInput from '../components/shared/BigInput';

import Textarea from '../components/shared/Textarea';
import { useAppDispatch, useAppSelector } from '../store';
import { handleChange, handleImage, handleTextarea, handleSubmition } from "../store/FormSlice"
import { useNavigate } from 'react-router-dom';

// interface latLng {
//     lengitude: number
//     latitude: number
// }

const UploadForm = () => {
    const ref = useRef<HTMLInputElement>(null);
    // const [latLng, setLatLng] = useState<latLng | null>(null);
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
            console.log(selected)
            dispatch(handleImage(selected))
        } else {
            console.log("ssas")
        }
        // console.log(event.target.files)
        if (selected) {
            const reader = new FileReader();
            reader.readAsDataURL(selected);
            reader.onload = () => {
                setImage(reader.result as string);
            };
        }

    }

    // useEffect(() => {
    //     // const url: string = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(values.location)}&key=${apiKey}`;
    //     // fetch(url)
    //     //     .then((response: Response) => response.json())
    //     //     .then((data: any) => {
    //     //         const { lat, lng }: { lat: number, lng: number } = data.results[0].geometry.location;
    //     //         // console.log(`Latitude: ${lat}, Longitude: ${lng}`);
    //     //         setLatLng({ latitude: lat, lengitude: lng })
    //     //     })
    //     //     .catch((error: Error) => {
    //     //         console.error('Error:', error);
    //     //     });

    // }, [latLng, setLatLng])

    const handleLocationSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();

        // for(const [key, value] of Object.entries(values)) {
        //     if ()
        // }

        dispatch(handleSubmition({ ...values, id: uuidv4(), image: image }))

        navigate("/items")

    };

    return (
        <div className='upload-form-container'>

            <h3>Try and find what you have lost!</h3>
            <form className='upload-form' onSubmit={handleLocationSubmit}>
                <div className='form-first-part'>
                    <div className='lost-item'>
                        <SmallInput
                            title="Name"
                            type='text'
                            className='lost-item-small-input'
                            name='title'
                            value={values.title}
                            onChanges={handleChanges}
                        // onChange={dispatch(handleChange)}
                        />
                        <SmallInput
                            title="Date of loss"
                            type='date'
                            className='lost-item-small-input'
                            name='lost_date'
                            value={values.lost_date}
                            onChanges={handleChanges}
                        />
                        <div className='lost-item-image'>
                            <input type="file" ref={ref} accept="image/*" onChange={handleImages} />
                            <button type='button' onClick={pickImageHandler}>Upload here</button>
                        </div>
                    </div>
                    <div className='form-image'>
                        {image && <img src={image} alt='item' />}
                    </div>
                </div>
                <div className="form-second-part">
                    <BigInput
                        title="Location"
                        type='text'
                        className='lost-item-location'
                        name='location'
                        value={values.location}
                        onChanges={handleChanges}
                    />

                    <div className="lost-item-dscription">
                        <h3>Description</h3>
                        {/* <div className='description-vital-properties'>
                            <TripleInput
                                title="Color"
                                type='text'
                                className='decription-input'
                                name=''
                                value=''
                            />
                            <TripleInput
                                title="Size"
                                type='text'
                                className='decription-input'
                                name=''
                                value=''
                            />
                            <TripleInput
                                title="Shape"
                                type='text'
                                className='decription-input'
                                name=''
                                value=''
                            />
                        </div> */}
                        <div className='form-third-part'>
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