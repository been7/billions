import Billion from "@/components/billions";
import styles from "../../styles/billions.module.css";
import { getBillions } from "../../utils/api";

export default async function Home() {
  const billions = await getBillions();
  return (
    <div className={styles.container}>
      {billions.map((billion: any) => (
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
