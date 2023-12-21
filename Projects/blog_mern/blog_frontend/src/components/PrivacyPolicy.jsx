import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-900 text-white p-6">
      <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
      <p className="mb-4">
        Welcome to our article platform! This Privacy Policy outlines how we collect,
        use, and protect the information you provide while using our service.
      </p>

      <h3 className="text-xl font-semibold mb-2">Data Collection</h3>
      <p className="mb-4">
        To create an account and post articles, we collect personal information including
        your name, email, and password. We may also collect additional information you
        provide in your profile.
      </p>

      <h3 className="text-xl font-semibold mb-2">Data Usage</h3>
      <p className="mb-4">
        Your information is used to identify you as a user, enable account creation,
        authenticate access to your account, and allow you to post articles.
        We do not share your personal information with third parties.
      </p>

      <h3 className="text-xl font-semibold mb-2">Data Security</h3>
      <p className="mb-4">
        We take security measures to protect your information against unauthorized access,
        alteration, disclosure, or destruction. However, please note that no method of
        transmission over the internet or electronic storage is completely secure.
      </p>

      <h3 className="text-xl font-semibold mb-2">Terms & Conditions</h3>
      <p className="mb-4">
        By creating an account and using our platform, you agree to comply with our
        Terms & Conditions. You are responsible for maintaining the confidentiality
        of your account information and agree to notify us immediately of any
        unauthorized use of your account.
      </p>

      <h3 className="text-xl font-semibold mb-2">Changes to Privacy Policy</h3>
      <p className="mb-4">
        We reserve the right to modify this Privacy Policy at any time. Any changes
        will be effective immediately upon posting the updated policy on this page.
        Your continued use of our service after any modifications to the Privacy Policy
        constitutes acceptance of those changes.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
