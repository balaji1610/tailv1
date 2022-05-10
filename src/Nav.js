import logo from "./logo.svg";

function Nav() {
  return (
    <section className="Navigation">
      <div classNav=" ">
        <div class="grid grid-cols-3 gap-4 Nav__Parent h-20 border-4 border-black-500 ">
          <div class="">
            <img src={logo} alt="ReactJs" className="Image__align" />
          </div>
          <div></div>

          <div class="Nav__list">
            <ul class="inline m-1 px-10">
              <li class="inline m-2 text-white font-bold uppercase hover:text-sky-500 hover:cursor-pointer  ">
                Home
              </li>
              <li class="inline m-2 text-white font-bold uppercase  hover:text-sky-500 hover:cursor-pointer">
                About Us
              </li>
              <li class="inline m-2 text-white font-bold uppercase hover:text-sky-500 hover:cursor-pointer">
                Services
              </li>
              <li class="inline m-2 text-white font-bold uppercase  hover:text-sky-500 hover:cursor-pointer">
                Contact Us
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nav;
