import StudentSearchInput from "@/components/StudentSearchInput";
import StudentTable from "@/components/StudentTable";

export default function ListPage() {
  return (
    <div className="flex flex-col gap-5 p-5">
      <StudentSearchInput />
      <StudentTable />
    </div>
  );
}
