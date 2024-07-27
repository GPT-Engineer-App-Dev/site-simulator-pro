import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-[#1e1e1e] text-white">
      <div className="flex-1 flex flex-col justify-center px-8">
        <h1 className="text-6xl font-bold mb-4">NeetCode</h1>
        <p className="text-2xl mb-8">A better way to prepare for coding interviews.</p>
        <Button className="w-32 bg-[#4a72ff] hover:bg-[#4a72ff]/80 text-white">Get Pro</Button>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <RoadmapDiagram />
      </div>
    </div>
  );
};

const RoadmapDiagram = () => {
  return (
    <div className="relative w-[500px] h-[400px]">
      {/* Add diagram nodes and connections here */}
      <DiagramNode text="Arrays & Hashing" className="top-0 left-1/2 transform -translate-x-1/2" />
      <DiagramNode text="Two Pointers" className="top-1/4 left-1/4" />
      <DiagramNode text="Stack" className="top-1/4 right-1/4" />
      <DiagramNode text="Binary Search" className="top-1/2 right-1/4" />
      <DiagramNode text="Sliding Window" className="top-1/2 left-1/4" />
      <DiagramNode text="Linked List" className="top-1/2 left-1/2 transform -translate-x-1/2" />
      <DiagramNode text="Trees" className="top-3/4 left-1/2 transform -translate-x-1/2" />
      <DiagramNode text="Tries" className="bottom-0 left-1/4" />
      <DiagramNode text="Heap / Priority Queue" className="bottom-0 left-1/2 transform -translate-x-1/2" />
      <DiagramNode text="Backtracking" className="bottom-0 right-1/4" />
      
      {/* Add connection lines here */}
    </div>
  );
};

const DiagramNode = ({ text, className }) => {
  return (
    <div className={`absolute bg-[#4a72ff] text-white text-sm py-1 px-3 rounded-full ${className}`}>
      {text}
    </div>
  );
};

export default Index;
