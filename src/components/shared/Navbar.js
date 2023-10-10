import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import React from "react";
import logo from "@/assets/pcbuilder.png";

import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import { Dropdown, Space } from "antd";
import Link from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";
import Image from "next/image";

export default function NavbarHead() {
  const [openNav, setOpenNav] = React.useState(false);

  const { data: session } = useSession();
  const items = [
    {
      key: "1",
      label: (
        <Link className="uppercase" href="/cpu">
          Processor
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link className="uppercase" href="/motherboard">
          Motherboard
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link className="uppercase" href="/ram">
          Ram
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link className="uppercase" href="/psu">
          Power Supply
        </Link>
      ),
    },
    {
      key: "5",
      label: (
        <Link className="uppercase" href="/storage">
          Storage Device
        </Link>
      ),
    },
    {
      key: "6",
      label: (
        <Link className="uppercase" href="/monitor">
          Monitor
        </Link>
      ),
    },
    {
      key: "7",
      label: (
        <Link className="uppercase" href="/others">
          Others
        </Link>
      ),
    },
  ];
  const router = useRouter();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Dropdown
        className="uppercase"
        menu={{
          items,
        }}
        placement="bottomLeft"
      >
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-semibold inline-flex items-center cursor-pointer"
        >
          CATEGORIES
          <IoMdArrowDropdown />
        </Typography>
      </Dropdown>

      <Link href="/pc-builder" className="outline-none">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-semibold"
        >
          PC BUILDER
        </Typography>
      </Link>
    </ul>
  );

  return (
    <>
      <Navbar className="fixed top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 navbar-bg ">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link href="/">
            <Image src={logo} className="w-36 h-[25px]" />
          </Link>

          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>

            {session?.user ? (
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
                onClick={() => signOut()}
              >
                <span>SIGN OUT</span>
              </Button>
            ) : (
              <Link href="/login">
                <Button
                  variant="gradient"
                  size="sm"
                  className="hidden lg:inline-block"
                >
                  <span>SIGN IN</span>
                </Button>
              </Link>
            )}

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}

          {session?.user ? (
            <Button
              variant="gradient"
              size="sm"
              fullWidth
              className="mb-2"
              onClick={() => signOut()}
            >
              <span>SIGN OUT</span>
            </Button>
          ) : (
            <Button
              variant="gradient"
              size="sm"
              fullWidth
              className="mb-2"
              onClick={() => router.push("/login")}
            >
              <span>SIGN IN</span>
            </Button>
          )}
        </Collapse>
      </Navbar>
    </>
  );
}
