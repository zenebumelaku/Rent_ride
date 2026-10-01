import {
  FooterCopyright,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footers = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-[100px] rounded-none bg-black p-10 pb-[100px] text-white lg:mt-[200px] lg:pt-[100px]">
      <div className="w-full">
        <div className="grid w-full justify-between gap-y-10 pb-10 sm:flex sm:justify-between md:flex md:grid-cols-1 lg:px-10">
          <div className="max-w-md">
            <div className="mb-4 py-2 text-[18px] font-bold lg:text-[24px]">
              <h1>Rent a Ride</h1>
            </div>
            <p className="text-sm text-gray-300">
              Premium vehicle rentals for city rides, weekend escapes, and every
              journey in between.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle title="About" className="text-justify" />
              <FooterLinkGroup col>
                <FooterLink href="#">Rent a Ride</FooterLink>
                <FooterLink href="#">Car rental</FooterLink>
                <FooterLink href="#">Travel plans</FooterLink>
              </FooterLinkGroup>
            </div>

            <div>
              <FooterTitle title="Follow us" className="text-justify" />
              <FooterLinkGroup col>
                <FooterLink href="https://github.com/zenebumelaku">
                  GitHub
                </FooterLink>
                <FooterLink href="https://www.linkedin.com/in/zenebu-melaku-7b9331225/">
                  LinkedIn
                </FooterLink>
              </FooterLinkGroup>
            </div>

            <div>
              <FooterTitle title="Legal" className="text-justify" />
              <FooterLinkGroup col>
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Terms &amp; Conditions</FooterLink>
                <FooterLink href="#">Support</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>

        <hr className="pt-10 lg:m-10 lg:px-10" />

        <div className="w-full sm:flex sm:items-center sm:justify-between lg:px-10">
          <FooterCopyright href="#" by="Rent a Ride" year={currentYear} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon
              href="https://www.linkedin.com/in/zenebu-melaku-7b9331225/"
              icon={BsLinkedin}
            />
            <FooterIcon
              href="https://github.com/zenebumelaku"
              icon={BsGithub}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footers;
