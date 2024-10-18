import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">PEOPLE.CO</div>
      <div className="nav-profile">
        <i class="fa-regular fa-bell"></i>
        <img
          className="profile-img"
          src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg"
          alt="jane doe"
        />
        <p>Jane Doe</p>
      </div>
    </nav>
  );
}
