import React, { Component } from 'react'
import { Navigate, Routes, Route } from 'react-router-dom';

import LogInPage from '../pages/LogInPage'
import CartesPage from '../pages/CartesPage'
import Home from '../pages/HomePage';
import SignUpPage from '../pages/SignUpPage';

export default class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {
          cartes: [],
        }
      }


    render() {

        return (
            <Routes>
                <Route path="/logInPortal" element={<LogInPage />} />
                <Route path="/SignUpPortal" element={<SignUpPage/>}/>
                <Route path="/home" element={<Home/>} />
                <Route
                    path="*"
                    element={<Navigate to="/logInPortal" />}
                />
            </Routes>
        )
    }
}