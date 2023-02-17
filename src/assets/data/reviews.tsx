import { ReviewsT } from "../../types/reviewsTypes";
import { v4 as uuidv4 } from "uuid";


const peopleReviews: ReviewsT[] = [
    {
        id: uuidv4(),
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
        name: 'maria ferguson',

        quote:
            'Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.',
    },
    {
        id: uuidv4(),
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
        name: 'john doe',

        quote:
            'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.',
    },
    {
        id: uuidv4(),
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg',
        name: 'peter smith',

        quote:
            'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.',
    },
    {
        id: uuidv4(),
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        name: 'susan andersen',

        quote:
            'Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ',
    },
];

export default peopleReviews;