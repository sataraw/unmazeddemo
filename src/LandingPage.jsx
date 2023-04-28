import React from "react";
import { Link } from "react-router-dom";
export default function HomePage() {
return (
  <>
   <h1>Hey from HomePage</h1>
    <p>This is your awesome HomePage subtitle</p>
    <p>
        <Link to="/Navigation">Your desired Link</Link>
    </p>
  </>
);
}
