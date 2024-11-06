import Image from 'next/image';
import Investor from "@public/investor.svg";
import { Card } from 'react-bootstrap';
const left_image=()=>{
    return(
        <div className="flex justify-center items-center py-10 px-6 bg-gray-50 max-w-[95%] md:max-w-[85%] mx-auto mt-16 rounded-[25px]  ">
        <Card className="flex flex-col-reverse md:flex-row-reverse items-start p-6 w-full items-center">
          {/* Left Side */}
          <div className="flex-1 md:pr-6 mb-6 md:mb-0 md:ml-[4%]">
            <h2 className="text-4xl font-semibold text-gray-800 mb-2">Here for domain investors too</h2>
            <p className="text-gray-600 mb-4">
            As a domain investor, you have particular needs. We get it! So we built a special platform just for domain investors. With its clear interface, bulk domain name uploading and editing features, selling is easier than ever.
            </p>
         
          
            <div className="mt-14">
            <a href="#" className="text-blue-600 font-medium hover:underline  border border-blue-600 py-4 px-8 rounded-[15px]">Discover our platform</a>
            </div>
          </div>
      
          {/* Right Side */}
          <div className="flex-1 w-full ">
            <Image
              src={Investor}
              alt="robot"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </Card>
      </div>
    )
}
export default left_image