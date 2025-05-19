import { Button } from "@/components/ui/button";
import { BotMessageSquareIcon, PhoneOffIcon, Repeat } from "lucide-react";

export default function InterviewPage() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-10 max-w-7xl mx-auto">
      <div className="flex justify-center gap-10 w-full">
        <div className="w-full max-w-xl">
          <div className="bg-gradient-to-tr from-[#0C0B16] from-10% to-[#181537] to-100% border-4 border-[#CAC5FE] py-24 rounded-2xl">
            <div className="flex flex-col justify-center items-center gap-4 relative">
              <div className="bg-gradient-to-bl from-[#FFF] to-[#CAC5FE] rounded-full p-6">
                <BotMessageSquareIcon className="w-20 h-20 text-black" />
              </div>
              <span className="text-2xl font-bold">Bot</span>
            </div>
          </div>
        </div>
        <div className="w-full max-w-xl">
          <div className="bg-gradient-to-tr from-[#0C0B16] from-10% to-[#181537] to-100% border-2 border-gray-500 py-24 rounded-2xl">
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="bg-gradient-to-bl from-[#FFF] to-[#CAC5FE] rounded-full p-6">
                <BotMessageSquareIcon className="w-20 h-20 text-black" />
              </div>
              <span className="text-2xl font-bold">Bot</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#1A1C20] from-0% to-[#08090D] to-100% max-w-6xl w-full p-4 rounded-2xl">
        <p className="text-white text-lg font-reguler text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
        <button className="bg-gradient-to-tr from-[#0C0B16] from-10% to-[#181537] to-100% border-2 border-gray-500 p-2 rounded-2xl">
          <Repeat className="w-5 h-5 text-white mx-auto" />
          <span className="text-white text-sm font-reguler">Retry</span>
        </button>
        <Button className="bg-red-800 border-2 border-gray-500 p-2 rounded-2xl">
          <PhoneOffIcon className="w-5 h-5 text-white mx-auto" />
          <span className="text-white text-sm font-reguler">End Call</span>
        </Button>
      </div>
    </div>
  );
}
