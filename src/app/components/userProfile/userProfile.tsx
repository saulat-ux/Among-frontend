"use client";

// React Imports
import { useRef, useState } from "react";
import type { MouseEvent } from "react";

// Next Imports
import { useParams, useRouter } from "next/navigation";
import {
  RiUser3Line,
  RiSettings4Line,
  RiMoneyDollarCircleLine,
  RiQuestionLine,
  RiLogoutBoxRLine,
} from "react-icons/ri";

// Use as <RiUser3Line /> in your component

// MUI Imports
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import MenuList from "@mui/material/MenuList";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

// Third-party Imports
// import { signOut, useSession } from 'next-auth/react'

// Type Imports
// import type { Locale } from '@configs/i18n'

// Hook Imports
// import { useSettings } from '@core/hooks/useSettings'

// Util Imports
// import { getLocalizedUrl } from '@/utils/i18n'

// Styled component for badge content
const BadgeContentSpan = styled("span")({
  width: 8,
  height: 8,
  borderRadius: "50%",
  cursor: "pointer",
  backgroundColor: "red", // Example color
  boxShadow: "0px 0px 2px #000", // Example shadow
});

const UserDropdown = () => {
  // States
  const [open, setOpen] = useState(false);

  // Refs
  const anchorRef = useRef<HTMLDivElement>(null);

  // Hooks
  const router = useRouter();
  //   const { data: session } = useSession()
  //   const { settings } = useSettings()
  //   const { lang: locale } = useParams()

  const handleDropdownOpen = () => {
    !open ? setOpen(true) : setOpen(false);
  };

  const handleDropdownClose = (
    event?: MouseEvent<HTMLLIElement> | (MouseEvent | TouchEvent),
    url?: string
  ) => {
    if (url) {
      //   router.push(getLocalizedUrl(url, locale as Locale))
    }

    if (
      anchorRef.current &&
      anchorRef.current.contains(event?.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  const handleUserLogout = async () => {
    try {
      // Sign out from the app
      //   await signOut({ redirect: false })
      console.log("user logged out ");

      // Redirect to login page
      //   router.push(getLocalizedUrl('/login', locale as Locale))
    } catch (error) {
      console.error(error);

      // Show above error in a toast like following
      // toastService.error((err as Error).message)
    }
  };

  return (
    <>
      <Badge
        ref={anchorRef}
        overlap="circular"
        badgeContent={<BadgeContentSpan onClick={handleDropdownOpen} />}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        className="p-2"
      >
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="account"
          onClick={handleDropdownOpen}
          className="p-2 bg-white shadow-md"
        >
          <AccountCircle />
        </IconButton>
      </Badge>

      <Popper
        open={open}
        transition
        disablePortal
        placement="bottom-end"
        anchorEl={anchorRef.current}
        className="p-2 shadow-lg mt-2 bg-white rounded-lg border"
      >
        {({ TransitionProps, placement }) => (
          <Fade
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-end" ? "right top" : "left top",
            }}
          >
            <Paper>
              <ClickAwayListener
                onClickAway={(e) =>
                  handleDropdownClose(e as MouseEvent | TouchEvent)
                }
              >
                <MenuList className="divide-y divide-gray-200">
                  <div className="flex items-center p-4 gap-2">
                    <Avatar className="ring-2 ring-gray-300" />
                    <div className="flex flex-col">
                      <Typography
                        variant="body2"
                        className="font-medium text-gray-900"
                      >
                        userName
                      </Typography>
                      <Typography variant="caption">email@gmail.com</Typography>
                    </div>
                  </div>
                  <MenuItem
                    className="flex gap-3 py-2 px-4 hover:bg-gray-100"
                    onClick={(e) =>
                      handleDropdownClose(e, "/pages/user-profile")
                    }
                  >
                    <RiUser3Line className="text-gray-700" />
                    <Typography color="text.primary">My Profile</Typography>
                  </MenuItem>
                  <MenuItem
                    className="flex gap-3 py-2 px-4 hover:bg-gray-100"
                    onClick={(e) =>
                      handleDropdownClose(e, "/pages/account-settings")
                    }
                  >
                    <RiSettings4Line className="text-gray-700" />
                    <Typography color="text.primary">Settings</Typography>
                  </MenuItem>
                  {/* <MenuItem
                    className="flex gap-3 py-2 px-4 hover:bg-gray-100"
                    onClick={(e) => handleDropdownClose(e, "/pages/pricing")}
                  >
                    <RiMoneyDollarCircleLine className="text-gray-700" />
                    <Typography color="text.primary">Pricing</Typography>
                  </MenuItem> */}
                  {/* <MenuItem
                    className="flex gap-3 py-2 px-4 hover:bg-gray-100"
                    onClick={(e) => handleDropdownClose(e, "/pages/faq")}
                  >
                    <RiQuestionLine className="text-gray-700" />
                    <Typography color="text.primary">FAQ</Typography>
                  </MenuItem> */}
                  <div className="flex items-center p-4">
                    <Button
                      fullWidth
                      variant="contained"
                      color="error"
                      size="small"
                      endIcon={<RiLogoutBoxRLine />}
                      onClick={handleUserLogout}
                      className="bg-red-500 hover:bg-red-600 text-white shadow-none"
                    >
                      Logout
                    </Button>
                  </div>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  );
};

export default UserDropdown;
