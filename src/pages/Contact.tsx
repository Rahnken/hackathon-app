import { LayoutPage } from "../components/Layouts/LayoutPage";

export default function Contact() {
  return (
    <LayoutPage>
      <h2>Contact</h2>
      {/* <!--       TODO: Refactor out into a creator card --> */}
      <div className="grid-container">
        {/* <!--             <CreatorCard name="Jessica" img="img..." socials= [socials]/>  --> */}
        <div className="person-one">
          <h4 className="Name">Jessica Pickens</h4>
          <div className="img-container">
            <img src="src/img/RickJess.png" alt="Rick and Morty Jess" />
          </div>
          <ul>
            <li>facebook</li>
            <li>linkedin</li>
            <li>Github</li>
            <li>email</li>
          </ul>
        </div>
        <div className="person-one">
          <h4 className="Name">Eric Donnelly</h4>
          <div className="img-container">
            <img src="src/img/RickEric.png" alt="Rick and Morty Eric" />
          </div>
          <ul>
            <li>facebook</li>
            <li>
              linkedin{" "}
              <a
                href="https://www.linkedin.com/in/erdonnelly/"
                id="linkedin"
              ></a>
            </li>
            <li>
              Github <a href="https://github.com/Rahnken" id="git"></a>
            </li>
            <li>email</li>
          </ul>
        </div>
        <div className="person-one">
          <h4 className="Name">Jon Duff</h4>
          <div className="img-container">
            <img src="src/img/RickJon.png" alt="Rick and Morty Jon" />
          </div>
          <ul>
            <li>
              linkedin{" "}
              <a
                href="https://www.linkedin.com/in/jonathan-duff"
                id="linkedin"
              ></a>
            </li>
            <li>
              GitHub <a href="https://github.com/DuffCoding" id="git"></a>
            </li>
            <li>duffx069@umn.edu</li>
          </ul>
        </div>
      </div>
    </LayoutPage>
  );
}
