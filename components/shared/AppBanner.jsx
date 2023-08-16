import { motion } from "framer-motion"
import Image from "next/image"
import { FiArrowDownCircle } from "react-icons/fi"
import useThemeSwitcher from "../../hooks/useThemeSwitcher"
import Typewriter from "typewriter-effect"
function AppBanner() {
  const [activeTheme] = useThemeSwitcher()
  const options = {
    strings: [
      "Full-Stack Developer",
      "React JS Expert",
      "Tailwind CSS Designer",
      "Next.js Developer",
      "Node & Express Backend Developer",
      "PHP & Strapi(CMS) Specialist",
      "UI/UX Designer (Figma)",
      "Team Management (Jira, Trello, Notion)",
      "Database Expert (SQL, MySQL, MongoDB Atlas)",
      "Version Control (GIT, GitHub, GitLab)",
      "Self-driven & Fast Learner",
    ],
    autoStart: true,
    loop: true,
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className='flex flex-col items-center mt-5 sm:justify-between sm:flex-row md:mt-2'
    >
      <div className='w-full text-left md:w-1/3'>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.1,
          }}
          className='text-2xl text-center capitalize font-general-semibold lg:text-3xl xl:text-4xl sm:text-left text-ternary-dark dark:text-primary-light'
        >
         Hi, I&apos;m Abenezer Kifle, 
         {/* Full Stack Developer specializing in automation */}
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.1,
          }}
          className='text-2xl text-center font-general-normal lg:text-xl xl:text-1xl sm:text-left text-ternary-dark dark:text-primary-light'
        >
        Full Stack Developer specializing in automation
         {/* Full Stack Developer specializing in automation */}
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.2 }}
          className='text-2xl text-center uppercase font-general-semibold lg:text-3xl xl:text-4xl sm:text-left text-ternary-dark dark:text-primary-light'
        >
          {/* Full stack developer and automatier{" "} */}
          <span className='mt-2 text-lg md:text-2xl lg:text-3xl text-textDark lgl:mt-4'>
            <Typewriter options={options} />
          </span>
        </motion.h1>
        

        {/* Introductory Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.4 }}
          className='text-sm text-center font-general-normal lg:text-lg xl:text-1xl sm:text-left text-ternary-dark dark:text-primary-light'
        >
          Born in Ethiopia, my expertise and passion lie in full-stack web
          development. <br />
          Leveraging my background in Computer Science and experience with a{" "}
          <em>FAANG</em> company, my approach brings a unique perspective to
          deliver high-quality web solutions. <br />
          <br />
          <em>Fully committed to the philosophy of life-long learning.</em>{" "}
          <br />
          <span className='relative inline-flex overflow-x-hidden cursor-pointer text-textGreen h-7 group'>
            Learn More
            {/* Animated underline bar */}
            <span className='absolute w-full h-[1px] bg-textGreen left-0 bottom-1 translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500'></span>
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.3,
          }}
          className='flex justify-center sm:block'
        >
          <a
            download='Abenezer-Resume.pdf'
            href='/files/Abenezer-Resume.pdf'
            className='font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500'
            aria-label='Download Resume'
          >
            <FiArrowDownCircle className='w-5 h-5 ml-0 mr-2 duration-100 sm:ml-1 sm:mr-3 sn:w-6 sm:h-6'></FiArrowDownCircle>
            <span className='text-sm duration-100 sm:text-lg'>Download CV</span>
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className='float-right w-full mt-8 text-right sm:w-2/3 sm:mt-0'
      >
        <img
          layout='responsive'
          src={
            activeTheme === "dark"
              ? "/images/developer.svg"
              : "/images/developer-dark.svg"
          }
          alt='Developer'
        />
      </motion.div>
    </motion.section>
  )
}

export default AppBanner
