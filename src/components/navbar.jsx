"use client"

import { useState } from "react"
import Link from "next/link"
import NavLink from "@/components/navLink"
import { motion } from "framer-motion"

const Navbar = () => {

  const topVariants = {
    closed: {
      rotate: 0
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)"
    }
  }

  const centerVariants = {
    closed: {
      opacity: 1
    },
    opened: {
      opacity: 0
    }
  }

  const bottomVariants = {
    closed: {
      rotate: 0
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)"
    }
  }

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  const [open, setOpen] = useState(false)

  const links = [
    { url: '/', title: "Home"},
    { url: '/about', title: "About"},
    { url: '/portfolio', title: "Portfolio"},
    { url: '/contact', title: "Contact"},
  ]

  const socialLinks = [
    { url: '#', image: "/dribbble.png", title: "Dribbble"},
    { url: '#', image: "/github.png", title: "Github"},
    { url: '#', image: "/linkedin.png", title: "Linkedin"},
    { url: '#', image: "/pinterest.png", title: "Pinterest"},
    { url: '#', image: "/instagram.png", title: "Instagram"},
    { url: '#', image: "/facebook.png", title: "Facebook"}
  ]

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      <div
        className="hidden md:flex flex-row gap-4 w-1/3">
        {links.map(link => (
          <NavLink link={link}
                   key={link.title} />
        ))}
      </div>
      {/*logo*/}
      <div className="md:hidden lg:flex xl:w-1/3 flex xl:justify-center">
        <Link href="/" className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
          <span className="text-white ml-2 mr-3">
            Leo
          </span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>
      {/*menu responsive*/}
      <div className="md:hidden">
        <button className="w-10 h-8 flex flex-col justify-between z-50 relative"
                onClick={() => setOpen(prev => !prev)}>
          <motion.div variants={topVariants}
                      animate={open ? "opened" : "closed"}
                      className="w-10 h-1 bg-black rounded origin-left"/>
          <motion.div variants={centerVariants}
                      animate={open ? "opened" : "closed"}
                      className="w-10 h-1 bg-black rounded"/>
          <motion.div variants={bottomVariants}
                      animate={open ? "opened" : "closed"}
                      className="w-10 h-1 bg-black rounded origin-left"/>
        </button>
        {/*menu list*/}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                className=""
                key={link.title}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
      {/*social links*/}
      <div className="hidden md:flex gap-4 w-1/3">
        {
          socialLinks.map(social => {
            return (
              <Link href={social.url}
                    key={social.url}>
                <img src={social.image}
                     alt="social"
                     className="w-6 h-6"/>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default Navbar