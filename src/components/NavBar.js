import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/companyLogo.png";
import dashboardwhite from "../assets/darhboardwhite.png";
import dashboardblack from "../assets/darhboardblack.png";
import tiktokWhite from "../assets/tiktokwhite.svg";
import tiktokBlack from "../assets/tiktokblack.svg";
import facebookWhite from "../assets/facebookwhite.svg";
import facebookBlack from "../assets/facebookblack.svg";
import zaloWhite from "../assets/zalowhite.svg";
import zaloBlack from "../assets/zaloblack.svg";
import close from "../assets/close.png";
import chevronDown from "../assets/chevron-down.png";
import classNames from "classnames";
import bagwhite from "../assets/bagwhite.png";
import bagblack from "../assets/bagblack.png";
import deleteIcon from "../assets/delete.svg";
import { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../App.js";
import { LanguageContext } from "../App.js";
const NavBar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [dashboardVisibility, setDashboardVisibility] = useState(false);
  const [aboutUsVisibility, setAboutUsVisibility] = useState(false);
  const [productVisibility, setProductVisibility] = useState(false);
  const [insightVisibility, setInsightVisibility] = useState(false);
  const [cartVisibility, setCartVisibility] = useState(false);

  const [expandedSection, setExpandedSection] = useState("");

  const dashboardListRef = useRef(null);
  const dashboardAboutUs = useRef(null);
  const dashboardProduct = useRef(null);
  const dashboardInsight = useRef(null);

  const navAboutUs = useRef(null);
  const navProduct = useRef(null);
  const navInsight = useRef(null);

  const {
    cartContext,
    handleRemoveFromCart,
    handleIncrementCartItem,
    handleDecrementCartItem,
  } = useContext(CartContext);
  const { languageContext, handleToggleEnglish, handleToggleVietnamese } =
    useContext(LanguageContext);
  useEffect(() => {
    const handleScrollY = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScrollY);
    return () => {
      window.removeEventListener("scroll", handleScrollY);
    };
  }, []);

  const navList = [
    { name: languageContext === "english" ? "Home" : "Trang Chủ", href: "/" },
    {
      name: languageContext === "english" ? "About Us" : "Giới Thiệu",
      href: "/AboutUs",
      dashboardRef: dashboardAboutUs,
      navRef: navAboutUs,
      dropdownVisibility: aboutUsVisibility,
      dropdown: [
        {
          name: languageContext === "english" ? <>Our Team</> : <>Đội Ngũ</>,
          href: "/AboutUs/OurTeam",
        },
        { name: "FAQ", href: "/AboutUs/FAQ" },
        {
          name:
            languageContext === "english" ? (
              <>Join Us</>
            ) : (
              <>Tham Gia Chúng Tôi</>
            ),
          href: "/AboutUs/JoinUs",
        },
        {
          name: languageContext === "english" ? <>Contact Us</> : <>Liên Hệ</>,
          href: "/AboutUs/ContactUs",
        },
      ],
    },
    {
      name: languageContext === "english" ? <>Products</> : <>Sản Phẩm</>,
      href: "/Products",
      dashboardRef: dashboardProduct,
      navRef: navProduct,
      dropdownVisibility: productVisibility,
      dropdown: [
        {
          name:
            languageContext === "english" ? <>Medicines</> : <>Thuốc Y Tế</>,
          href: "/Products/Medicines",
        },
        {
          name:
            languageContext === "english" ? (
              <>Supplements</>
            ) : (
              <>Thực Phẩm Chức Năng</>
            ),
          href: "/Products/Supplements",
        },
        {
          name: languageContext === "english" ? <>Cosmetics</> : <>Mỹ Phẩm</>,
          href: "/Products/Cosmetics",
        },
        {
          name:
            languageContext === "english" ? (
              <>Medical Equipments</>
            ) : (
              <>Thiết Bị Y Tế</>
            ),
          href: "/Products/Medical-Equipments",
        },
      ],
    },
    {
      name:
        languageContext === "english" ? <>Insights</> : <>Tin Tức Sự Kiện</>,
      dashboardRef: dashboardInsight,
      navRef: navInsight,
      dropdownVisibility: insightVisibility,
      dropdown: [
        {
          name:
            languageContext === "english" ? <>Researchs</> : <>Nghiên Cứu</>,
          href: "/Insights/Researchs",
        },
        {
          name: languageContext === "english" ? <>Articles</> : <>Tin Tức</>,
          href: "/Insights/Articles",
        },
      ],
    },
    {
      name:
        languageContext === "english" ? <>Retailers</> : <>Các Nhà Phân Phối</>,
      href: "/OurRetailers",
    },
  ];

  const handleCloseNavBar = () => {
    setDashboardVisibility(false);
  };
  const handleOpenNavBar = () => {
    setDashboardVisibility(true);
  };
  const handleCloseCart = () => {
    setCartVisibility(false);
  };
  const handleOpenCart = () => {
    setCartVisibility(true);
  };
  const handleToggleSection = (e) => {
    if (
      dashboardAboutUs.current.contains(e.target) &&
      expandedSection !== "About Us"
    ) {
      setExpandedSection("About Us");
    } else if (
      dashboardProduct.current.contains(e.target) &&
      expandedSection !== "Products"
    ) {
      setExpandedSection("Products");
    } else if (
      dashboardInsight.current.contains(e.target) &&
      expandedSection !== "Insights"
    ) {
      setExpandedSection("Insights");
    } else {
      setExpandedSection("none");
    }
  };
  const handleShowDropdown = (e) => {
    if (navAboutUs.current && navAboutUs.current.contains(e.target)) {
      setAboutUsVisibility(true);
    } else if (navProduct.current && navProduct.current.contains(e.target)) {
      setProductVisibility(true);
    } else if (navInsight.current && navInsight.current.contains(e.target)) {
      setInsightVisibility(true);
    }
  };
  const handleHideDropdown = (e) => {
    if (navAboutUs.current && navAboutUs.current.contains(e.target)) {
      setAboutUsVisibility(false);
    } else if (navProduct.current && navProduct.current.contains(e.target)) {
      setProductVisibility(false);
    } else if (navInsight.current && navInsight.current.contains(e.target)) {
      setInsightVisibility(false);
    }
  };
  const handleOpenFacebook = () => {
    window.open("https://www.facebook.com/Phuongminhpharma123", "_blank");
  };
  const handleOpenTiktok = () => {
    window.open("  https://www.tiktok.com/@gamucidntc.pharma", "_blank");
  };
  const handleOpenZalo = () => {
    window.open("https://zalo.me/4122427993092412872", "_blank");
  };
  return (
    <div>
      <div
        className={classNames(
          "fixed z-[100] flex h-full w-full items-center justify-center bg-gray-600 bg-opacity-35",
          { block: cartVisibility, hidden: !cartVisibility },
        )}
      >
        <div className="z-[101] m-auto flex h-full w-full flex-col justify-between bg-white sm:h-auto sm:w-[35rem] sm:overflow-hidden sm:rounded-md">
          <div className="flex justify-between border-b-2 px-6 py-4">
            <h4 className="">
              {languageContext === "english" ? (
                <>Your Shopping Cart</>
              ) : (
                <>Giỏ Hàng</>
              )}
            </h4>
            <img
              src={close}
              className="h-10 w-10 cursor-pointer p-2"
              onClick={handleCloseCart}
            />
          </div>
          <div className="flex h-full flex-col gap-4 overflow-x-hidden overflow-y-scroll px-6 py-4 sm:h-96">
            {cartContext.cartList.length === 0 ? (
              <h5 className="m-auto text-[#838B93]">
                {languageContext === "english" ? (
                  <>No item has been added</>
                ) : (
                  <>Chưa có sản phẩm nào được thêm vào giỏ</>
                )}
              </h5>
            ) : (
              cartContext.cartList.map((item) => {
                return (
                  <div className="flex items-center justify-between">
                    <div className="">
                      <h5>{languageContext === "english" ? item.itemNameEnglish : item.itemNameVietnamese}</h5>
                      <p>
                        {item.itemTotal.replace(
                          /(\d)(?=(\d{3})+(?!\d))/g,
                          "$1,",
                        )}{" "}
                        VND x {item.itemQuantity} ={" "}
                        {String(item.itemTotal * item.itemQuantity).replace(
                          /(\d)(?=(\d{3})+(?!\d))/g,
                          "$1,",
                        )}{" "}
                        VND
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex min-w-[4.4rem] gap-1 rounded-[0.625rem] border-[0.15rem] border-[#00378A] px-3 py-2">
                        <h5>{item.itemQuantity}</h5>
                        <div className="ml-2 flex flex-col justify-center gap-[0.35rem]">
                          <div
                            onClick={() => {
                              handleIncrementCartItem(
                                item.itemId,
                                item.itemSubtotal,
                                item.itemTotal,
                              );
                            }}
                            class="h-0 w-0 cursor-pointer border-b-[10.5px] border-l-[7px]
                  border-r-[7px] border-black border-l-transparent border-r-transparent"
                          ></div>
                          <div
                            onClick={() => {
                              handleDecrementCartItem(
                                item.itemId,
                                item.itemSubtotal,
                                item.itemTotal,
                              );
                            }}
                            class="h-0 w-0 cursor-pointer border-l-[7px] border-r-[7px]
                border-t-[10.5px] border-black border-l-transparent border-r-transparent"
                          ></div>
                        </div>
                      </div>
                      <img
                        className="cursor-pointer"
                        onClick={() => {
                          handleRemoveFromCart(
                            item.itemId,
                            item.itemQuantity,
                            item.itemSubtotal,
                            item.itemTotal,
                          );
                        }}
                        src={deleteIcon}
                      />
                    </div>
                  </div>
                );
              })
            )}
          </div>
          <div className="flex h-24 justify-between border-t-2 px-6 py-4">
            <div className="grid grid-cols-2 grid-rows-2 gap-x-3">
              <h5>
                {languageContext === "english" ? (
                  <>Subtotal</>
                ) : (
                  <>Giá Trước Giảm</>
                )}
              </h5>
              <h5>
                {String(cartContext.subtotal).replace(
                  /(\d)(?=(\d{3})+(?!\d))/g,
                  "$1,",
                )}{" "}
                VND
              </h5>
              <h5>
                {languageContext === "english" ? <>Total</> : <>Thành Tiền</>}
              </h5>
              <h5>
                {String(cartContext.total).replace(
                  /(\d)(?=(\d{3})+(?!\d))/g,
                  "$1,",
                )}{" "}
                VND
              </h5>
            </div>
            {cartContext.cartList.length === 0 ? (
              <h5
                to={"/Order"}
                className="hidden rounded-md bg-[#838B93]  px-12 py-4 text-white lg:block"
              >
                Order
              </h5>
            ) : (
              <Link
                to={"/Order"}
                className="hidden rounded-md bg-[#00378A]  px-12 py-4 text-white lg:block"
              >
                {languageContext === "english" ? <>Order</> : <>Đặt Hàng</>}
              </Link>
            )}
          </div>
        </div>
      </div>
      <div
        className={classNames(
          "no-scrollbar scroll fixed z-40 h-screen w-[18rem] overflow-y-auto bg-white",
          {
            block: dashboardVisibility,
            hidden: !dashboardVisibility,
          },
        )}
        onClick={handleToggleSection}
      >
        <div className="flex items-center justify-between p-4">
          <img src={logo} className="w-[4rem]" />
          <img
            className="cursor-pointer"
            src={close}
            onClick={handleCloseNavBar}
          />
        </div>
        <div
          className={classNames(
            "flex flex-col items-start gap-2 overflow-hidden p-2 px-6",
          )}
          ref={dashboardListRef}
        >
          {navList.map((item) => {
            if (!("dropdown" in item)) {
              return <Link to={item.href}>{item.name}</Link>;
            } else {
              return (
                <div className="w-full">
                  <div
                    className={classNames("dashboardDropdown", {
                      "[&>*:nth-child(2)]:-rotate-180":
                        expandedSection === item.name,
                    })}
                    onClick={handleToggleSection}
                    ref={item.dashboardRef}
                  >
                    <h5 className="text-[#0183C]">{item.name}</h5>
                    <img className="w-6" src={chevronDown} />
                  </div>
                  <div
                    className={classNames(
                      "ml-4 flex flex-col overflow-hidden text-start transition-[max-height] duration-300 ease-in-out",
                      {
                        "max-h-[20rem]": expandedSection === item.name,
                        "max-h-0": !(expandedSection === item.name),
                      },
                    )}
                  >
                    {item.dropdown.map((dropdownItem) => {
                      return (
                        <Link to={dropdownItem.href}>{dropdownItem.name}</Link>
                      );
                    })}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div
        className={classNames(
          "fixed z-30 flex w-full items-center justify-between px-4 lg:px-12",
          {
            " bg-transparent": scrollY === 0,
            " bg-white": scrollY !== 0,
          },
        )}
      >
        <img src={logo} alt="logo" className="center h-12 w-12"></img>
        <div
          className={classNames("hidden justify-center text-center lg:flex", {
            "text-white": scrollY === 0,
            "text-[#00183C]": scrollY !== 0,
          })}
        >
          {navList.map((item) => {
            if (!("dropdown" in item)) {
              return (
                <Link
                  to={item.href}
                  className="navLinkEffects py-8 lg:px-2 xl:px-8 2xl:px-10"
                >
                  {item.name}
                </Link>
              );
            } else {
              return (
                <div
                  onMouseLeave={handleHideDropdown}
                  ref={item.navRef}
                  className="py-8"
                >
                  {item.href ? (
                    <Link
                      to={item.href}
                      className="navLinkEffects py-8 lg:px-2 xl:px-8 2xl:px-10"
                      onMouseOver={handleShowDropdown}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <h5
                      className="navLinkEffects lg:px-6 xl:px-8 2xl:px-10"
                      onMouseOver={handleShowDropdown}
                    >
                      {item.name}
                    </h5>
                  )}
                  <div
                    className={classNames(
                      "absolute mt-8 min-w-52 -translate-y-2 rounded-[0.625rem] border-[1px] border-[#6868914b] bg-white px-4 py-5",
                      {
                        block: item.dropdownVisibility,
                        hidden: !item.dropdownVisibility,
                      },
                    )}
                  >
                    <div className="flex flex-col text-start text-black">
                      {item.dropdown.map((dropdownItem) => {
                        return (
                          <Link
                            to={dropdownItem.href}
                            className=" extendLink flex items-center"
                          >
                            <div className="mr-0 h-[2px] w-0 bg-[#00378A]"></div>
                            <h5 className="link p-2">{dropdownItem.name}</h5>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="flex items-center gap-2 sm:gap-4 lg:gap-6 2xl:gap-8">
          <div
            className={classNames("flex", {
              "text-white": scrollY === 0,
              "text-[#00183C]": scrollY !== 0,
            })}
          >
            <h5 className="cursor-pointer" onClick={handleToggleVietnamese}>
              VI
            </h5>
            <h5>&nbsp;|&nbsp;</h5>
            <h5 className="cursor-pointer" onClick={handleToggleEnglish}>
              EN
            </h5>
          </div>

          <div className="relative cursor-pointer" onClick={handleOpenCart}>
            <img
              src={scrollY === 0 ? bagwhite : bagblack}
              alt="dashboard"
              className="h-10"
            ></img>
            <p className="absolute bottom-[1.125rem] left-[1.225rem] rounded-lg bg-[#00378A] px-[0.475rem] py-[0.2rem] text-center text-sm text-white">
              {cartContext.quantity < 100 ? cartContext.quantity : "99+"}
            </p>
          </div>

          <img
            src={scrollY === 0 ? dashboardwhite : dashboardblack}
            alt="dashboard"
            className="h-9 w-9 cursor-pointer lg:hidden lg:h-0 lg:w-0"
            onClick={handleOpenNavBar}
          ></img>
          <div className="hidden h-8 gap-6 lg:flex ">
            <img
              className="h-8 w-8 cursor-pointer"
              src={scrollY === 0 ? facebookWhite : facebookBlack}
              onClick={handleOpenFacebook}
            ></img>
            <img
              className="h-8 w-8 cursor-pointer"
              src={scrollY === 0 ? tiktokWhite : tiktokBlack}
              onClick={handleOpenTiktok}
            ></img>
            <img
              className="h-8 w-8 cursor-pointer"
              src={scrollY === 0 ? zaloWhite : zaloBlack}
              onClick={handleOpenZalo}
            ></img>
          </div>
        </div>
      </div>
      <div className="fixed bottom-4 left-4 z-[9999] flex flex-col gap-6 lg:hidden">
        <img
          className="h-10 w-10 cursor-pointer"
          src={
            scrollY + window.innerHeight < 744 ? facebookWhite : facebookBlack
          }
          onClick={handleOpenFacebook}
        ></img>
        <img
          className="h-10 w-10 cursor-pointer"
          src={scrollY + window.innerHeight < 744 ? tiktokWhite : tiktokBlack}
          onClick={handleOpenTiktok}
        ></img>
        <img
          className="h-10 w-10 cursor-pointer"
          src={scrollY + window.innerHeight < 744 ? zaloWhite : zaloBlack}
          onClick={handleOpenZalo}
        ></img>
      </div>
    </div>
  );
};

export default NavBar;
