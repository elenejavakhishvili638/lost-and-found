import React, { useRef } from 'react'
import "./uploadForm.css"
import mag from "../assets/images/magnifier.png"
import SmallInput from '../components/shared/SmallInput';
import BigInput from '../components/shared/BigInput';
import TripleInput from '../components/shared/TripleInput';
import Textarea from '../components/shared/Textarea';

const UploadForm = () => {
    const ref = useRef<HTMLInputElement>(null);

    const pickImageHandler = (event: React.MouseEvent) => {
        event.preventDefault();
        ref.current?.click();
    };
    return (
        <div className='upload-form-container'>
            <h3>Try and find what you have lost!</h3>
            <form className='upload-form'>
                <div className='form-first-part'>
                    <div className='lost-item'>
                        <SmallInput
                            title="name"
                            type='text'
                            className='lost-item-small-input'
                            name=''
                            value=''
                        />
                        <SmallInput
                            title="Date of loss"
                            type='date'
                            className='lost-item-small-input'
                            name=''
                            value=''
                        />
                        <div className='lost-item-image'>
                            <input type="file" ref={ref} accept="image/*" />
                            <button type='button' onClick={pickImageHandler}>Upload here</button>
                        </div>
                    </div>
                    <div className='form-image'>
                        <img src={mag} alt='item' />
                    </div>
                </div>
                <div className="form-second-part">
                    <BigInput
                        title="Location"
                        type='text'
                        className='lost-item-location'
                        name=''
                        value=''
                    />
                    <div className="lost-item-dscription">
                        <h3>Description</h3>
                        <div className='description-vital-properties'>
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
                        </div>
                        <Textarea
                            className='description-text'
                            title="Describe with more details"
                            rows={4}
                            cols={30}
                            name=''
                            value=''
                        />
                        <Textarea
                            className='description-text'
                            title="Would you like to add something?"
                            rows={4}
                            cols={30}
                            name=''
                            value=''
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default UploadForm