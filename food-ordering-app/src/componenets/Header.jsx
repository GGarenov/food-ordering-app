export const Header = () => {
  return (
    <nav id="header" className="bg-black text-white">
      <div className="w-full contaoner mx-auto flex flex-wrap items-center justify-content-between mt-0 py-2">
        <div className="logo-wrapper pl-4 flex items-center">
          <img src={"/"} alt="logo" />
        </div>
        <div className="nav-menu-wrappe flex items-center justify-between space-x-10">
          <div>Home</div>
          <div>About</div>
        </div>
        <div className="flex items-center justify-center spaxe-x-4">
          <div>cart</div>
          <div>Log In</div>
          <div>Sign Up</div>
        </div>
      </div>
    </nav>
  );
};
