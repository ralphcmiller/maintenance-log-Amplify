import LogTable from "@/components/LogTable";
import DefaultLayout from "@/components/layouts/DefaultLayout";

export default function Home() {
  return (
    <DefaultLayout>
      <div style={{ display: "" }}>
        <LogTable />
      </div>
    </DefaultLayout>
  );
}
