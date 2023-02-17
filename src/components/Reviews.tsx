import React, { useEffect, useState } from 'react'
import "./reviews.css"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"
import { FaQuoteRight } from "react-icons/fa"
import peopleReviews from "../assets/data/reviews"
import { ReviewsT } from "../types/reviewsTypes";

const Reviews = () => {

    const [index, setIndex] = useState<number>(0)
    const [people, setPeople] = useState<ReviewsT[]>(peopleReviews)

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
            setIndex(lastIndex)
        }
        if (index > lastIndex) {
            setIndex(0)
        }
    }, [index, people])

    return (
        <div className='review-wrap'>
            <div className='review-header'>
                <h1>Reviews</h1>
            </div>
            <div className='review-main'>
                {people.map((person, personIndex) => {
                    const { id, image, name, quote } = person;

                    let position = 'nextSlide';
                    if (personIndex === index) {
                        position = 'activeSlide'
                    }
                    if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
                        position = 'lastSlide'
                    }

                    return (
                        <article className={position} key={id}>
                            <img src={image} alt={name} className='review-img' />
                            <h4>{name}</h4>
                            <p className='review-text'>{quote}</p>
                            <FaQuoteRight className='reviewicon' />
                        </article>
                    );
                })}
                <button onClick={() => setIndex(index - 1)} className='review-left'>
                    <FiChevronLeft />
                </button>
                <button onClick={() => setIndex(index + 1)} className='review-right'>
                    <FiChevronRight />
                </button>
            </div>
        </div>
    )

}

export default Reviews