import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Movie = props => {
  console.log(props);
  return (
    <div className="save-wrapper">
      <div className="save-button">Save</div>
    </div>
  );
};

export default Movie;
