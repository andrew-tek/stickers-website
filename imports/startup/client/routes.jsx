import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';

import MainLayout from '/imports/ui/layouts/MainLayout.jsx';
import Homepage from '/imports/ui/pages/Homepage.jsx';
import SecondPage from '/imports/ui/pages/SecondPage.jsx';
import ThirdPage from '/imports/ui/pages/ThirdPage.jsx';


 export default () => (
   <Router history={hashHistory}>
     <Route component={MainLayout}>
       <Route path="/" component={Homepage} />
       <Route path="/Spongebob" component={SecondPage} />
       <Route path="/AdventureTime" component={ThirdPage} />
     </Route>
   </Router>
 );
