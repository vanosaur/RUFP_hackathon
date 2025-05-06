import { EPSHeader } from "@/components/eps-header";
import { LeveragePoints } from "@/components/leverage-points";
import { EPSFramework } from "@/components/eps-framework";


export default function EPSPage() {
  return (
    <div className="py-8 justify-center items-center align-center m-10">
      <EPSHeader />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 justify-center items-center align-center">
        <LeveragePoints />
        <EPSFramework />
      </div>
    </div>
  );
}