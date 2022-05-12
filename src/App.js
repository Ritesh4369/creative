import './App.css';
import logo1 from './images/logo.svg'
import logo2 from './images/creative-logo-white.svg'
import slider from './images/JS-Development1.jpg'
import video1 from './video/multimedia-training-institute.mp4'
import video2 from './video/graphics-animation-course.mp4'
import video3 from './video/it-training-institute.mp4'
import video4 from './video/letest-technology-course.mp4'
import video5 from './video/civil-engineering-course.mp4'
import video6 from './video/mechanical-engineering-course.mp4'
import about from './images/about-us.jpg'
import about1 from './images/testimonial_shape.png'
import about2 from './images/vigna_-laravel-developer.jpeg'
import company1 from './images/Patoliya-infotech.png'
import company2 from './images/Appgenix-Infotech1.png'
import company3 from './images/iOS.png'
import company4 from './images/Oliveconcepts.png'
import company5 from './images/Jk-sol.png'
import company6 from './images/tigma1.jpg'
function App() {
  return (
    <>
      <html>
        <body>
          {/*----------------------------------------------------------------------------------------------------------
                                                              Header
          -----------------------------------------------------------------------------------------------------------*/}
          <header>
            <div className="bg_blue">
              <div className="container flex space_between">
                <ul className="main_header flex">
                  <li><a href="#"><i className="fa-solid fa-envelope"></i>info@cdmi.in</a></li>
                  <li><a href="#"><i className="fa-solid fa-certificate"></i>Verify Certificate</a></li>
                </ul>
                <ul className="main_header">
                  <li><a href="#">HAVE ANY QUESTION ? +91 90333 16003</a></li>
                </ul>
                <ul className="main_header" id="mh">
                  <li><a href="#"><i className="fa-brands fa-facebook-f"></i><i className="fa-brands fa-twitter"></i><i className="fa-brands fa-google-plus-g"></i><i className="fa-brands fa-linkedin"></i><i className="fa-brands fa-instagram"></i><i className="fa-brands fa-youtube"></i><i className="fa-brands fa-whatsapp"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="container flex align_items_center">
              <div className="logo">
                <a href="#"><img src={logo1} width={225} /></a>
              </div>
              <nav>
                <ul className="main_menu flex">
                  <li><a href="#" className="text_yellow">Home</a></li>
                  <li>
                    <a href="#">COURSES<i class="fa-solid fa-angle-down"></i></a>
                    <div className="mega_menu">
                      <div className="menu_courses flex">
                        <ul className="course">
                          <li><h6>Multimedia Courses</h6></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>Master In Web Design</a></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>Master In Web Devlopment</a></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>Master In Game Devlopment</a></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>Master In 2D/3D Animation</a></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>Master In Full Stack Development</a></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>Master In Android Development</a></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>Master In Flutter Development</a></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>Master in UI/UX Design</a></li>
                        </ul>
                        <ul className="course">
                          <li><h6>UI/UX & Graphics Design</h6></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>Advance Graphics Design</a></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>Video Editing</a></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>Maya Pro</a></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>Blender 3D Design</a></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>2D/3D Game Design</a></li>
                        </ul>
                        <ul className="course">
                          <li><h6>Programming IT</h6></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>C Programming</a></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>C++ Programming</a></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>Java Programming</a></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>IOS</a></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>Advance PHP</a></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>Laravel</a></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>Wordpress</a></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>CodeIgniter</a></li>
                        </ul>
                        <ul className="course">
                          <li><h6>Trendy Courses</h6></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>Node JS</a></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>Angular JS</a></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>React JS</a></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>Ethical Hacking</a></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>Unity 3D</a></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>Python</a></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>React Native</a></li>
                        </ul>
                        <ul className="course">
                          <li><h6>CIVIL-MECH. ENGINEERING</h6></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>AutoCAD (Civil)</a></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>3Ds Max</a></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>Google SketchUp</a></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>Lumion</a></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>Revit Architecture</a></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>Interior & Exterior Design</a></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>AutoCAD(Mech.)</a></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>SolidWorks</a></li>
                        </ul>
                        <ul className="course">
                          <li><h6>Business Development</h6></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>Digital Marketing</a></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>Personality Development</a></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>Entrepreneurship Development</a></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>Corporate English</a></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>Social Media Marketing</a></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>Master In Data Analytics</a></li>
                        </ul>
                        <ul className="course">
                          <li><h6>Short Term Courses</h6></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>Adobe Illustrator</a></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>Adobe XD</a></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>Tally Accounting</a></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>CCC- Basic Computer Course</a></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>Photoshop</a></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>CorelDraw</a></li>
                        </ul>
                        <ul className="course">
                          <li><h6>Film Making & VFX COURSES</h6></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>Film Making</a></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>Film Editing & VFX</a></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>Cinematography</a></li>
                          <li><a href="#"><i class="fa-solid fa-circle-check"></i>TV Journalism</a></li>
                        </ul>
                      </div>




                    </div>
                  </li>

                  <li><a href="#">COLLEGE COURSES</a></li>
                  <li>
                    <a href="#">ACTIVITIES<i class="fa-solid fa-angle-down"></i></a>
                    <ul className="sub_menu">
                      <li><a href="#">Gallery</a></li>
                      <li><a href="#">Events</a></li>
                    </ul>
                  </li>
                  <li><a href="#">BLOG</a></li>
                  <li>
                    <a href="#">KNOW US<i class="fa-solid fa-angle-down"></i></a>
                    <ul className="sub_menu">
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Success Stories</a></li>
                      <li><a href="#">Placement Partners</a></li>
                    </ul>
                  </li>
                  <li><a href="#">GET IN TOUCH</a></li>
                  <li>
                    <a href="#">STUDENT ZONE<i class="fa-solid fa-angle-down"></i></a>
                    <ul className="sub_menu">
                      <li><a href="#">Student Login</a></li>
                      <li><a href="#">Showcase</a></li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          {/*----------------------------------------------------------------------------------------------------------
                                                              slider
          -----------------------------------------------------------------------------------------------------------*/}
          <div className="slider">
            <img src={slider} />
          </div>
          {/*----------------------------------------------------------------------------------------------------------
                                                              CREATIVE COURSE
          -----------------------------------------------------------------------------------------------------------*/}
          <section className="Courses">
            <div className=" heading_courses container">
              <p>CREATIVE COURSE</p>
              <h2>OFFERED COURSES</h2>
            </div>
          </section>
          <div className="flex container">
            <div className="Courses1">
              <video src={video1} width={350} autoPlay="true" loop="true" />
              <h4>Multimedia Courses</h4>
              <div className="flex know_more" >
                <div className="course_star">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half"></i>
                </div>
                <div className="course_button">
                  <button>Know More..!</button>
                </div>
              </div>
            </div>
            <div className="Courses1">
              <video src={video2} width={350} autoPlay="true" loop="true" />
              <h4>UI/UX & Graphics Design</h4>
              <div className="flex know_more" >
                <div className="course_star">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half"></i>
                </div>
                <div className="course_button">
                  <button>Know More..!</button>
                </div>
              </div>
            </div>
            <div className="Courses1  ">
              <video src={video3} width={350} autoPlay="true" loop="true" />
              <h4>Programming IT</h4>
              <div className="flex know_more" >
                <div className="course_star">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half"></i>
                </div>
                <div className="course_button">
                  <button>Know More..!</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex container">
            <div className="Courses1">
              <video src={video4} width={350} autoPlay="true" loop="true" />
              <h4>Trendy Courses</h4>
              <div className="flex know_more" >
                <div className="course_star">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half"></i>
                </div>
                <div className="course_button">
                  <button>Know More..!</button>
                </div>
              </div>
            </div>
            <div className="Courses1">
              <video src={video5} width={350} autoPlay="true" loop="true" />
              <h4>Civil-Mech. Engineering</h4>
              <div className="flex know_more" >
                <div className="course_star">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half"></i>
                </div>
                <div className="course_button">
                  <button>Know More..!</button>
                </div>
              </div>
            </div>
            <div className="Courses1">
              <video src={video6} width={350} autoPlay="true" loop="true" />
              <h4>Business Development</h4>
              <div className="flex know_more" >
                <div className="course_star">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half"></i>
                </div>
                <div className="course_button">
                  <button>Know More..!</button>
                </div>
              </div>
            </div>
          </div>
          <div className="container view_all_cours flex">
            <button>View All Courses <i class="fa-solid fa-arrow-right"></i></button>
          </div>

          {/*----------------------------------------------------------------------------------------------------------
                                                              About Us
          -----------------------------------------------------------------------------------------------------------*/}
          <section className="About_us flex">
            <div className="About_text">
              <p>About Us</p>
              <h6>IT Career in Surat, moving towards the better Tomorrow!</h6>
              <h5>Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Surat for web design, Game design,Mobile App Development, Game Development ,Video Editing & All types of IT Courses with 7 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.</h5>
              <button>Enroll Now..! <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="About_video">
              <img src={about} /><a href="https://www.youtube.com/watch?v=Vnap7ADkQKA"><i class="fa-solid fa-play"></i></a>
            </div>
          </section>
          <div className="Happy_student container flex">
            <div className="student_about">
              <p>HAPPY STUDENT</p>
              <h2>ALUMNI SPEAK</h2>
              <h6>My self vigna thesiya
                The creative multimedia institute is the best institute specially Mr.Paresh sir is the best trainer for Manual as well as front-end development, He will teach us the easiest and excellent way with real-time examples, Projects like student can easily understand.I got best training from him, also institute will mainly focus for student bright carriers.I strongly recommend to students to get best career option at creative multimedia institute.</h6>
              <div className="student">
                <div className="student_imgage">
                  <img src={about2} width={80} />
                </div>
                <div className="student_detail">
                  <h5 className="text_blue">Vigna Thesiya</h5>
                  <span className="text_yellow">Laravel Developer</span>
                  <span> @BytezTech</span>
                </div>
              </div>
            </div>
            <div className="student_img">
              <img src={about1} width={550} />
            </div>
          </div>

          {/*----------------------------------------------------------------------------------------------------------
                                                              WHY CHOOSE CREATIVE
          -----------------------------------------------------------------------------------------------------------*/}
          <section className="Courses bg_gray">
            <div className=" heading_courses container">
              <p>READ OUR DIFFERENCE</p>
              <h2>WHY CHOOSE CREATIVE</h2>
            </div>
          </section>
          <div className="bg_gray">
            <div className="main_box container flex">
              <div className="sub_box">
                <i class="fa-brands fa-superpowers"></i>
                <h5>Industry experts as Trainers</h5>
                <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
              </div>
              <div className="sub_box">
                <i class="fa-brands fa-superpowers"></i>
                <h5>Latest Curriculum</h5>
                <p>We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time.</p>
              </div>
              <div className="sub_box">
                <i class="fa-brands fa-superpowers"></i>
                <h5>Latest Technology</h5>
                <p>We strive to let you have a solid foundational knowledge of technologies shaping the IT World today.</p>
              </div>
            </div>
            <div className="main_box container flex">
              <div className="sub_box">
                <i class="fa-brands fa-superpowers"></i>
                <h5>Interview Assistance</h5>
                <p>At the end of each training,our training instructor will go through the possible technical questions you may be asked.</p>
              </div>
              <div className="sub_box">
                <i class="fa-brands fa-superpowers"></i>
                <h5>Free Upgradation</h5>
                <p>We will be provided free upgradation for any newer version of the course you have.</p>
              </div>
              <div className="sub_box">
                <i class="fa-brands fa-superpowers"></i>
                <h5>Lifetime Support</h5>
                <p>We will provide you lifetime support on all the courses you learned from us.</p>
              </div>
            </div>
          </div>

          {/*----------------------------------------------------------------------------------------------------------
                                                              STUDENT PLACEMENT
          -----------------------------------------------------------------------------------------------------------*/}
          <section className="Courses">
            <div className=" heading_courses container">
              <p>STUDENT PLACEMENT</p>
              <h2>OUR RECRUITMENT PARTNERS</h2>
            </div>
          </section>
          <div className="placement container flex">
            <div className="company1">
              <a href="#"><img src={company1} /></a>
            </div>
            <div className="company1">
              <a href="#"><img src={company2} /></a>
            </div>
            <div className="company1">
              <a href="#"><img src={company3} /></a>
            </div>
            <div className="company1">
              <a href="#"><img src={company4} /></a>
            </div>
            <div className="company1">
              <a href="#"><img src={company5} /></a>
            </div>
            <div className="company1">
              <a href="#"><img src={company6} /></a>
            </div>
          </div>
          <section className="Demanded_Course container">
            <h5>Our Demanded Course -</h5>
            <div class="Dc">
              <a href="#">3d game development training institute in surat</a>
              <a href="#">C++ programming language training institute in adajan</a>
              <a href="#">Java training course</a>
              <a href="#">python training institute in katargam</a>
              <a href="#">react js training institute in surat</a>
              <a href="#">Creative design & multimedia training institute</a>
              <a href="#">Learn animation course</a>
              <a href="#">Graphics design training course</a>
              <a href="#">Graphics design training in varachha</a>
              <a href="#">Game design training institute in adajan</a>
              <a href="#">Civil engineering training institute in katargam</a>
              <a href="#">mechanical engineering training course</a>
              <a href="#">Web development training in varachha</a>
            </div>
          </section>
          <footer className="bg_blue footer">
            <div className="container flex space_between">
              <div className="col-4">
                <a href="#"><img src={logo2} /></a>
                <p>Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.</p>
                <h6 className="text_yellow">FOLLOW US ON</h6>
                <ul className="footer_icon">
                  <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                  <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fa-brands fa-google-plus-g"></i></a></li>
                  <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
                  <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                  <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                  <li><a href="#"><i class="fa-brands fa-whatsapp"></i></a></li>
                </ul>
              </div>
              <div className="col-3">
                <h6>FEATURE LINKS</h6>
                <ul className="footer_list">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Blogs</a></li>
                  <li><a href="#">Join Us</a></li>
                  <li><a href="#">Company Login</a></li>
                  <li><a href="#">Certificate Verification</a></li>
                </ul>
              </div>
              <div className="col-2">
                <h6>TRENDY COURSES</h6>
                <ul className="footer_list">
                  <li><a href="#">Python course training</a></li>
                  <li><a href="#">Node JS course training</a></li>
                  <li><a href="#">Angular JS course training</a></li>
                  <li><a href="#">React JS course training</a></li>
                  <li><a href="#">Unity 3D course training</a></li>
                  <li><a href="#">Ethical Hacking course training</a></li>
                  <li><a href="#">React Native course training
                  </a></li>
                </ul>
              </div>
              <div className="col-1">
                <h6>OUR BRANCHES</h6>
                <h6><a href="#" className="text_yellow">YOGICHOWK</a></h6>
                <span>401-404, 4th Floor, City Center, Nr. Yogichowk, Varachha, Surat - 395006.</span>
                <p>Mo : +91 90333 16003</p>
                <h6><a href="#" className="text_yellow">KATARGAM</a></h6>
                <span>327-334, 3rd Floor, Laxmi Enclave, Opp. Gajera School, Katargam, Surat - 395004.</span>
                <p>Mo : +91 90 3333 5009</p>
                <button><i class="fa-solid fa-binoculars"></i>Get Virtual Tour</button>
              </div>
            </div>
          </footer>
        </body>

      </html>
    </>
  );
}

export default App;
