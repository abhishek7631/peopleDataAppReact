import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="main">
      <section>
        <div className="menu">
          {" "}
          <i class="fa-solid fa-border-all"></i>Overview
        </div>
        <div className="menu">
          {" "}
          <i class="fa-solid fa-border-all"></i>Peopele Directory
        </div>
      </section>

      <section className="content">
        <div className="upperNav">
          <div className="name">
            <p>
              Team members{" "}
              <span class="badge text-primary border">100 users</span>
            </p>
          </div>
          <div className="addMember">
            <input type="search" placeholder="Search" />
            <i class="fa-solid fa-filter"></i>
            <button>+ ADD MEMBER</button>
          </div>
        </div>
      </section>
    </div>
  );
}
