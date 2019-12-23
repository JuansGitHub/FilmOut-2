import React, { Component } from 'react';
import Film from './FilmComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Events from './EventsComponent';
import Movie from './MovieComponent';
import Night from './NightComponent';
import FcampsiteInfo from './FcampsiteInfoComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CAMPSITES } from '../shared/campsites';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';
import { MOVIESITES } from '../shared/moviesites';
import { MEMBERSITES } from '../shared/membersites';
import { EVENTSITES } from '../shared/eventsites';
import { FCAMPSITES } from '../shared/fcampsites';
import { FCOMMENTS } from '../shared/fcomments';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            comments: COMMENTS,
            partners: PARTNERS,
            promotions: PROMOTIONS,
            moviesites: MOVIESITES,
            membersites: MEMBERSITES,
            eventsites: EVENTSITES,
            fcampsites: FCAMPSITES,
            fcomments: FCOMMENTS,

        };
    }

    render() {

        const HomePage = () => {
            return (
                <Home
                    campsite={this.state.campsites.filter(campsite => campsite.featured)[0]}
                    promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                    partner={this.state.partners.filter(partner => partner.featured)[0]}
                    moviesites={this.state.moviesites.filter(moviesites => moviesites.featured)[0]}
                    membersites={this.state.membersites.filter(membersites => membersites.featured)[0]}
                    eventsites={this.state.eventsites.filter(eventsites => eventsites.featured)[0]}
                />
            );
        }

        const CampsiteWithId = ({match}) => {
            return (
                <CampsiteInfo 
                    campsite={this.state.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]}
                    comments={this.state.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)}
                />
            );
        }    

        const FcampsiteWithId = ({match}) => {
            return (
                <FcampsiteInfo 
                    fcampsite={this.state.fcampsites.filter(fcampsite => fcampsite.id === +match.params.fcampsiteId)[0]}
                    fcomments={this.state.fcomments.filter(fcomment => fcomment.fcampsiteId === +match.params.fcampsiteId)}
                />
            );
        } 


        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/film' render={() => <Film campsites={this.state.campsites} />} />
                    <Route exact path='/night' render={() => <Night fcampsites={this.state.fcampsites} />} />
                    <Route exact path='/events' render={() => <Events partners={this.state.partners} /> } /> 
                    <Route path='/events/:campsiteId' partners={CampsiteWithId} />
                    <Route path='/film/:campsiteId' component={CampsiteWithId} />
                    <Route path='/night/:fcampsiteId' component={FcampsiteWithId} />
                    <Route exact path='/contactus' component={Contact} />
                    <Route exact path='/movie' render={() => <Movie partners={this.state.partners} /> } /> 
                    <Route path='/movie/:campsiteId' partners={CampsiteWithId} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;