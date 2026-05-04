import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import {
  brandTurquoise,
  logoUrl,
  siteContact,
  socialLinks,
} from "@/lib/siteContent";

const Footer = () => {
  const socialIcons = {
    LinkedIn: Linkedin,
    Facebook,
    Instagram,
  };

  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-16 text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="h-12 w-12 rounded-full border overflow-hidden transition-all"
                style={{ borderColor: `${brandTurquoise}4d` }}
              >
                <img
                  src={logoUrl}
                  alt="Addis Tech Group Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-lg font-semibold tracking-[0.14em] text-white sm:text-xl">
                Addis Tech Group
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-8">
              Engineering Ethiopia’s smart future through intelligent hardware,
              PCB design, and local expertise.
            </p>
            <div className="mb-4 flex gap-3">
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.name];

                if (!link.href) {
                  return (
                    <span
                      key={link.name}
                      title={`${link.name} URL still needs to be added in src/lib/siteContent.ts`}
                      className="flex h-11 w-11 cursor-not-allowed items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-500"
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                  );
                }

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.name}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-400 transition-colors hover:border-slate-700 hover:bg-slate-800 hover:text-cyan-300"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
            <a
              href={`mailto:${siteContact.email}`}
              className="inline-flex items-center gap-2 text-sm transition-colors hover:text-cyan-300"
            >
              <Mail className="h-4 w-4" />
              {siteContact.email}
            </a>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Company
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  to="/about"
                  className="transition-colors hover:text-cyan-300"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/#impact"
                  className="transition-colors hover:text-cyan-300"
                >
                  Our impact
                </Link>
              </li>
              <li>
                <Link
                  to="/training"
                  className="transition-colors hover:text-cyan-300"
                >
                  Training
                </Link>
              </li>
              <li>
                <a
                  href="mailto:customerservice@addispcb.com?subject=Career%20Inquiry"
                  className="transition-colors hover:text-cyan-300"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Solutions
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  to="/services"
                  className="transition-colors hover:text-cyan-300"
                >
                  PCB design
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="transition-colors hover:text-cyan-300"
                >
                  AddisThings IoT
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="transition-colors hover:text-cyan-300"
                >
                  Addis Medical
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="transition-colors hover:text-cyan-300"
                >
                  Hardware prototyping
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Support
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  to="/contact"
                  className="transition-colors hover:text-cyan-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${siteContact.email}?subject=Privacy%20Policy%20Request`}
                  className="transition-colors hover:text-cyan-300"
                >
                  Privacy policy
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteContact.email}?subject=Terms%20of%20Service%20Request`}
                  className="transition-colors hover:text-cyan-300"
                >
                  Terms of service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 text-center text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} Addis Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
