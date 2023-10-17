import React, { useEffect, useRef } from "react";
import classes from "@Styles/screens/Main/MainSlider.module.scss";

const SliderBgs: React.FC = () => {
    const bgSmokeRef = useRef<HTMLDivElement>(null);
    const bgFireRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const listenMouseMove = (e: MouseEvent) => {
        bgSmokeRef.current.style.transform =
          `translate(${-20 + e.clientX / 20}px, ${12 + e.clientY / 20}px)`;
        bgFireRef.current.style.transform =
          `translate(${-20 + e.clientX / 80}px, ${2 + e.clientY / 80}px)`;
      };

      // Animation works only if window.matchMedia > 400px
      if (!window.matchMedia('(max-width: 400px)').matches) {
        window.addEventListener("mousemove", listenMouseMove);
      }
      return () => removeEventListener("mousemove", listenMouseMove);
    }, [bgSmokeRef.current, bgFireRef.current]);



    return (
      <div className={classes.SliderBgs}>
        <div
          ref={bgSmokeRef}
          className={`${classes.BgItem} ${classes.BgSmoke}`}
        />
        <div
          ref={bgFireRef}
          className={`${classes.BgItem} ${classes.BgFire}`}
        />
      </div>
    );
  }
;

export default SliderBgs;