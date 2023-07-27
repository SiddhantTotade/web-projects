"use client";
import Image from "next/image";
import mobile from "./images/Mobile.jpg";
import "./styles/magnifier.css";
import { useRef, useState } from "react";

export default function Home() {
  const lens = useRef(null);
  const product_img = useRef(null);
  const magnified_img = useRef(null);

  const moveLens = (e) => {
    let x, y, cx, cy;
    const product_img_rect = product_img.current.getBoundingClientRect();

    x = e.pageX - product_img_rect.left - lens.current.offsetWidth / 2;
    y = e.pageY - product_img_rect.top - lens.current.offsetHeight / 2;

    let max_xpos = product_img_rect.width - lens.current.offsetWidth;
    let max_ypos = product_img_rect.height - lens.current.offsetHeight;

    if (x > max_xpos) x = max_xpos;
    if (x < 0) x = 0;

    if (y > max_ypos) x = max_ypos;
    if (y < 0) y = 0;

    lens.current.style.cssText = `top: ${y}px; left: ${x}px;`;

    cx = magnified_img.current.offsetWidth / lens.current.offsetWidth;
    cy = magnified_img.current.offsetHeight / lens.current.offsetHeight;

    magnified_img.current.style.cssText = `background:url('${
      product_img.current.src
    }') -${x * cx}px -${y * cy}px / ${product_img_rect.width * cx}px ${
      product_img_rect.height * cy
    }px no-repeat`;

    lens.current.classList.add("active");
    magnified_img.current.classList.add("active");
  };

  const leaveLens = (e) => {
    lens.current.classList.remove("active");
    magnified_img.current.classList.remove("active");
  };

  return (
    <div className="flex-center border-2 border-red-400">
      <div className="card flex-center">
        <section onMouseMove={(e) => moveLens(e)} className="product-img">
          <Image
            ref={product_img}
            onMouseMove={(e) => moveLens(e)}
            priority={1}
            width={300}
            height="auto"
            src={mobile}
            alt="mobile"
          />
          <div
            ref={lens}
            onMouseOut={(e) => leaveLens(e)}
            onMouseMove={(e) => moveLens(e)}
            className="magnifier-lens"
          ></div>
        </section>
        <section className="product-details">
          <div ref={magnified_img} className="magnified-img"></div>
        </section>
      </div>
    </div>
  );
}
