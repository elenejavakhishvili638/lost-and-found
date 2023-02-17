import React, { useRef, useState } from 'react'
import "./uploadForm.css"
import mag from "../assets/images/magnifier.png"
import SmallInput from '../components/shared/SmallInput';
import BigInput from '../components/shared/BigInput';
import TripleInput from '../components/shared/TripleInput';
import Textarea from '../components/shared/Textarea';
import { useAppDispatch, useAppSelector } from '../store';
import { handleChange, handleImage, handleTextarea } from "../store/FormSlice"

const UploadForm = () => {
    const ref = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch()
    const [image, setImage] = useState<string>("")
    const values = useAppSelector((state) => state.form.value)

    // console.log(values.title)

    const pickImageHandler = (event: React.MouseEvent) => {
        event.preventDefault();
        ref.current?.click();
    };

    const handleLocationSubmit = () => {
        // event.preventDefault();

        // const geocoder = new geocoder("nominatim", {
        //   provider: "osm",
        //   lang: "en",
        //   placeholder: "Enter location",
        //   targetType: "text-input",
        //   limit: 5,
        //   keepOpen: true,
        //   autoComplete: true,
        //   autoCompleteMinLength: 2,
        //   preventDefault: true,
        // });

        // geocoder.on("addresschosen", (evt) => {
        //   const { coordinate } = evt;
        //   setLatitude(coordinate[1]);
        //   setLongitude(coordinate[0]);
        // });

        // geocoder.geocode(location);
    };

    // const map = new Map({
    //     target: "map",
    //     layers: [
    //       new TileLayer({
    //         source: new OSM(),
    //       }),
    //     ],
    //     view: new View({
    //       center: [0, 0],
    //       zoom: 2,
    //     }),
    //   });

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

    return (
        <div className='upload-form-container'>

            <h3>Try and find what you have lost!</h3>
            <form className='upload-form' onSubmit={() => { handleLocationSubmit }}>
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