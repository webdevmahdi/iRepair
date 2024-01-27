import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import macbookExposed from "../../assets/images/macbook-exposed.png";
import { motion } from "framer-motion";

const parent = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.25,
      delayChildren: 1,
    },
  },
};

const childrenElement = {
  hidden: { opacity: 0, y: -200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, bounce: 0.5, type: "spring" },
  },
};

const laptop = {
  initial: { y: 0, rotate: 0, scale: 5 },
  animate: {
    y: 20,
    rotate: -30,
    scale: 1,
    transition: {
      duration: 0.6,
      y: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  },
};

const HeroSection = () => {
  return (
    <div className="overflow-hidden">
      <Container className="h-screen grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 place-content-center mb-80">
        <motion.div variants={parent} initial="hidden" animate="visible">
          <motion.h1
            variants={childrenElement}
            className="text-5xl lg:text-8xl font-bold text-nowrap"
          >
            <span className="text-gray">Don't worry.</span>
            <br />
            <span>We'll fix it.</span>
          </motion.h1>
          <motion.p
            variants={childrenElement}
            className="text-dark-gray max-w-[50ch] mt-10 mb-5 text-lg"
          >
            Welcome to{" "}
            <motion.span
              variants={childrenElement}
              className="font-semibold text-primary-foreground"
            >
              iRepair
            </motion.span>
            , your one-stop place for all kinds of{" "}
            <motion.span
              variants={childrenElement}
              className="font-semibold text-primary-foreground"
            >
              Macbook repairs
            </motion.span>{" "}
            and diagnostics.
          </motion.p>
          <motion.div variants={childrenElement}>
            <Button>Book a service</Button>
          </motion.div>
        </motion.div>
        <motion.div
          variants={laptop}
          initial="initial"
          animate="animate"
          className="mt-10 w-3/4 lg:w-full md:w-3/4 mx-auto"
        >
          <img
            className=" h-[95%] object-contain shadow-2xl shadow-black/50"
            src={macbookExposed}
            alt=""
          />
        </motion.div>
      </Container>
    </div>
  );
};

export default HeroSection;
