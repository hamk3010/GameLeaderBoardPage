import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';


import {Players, calculatePlayerPositions} from './../imports/api/players.js';
import App from './../imports/ui/App';

// calls the function when the DOM is ready
 Meteor.startup( () => {
     Tracker.autorun(() => {
         let players=  Players.find({}, {sort:{score: -1} } ).fetch();
         let positionedPlayer = calculatePlayerPositions(players);
         let title = 'Ludo Score Keeper';
        ReactDOM.render(<App title={title} players={positionedPlayer} />, document.getElementById('app') );
     });

 });
