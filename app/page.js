"use client";

import { useState, useEffect, use } from "react";
import { motion, time, useInView } from "framer-motion";
import { Button, Timeline, Card, Drawer } from "flowbite-react";
import { HiExternalLink, HiBriefcase, HiMenuAlt1 } from "react-icons/hi";
import { Image } from "@heroui/react";
import { FaReact, FaNodeJs, FaMailBulk, FaLaravel, FaLinkedin, FaFacebook, FaInstagram, FaPhp, FaGithub, FaJava, FaJsSquare, FaHeart } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiGit, SiVisualstudiocode } from "react-icons/si";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Check if screen width is less than 768px
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize); // Add event listener for resize

    return () => window.removeEventListener("resize", handleResize); // Clean up
  }, []);


  // Set isLoaded to true after component mounts to trigger animation
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1500); // 3000ms = 3 seconds
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false); // Hide loader after 3 seconds
    }, 1000); // 3000ms = 3 seconds

    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, []);

  const LoaderScreen = () => {
    return (
      <div
        className={`fixed inset-0 flex items-center justify-center bg-[#e3dff2] z-50 transition-opacity duration-700 ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="text-5xl font-extrabold text-[#7FBC8C]">
          <span className="yoosch-text">
            <span>y</span>
            <span>o</span>
            <span>o</span>
            <span>s</span>
            <span>c</span>
            <span>h</span>
          </span>
        </div>
      </div>
    );
  };


  const AutoTyping = () => {
    useEffect(() => {
      const exampleText = ['FrontEnd Developer', 'BackEnd Developer', 'Computer Science Student'];
      let currentIndex = 0;
      let currentText = '';
      const targetElement = document.getElementById("text");

      const typeText = () => {
        if (currentIndex < exampleText.length) {
          let word = exampleText[currentIndex];
          let i = 0;
          const intervalId = setInterval(() => {
            currentText += word.charAt(i);
            targetElement.textContent = currentText;
            i++;
            if (i === word.length) {
              clearInterval(intervalId);
              currentIndex++;
              setTimeout(deleteText, 2000); // wait before deleting
            }
          }, 50);
        }
      };

      const deleteText = () => {
        let i = currentText.length;
        const intervalId = setInterval(() => {
          currentText = currentText.substring(0, i - 1);
          targetElement.textContent = currentText;
          i--;
          if (i === 0) {
            clearInterval(intervalId);
            currentIndex = (currentIndex === exampleText.length) ? 0 : currentIndex; // Reset to 0 after finishing the list
            typeText();
          }
        }, 50);
      };

      typeText(); // Start typing effect

      return () => {
        // Clean up if needed
        currentIndex = 0;
        currentText = '';
      };
    }, []);

    return <span id="text"></span>;
  };


  const AutoGreeting = () => {
    const greetings = [
      'Xin chào', 'Hello', 'Halo', 'Bonjour', 'Hola',
      'Ciao', 'Ni Hao', 'Annyeonghaseyo', 'Namaste',
      'Merhaba', 'Olá', 'Hallo', 'Hej', 'Aloha', 'Shalom'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const changeGreeting = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % greetings.length);
      };

      const intervalId = setInterval(changeGreeting, 2000); // Change every 2 seconds

      return () => clearInterval(intervalId); // Cleanup on component unmount
    }, [greetings.length]);

    return <span className="text-red-900 font-semibold">{greetings[currentIndex]}</span>;
  };



  const projects = [
    {
      title: "PALMA",
      img: "/project1.png",
      description:
        "An employee attendance app with selfie verification and location tracking.",
      link: "https://github.com/yoosch/absensi-karyawan",
      frameworks: ["React", "Laravel"],
    },
    {
      title: "SIREADY WEBSITE",
      img: "/project2.png",
      description: "Academic information system designed to help students create Study Plan Forms (IRS) with features tailored to other roles as needed.",
      link: "https://github.com/nippotism/siready",
      frameworks: ["Laravel"],
    },
    {
      title: "SIREADY MOBILE APP",
      img: "/project3.png",
      description: "Mobile app version of siready",
      link: "https://github.com/yoosch/siready-mobile",
      frameworks: ["React Native", "Laravel"],
    },
  ];

  const frameworkColors = {
    "React": "bg-blue-500",
    "Laravel": "bg-red-500",
    "Tailwind CSS": "bg-green-500",
  }

  const platforms = [
    {
      name: "GitHub",
      link: "https://github.com/yoosch",
      bgColor: "bg-[#f0e7ff]",
      icon: <FaGithub className="w-6 h-6 inline-block mr-2" />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/yudhisahsan/",
      bgColor: "bg-[#d0f0fd]",
      icon: <FaLinkedin className="w-6 h-6 inline-block mr-2" />,
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/ydhs.ahsn0723/",
      bgColor: "bg-[#eaf4ff]",
      icon: <FaFacebook className="w-6 h-6 inline-block mr-2" />,
    },
    {
      name: "Instagram",
      link: "https://instagram.com/yudhisahsan",
      bgColor: "bg-[#fde4e1]",
      icon: <FaInstagram className="w-6 h-6 inline-block mr-2" />,
    },
  ];

  return (
    <>
      {isLoading && <LoaderScreen />}
      {!isLoading && (
        <div>
          <nav className={`flex text-black justify-between items-center sticky top-0 py-4 px-8  z-50 transition-colors duration-300 ${isScrolled ? "bg-[#a7dbd8] border-b-2 border-black shadow-lg" : "bg-transparent"
            }`}>
            {/* Logo */}
            <div>
              <h1 className="text-2xl font-bold">yoosch</h1>
            </div>

            {/* Hamburger Menu Button (Visible on mobile screens) */}
            <button className="md:hidden text-2xl" onClick={() => setIsOpen(true)}><HiMenuAlt1 /></button>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4">
              <a href="#home" className="hover:text-blue-500">Home</a>
              <a href="#about" className="hover:text-blue-500">About Me</a>
              <a href="#projects" className="hover:text-blue-500">Projects</a>
              <a href="#tech-stack" className="hover:text-blue-500">Tech Stack</a>
              <a href="#contact" className="hover:text-blue-500">Contact</a>
            </div>

            <Drawer open={isOpen} onClose={handleClose} position="right">
              <Drawer.Header title="Navigation" />
              <Drawer.Items className="flex flex-col gap-4 p-4">
                {[
                  { label: "Home", href: "#home" },
                  { label: "About Me", href: "#about" },
                  { label: "Projects", href: "#project" },
                  { label: "Tech Stack", href: "#tech-stack" },
                  { label: "Contact", href: "#contact" },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="bg-[#69d2e7] text-center border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-4 py-2 text-lg font-bold text-black hover:bg-[#a388ee] transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                ))}

              </Drawer.Items>
            </Drawer>
          </nav>

          <div className="px-10">
            <div
              id="home"
              className={`${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                } transition-all duration-1000 ease-out text-black flex flex-col justify-center items-center h-screen`}
            >
              <div className="p-auto items-center gap-4 md:text-center justify-center">
                <div className="text-black">
                  <h1 className="text-lg"><AutoGreeting /><span> there, my name is</span></h1>
                  <h1 className="font-bold text-5xl">
                    Muhammad Ahsan <span className="text-gray-500">Yudhistira</span>
                  </h1>
                  <p className="text-lg">A <AutoTyping /></p>
                </div>

              </div>
            </div>
            <motion.div
              id="about"
              className="mt-[20%] md:mt-[5%] flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }} // Initially invisible and offset vertically
              whileInView={{ opacity: 1, y: 0 }} // When in view, make it visible and reset position
              viewport={{ once: false, amount: 0.1 }} // Triggers when 10% of element is in view
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="text-3xl font-bold text-black shadow-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] p-4">About Me</h1>
              <div className="md:hidden">
                <div className="flex justify-center items-center md:hidden mt-4">
                  <img
                    src="/profile.png"
                    alt="Profile Picture"
                    className="w-32 h-32 rounded-xl mx-auto transform transition-transform hover:scale-110 hover:shadow-2xl border-4 border-gray-800"
                  />
                </div>

                <p className="font-medium my-4 text-lg text-black border-t-4 md:border-none border-gray-800 pt-4">
                  I'm an Informatics student at Diponegoro University with a strong interest in technology.
                  I'm eager to apply my skills to innovative projects and am always looking to learn and grow professionally.
                </p>
                <a
                  href="https://www.linkedin.com/in/yudhisahsan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-black py-2 px-4 shadow-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:bg-green-400 inline-flex items-center"
                >
                  <HiExternalLink className="text-2xl mr-2" />
                  Visit LinkedIn
                </a>
              </div>
              <div className="hidden md:grid md:grid-cols-2 md:mt-8">
                {/* Image Section */}
                <div className="flex justify-center items-center mt-4">
                  <img
                    src="/profile.png"
                    alt="Profile Picture"
                    className="w-32 h-32 md:w-48 md:h-48 rounded-xl mx-auto transform transition-transform hover:scale-110 hover:shadow-2xl border-4 border-gray-800"
                  />
                </div>

                {/* Text Section */}
                <div className="flex flex-col justify-center mt-4">
                  <p className="font-medium text-lg text-black md:text-xl md:mt-0 md:mb-4 md:border-none border-t-4 border-gray-800 pt-4">
                    I'm an Informatics student at Diponegoro University with a strong interest in technology.
                    I'm eager to apply my skills to innovative projects and am always looking to learn and grow professionally.
                  </p>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-black py-2 px-4 shadow-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:bg-green-400 inline-flex items-center max-w-xs mx-auto"
                  >
                    <HiExternalLink className="text-2xl mr-2" />
                    Visit LinkedIn
                  </a>


                </div>
              </div>
            </motion.div>
            <motion.div
              id="experience"
              className="mt-[30%] md:mt-[7.5%] flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }} // Initially invisible and offset vertically
              whileInView={{ opacity: 1, y: 0 }} // When in view, make it visible and reset position
              viewport={{ once: false, amount: 0.1 }} // Triggers when 10% of element is in view
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="text-3xl font-bold text-black p-4 shadow-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">Experience</h1>
              <div className="mt-8">
                <div className="">
                  <Timeline className="border-[#3300ff] md:border-t md:border-[#3300ff]" horizontal={!isMobile} >
                    <Timeline.Item>
                      <Timeline.Point icon={HiBriefcase} />
                      <Timeline.Content>
                        <Timeline.Time>January 2025 - February 2025</Timeline.Time>
                        <Timeline.Title>Software Engineer in Public Works Polytechnic</Timeline.Title>
                        <Timeline.Body>
                          Developing an employee attendance application that incorporates advanced features such as selfie-based attendance verification and location tracking. The application also includes a permission request system, enabling employees to submit leave or absence requests seamlessly.
                        </Timeline.Body>
                      </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                      <Timeline.Point icon={HiBriefcase} />
                      <Timeline.Content>
                        <Timeline.Time>August 2024 - December 2024</Timeline.Time>
                        <Timeline.Title>Data Structure Lab Assistant</Timeline.Title>
                        <Timeline.Body>
                          Guided students in understanding core data structure concepts using the C programming language. My responsibilities included explaining complex algorithms, assisting with hands-on coding exercises.
                        </Timeline.Body>
                      </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                      <Timeline.Point icon={HiBriefcase} />
                      <Timeline.Content>
                        <Timeline.Time>February 2024 - June 2024</Timeline.Time>
                        <Timeline.Title>Computer Network Lab Assistant</Timeline.Title>
                        <Timeline.Body>
                          Guided students in understanding the fundamentals of computer networking, including configuring topologies, routers, and switches, utilizing Cisco Packet Tracer for hands-on learning.
                        </Timeline.Body>
                      </Timeline.Content>
                    </Timeline.Item>
                  </Timeline>
                </div>
              </div>
            </motion.div>
            <motion.div
              id="projects"
              className="mt-[30%] md:mt-[7.5%] flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }} // Initially invisible and offset vertically
              whileInView={{ opacity: 1, y: 0 }} // When in view, make it visible and reset position
              viewport={{ once: false, amount: 0.1 }} // Triggers when 10% of element is in view
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="text-3xl font-bold text-black p-4 shadow-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">Projects</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                {projects.map((project, index) => (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Card
                      key={index}
                      className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0)] hover:translate-x-1 hover:translate-y-1 transition-all duration-300 rounded-none bg-[#e3dff2] text-black"
                    >
                      <img
                        src={project.img} // Standard HTML `img` tag
                        alt={`${project.title} Image`}
                        className="w-full h-48 object-cover border-2 border-black"
                      />
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="mt-2 mb-4 text-sm border-black   border-b-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.frameworks.map((framework, idx) => (
                          <span
                            key={idx}
                            className={`${frameworkColors[framework] || "bg-gray-500"
                              } text-black px-2 py-1 text-xs font-semibold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)]`}
                          >
                            {framework}
                          </span>
                        ))}
                      </div>
                    </Card>
                  </a>
                ))}
              </div>
            </motion.div>
            <motion.div
              id="tech-stack"
              className="mt-[30%] md:mt-[7.5%] flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }} // Initially invisible and offset vertically
              whileInView={{ opacity: 1, y: 0 }} // When in view, make it visible and reset position
              viewport={{ once: false, amount: 0.1 }} // Triggers when 10% of element is in view
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="text-3xl font-bold text-black p-4 shadow-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">Tech Stack</h1>
              <div className="grid grid-cols-2 md:grid-cols-4 p-6 gap-8">
                <div className="flex flex-col items-center p-6 bg-[#e0f7fa] rounded-md border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] hover:scale-105 transition-transform duration-300">
                  <FaReact className="text-5xl text-[#61dafb] mb-4" />
                  <h3 className="font-semibold text-xl text-black">React</h3>
                </div>
                <div className="flex flex-col items-center p-6 bg-[#f1f8e9] rounded-md border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] hover:scale-105 transition-transform duration-300">
                  <FaNodeJs className="text-5xl text-[#3c873a] mb-4" />
                  <h3 className="font-semibold text-xl text-black">Node.js</h3>
                </div>
                <div className="flex flex-col items-center p-6 bg-[#fff8e1] rounded-md border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] hover:scale-105 transition-transform duration-300">
                  <FaLaravel className="text-5xl text-[#f05340] mb-4" />
                  <h3 className="font-semibold text-xl text-black">Laravel</h3>
                </div>
                <div className="flex flex-col items-center p-6 bg-[#e3f2fd] rounded-md border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] hover:scale-105 transition-transform duration-300">
                  <FaPhp className="text-5xl text-[#2979ff] mb-4" />
                  <h3 className="font-semibold text-xl text-black">PHP</h3>
                </div>
                <div className="flex flex-col items-center p-6 bg-[#fffde7] rounded-md border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] hover:scale-105 transition-transform duration-300">
                  <FaJsSquare className="text-5xl text-[#f0db4f] mb-4" />
                  <h3 className="font-semibold text-xl text-black">JavaScript</h3>
                </div>
                <div className="flex flex-col items-center p-6 bg-[#e8f5e9] rounded-md border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] hover:scale-105 transition-transform duration-300">
                  <SiTailwindcss className="text-5xl text-[#38b2ac] mb-4" />
                  <h3 className="font-semibold text-xl text-black">Tailwind CSS</h3>
                </div>
                <div className="flex flex-col items-center p-6 bg-[#fce4ec] rounded-md border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] hover:scale-105 transition-transform duration-300">
                  <SiMysql className="text-5xl text-[#00758f] mb-4" />
                  <h3 className="font-semibold text-xl text-black">MySQL</h3>
                </div>
                <div className="flex flex-col items-center p-6 bg-[#fffde7] rounded-md border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] hover:scale-105 transition-transform duration-300">
                  <FaJava className="text-5xl text-[#f44336] mb-4" />
                  <h3 className="font-semibold text-xl text-black">Java</h3>
                </div>
                <div className="flex flex-col items-center p-6 bg-[#c8e6c9] rounded-md border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] hover:scale-105 transition-transform duration-300">
                  <SiGit className="text-5xl text-[#f1502f] mb-4" />
                  <h3 className="font-semibold text-xl text-black">Git</h3>
                </div>
                <div className="flex flex-col items-center p-6 bg-[#e3f2fd] rounded-md border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] hover:scale-105 transition-transform duration-300">
                  <SiVisualstudiocode className="text-5xl text-[#007acc] mb-4" />
                  <h3 className="font-semibold text-xl text-black">VsCode</h3>
                </div>
              </div>
            </motion.div>
            <motion.div
              id="contact"
              className="mt-[30%] md:mt-[7.5%] flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }} // Initially invisible and offset vertically
              whileInView={{ opacity: 1, y: 0 }} // When in view, make it visible and reset position
              viewport={{ once: false, amount: 0.1 }} // Triggers when 10% of element is in view
              transition={{ duration: 1, ease: "easeOut" }}
            >

                <h1 className="text-3xl font-bold text-black p-4 shadow-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
                  Connect with me
                </h1>
              <div className="w-full px-8 py-12">
                <div className="grid grid-cols-1 text-center md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                  {platforms.map((platform, index) => (
                    <a
                      key={index}
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex justify-center items-center border-2 px-8 py-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] hover:translate-x-1 hover:translate-y-1 transition-all duration-300 rounded-none ${platform.bgColor} text-black font-bold`}
                    >
                      {platform.icon}
                      {platform.name}
                    </a>
                  ))}
                </div>
              </div>

            </motion.div>
            <motion.div
              className="mt-[30%] md:mt-[7.5%] flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }} // Initially invisible and offset vertically
              whileInView={{ opacity: 1, y: 0 }} // When in view, make it visible and reset position
              viewport={{ once: false, amount: 0.1 }} // Triggers when 10% of element is in view
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="text-3xl font-bold text-black p-4 shadow-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
                Contact
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-8 py-12">
                {/* Email Section */}
                <a href="mailto:yudhisahsan@gmail.com" >

                  <div className="border-4 border-black bg-[#fde4e1] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0)] hover:translate-x-1 hover:translate-y-1 transition-all duration-500 rounded-none p-6">
                    <h1 className="text-2xl font-bold text-black">Email</h1>
                    <p className="text-base text-green-800 mt-2">yudhisahsan@gmail.com</p>
                  </div>
                </a>

                {/* WhatsApp Section */}
                <a href="wa.me/628990404567" >
                  <div className="border-4 border-black bg-[#d0f0fd] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0)] hover:translate-x-1 hover:translate-y-1 transition-all duration-500 rounded-none p-6">
                    <h1 className="text-2xl font-bold text-black">WhatsApp</h1>
                    <p className="text-base text-green-800 mt-2">+62 899 040 4567</p>
                  </div>
                </a>
              </div>
            </motion.div>


          </div>
          <footer className="w-full px-4 py-4 bg-[#e3dff2] border-t-4 border-black">
            <div className="max-w-screen-xl mx-auto text-center">
              <nav className="mb-2 flex flex-wrap items-center justify-center gap-4 text-sm font-medium">
                <a
                  href="#home"
                  className="text-black border-b-2 border-black hover:border-green-500 transition-colors duration-300"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-black border-b-2 border-black hover:border-green-500 transition-colors duration-300"
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="text-black border-b-2 border-black hover:border-green-500 transition-colors duration-300"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="text-black border-b-2 border-black hover:border-green-500 transition-colors duration-300"
                >
                  Contact
                </a>
              </nav>
              <p className="text-black text-sm font-medium flex flex-wrap items-center justify-center gap-2">
                © {new Date().getFullYear()}, made with{" "}
                <FaHeart className="text-red-500" /> by{" "}
                <span className="text-[#7FBC8C] font-bold">
                  Muhammad Ahsan Yudhistira
                </span>
              </p>
            </div>
          </footer>
        </div>
      )}
    </>

  )
}

