import React from "react";
import { useTranslation } from "react-i18next";
import rednoteIcon from "../assets/rednote_icon.png";
import facebookIcon from "../assets/facebook_icon.png";
import igIcon from "../assets/ig_icon.png";

export function AboutUs() {
  const { t, i18n } = useTranslation();

  const benefits = [
    {
      title: t("benefits.holistic.title"),
      description: t("benefits.holistic.description"),
    },
    {
      title: t("benefits.ancient.title"),
      description: t("benefits.ancient.description"),
    },
    {
      title: t("benefits.natural.title"),
      description: t("benefits.natural.description"),
    },
    {
      title: t("benefits.gentle.title"),
      description: t("benefits.gentle.description"),
    },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-24 pb-16">
        {/* Language Switcher */}
        <div className="max-w-4xl mx-auto px-4 mb-8"></div>

        <div className="max-w-4xl mx-auto px-4">
          {/* Brand History Section */}
          <section className="mb-16">
            <h1 className="text-4xl font-bold text-center mb-12">
              {t("story.title")}
            </h1>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-600 mb-6">{t("story.paragraph1")}</p>
              <p className="text-gray-600">{t("story.paragraph2")}</p>
            </div>
          </section>

          {/* TCVM Benefits Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">
              {t("benefits.title")}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Social Media Section */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-center mb-8">
              {t("social.title")}
            </h2>
            <div className="flex justify-center space-x-12">
              <a
                href="https://www.facebook.com/share/15yQ8YJHcQ/"
                className="transform hover:scale-110 transition-transform duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebookIcon} alt="Facebook" className="w-24 h-24" />
              </a>
              <a
                href="https://www.instagram.com/fluffyfeastca?igsh=MWhvODcxMXZra2kxbw=="
                className="transform hover:scale-110 transition-transform duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={igIcon} alt="Instagram" className="w-24 h-24" />
              </a>
              <a
                href="https://www.xiaohongshu.com/user/profile/6686c454000000000b03166c?xsec_token=YBrq5Csv2lLN4cnDMpTIXaOV_LPc2xPs1DjmEb0LekqPE=&xsec_source=app_share&xhsshare=CopyLink&appuid=6686c454000000000b03166c&apptime=1738815234&share_id=6d76a291a5be436db42d3fd4ababfd61"
                className="transform hover:scale-110 transition-transform duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={rednoteIcon}
                  alt="Xiaohongshu"
                  className="w-24 h-24"
                />
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
