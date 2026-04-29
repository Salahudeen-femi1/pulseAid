import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useLocation } from "react-router-dom";
import Sidebar from "../Components/navs/Sidebar";

type LayoutProps = {
  children: React.ReactNode;
  pageName: string;
  showSearchBar?: boolean;
};

const MainLayout = ({
  children,
  pageName,
  showSearchBar
}: LayoutProps) => {
  useEffect(() => {
    document.title = "PayFleet - " + pageName;
  }, [pageName]);

  const location = useLocation();
  const mainContentRef = useRef<HTMLDivElement | null>(null);
  const pageVariants: Variants = {
    initial: {
      opacity: 0,
      x: -20,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.0,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      x: 20,
      transition: {
        duration: 1.0,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const style = document.createElement("style");
    style.textContent = `
      .main-content {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          overflow-anchor: none;
          scroll-padding-top: 80px;
          overscroll-behavior-y: contain;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useLayoutEffect(() => {
    const scrollToTop = () => {
      if (mainContentRef.current) {
        mainContentRef.current.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      setTimeout(() => {
        if (mainContentRef.current?.scrollTop !== 0) {
          mainContentRef.current?.scrollTo(0, 0);
        }
        if (window.scrollY !== 0) {
          window.scrollTo(0, 0);
        }
      }, 300);
    };

    const rafId = requestAnimationFrame(() => {
      scrollToTop();
    });

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [location.pathname]);

  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  return (
    <ProtectedRoute>
      <div className="flex w-full relative! bg-light-secondary dark:bg-dark-secondary h-dvh overflow-hidden">
        {
          isOpen && (
            <div className="absolute inset-0 z-90 bg-black/40" onClick={() => setIsOpen(false)}></div>
          )
        }
        <div
          className={`z-100 h-full md:sticky absolute transition-all duration-500 bg-black/20 ${
            isOpen ? "left-0" : "-left-full"
          } ${
            isExpanded ? "lg:w-[23%] md:w-2/3 w-full" : "w-16"
          }`}
        >
          <Sidebar
            setIsOpen={setIsOpen}
            setIsExpanded={setIsExpanded}
            isExpanded={isExpanded}
          />
        </div>
        <div className={`${isExpanded ? "lg:w-[77%]" : "w-full"} w-full overflow-hidden pt-2 pb-12`}>
          {/* Top Nav */}
          <div className="lg:px-6 px-4 flex gap-4 sticky top-0 z-10 items-center border-b border-primary/10 dark:border-light-tetiary/10">
            <button
              type="button"
              className="md:hidden inline-block text-dark-secondary/70 dark:text-light-tetiary"
              onClick={() => setIsOpen(true)}
            >
              <HiBars3 size={30} />
            </button>
            <TopNav
              showSearchBar={showSearchBar}
            />
          </div>
          <div
            ref={mainContentRef}
            className="my-4 md:pb-10 pb-5 md:h-[calc(100%-5vh)] h-[calc(100%-(5vh))] overflow-y-scroll no-scrollbar"
            style={{
              minHeight: "0",
              WebkitOverflowScrolling: "touch",
              overscrollBehaviorY: "contain",
            }}
            tabIndex={-1}
          >
            <AnimatePresence mode="wait">
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                style={{
                  minHeight: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
                className="lg:px-6 px-4"
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default MainLayout;
