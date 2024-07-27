import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import "./page-latter.scss";

import PhotoButton from "../../components/button-photo/button-photo";

const PageLatter = () => {
  // const [mobile, setMobile] = useState(false);
  // const [tablet, setTablet] = useState(false);
  const [isStickerActive, setIsStickerActive] = useState("inactive");
  const [notes, setNotes] = useState([]);
  const mobileMediaQuery = window.matchMedia("(max-width: 400px)");
  const tabletMediaQuery = window.matchMedia(
    "(min-width: 400px) and (max-width: 600px)"
  );

  // useEffect(() => {
  //   const handleMobileChange = () => {
  //     setMobile(mobileMediaQuery.matches);
  //   };

  //   const handleTabletChange = () => {
  //     setTablet(tabletMediaQuery.matches);
  //   };

  //   mobileMediaQuery.addEventListener("change", handleMobileChange);
  //   tabletMediaQuery.addEventListener("change", handleTabletChange);

  //   handleMobileChange();
  //   handleTabletChange();

  //   return () => {
  //     mobileMediaQuery.removeEventListener("change", handleMobileChange);
  //     tabletMediaQuery.removeEventListener("change", handleTabletChange);
  //   };
  // }, []);

  useEffect(() => {
    const notesElements = document.querySelectorAll(".js-note");
    setNotes(notesElements);
  }, []);

  const recizeNotes = () => {
    // notes.forEach((note) => {
    //   if (note.classList.contains("active")) {
    //     note.classList.remove("active");
    //     gsap.set(note, {
    //       height: "30%",
    //       clearProps: "all",
    //     });
    //   }
    // });
  };

  const notesReady = () => {
    gsap.to(".js-envelop-content", {
      height: "110%",
      duration: 0.5,
    });
    notes.forEach((note) => {
      note.addEventListener("click", function () {
        if (mobileMediaQuery.matches) {
          if (this.classList.contains("active")) {
            this.classList.remove("active");
            gsap.set(this, {
              height: "30%",
              clearProps: "all",
            });
          } else {
            notes.forEach((n) => {
              if (n.classList.contains("active")) {
                n.classList.remove("active");
                gsap.set(n, {
                  height: "30%",
                  clearProps: "all",
                });
              }
            });
            this.classList.add("active");
            gsap.set(this, {
              height:
                125 + 40 * Array.prototype.indexOf.call(notes, this) + "%",
            });
          }
        } else if (tabletMediaQuery.matches) {
          if (this.classList.contains("active")) {
            this.classList.remove("active");
            gsap.set(this, {
              height: "30%",
              clearProps: "all",
            });
          } else {
            notes.forEach((n) => {
              if (n.classList.contains("active")) {
                n.classList.remove("active");
                gsap.set(n, {
                  height: "30%",
                  clearProps: "all",
                });
              }
            });
            this.classList.add("active");
            gsap.set(this, {
              height: 80 + 21 * Array.prototype.indexOf.call(notes, this) + "%",
            });
          }
        } else {
          if (this.classList.contains("active")) {
            this.classList.remove("active");
            gsap.set(this, {
              height: "30%",
              clearProps: "all",
            });
          } else {
            notes.forEach((n) => {
              if (n.classList.contains("active")) {
                n.classList.remove("active");
                gsap.set(n, {
                  height: "30%",
                  clearProps: "all",
                });
              }
            });
            this.classList.add("active");
            gsap.set(this, {
              height: 70 + 20 * Array.prototype.indexOf.call(notes, this) + "%",
            });
          }
        }
      });
    });
  };

  const setUpPaper = () => {
    const arr = [0, 0, 100, 0, 50, 61];
    gsap.set(".js-up-paper", {
      bottom: "97%",
      rotation: 180,
      zIndex: 200,
      clipPath:
        "polygon(" +
        arr[0] +
        "%" +
        arr[1] +
        "%," +
        arr[2] +
        "%" +
        arr[3] +
        "%," +
        arr[4] +
        "%" +
        arr[5] +
        "%)",
      onComplete: notesReady,
    });
    setIsStickerActive("open");
  };

  // Função que inicia a transição do papel para cima.
  const envelopTransition = () => {
    if (isStickerActive !== "active") {
      return;
    }

    gsap.to(".js-up-paper", {
      bottom: "1%",
      duration: 0.25,
      onComplete: setUpPaper,
    });
    document
      .querySelector(".js-up-paper")
      .removeEventListener("click", envelopTransition);
    document.querySelector(".js-up-paper").classList.remove("cursor");
  };

  // Funcao que corta a faixa
  const sticker = () => {
    gsap.set(".js-sticker", { width: "20%", left: "-80%" });
    document.body.classList.remove("scissors");
    document.querySelector(".js-sticker").removeEventListener("click", sticker);
    document
      .querySelector(".js-up-paper")
      .addEventListener("click", envelopTransition);
    document.querySelector(".js-up-paper").classList.add("cursor");

    // Atualiza o estado para true
    setIsStickerActive("active");
  };

  useEffect(() => {
    // Verifica se o estado isStickerActive é true
    if (isStickerActive === "active") {
      // Chama a função setUpPaper apenas se o estado for true
      setUpPaper();
    }
  }, [isStickerActive]);

  return (
    <div className="container-latter">
      <div className="scissors">
        <div className="envelop">
          <div className="envelop__front-paper"></div>
          <div className="envelop__back-paper"></div>
          <div
            className="envelop__up-paper js-up-paper"
            onClick={envelopTransition}
          ></div>
          <div className="envelop__sticker js-sticker" onClick={sticker}></div>
          <div className="envelop__false-sticker"></div>
          <div className="envelop__content js-envelop-content">
            <div className="love-notes">
              <div className="note js-note" onClick={notesReady}>
                <p>
                  Oii meu amor, aqui estamos nós, completando mais um
                  aniversário juntos, é sempre uma alegria poder acordar e saber
                  que tenho você ao meu lado e sentir que isso será para sempre
                  é magnífico
                </p>
              </div>
              <div className="note js-note" onClick={notesReady}>
                <p>Desejo a você um ótimo feliz aniversário.</p>
              </div>
              <div className="note js-note" onClick={notesReady}>
                <p>Separei algumas fotos. Espero que goste </p>
                <p>Clique na figura. kkk </p>
                <div className="photo-container">
                  <PhotoButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLatter;
