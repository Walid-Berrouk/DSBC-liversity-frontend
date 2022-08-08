import React, { Component } from 'react'
import { Navigate, Routes, Route } from 'react-router-dom';

import LogInPage from '../pages/LogInPage'
import CartesPage from '../pages/CartesPage'
import Home from '../pages/HomePage';

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
                <Route path="/home" element={<Home/>} />
                <Route
                    path="*"
                    element={<Navigate to="/logInPortal" />}
                />
            </Routes>
        )
    }
}