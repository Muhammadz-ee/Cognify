"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Image from "next/image";

import { Apple, Play } from "lucide-react";

export function Features() {
  return (
    <section id="features" className="py-10 md:py-16 bg-black overflow-hidden">
      <Container>
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2
            className="text-3xl md:text-5xl font-bold mb-0 md:mb-4 text-white inline-block drop-shadow-none sm:[text-shadow:-1px_0_0_#00ffff,1px_0_0_#ff00ff]"
            data-text="Turn Any Video Into a Masterclass"
          >
            Turn Any Video Into a Masterclass 
          </h2>
            <p className="text-white text-[clamp(14px,1.2vw,16px)] sm:text-[clamp(16px,1.3vw,18px)] lg:text-[clamp(18px,1.5vw,22px)] max-w-[80%] md:max-w-[75%] md:max-w-2xl mx-auto mt-2 mb-8 leading-[1.05] w-full mt-4 sm:mt-6">
            Summarize key points, take organized notes, and get AI-powered{" "}
            answers—so you don't just watch, you truly learn.
            </p>

          <div className="flex justify-center gap-4 mt-2 mb-22 sm:mb-22 md:mb-32 lg:mb-22">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-row justify-center gap-2 sm:gap-4 w-full px-2"
            >
              {/* App Store */}
              <Button
                size="lg"
                asChild
                className="h-auto py-2 sm:py-0 sm:h-18 w-auto px-2 sm:px-4 
                rounded-xl sm:rounded-2xl flex items-center justify-center sm:justify-start 
                gap-2 sm:gap-4 transition-all hover:scale-105 active:scale-95 
                bg-[#5b4a7a] hover:bg-[#4a3a67] text-white cursor-pointer 
                focus:outline-none focus:ring-2 focus:ring-[#6B5A90]"
              >
                <a
                  href="https://apps.apple.com/us/app/cognify-smarter-listening/id6744607398"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download on the App Store"
                >
                  <Image
                    src="/images/app-store.svg"
                    alt="App Store"
                    width={42}
                    height={42}
                    className="w-4 h-4 sm:w-8 sm:h-10 object-contain"
                  />
                  <div className="text-left">
                    <div className="text-[7px] sm:text-[14px] font-bold uppercase tracking-wider opacity-90">
                      Download for free
                    </div>
                    <div className="text-[10px] xs:text-[12px] sm:text-[16px] md:text-[20px] lg:text-[22px] font-bold leading-none mt-0.5 sm:mt-0">
                      App Store
                    </div>
                  </div>
                </a>
              </Button>

              {/* Google Play */}
              <Button
                size="lg"
                asChild
                className="h-auto py-2 sm:py-0 sm:h-18 w-auto px-2 sm:px-4 
                rounded-xl sm:rounded-2xl flex items-center justify-center sm:justify-start 
                gap-2 sm:gap-4 transition-all hover:scale-105 active:scale-95 
                bg-[#5b4a7a] hover:bg-[#4a3a67] text-white cursor-pointer 
                focus:outline-none focus:ring-2 focus:ring-[#6B5A90]"
              >
                <a
                  href="https://play.google.com/store/apps/details?id=com.cognifyai.mobile"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get it on Google Play"
                >
                  <Image
                    src="/images/play-store.svg"
                    alt="Google Play"
                    width={42}
                    height={42}
                    className="w-4 h-4 sm:w-8 sm:h-10 object-contain"
                  />
                  <div className="text-left">
                    <div className="text-[7px] sm:text-[14px] font-bold uppercase tracking-wider opacity-90">
                      Download for free
                    </div>
                    <div className="text-[10px] xs:text-[12px] sm:text-[16px] md:text-[20px] lg:text-[22px] font-bold leading-none mt-0.5 sm:mt-0">
                      Google Play
                    </div>
                  </div>
                </a>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Feature 1:  Key Moments™ */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col-reverse lg:flex-row items-center gap-2 sm:gap-8 lg:gap-12 mb-12 sm:mb-8 -mt-2 lg:-mt-4"
        >
          <div className="w-full lg:flex-1 relative flex justify-center lg:z-30">
            <div className="relative w-[75%] sm:w-[85%] md:w-[85%] lg:w-full max-w-full mx-auto overflow-hidden">
              <Image
                src="/images/feature-image-1.webp"
                alt="Feature 1"
                width={1080}
                height={720}
                sizes="(max-width:640px) 100vw, 45vw"
                className="w-full h-auto block scale-100 sm:scale-100"
              />
              <div className="absolute left-0 right-0 bottom-2 sm:bottom-10 h-[90%] bg-gradient-to-t from-black/95 to-transparent pointer-events-none" />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:flex-1 text-left px-4 lg:px-0 flex flex-col items-start sm:-mt-2 md:-mt-10 lg:mt-0 relative z-10"
          >
            <Button
              size="lg"
              className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[20px] font-bold text-white mb-3 md:mb-5 border border-white h-auto py-1.5 md:h-10 lg:h-12 px-3 md:px-5 lg:px-6 rounded-full inline-flex w-[max-content] items-center gap-1.5 sm:gap-3 lg:gap-4"
              aria-label="Key Moments™"
            >
              Key Moments™
            </Button>
            <h2
              className="text-[24px] sm:text-[32px] md:text-[36px] lg:text-[56px] font-normal text-white mb-2 sm:mb-4 lg:mb-6 leading-[1.1] inline-block drop-shadow-none sm:[text-shadow:-1px_0_0_#00ffff,1px_0_0_#ff00ff]"
              data-text="Summarize. Skip the Noise. Learn What Counts."
            >
              Distill in Minutes
            </h2>
            <p className="text-gray-100 text-[14px] sm:text-[16px] md:text-[16px] lg:text-[clamp(20px,1.5vw,26px)] leading-[1.4] whitespace-normal">
              From a 3-minute brief to a deep dive, customize your highlight length to match your schedule. Get exactly the context you need, nothing more.
            </p>
          </motion.div>
        </motion.div>

        {/* Feature 2: Insight Modes */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col-reverse lg:flex-row-reverse items-center gap-2 sm:gap-8 lg:gap-12 mb-12 sm:mb-8 mt-8 lg:-mt-52"
        >
          <div className="w-full lg:flex-1 relative flex justify-center lg:z-20">
            <div className="relative w-[75%] sm:w-[85%] md:w-[85%] lg:w-full max-w-full mx-auto overflow-hidden">
              <Image
                src="/images/feature-image-2.webp"
                alt="Feature 2"
                width={1080}
                height={720}
                sizes="(max-width:640px) 100vw, 45vw"
                className="w-full h-auto block scale-100 sm:scale-100"
              />
              <div className="absolute left-0 right-0 bottom-2 sm:bottom-10 h-[90%] bg-gradient-to-t from-black/95 to-transparent pointer-events-none" />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:flex-1 text-left px-4 lg:px-0 flex flex-col items-start sm:-mt-2 md:-mt-10 lg:mt-0 relative z-10"
          >
            <Button
              size="lg"
              className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[20px] font-bold text-white mb-3 md:mb-5 border border-white h-auto py-1.5 md:h-10 lg:h-12 px-3 md:px-5 lg:px-6 rounded-full inline-flex w-[max-content] items-center gap-1.5 sm:gap-3 lg:gap-4"
              aria-label="Insight Modes™"
            >
              Insight Modes™
            </Button>
            <h2
              className="text-[24px] sm:text-[32px] md:text-[36px] lg:text-[56px] font-normal text-white mb-2 sm:mb-4 lg:mb-6 leading-[1.1] inline-block drop-shadow-none sm:[text-shadow:-1px_0_0_#00ffff,1px_0_0_#ff00ff]"
              data-text="Summarize Your Way."
            >
              Summarize Your Way
            </h2>
            <p className="text-gray-100 text-[14px] sm:text-[16px] md:text-[16px] lg:text-[clamp(20px,1.5vw,26px)] leading-[1.4] whitespace-normal">
              Instant takeaways and structured insights—so you save time and actually remember.
            </p>
          </motion.div>
        </motion.div>

        {/* Feature 3: Annotations */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col-reverse lg:flex-row items-center gap-2 sm:gap-8 lg:gap-12 mb-12 sm:mb-8 mt-8 lg:-mt-36"
        >
          <div className="w-full lg:flex-1 relative flex justify-center lg:z-10">
            <div className="relative w-[75%] sm:w-[85%] md:w-[85%] lg:w-full max-w-full mx-auto overflow-hidden">
              <Image
                src="/images/feature-image-3.webp"
                alt="Feature 3"
                width={1040}
                height={740}
                className="w-full h-auto block scale-100 sm:scale-100"
              />
              <div className="absolute left-0 right-0 bottom-2 sm:bottom-10 h-[90%] bg-gradient-to-t from-black/95 to-transparent pointer-events-none" />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:flex-1 text-left px-4 lg:px-0 flex flex-col items-start sm:-mt-2 md:-mt-10 lg:mt-0 relative z-10"
          >
            <Button
              size="lg"
              className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[20px] font-bold text-white mb-3 md:mb-5 border border-white h-auto py-1.5 md:h-10 lg:h-12 px-3 md:px-5 lg:px-6 rounded-full inline-flex w-[max-content] items-center gap-1.5 sm:gap-3 lg:gap-4"
              aria-label="Annotations™"
            >
              Annotations™
            </Button>
            <h2
              className="text-[24px] sm:text-[32px] md:text-[36px] lg:text-[52px] font-normal text-white mb-2 sm:mb-4 lg:mb-6 leading-[1.1] inline-block drop-shadow-none sm:[text-shadow:-1px_0_0_#00ffff,1px_0_0_#ff00ff]"
              data-text="From Passive Watching to Active Listening"
            >
              From Passive Watching to Active Listening
            </h2>
            <p className="text-gray-100 text-[14px] sm:text-[16px] md:text-[16px] lg:text-[clamp(20px,1.5vw,26px)] leading-[1.4] whitespace-normal">
              Instantly capture ideas and effortlessly annotate videos in real time—without interrupting your flow.
            </p>
          </motion.div>
        </motion.div>

        {/* Feature 4: NoteVault™ */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col-reverse lg:flex-row-reverse items-center gap-2 sm:gap-8 lg:gap-12 mb-12 sm:mb-0 mt-8 lg:-mt-52"
        >
          <div className="w-full lg:flex-1 relative flex justify-center lg:z-20">
            <div className="relative w-[75%] sm:w-[85%] md:w-[85%] lg:w-full max-w-full mx-auto overflow-hidden">
              <Image
                src="/images/feature-image-4.webp"
                alt="Feature 4"
                width={2080}
                height={2080}
                className="w-full h-auto block scale-100 sm:scale-100"
              />
              <div className="absolute left-0 right-0 bottom-2 sm:bottom-10 h-[90%] bg-gradient-to-t from-black/95 to-transparent pointer-events-none" />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:flex-1 text-left px-4 lg:px-0 flex flex-col items-start -mt-8 sm:-mt-6 md:-mt-12 lg:mt-0 relative z-10"
          >
            <Button
              size="lg"
              className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[20px] font-bold text-white mb-3 md:mb-5 border border-white h-auto py-1.5 md:h-10 lg:h-12 px-3 md:px-5 lg:px-6 rounded-full inline-flex w-[max-content] items-center gap-1.5 sm:gap-3 lg:gap-4"
              aria-label="NoteVault™"
            >
              NoteVault™
            </Button>
            <h2
              className="text-[24px] sm:text-[32px] md:text-[36px] lg:text-[56px] font-normal text-white mb-2 sm:mb-4 lg:mb-6 leading-[1.1] inline-block drop-shadow-none sm:[text-shadow:-1px_0_0_#00ffff,1px_0_0_#ff00ff]"
              data-text="Retention for the 1%"
            >
              Retention for the 1%
            </h2>
            <p className="text-gray-100 text-[14px] sm:text-[16px] md:text-[16px] lg:text-[clamp(20px,1.5vw,26px)] leading-[1.4] whitespace-normal">
              In a world of constant content, it's easy to forget what we hear. Cognify changes that. Your key takeaways are captured, organized, and always accessible.
            </p>
          </motion.div>
        </motion.div>

        {/* Feature 5: AI Assistant™ */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col-reverse lg:flex-row items-center gap-2 sm:gap-8 lg:gap-12 mb-12 sm:mb-8 mt-8 lg:-mt-52"
        >
          <div className="w-full lg:flex-1 relative flex justify-center lg:z-10">
            <div className="relative w-[75%] sm:w-[85%] md:w-[85%] lg:w-full max-w-full mx-auto overflow-hidden">
              <Image
                src="/images/feature-image-5.webp"
                alt="Feature 5"
                width={1040}
                height={740}
                className="w-full h-auto block scale-100 sm:scale-100"
              />
              <div className="absolute left-0 right-0 bottom-2 sm:bottom-10 h-[90%] bg-gradient-to-t from-black/95 to-transparent pointer-events-none" />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:flex-1 text-left px-4 lg:px-0 flex flex-col items-start -mt-12 sm:-mt-8 md:-mt-16 lg:mt-0 relative z-10"
          >
            <Button
              size="lg"
              className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[20px] font-bold text-white mb-3 md:mb-5 border border-white h-auto py-1.5 md:h-10 lg:h-12 px-3 md:px-5 lg:px-6 rounded-full inline-flex w-[max-content] items-center gap-1.5 sm:gap-3 lg:gap-4"
              aria-label="AI Assistant™"
            >
              AI Assistant™
            </Button>
            <h2
              className="text-[24px] sm:text-[32px] md:text-[36px] lg:text-[56px] font-normal text-white mb-2 sm:mb-4 lg:mb-6 leading-[1.1] inline-block drop-shadow-none sm:[text-shadow:-1px_0_0_#00ffff,1px_0_0_#ff00ff]"
              data-text="Ask Anything, Instantly"
            >
              Ask Anything, Instantly
            </h2>
            <p className="text-gray-100 text-[14px] sm:text-[16px] md:text-[16px] lg:text-[clamp(20px,1.5vw,26px)] leading-[1.4] mb-4 sm:mb-8 md:mb-12 whitespace-normal">
              Deepen your understanding with a built-in AI assistant. Extract precise insights and get instant answers without ever hitting rewind.
            </p>
          </motion.div>
        </motion.div>

        {/* <p className="text-gray-100 text-[8px] sm:text-[clamp(11px,1.1vw,14px)] md:text-[clamp(12px,1.2vw,18px)] font-bold leading-relaxed mb-8 text-center mt-0 -mb-4 sm:mb-0 w-full">
          {" "}
          „Tell me and I forget, teach me and I may remember, involve me and I
          learn.” <br />-Benjamin Franklin{" "}
        </p> */}
      </Container>
    </section>
  );
}
