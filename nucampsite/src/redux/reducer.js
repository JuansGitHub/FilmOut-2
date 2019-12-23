import { CAMPSITES } from '../shared/campsites';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';
import { MOVIESITES } from '../shared/moviesites';
import { MEMBERSITES } from '../shared/membersites';
import { EVENTSITES } from '../shared/eventsites';


export const initialState = {
    campsites: CAMPSITES,
    comments: COMMENTS,
    partners: PARTNERS,
    promotions: PROMOTION,
    moviesites: MOVIESITES,
    membersites: MEMBERSITES,
    eventsites: EVENTSITES,
};

export const Reducer = (state = initialState, action) => {
    return state;
};