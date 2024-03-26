
import { CardBody, CardContainer, CardItem } from "@/components/global/3d-card";
import Navbar from "@/components/global/navbar";
import { CheckIcon } from "lucide-react";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <main className="">
        <Navbar />
           <div className=" flex flex-col items-center justify-center font-bold  p-1  sm:mt-32 mt-28 text-center">
             <h1 className="sm:text-7xl text-5xl">  Automate your buisness  <br className=""/> with FUZZIE</h1>
             <p className="font-normal sm:text-xl text-base max-w-3xl p-2">No more waiting for developers to bring order to your apps. Use Zapier to tame the chaos with automation and accomplish more with less work.</p>
                <div className="flex gap-x-4 mt-4">
                  <Image src="/slack.png" alt="/" className="animate-bounce"  width={40} height={40}/>
                  <Image src="/googleDrive.png" alt="/"  className="animate-bounce"  width={40} height={40}/>
                  <Image src="/discord.png" alt="/"   className="animate-bounce"  width={40} height={40}/>
                  <Image src="/notion.png" alt="/"  className="animate-bounce"  width={40} height={40}/>
                </div>
            </div> 
         <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 mt-10">
          <CardContainer className="inter-var p-2">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                Hobby
                <h2 className="text-6xl ">$0</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Get a glimpse of what our software is capable of. Just a heads
                up {"you'll"} never leave us after this!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />3 Free automations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    100 tasks per month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Two-step Actions
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var p-2 ">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-[#E2CBFF] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                Pro Plan
                <h2 className="text-6xl ">$29</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Get a glimpse of what our software is capable of. Just a heads
                up {"you'll"} never leave us after this!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />3 Free automations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    1000 tasks per month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Three-step Actions
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var p-2">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                Unlimited
                <h2 className="text-6xl ">$99</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Get a glimpse of what our software is capable of. Just a heads
                up {"you'll"} never leave us after this!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />3 Free automations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    1lakh+ tasks per month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Youwant-step Actions
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </main>
    </>
  );
}
