import React from "react";
import { Link } from "react-router-dom";
import "./page-photos.scss";
const PagePhotos = () => {
  return (
    <div className="container-photo">
      <div className="wrapper">
        <div className="item">
          <div className="polaroid">
            <img src="https://lh3.googleusercontent.com/pw/AP1GczPnQ5UKKpOGJVQQAjIA1PsoJ0Nlv5uoBd6Sr3U0JRqQEvvvDKtRd1S87VYCON8XJdlEBnf5Wlr3H-eIzMqn0dD7fIgDmx2YJxSH0GC1bwkPUHIM-hhS7r6_IL43DWl9M6JlYYI44mZ07yfdD_P-PvEXCw=w1332-h600-s-no-gm?authuser=0" />
            <div className="caption">Estilosa</div>
          </div>
        </div>
        <div className="item">
          <div className="polaroid">
            <img src="https://lh3.googleusercontent.com/pw/AP1GczONJ2OsJKLD8M5fTq1ggXDH_i-9q7ehDa1djbKGNWGwUz7tz9u6X0yxr6R3J9vtc_88KZzF0SCdm1jpbUtO_OPa6dwDlCj67ifSAYhmkPHgfEdY_RSlPcf7NqLz7domC2dtKsEVEcEXgFSMZhSvqinNIw=w1332-h600-s-no-gm?authuser=0" />
            <div className="caption">Meiga</div>
          </div>
        </div>
        <div className="item">
          <div className="polaroid">
            <img src="https://lh3.googleusercontent.com/pw/AP1GczNNCxinpdnAbuPRu5rTpAFt4cngcn5RizFzR9KyjQQP-NDIIlZLSrH7fIAJ6ZoMyV-J_wXrRYwltpA-48Ym1JGnA61xeoWY7JrMecqpdxFgpctYHctJ4Py04ciWlr2enHvH7Dyh4cfXa82SnGwEJYUYlA=w1332-h600-s-no-gm?authuser=0" />
            <div className="caption">Linda</div>
          </div>
        </div>
        <div className="item">
          <div className="polaroid">
            <img src="https://lh3.googleusercontent.com/pw/AP1GczNJU8OT2UlTVAqwOnpTQzNbhHcE-vYeImkYcWI6w6P1hiKZBKCD6oy4LkT4M4nTS8o8i8HZuntL8shYpY55-ZswHYtDbyM6idfaYL9JJOcqU06BFeLSfeAWYl1f1ze7NL9A7E1btxeOctMdn3ZW1_WLxg=w1332-h600-s-no-gm?authuser=0" />
            {/* <div className="caption">Spain</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagePhotos;
