import React from "react";
import Loader from "react-loader-spinner";

export default function Loading() {
    return (
        <Loader
            type="Puff"
            width="50px"
            height="30px"
            margin="auto"
            color="#F4DDC8"
        />
    );
}