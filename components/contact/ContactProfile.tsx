import ProfileCard from "./ProfileCard";

const ContactProfile = () => {
  return (
    <div className="flex flex-col mt-12 items-center lg:items-end gap-8">
      <ProfileCard
        name="Adrishikhar Chowdhury"
        title="Full Stack Dev"
        handle="AdrishikharChowdhury"
        status="Available"
        contactText="Contact"
        avatarUrl="/ac.png"
        miniAvatarUrl="/logo.png"
        showUserInfo
        enableTilt
        onContactClick={() => window.open("mailto:adrishikharc@gmail.com")}
      />
    </div>
  );
};

export default ContactProfile;
