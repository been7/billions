import { API_URL } from "@/app/(home)/page";
import styles from "../styles/billion-info.module.css";

interface IFinancialAsset {
  ticker?: string;
  numberOfShares?: number;
  exerciseOptionPrice?: number;
}

export async function getBillion(id: string) {
  const response = await fetch(`${API_URL}/person/${id}`);
  return response.json();
}

export default async function BillionInfo({ id }: { id: string }) {
  const billion = await getBillion(id);
  // console.log(billion);

  return (
    <>
      <div className={styles.container}>
        <img
          src={billion.squareImage}
          className={styles.squareImage}
          alt={billion.name}
        />
        <div>
          <p className={styles.name}>{billion.name}</p>
          <p className={styles.country}>COUNTRY : {billion.country}</p>
          <p className={styles.netWorth}>
            NETWORTH : {Math.round(Math.floor(billion.netWorth) / 1000)} Billion{" "}
          </p>
          <p className={styles.industries}>INDUSTRIES : {billion.industries}</p>
          <p className={styles.bio}>{billion.bio}</p>
        </div>
      </div>{" "}
      <div>
        <p className={styles.financialName}>FINANCIAL ASSETS</p>
        <div className={styles.assetContainer}>
          {billion.financialAssets.map((asset: IFinancialAsset) => (
            <div className={styles.financialAsset} key={billion.id}>
              <p className={styles.financialAssetItem}>{asset.ticker}</p>
              <p className={styles.financialAssetItem}>
                {asset.numberOfShares}
              </p>
              <p className={styles.financialAssetItem}>
                {asset.exerciseOptionPrice}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
