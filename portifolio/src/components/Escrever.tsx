"use client";
import React, { useEffect, useState } from "react";
import styles from "../components/escrever.module.css";

interface MaquinaDeEscreverProps {
  esconderCursor: boolean;
  text: string;
  delay?: number;
}

export function MaquinaDeEscrever(props: MaquinaDeEscreverProps) {
  const [text, setText] = useState("");
  const [mostrarCursor, setMostrarCursor] = useState(false);

  const escreverNaTela = (text: string, i = 0) => {
    if (i < text.length) {
      setMostrarCursor(true);
      setText(text.slice(0, i + 1));
      setTimeout(() => escreverNaTela(text, i + 1), 100);
    } else if (i === text.length && props.esconderCursor) {
      setMostrarCursor(false);
    }
  };

  useEffect(() => {
    const iniciarAnimacao = () => escreverNaTela(props.text);
    const timeoutId = setTimeout(iniciarAnimacao, props.delay ?? 200);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      {text}
      {mostrarCursor && (
        <span className={styles["animate-animar-cursor"]}>|</span>
      )}
    </div>
  );
}
