import { API_URL } from "@/app/(home)/page";
import BillionInfo from "@/components/billion-info";
import { Suspense } from "react";

interface IParams {
  params: { id: string };
}

async function getBillion(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function BillionDetailPage({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<h1>Loading billion info</h1>}>
        <BillionInfo id={id} />
      </Suspense>
    </div>
  );
}
