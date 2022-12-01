import React from "react";
import { HeaderSecondary } from '../components/HeaderSecondary';
import { Footer } from '../components/Footer';

import "../styles/NotFound.css";

export function NotFound() {

    return (
        <><HeaderSecondary />
        <section id="not-found">
        <h1 >404.</h1>
        <p>Sorry, page not Found....</p>
        </section><Footer /></>
    );
}