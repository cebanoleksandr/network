import React from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Friends from './components/Friends/Friends';
import UsersContainer from './components/Users/UsersContainer';
import Settings from './components/Settings/Settings';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <>
       <div className='app-wrapper'>
         <HeaderContainer />
         <Navbar />
         <div className='app-wrapper__content'>
           <Routes>
               <Route path="/profile/:userId?" element={<ProfileContainer />} />
               <Route path="/dialogs" element={<DialogsContainer />} />
               <Route path="/news" element={<News/>} />
               <Route path="/music" element={<Music/>} />
               <Route path="/friends" element={<Friends/>} />
               <Route path="/users" element={<UsersContainer />} />
               <Route path="/settings" element={<Settings/>} />
               <Route path="/login" element={<Login/>} />
           </Routes>
         </div>
       </div>
       <Footer />
      </>
     );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

export default connect(mapStateToProps, {initializeApp})(App);
