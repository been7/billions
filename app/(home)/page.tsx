import Billion, { IBillionsProps } from "@/components/billions";
import styles from "../../styles/billions.module.css";

export const API_URL = "https://billions-api.nomadcoders.workers.dev/";

async function getBillions() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function Home() {
  const billions = await getBillions();
  return (
    <div className={styles.container}>
      {billions.map((billion: IBillionsProps) => (
        <Billion
          key={billion.id}
          id={billion.id}
          name={billion.name}
          squareImage={billion.squareImage}
          netWorth={Math.round(Math.floor(billion.netWorth) / 1000)}
          industries={billion.industries}
        />
      ))}
    </div>
  );
}
