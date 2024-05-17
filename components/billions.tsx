"use client";

import { useRouter } from "next/navigation";
import styles from "../styles/billions.module.css";

interface IBillionsProps {
  id: string;
  name: string;
  squareImage: string;
  netWorth: number;
  industries: string[];
}

export default function Billion({
  id,
  name,
  squareImage,
  netWorth,
  industries,
}: IBillionsProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/billions/${id}`);
  };
  return (
    <div className={styles.billion} onClick={onClick}>
      <img src={squareImage} alt={name} />
      <h2>{name}</h2>
      <p>
        {netWorth.toLocaleString()} Billion / {industries}
      </p>
    </div>
  );
}
