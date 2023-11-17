import { LayoutPage } from "../components/Layouts/LayoutPage";

export default function Contact() {
  return (
    <LayoutPage>
          <h2>Contact</h2>
<!--       TODO: Refactor out into a creator card -->
          <div className="grid-container">
<!--             <CreatorCard name="Jessica" img="img..." socials= [socials]/>  -->
            <div className="person-one">
              <h4 className="Name">Jessica Pickens</h4>
              <div className="img-container">
                <img src="" alt="" />
              </div>
              <ul>
                <li>facebook</li>
                <li>linkin</li>
                <li>indeed</li>
                <li>email</li>
              </ul>
            </div>
            <div className="person-one">
              <h4 className="Name">Eric Donnelly</h4>
              <div className="img-container">
                <img src="" alt="" />
              </div>
              <ul>
                <li>facebook</li>
                <li>linkin</li>
                <li>indeed</li>
                <li>email</li>
              </ul>
            </div>
            <div className="person-one">
              <h4 className="Name">Jon Duff</h4>
              <div className="img-container">
                <img src="" alt="" />
              </div>
              <ul>
                <li>facebook</li>
                <li>linkin</li>
                <li>indeed</li>
                <li>email</li>
              </ul>
            </div>
          </div>
   </LayoutPage>
  );
}
