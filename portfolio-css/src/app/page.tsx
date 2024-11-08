
import About from "./about/page"
import Hero from "./components/Hero"
import Contact from "./contact/page"


const page = () => {
  return (
    <div>
      
      <Hero/>
      <About/>
      <Contact/>
      <div className="footer-text">
    <p>&copy; 2024 Abdul Ahad Afridi. All rights reserved.</p>
</div>

<hr className="footer-divider" />


    </div>
  )
}

export default page
