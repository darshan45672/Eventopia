import TeamComponent from "../components/mycustom/sections/teamcomponent";
import Image from "next/image";
import aboutImg from "../assets/images/eventopia.png";
function About(){
    return(
        // <TeamComponent/>
        <section>
        <div id="banner1" class="banner spacer">
        <div class="container">
        <div class="row">
        <div class="align-self-center col-md-7 col-lg-5">
        <h2 class="title font-bold">Welcome to Eventopia!</h2>
        <p class="m-t-40 m-b-30">
        AJIET College Event Registration is your one-stop solution for seamless event registration services for college events. We understand that college events are exciting and dynamic, and we are here to help you make them unforgettable experiences.
        </p>
       
        </div>
            <div class="align-self-center ml-auto col-md-5 col-lg-6">
                <div class="img-fluid" loading="lazy"/>
                <Image
                         src={aboutImg}
                          height="400"
                          width="500"
                          className="rounded "
                          alt="img"
                        />
                 </div>
        </div>
        </div>
        </div>
      
        </section>
    )
}

export default About;