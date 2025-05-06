import { SolutionsHeader } from "@/components/solutions-header";
import { SolutionsGrid } from "@/components/solutions-grid";
import { SuccessStories } from "@/components/success-stories";

export default function SolutionsPage() {
  return (
    <div className="py-8 justify-center items-center align-center m-10">
      <SolutionsHeader />
      
      <div className="mt-8">
        <SolutionsGrid />
      </div>
      
      <div className="mt-12">
        <SuccessStories />
      </div>
    </div>
  );
}