"use client";
import React from "react";
import { Shield, Lock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            src="https://Homesonwheels.com/wp-content/uploads/2023/11/containers2.jpeg"
            alt="Container Homes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col items-center">
              <Shield className="w-16 h-16 text-white mb-6" />
              <h1 className="text-5xl font-bold mb-6 text-center text-white">
                Privacy Policy
              </h1>
              <p className="text-xl text-center text-gray-200 max-w-2xl mx-auto">
                for Homesonwheels
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl p-8 shadow-lg space-y-8">
          <section>
            <p className="text-gray-600">
              At Homesonwheels, accessible from https://homesonwheelss.com/, one
              of our main priorities is the privacy of our visitors. This
              Privacy Policy document contains types of information that is
              collected and recorded by Homesonwheels and how we use it.
            </p>
            <p className="text-gray-600 mt-4">
              If you have additional questions or require more information about
              our Privacy Policy, do not hesitate to contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Log Files</h2>
            <p className="text-gray-600">
              Homesonwheels follows a standard procedure of using log files.
              These files log visitors when they visit websites. All hosting
              companies do this and a part of hosting services' analytics. The
              information collected by log files include internet protocol (IP)
              addresses, browser type, Internet Service Provider (ISP), date and
              time stamp, referring/exit pages, and possibly the number of
              clicks. These are not linked to any information that is personally
              identifiable. The purpose of the information is for analyzing
              trends, administering the site, tracking users' movement on the
              website, and gathering demographic information. Our Privacy Policy
              was created with the help of the Privacy Policy Generator.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Cookies and Web Beacons</h2>
            <p className="text-gray-600">
              Like any other website, Homesonwheels uses "cookies". These
              cookies are used to store information including visitors'
              preferences, and the pages on the website that the visitor
              accessed or visited. The information is used to optimize the
              users' experience by customizing our web page content based on
              visitors' browser type and/or other information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Privacy Policies</h2>
            <p className="text-gray-600">
              You may consult this list to find the Privacy Policy for each of
              the advertising partners of Homesonwheels.
            </p>
            <p className="text-gray-600 mt-4">
              Third-party ad servers or ad networks uses technologies like
              cookies, JavaScript, or Web Beacons that are used in their
              respective advertisements and links that appear on Homesonwheels,
              which are sent directly to users' browser. They automatically
              receive your IP address when this occurs. These technologies are
              used to measure the effectiveness of their advertising campaigns
              and/or to personalize the advertising content that you see on
              websites that you visit.
            </p>
            <p className="text-gray-600 mt-4">
              Note that Homesonwheels has no access to or control over these
              cookies that are used by third-party advertisers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Third Party Privacy Policies
            </h2>
            <p className="text-gray-600">
              Homesonwheels's Privacy Policy does not apply to other advertisers
              or websites. Thus, we are advising you to consult the respective
              Privacy Policies of these third-party ad servers for more detailed
              information. It may include their practices and instructions about
              how to opt-out of certain options.
            </p>
            <p className="text-gray-600 mt-4">
              You can choose to disable cookies through your individual browser
              options. To know more detailed information about cookie management
              with specific web browsers, it can be found at the browsers'
              respective websites. What Are Cookies?
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Children's Information</h2>
            <p className="text-gray-600">
              Another part of our priority is adding protection for children
              while using the internet. We encourage parents and guardians to
              observe, participate in, and/or monitor and guide their online
              activity.
            </p>
            <p className="text-gray-600 mt-4">
              Homesonwheels does not knowingly collect any Personal Identifiable
              Information from children under the age of 13. If you think that
              your child provided this kind of information on our website, we
              strongly encourage you to contact us immediately and we will do
              our best efforts to promptly remove such information from our
              records.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Online Privacy Policy Only
            </h2>
            <p className="text-gray-600">
              This Privacy Policy applies only to our online activities and is
              valid for visitors to our website with regards to the information
              that they shared and/or collect in Homesonwheels. This policy is
              not applicable to any information collected offline or via
              channels other than this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Consent</h2>
            <p className="text-gray-600">
              By using our website, you hereby consent to our Privacy Policy and
              agree to its Terms and Conditions.
            </p>
          </section>
        </div>

        {/* Last Updated */}
        <div className="mt-8 text-center text-gray-500">
          Last updated: January 2025
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
