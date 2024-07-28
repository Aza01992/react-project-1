import React, { Suspense, lazy, Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { withRouter } from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './login/login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />
          <div className='app-wrapper-content'>
            <Suspense fallback={<Preloader />}>
              <Routes>
                <Route path="/dialogs" element={<DialogsContainer />} />
                <Route path="/profile/:userId?" element={<ProfileContainer />} />
                <Route path="/users" element={<UsersContainer />} />
                <Route path="/news" element={<News />} />
                <Route path="/music" element={<Music />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </BrowserRouter>
    );

  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))
  (App);
