import React from 'react'
import '../patientStyles/patientAbout.css'
import {BsInstagram} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'

import { Link,useNavigate} from "react-router-dom";
const PatientAboutUs = () => {
  return (
    <div className='c__footer'>
      <div className='footer__about'>
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quas. Nihil et fugiat voluptatibus, enim sequi inventore optio corporis, quaerat asperiores ipsa unde ipsum adipisci! Ipsa laborum ab recusandae consectetur quibusdam! Quam dicta a dolorum quasi dolorem repellat, ipsa fugiat corrupti totam neque ratione! Quia ipsam suscipit inventore autem. Similique voluptas voluptatum ea ad aspernatur, sapiente saepe possimus necessitatibus maxime suscipit nobis tempora error sint totam itaque culpa eveniet dolorum iusto nesciunt beatae? Tenetur natus officia corrupti vitae sapiente, impedit est nihil fuga ducimus suscipit eum commodi itaque quae, omnis minus incidunt dolorum quibusdam nesciunt veniam laudantium unde veritatis? Ad odit impedit sunt, alias quos quae in, voluptatem rem minima iure accusamus ea consequatur. Mollitia molestiae, quaerat reiciendis id doloribus, esse amet repudiandae, rerum distinctio atque aperiam incidunt nesciunt ab? Aperiam amet nobis, maiores voluptatibus, commodi magni, ipsa voluptate mollitia velit similique minima animi. Voluptates illum nostrum excepturi pariatur facilis, totam explicabo ipsum veritatis at minus reprehenderit fugiat quisquam ut quis distinctio nobis ab ullam molestias ea quos recusandae veniam expedita accusamus! Neque illum porro alias asperiores vero quae quis earum inventore illo nam aliquam eum doloremque ratione, laudantium blanditiis distinctio dignissimos aperiam architecto quasi obcaecati aliquid ullam. Iure dolor incidunt dignissimos, pariatur consequatur voluptatem ab nulla optio nostrum debitis fugit molestias officia nihil facere eveniet eaque est cum, blanditiis repudiandae ullam aspernatur numquam. Quo ipsum sint cupiditate, atque facilis voluptas aperiam reprehenderit. Necessitatibus cum reiciendis nihil quae delectus consequatur saepe eius pariatur ut. Sit quos ab autem cum. Odio veniam perferendis eligendi accusantium officia cum magnam aliquid totam fuga necessitatibus tenetur asperiores, quasi assumenda rerum magni quia rem dignissimos vero, doloribus quibusdam neque minus. Ea tenetur, nesciunt similique incidunt ipsa modi voluptatibus esse inventore sit perferendis amet? Libero obcaecati odit consectetur delectus, officiis vel doloribus ipsa nisi, est aperiam itaque sit, excepturi autem praesentium repellat sapiente velit voluptas dolor. Quo officia doloremque earum omnis ratione, deleniti ducimus at. Quidem incidunt qui facilis fuga nemo cumque aliquam nisi? Iste eveniet nihil iusto exercitationem ab cum eos sapiente repudiandae perferendis? Culpa quam harum atque reiciendis deserunt beatae magni totam sequi provident optio quidem iure necessitatibus laudantium, nisi et recusandae aut eius quae, neque dolore ad velit porro, libero voluptatem! Expedita, aperiam mollitia molestiae quos unde eligendi sapiente perspiciatis cum repudiandae ea aut non ex laudantium illo nulla labore quisquam! Beatae eligendi placeat corrupti consequuntur amet nesciunt. Sed nam officiis in soluta quisquam voluptatem nisi molestias vel deleniti. Ullam in est quas exercitationem, magnam expedita fuga sequi, quia laboriosam quibusdam laudantium quasi nulla molestiae! Quis voluptatem, distinctio ipsam eveniet mollitia sunt debitis facilis rem, nobis atque nihil vero nostrum! Repellat, nobis! Veritatis omnis eum deleniti quisquam obcaecati rem quas dolor vitae quia et eveniet magni pariatur, quaerat dicta ratione soluta assumenda voluptate modi aliquid facere mollitia expedita est totam consequuntur. Consequatur minus est officia sit ut quaerat libero? Consequuntur atque dicta doloribus accusamus vel, consequatur quas! Explicabo culpa qui eaque nostrum error sint dignissimos sunt harum minima officia tempore maiores, impedit ab.</p>

      </div>
      <div className="social__links">
        <div className='social__link'>
          <Link to='https://www.instagram.com' style={{color:'white'}}><BsInstagram/></Link>
        </div>
        <div className='social__link'>
          <Link to='https://www.instagram.com' style={{color:'white'}}><FaFacebook/></Link>
        </div>
        <div className='social__link'>
          <Link to='https://www.instagram.com' style={{color:'white'}}><BsTwitter/></Link>
        </div>
        
      </div>
      <div class="c-copyright">
        <span>Copyright © 2017, Medifast. </span>
        <span>All rights reserved.</span></div>
    </div>
  )
}

export default PatientAboutUs