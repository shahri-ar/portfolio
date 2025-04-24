"use client"
import { contactData } from "@/utils/constants/dynamic.data.component";
import Form from 'next/form';
import Image from "next/image";
import { sendMessageData } from "../actions";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

export function Contact() {

    const [formState, formAction, isPending] = useActionState(
      sendMessageData,
      null
    );

    useEffect (() => {
      if (formState?.success) {
        toast.success(formState?.message);
      } else if (formState?.success === false) {
        toast.error(formState?.message);
      }
    },[formState?.success])

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
                  <Image
                    src={data.img} 
                    alt={data.alt}
                    height={100}
                    width={100}
                  />

                </div>
                <div>
                  <h1>{data.title}</h1>
                  <h3>{data.details}</h3>
                </div>
              </div>
            ))}
        </div>

        <Form action={formAction}>
          <div className="op">
            <input type="text" placeholder="Your name*" name="username" required />
            <input type="email" placeholder="Your Email*" name="email" required />
          </div>
          <div className="op-2">
            <input type="text" placeholder="Your Subject..." name="subject" />
            <textarea name="message" placeholder="Your message.."></textarea>
          </div>
          <button type="submit" className="btn btn-primary ">{isPending ? "Sending..." : "SEND MESSAGE"}</button>
        </Form>

      </div>
    </section>

  )
}
