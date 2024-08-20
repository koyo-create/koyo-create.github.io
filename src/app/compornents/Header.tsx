import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <header className="container mx-auto">
        <div className="flex justify-between mx-auto container items-center flex-col md:flex-row p-5">
          <div className="font-medium mb-4 md:mb-0 text-2xl ml-10">
            <Link href="/">資産形成について</Link>
          </div>
          <nav className="md:ml-auto text-base">
          <Link
              href="Checklist"
              className="hover:text-gray-500 transition-all duration-300 mr-10"
            >
              確認事項
            </Link>
            <Link
              href="NISA"
              className="hover:text-gray-500 transition-all duration-300 mr-10"
            >
              NISA
            </Link>
            <Link
              href="InvestmentTrust"
              className="hover:text-gray-500 transition-all duration-300 mr-10"
            >
              投資信託
            </Link>
            <Link
              href="SecuritiesCompany"
              className="hover:text-gray-500 transition-all duration-300 mr-10"
            >
              証券会社
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
