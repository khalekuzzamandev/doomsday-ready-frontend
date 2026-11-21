
"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is Doomsday Ready?",
    answer:
      "Doomsday Ready is an MCU planning platform where you can explore Marvel movies, track your watch progress, create a rewatch plan, and organize your opening night.",
  },
  {
    question: "What should I watch before Avengers: Doomsday?",
    answer:
      "You can explore our recommended MCU movie collection and use the Rewatch Plan feature to discover prerequisite movies in the correct viewing order.",
  },
  {
    question: "How does the Rewatch Plan work?",
    answer:
      "Select a target movie, and the system will identify its required prerequisite movies and arrange them in the correct viewing order.",
  },
  {
    question: "Can I track the movies I have watched?",
    answer:
      "Yes. You can mark movies as watched or unwatched and keep track of your MCU viewing progress.",
  },
  {
    question: "How does Cinema Booking work?",
    answer:
      "Choose a cinema and enter your group size. The booking calculator finds a combination of available ticket bundles using the fewest bundles possible.",
  },
  {
    question: "Can I watch movies directly on this platform?",
    answer:
      "No. Doomsday Ready is a movie planning and tracking platform. It does not provide movie streaming or downloads.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#090909] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-red-600/20 bg-red-600/10">
            <HelpCircle size={22} className="text-red-500" />
          </div>

          <p className="mb-2 text-xs font-bold uppercase tracking-[3px] text-red-500">
            Got Questions?
          </p>

          <h2 className="text-2xl font-bold sm:text-3xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-gray-500">
            Everything you need to know about your MCU journey and Doomsday Ready.
          </p>
        </div>

        {/* FAQ List */}
        <div  className="mx-auto w-full max-w-7xl space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className={`overflow-hidden rounded-xl border transition duration-300 ${isOpen
                    ? "border-red-600/40 bg-[#121212]"
                    : "border-white/10 bg-[#101010] hover:border-white/20"
                  }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span
                    className={`text-sm font-semibold transition-colors sm:text-base ${isOpen ? "text-red-500" : "text-gray-200"
                      }`}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition ${isOpen
                        ? "bg-red-600 text-white"
                        : "bg-white/5 text-gray-400"
                      }`}
                  >
                    {isOpen ? (
                      <Minus size={17} />
                    ) : (
                      <Plus size={17} />
                    )}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-white/[0.06] px-5 py-4 text-sm leading-7 text-gray-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Text */}
        <p className="mt-8 text-center text-xs text-gray-600">
          Still have questions? Explore Doomsday Ready and start your MCU journey.
        </p>
      </div>
    </section>
  );
};

export default FAQ;
