import { contactData } from "@/utils/constants/dynamic.data.component";
import Form from 'next/form';

export function Contact() {

  return (
    <section id="contact" className="contact place-items-center">
      <div className="container">
        <h1 className="section-heading">Contact<span> Us</span></h1>
        <p>We provide high standar clean website for your business solutions</p>
        <div className="cardWraper">
          {
            contactData.map((data, index) => (
              <div key={index} className="card flex flex-col justify-between">
                <div className={data.clsName}>
                  <img src={data.img} alt={data.alt} />
                </div>
                <div>
                  <h1>{data.title}</h1>
                  <h3>{data.details}</h3>
                </div>
              </div>
            ))}
        </div>

        {/* <form action="">
        <div className="op">
          <input type="text" placeholder="Your name*"/>
          <input type="email" placeholder="Your Email*"/>
        </div>
        <div className="op-2">
          <input type="text" placeholder="Your Subject..."/>
          <textarea name="" id="" cols="30" rows="10" placeholder="Your message.."></textarea>
        </div>
        <button className="btn btn-primary ">SEND MESSAGE</button>
      </form> */}

        <Form action=''>
          <div className="op">
            <input type="text" placeholder="Your name*" name="username" required />
            <input type="email" placeholder="Your Email*" name="email" required />
          </div>
          <div className="op-2">
            <input type="text" placeholder="Your Subject..." name="subject" />
            <textarea name="message" placeholder="Your message.."></textarea>
          </div>
          <button type="submit" className="btn btn-primary ">SEND MESSAGE</button>
        </Form>

      </div>
    </section>

  )
}
