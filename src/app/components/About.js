"use client";
import React from "react";
import Image from "next/image";
import photo from "../../../public/photo.png";
import "./styles/About.scss";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="about" id="about-section">
      <Image src={photo} alt="Foto de Ronald" className="photo" />
      <motion.div
        className="informations"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
      >
        <span>Olá, me chamo</span>
        <h2 className="bold">Ronald Santos</h2>

        <p className="description">
          Natural de Paripiranga-BA, tenho 22 anos e sou um desenvolvedor
          Front-end que tem como foco a utilização das mais atuais stacks e
          tecnologias do mercado. Busco fonte de conhecimento em Javascript,
          React, React Native e Nextjs, além das stacks para CSS. Estou
          empolgado em poder contribuir para a evolução no desenvolvimento.
          Gosto muito de aprender e mais ainda colocar em prática, que tal ver
          alguns dos meus projetos?
        </p>
        <a href="#projects-section">
          <button>Ver Projetos</button>
        </a>
      </motion.div>
    </div>
  );
}

export default About;
